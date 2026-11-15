#!/usr/bin/env python3
"""Download one free-licensed photo per online recipe from Wikimedia Commons.

Runs on GitHub Actions. For each recipe in src/photos.json it keeps the photo it
already has, unless the curated title list changed. Otherwise it tries the curated
titles first, then Commons searches. It writes:
  feed/img/<recipe id>.jpg   (800x600, cropped, compressed)
  feed/credits.json          (author + licence for every photo)
It never fails the build: a recipe without a photo shows its coloured placeholder.
"""
import html
import io
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = "KetoKitchenRecipes/1.0 (https://github.com/Ghostkosto/keto-recipes; build bot)"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONF = os.path.join(ROOT, "src", "photos.json")
OUT_DIR = os.path.join(ROOT, "feed", "img")
CREDITS = os.path.join(ROOT, "feed", "credits.json")
BAD_WORDS = ("logo", "map", "diagram", "icon", "menu", "sign", "label", "packag", "qr code",
             "poster", "advert", "drawing", "illustration", "ingredients", "recipe card", "screenshot")
IIPROP = "url|size|mime|extmetadata"

from PIL import Image  # noqa: E402


def request(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    last = None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=40) as r:
                return r.read()
        except Exception as e:  # network hiccup or 429: back off and retry
            last = e
            time.sleep(3 * (attempt + 1))
    raise last


def api(params):
    params = dict(params, format="json", formatversion="2")
    time.sleep(0.6)
    return json.loads(request(API + "?" + urllib.parse.urlencode(params)).decode("utf-8"))


def strip_html(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def usable(page, used, strict):
    ii = (page.get("imageinfo") or [None])[0]
    if not ii or ii.get("mime") != "image/jpeg" or not ii.get("thumburl"):
        return None
    w, h = ii.get("width", 0), ii.get("height", 0)
    if w < 700 or h < 450:
        return None
    ratio = w / float(h)
    if strict and not (1.1 <= ratio <= 2.0):
        return None
    if not strict and not (0.6 <= ratio <= 2.5):
        return None
    title = page.get("title", "")
    if title in used:
        return None
    if strict and any(b in title.lower() for b in BAD_WORDS):
        return None
    return ii


def by_titles(titles, used):
    if not titles:
        return None, None
    data = api({"action": "query", "titles": "|".join(titles), "prop": "imageinfo",
                "iiprop": IIPROP, "iiurlwidth": "960"})
    pages = {p.get("title"): p for p in data.get("query", {}).get("pages", [])}
    for t in titles:
        p = pages.get(t) or next((x for x in pages.values() if x.get("title", "").lower() == t.lower()), None)
        if p:
            ii = usable(p, used, strict=False)
            if ii:
                return p["title"], ii
    return None, None


def by_search(query, used):
    data = api({"action": "query", "generator": "search", "gsrsearch": query + " filetype:bitmap",
                "gsrnamespace": "6", "gsrlimit": "20", "prop": "imageinfo", "iiprop": IIPROP,
                "iiurlwidth": "960"})
    pages = sorted(data.get("query", {}).get("pages", []), key=lambda p: p.get("index", 0))
    for p in pages:
        ii = usable(p, used, strict=True)
        if ii:
            return p["title"], ii
    return None, None


def save_image(raw, path):
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    tw, th = 800, 600
    scale = max(tw / float(im.width), th / float(im.height))
    im = im.resize((max(tw, int(im.width * scale + 0.5)), max(th, int(im.height * scale + 0.5))), Image.LANCZOS)
    left = (im.width - tw) // 2
    top = (im.height - th) // 2
    im = im.crop((left, top, left + tw, top + th))
    im.save(path, "JPEG", quality=80, optimize=True, progressive=True)


def main():
    conf = json.load(open(CONF, encoding="utf-8"))
    os.makedirs(OUT_DIR, exist_ok=True)
    credits = json.load(open(CREDITS, encoding="utf-8")) if os.path.exists(CREDITS) else {}
    used = {c.get("title") for c in credits.values()}
    missing, fetched = [], 0
    for rid, c in conf.items():
        path = os.path.join(OUT_DIR, rid + ".jpg")
        have = credits.get(rid, {}).get("title")
        titles = c.get("titles", [])
        if os.path.exists(path) and have and (not titles or have in titles):
            continue  # keep the current photo
        used.discard(have)
        try:
            title, ii = by_titles(titles, used)
            for q in c.get("queries", []):
                if ii:
                    break
                title, ii = by_search(q, used)
            if not ii:
                missing.append(rid)
                print(f"[--] {rid}: no photo found")
                continue
            save_image(request(ii["thumburl"]), path)
            meta = ii.get("extmetadata", {})
            credits[rid] = {
                "title": title,
                "artist": strip_html(meta.get("Artist", {}).get("value", ""))[:80] or "Wikimedia Commons",
                "license": strip_html(meta.get("LicenseShortName", {}).get("value", "")),
                "licenseUrl": strip_html(meta.get("LicenseUrl", {}).get("value", "")),
                "page": ii.get("descriptionurl", ""),
            }
            used.add(title)
            fetched += 1
            print(f"[ok] {rid}: {title} | {credits[rid]['artist']} | {credits[rid]['license']}")
        except Exception as e:  # never break the build over a photo
            missing.append(rid)
            print(f"[!!] {rid}: {e}")
    for rid in list(credits):
        if rid not in conf:
            credits.pop(rid)
    with open(CREDITS, "w", encoding="utf-8") as f:
        json.dump(credits, f, ensure_ascii=False, indent=1, sort_keys=True)
    print(f"\nNew photos: {fetched} · with photo: {len(credits)}/{len(conf)}" + (f" · missing: {', '.join(missing)}" if missing else ""))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("Photo download skipped:", e)
        sys.exit(0)
