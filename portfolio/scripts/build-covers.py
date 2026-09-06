#!/usr/bin/env python3
"""
Normalise every cover into one tile system.

The catalogue is 56 pieces of found imagery: partner stream banners, bare
logos on white, screenshots, and a handful of real artwork. Shown raw they
read as 56 other people's brands rather than one body of work, and the
white-background exports glare against a near-black page.

One rule, applied to all of them:

  1. trim the uniform border the source was exported with, so a small mark on
     a big white plate becomes just the mark
  2. fit the whole thing inside a fixed 16:10 tile, never crop it
  3. centre it on a transparent ground, so the card paints the leftover space
     itself and the tile is correct in both themes. Baking the dark ground in
     was the first attempt: it put black bands inside white cards the moment
     anyone hit the theme toggle
  4. grade it: a little desaturation, and a ceiling on luminance so no tile is
     brighter than the body text sitting next to it

Cropping to fill was the first attempt and it was wrong. The stream banners
are 1.97:1 and carry their titles hard against the left edge, so filling a
1.6:1 tile sliced the first three characters off nine of them.

Sources stay untouched in public/images. This writes public/covers.
"""

from PIL import Image, ImageChops, ImageEnhance
from pathlib import Path
import json
import sys

# AVIF support is not in every Pillow build. Three covers are .avif, and
# without this they cannot be decoded. Optional: if the plugin is missing the
# run skips those files and keeps any tile already built for them.
try:
    import pillow_avif  # noqa: F401
except ImportError:
    pass

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'public' / 'images'
OUT = ROOT / 'public' / 'covers'
SIZES = ROOT / 'lib' / 'content' / 'cover-sizes.json'

W, H = 1200, 750           # 16:10
PAD = 0.94                 # the artwork never touches the tile edge
SATURATION = 0.92
MAX_LUMA = 232             # nothing brighter than --text
PLATE_LUMA = 208           # ceiling for a mark exported onto a white plate
PLATE_SHARE = 0.32         # ... which is any tile this much near-white

# Too small or too empty for any treatment to rescue. These render as a
# typographic tile in the app instead, which is honest and stays sharp.
UNUSABLE = {'mix3d.png', 'ethdenver-workshop.avif'}


def trim(im):
    """Drop a uniform exported border: transparent, white, or a flat colour."""
    rgba = im.convert('RGBA')

    if rgba.getchannel('A').getextrema()[0] < 250:
        box = rgba.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    else:
        rgb = rgba.convert('RGB')
        corner = rgb.getpixel((0, 0))
        # Only trim against a corner that actually repeats around the frame.
        edges = [rgb.getpixel((x, 0)) for x in range(0, rgb.width, 8)]
        edges += [rgb.getpixel((x, rgb.height - 1)) for x in range(0, rgb.width, 8)]
        same = sum(1 for p in edges if max(abs(a - b) for a, b in zip(p, corner)) < 20)
        if same / len(edges) < 0.85:
            return rgba
        flat = Image.new('RGB', rgb.size, corner)
        box = ImageChops.difference(rgb, flat).convert('L').point(
            lambda v: 255 if v > 18 else 0
        ).getbbox()

    if not box:
        return rgba
    w, h = box[2] - box[0], box[3] - box[1]
    # Refuse a trim that would leave almost nothing: that means the detection
    # was wrong, not that the image is empty.
    if w * h < 0.06 * rgba.width * rgba.height:
        return rgba
    return rgba.crop(box)


def ceiling_for(art):
    """
    A mark exported onto a white plate needs a lower ceiling than a photograph.

    Half of this catalogue is a logo sitting on white. Left at the normal
    ceiling those tiles are the brightest thing on a near-black page, so the
    eye goes to whichever piece happened to ship with a white background
    rather than to the work. Measured, not guessed: the share of the artwork
    that is already near-white decides.
    """
    small = art.convert('L').resize((64, 64))
    px = list(small.get_flattened_data()) if hasattr(small, 'get_flattened_data') else list(small.getdata())
    share = sum(1 for v in px if v > 235) / len(px)
    return (PLATE_LUMA if share > PLATE_SHARE else MAX_LUMA), share


def grade(im, ceiling):
    """Grade the colour channels and leave alpha alone."""
    alpha = im.getchannel('A')
    rgb = ImageEnhance.Color(im.convert('RGB')).enhance(SATURATION)
    lut = [min(i, ceiling) for i in range(256)]
    rgb = rgb.point(lut * 3)
    rgb.putalpha(alpha)
    return rgb


def build(name):
    im = Image.open(SRC / name)
    if im.mode == 'P':
        im = im.convert('RGBA')

    art = trim(im)
    art.thumbnail((round(W * PAD), round(H * PAD)), Image.LANCZOS)

    tile = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    tile.paste(art, ((W - art.width) // 2, (H - art.height) // 2), art)

    ceiling, share = ceiling_for(art)
    out = OUT / (Path(name).stem + '.webp')
    grade(tile, ceiling).save(out, 'WEBP', quality=84, method=6)
    return art.size, out.stat().st_size, ceiling, share, im.size


def every_cover_named_in_entries():
    """Read the covers straight out of the data, so the two cannot drift."""
    import re
    src = (ROOT / 'lib' / 'content' / 'entries.ts').read_text()
    return sorted(set(re.findall(r"src: '/images/([^']+)'", src)))


if __name__ == '__main__':
    names = sys.argv[1:]
    if names == ['--all']:
        names = every_cover_named_in_entries()
    if not names:
        print('usage: build-covers.py --all | <filename> [<filename> ...]')
        raise SystemExit(1)
    OUT.mkdir(parents=True, exist_ok=True)

    # Merged, not replaced. A file this run could not decode still has a tile
    # and a recorded size from a run that could, and dropping it would leave
    # the detail page guessing the aspect ratio.
    sizes = json.loads(SIZES.read_text()) if SIZES.exists() else {}

    total = 0
    skipped = []
    for n in names:
        if n in UNUSABLE:
            print(f'{n:34s} skipped, renders as a typographic tile')
            continue
        try:
            size, b, ceiling, share, natural = build(n)
        except Exception as e:
            # One unreadable file used to take the whole run down with it,
            # after most of the tiles had already been written and before the
            # size map was saved.
            have = (OUT / (Path(n).stem + '.webp')).exists()
            print(f'{n:34s} SKIPPED  {type(e).__name__}: {e}'
                  f"{'  (keeping the tile already built)' if have else ''}")
            skipped.append(n)
            continue
        sizes[Path(n).stem] = list(natural)
        total += b
        plate = 'plate' if ceiling == PLATE_LUMA else ''
        print(f'{n:34s} {size[0]:4d}x{size[1]:<4d} {b/1024:6.0f} KB  white={share:4.0%} {plate}')
    # The detail page shows the original at its own aspect, so it needs the
    # real dimensions. Reading them at render time would mean shipping an image
    # library to the server for a number that never changes.
    SIZES.write_text(json.dumps(dict(sorted(sizes.items())), indent=2) + '\n')
    built = len(names) - len(skipped)
    print(f'\n{built} of {len(names)} built, {total/1024/1024:.1f} MB, sizes -> {SIZES.name}')

    if skipped:
        print(f'\nSkipped {len(skipped)}: ' + ', '.join(skipped))
        if any(n.lower().endswith('.avif') for n in skipped):
            print('Those are AVIF. This Pillow cannot decode them:')
            print('  pip install pillow-avif-plugin')
            print('Their tiles are already committed, so this is only a problem')
            print('if you replace one of the source files.')
