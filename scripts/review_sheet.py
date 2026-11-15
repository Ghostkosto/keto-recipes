#!/usr/bin/env python3
"""Contact sheets of the current recipe photos (feed/img), to review them at a glance.
Writes review/sheet-N.jpg with 20 labelled thumbnails each."""
import json
import os

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "feed", "img")
OUT = os.path.join(ROOT, "review")
TW, TH, COLS, PER = 256, 192, 5, 20


def main():
    os.makedirs(OUT, exist_ok=True)
    ids = list(json.load(open(os.path.join(ROOT, "src", "photos.json"), encoding="utf-8")).keys())
    for n in range(0, len(ids), PER):
        chunk = ids[n:n + PER]
        rows = (len(chunk) + COLS - 1) // COLS
        sheet = Image.new("RGB", (COLS * TW, rows * (TH + 20)), "white")
        d = ImageDraw.Draw(sheet)
        for i, rid in enumerate(chunk):
            x, y = (i % COLS) * TW, (i // COLS) * (TH + 20)
            p = os.path.join(IMG, rid + ".jpg")
            if os.path.exists(p):
                im = Image.open(p).convert("RGB")
                im.thumbnail((TW - 4, TH - 4))
                sheet.paste(im, (x + 2, y + 2))
            else:
                d.rectangle((x + 2, y + 2, x + TW - 2, y + TH - 2), fill="#dddddd")
            d.text((x + 4, y + TH + 4), rid, fill="black")
        sheet.save(os.path.join(OUT, f"sheet-{n // PER + 1}.jpg"), quality=80)
    print("review sheets:", (len(ids) + PER - 1) // PER)


if __name__ == "__main__":
    main()
