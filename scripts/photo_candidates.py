#!/usr/bin/env python3
"""Contact sheets of candidate Commons photos for the recipes in src/candidates.json
({"recipe_id": ["query", ...]}), to pick better photos by hand.
Writes candidates/sheet-N.jpg (3 recipes per sheet, numbered thumbnails) and
candidates/candidates.json (recipe -> number -> Commons title)."""
import io
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_photos as fp  # noqa: E402
from PIL import Image, ImageDraw  # noqa: E402

ROOT = fp.ROOT
OUT = os.path.join(ROOT, "candidates")
TW, TH, COLS, PER_RECIPE, PER_SHEET = 240, 180, 4, 8, 3


def search_all(queries):
    seen, found = set(), []
    for q in queries:
        data = fp.api({"action": "query", "generator": "search", "gsrsearch": q + " filetype:bitmap",
                       "gsrnamespace": "6", "gsrlimit": "15", "prop": "imageinfo",
                       "iiprop": "url|size|mime", "iiurlwidth": "260"})
        for p in sorted(data.get("query", {}).get("pages", []), key=lambda p: p.get("index", 0)):
            ii = (p.get("imageinfo") or [None])[0]
            t = p.get("title")
            if not ii or t in seen or ii.get("mime") != "image/jpeg" or ii.get("width", 0) < 700:
                continue
            seen.add(t)
            found.append((t, ii["thumburl"]))
            if len(found) >= PER_RECIPE:
                return found
    return found


def main():
    conf = json.load(open(os.path.join(ROOT, "src", "candidates.json"), encoding="utf-8"))
    os.makedirs(OUT, exist_ok=True)
    index, blocks = {}, []
    for rid, queries in conf.items():
        cands = search_all(queries)
        index[rid] = {}
        rows = 2
        block = Image.new("RGB", (COLS * TW, 26 + rows * (TH + 18)), "white")
        d = ImageDraw.Draw(block)
        d.rectangle((0, 0, COLS * TW, 22), fill="#204020")
        d.text((6, 5), rid, fill="white")
        for i, (title, url) in enumerate(cands, 1):
            try:
                im = Image.open(io.BytesIO(fp.request(url))).convert("RGB")
                im.thumbnail((TW - 4, TH - 4))
            except Exception as e:
                print(rid, title, e)
                continue
            x, y = ((i - 1) % COLS) * TW, 26 + ((i - 1) // COLS) * (TH + 18)
            block.paste(im, (x + 2, y))
            d.rectangle((x + 2, y, x + 30, y + 22), fill="black")
            d.text((x + 8, y + 5), str(i), fill="yellow")
            d.text((x + 4, y + TH + 2), title[5:44], fill="black")
            index[rid][str(i)] = title
        blocks.append(block)
        print(rid, len(cands))
    for n in range(0, len(blocks), PER_SHEET):
        part = blocks[n:n + PER_SHEET]
        sheet = Image.new("RGB", (COLS * TW, sum(b.height for b in part)), "white")
        y = 0
        for b in part:
            sheet.paste(b, (0, y))
            y += b.height
        sheet.save(os.path.join(OUT, f"sheet-{n // PER_SHEET + 1}.jpg"), quality=80)
    json.dump(index, open(os.path.join(OUT, "candidates.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
