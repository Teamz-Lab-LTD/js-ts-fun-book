#!/usr/bin/env python3
"""
build-og-images.py

Generate 1200x630 OG/social-share PNGs for every course.
Reads each courses/<slug>/config.js (title, subtitle, ogImage filename)
and writes a branded PNG to the repo root matching ogImage basename.

Brand:
  bg: #12151A (dark)
  accent: #D9FE06 (neon green)
  text: white / muted white

Usage:
  python3 tools/build-og-images.py             # all courses
  python3 tools/build-og-images.py <slug>      # one course
  python3 tools/build-og-images.py --dry-run   # preview without writing
"""

import os
import re
import sys
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
COURSES_DIR = ROOT / "courses"

# Brand tokens
BG = (18, 21, 26)              # #12151A
SURFACE = (29, 31, 37)         # subtle card lift
ACCENT = (217, 254, 6)         # #D9FE06
TEXT = (255, 255, 255)
MUTED = (160, 165, 175)
GRID = (217, 254, 6, 8)        # very faint grid

W, H = 1200, 630

# Fonts (macOS)
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BN_BOLD = "/System/Library/Fonts/KohinoorBangla.ttc"

BENGALI_RE = re.compile(r"[\u0980-\u09FF]")


def is_bengali(s: str) -> bool:
    return bool(BENGALI_RE.search(s or ""))


# ──────────────────────────────────────────────────────────
# Parse a course config.js (just enough JS for what we need)
# ──────────────────────────────────────────────────────────
def parse_config(slug: str) -> dict:
    path = COURSES_DIR / slug / "config.js"
    src = path.read_text(encoding="utf-8")
    cfg = {}
    # Grab scalar string fields with a regex — config.js uses simple `key: 'value'` syntax
    for key in ("title", "subtitle", "shortTitle", "ogImage", "description", "educationalLevel"):
        m = re.search(rf"^\s*{key}\s*:\s*(['\"])(.*?)\1\s*,?\s*$", src, re.MULTILINE)
        if m:
            cfg[key] = m.group(2)
    return cfg


def count_lessons(slug: str) -> int:
    """Use Node.js to eval the data.js and return the real length.
    More reliable than regex across the two data.js formats in use."""
    import subprocess
    script = (
        "global.__L=null;"
        "const fs=require('fs');"
        f"const s=fs.readFileSync('courses/{slug}/data.js','utf8').replace(/const LESSONS_DATA/,'global.__L');"
        "try{eval(s)}catch(e){}"
        "process.stdout.write(String(Array.isArray(global.__L)?global.__L.length:0));"
    )
    try:
        out = subprocess.run(
            ["node", "-e", script],
            cwd=str(ROOT), capture_output=True, text=True, timeout=20
        )
        return int(out.stdout.strip() or "0")
    except Exception:
        # Fallback: regex both formats
        path = COURSES_DIR / slug / "data.js"
        src = path.read_text(encoding="utf-8")
        ids = re.findall(r"[\{,\s](['\"]?)id\1\s*:\s*(\d+)\s*,", src)
        return len(set(int(i[1]) for i in ids))


def strip_tags(s: str) -> str:
    return re.sub(r"<[^>]+>", "", s or "").strip()


# ──────────────────────────────────────────────────────────
# Drawing helpers
# ──────────────────────────────────────────────────────────
def load_font(path: str, size: int):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = []
    for w in words:
        trial = " ".join(current + [w])
        bbox = draw.textbbox((0, 0), trial, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current.append(w)
        else:
            if current:
                lines.append(" ".join(current))
            current = [w]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_grid(img, draw, color=(217, 254, 6, 10)):
    # Faint 40px grid
    for x in range(0, W, 40):
        draw.line([(x, 0), (x, H)], fill=color, width=1)
    for y in range(0, H, 40):
        draw.line([(0, y), (W, y)], fill=color, width=1)


def draw_glow(img, x, y, radius, color):
    # Simple radial glow via multiple transparent circles
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for r in range(radius, 0, -20):
        alpha = int(30 * (r / radius))
        od.ellipse((x - r, y - r, x + r, y + r), fill=(*color, alpha))
    img.alpha_composite(overlay)


def render_card(slug: str, cfg: dict, lesson_count: int) -> Image.Image:
    full_title = strip_tags(cfg.get("title") or slug)
    subtitle = strip_tags(cfg.get("subtitle") or cfg.get("description") or "").split("|")[0].strip()
    # Drop the {lessonCount} placeholder, trim subtitle
    subtitle = subtitle.replace("{lessonCount}", str(lesson_count))
    level = cfg.get("educationalLevel") or ""

    bn = is_bengali(full_title + " " + subtitle)
    bold_path = FONT_BN_BOLD if bn else FONT_BOLD
    reg_path = FONT_BN_BOLD if bn else FONT_REG

    img = Image.new("RGBA", (W, H), BG + (255,))
    draw = ImageDraw.Draw(img, "RGBA")

    # Faint grid
    draw_grid(img, draw, color=(217, 254, 6, 10))

    # Glow top-right
    draw_glow(img, W + 40, -40, 320, (217, 254, 6))
    draw = ImageDraw.Draw(img, "RGBA")  # re-bind after composite

    # Accent bar (top)
    draw.rectangle([(0, 0), (120, 6)], fill=ACCENT)

    # Teamz Lab tag (top-left)
    tag_font = load_font(bold_path, 24)
    draw.text((60, 50), "TEAMZ LAB LEARNING", font=tag_font, fill=ACCENT)

    # FREE badge (top-right)
    badge_font = load_font(bold_path, 22)
    badge_text = "ফ্রি কোর্স" if bn else "FREE COURSE"
    bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    bw = bbox[2] - bbox[0]
    bx = W - bw - 60 - 40
    draw.rounded_rectangle([(bx, 44), (W - 60, 88)], radius=22, fill=ACCENT)
    draw.text((bx + 20, 54), badge_text, font=badge_font, fill=BG)

    # Title — wrap to fit width
    title_size = 84 if len(full_title) < 40 else (68 if len(full_title) < 60 else 56)
    title_font = load_font(bold_path, title_size)
    max_title_w = W - 120
    title_lines = wrap_text(draw, full_title, title_font, max_title_w)
    if len(title_lines) > 3:
        title_lines = title_lines[:3]
        title_lines[-1] = title_lines[-1].rstrip() + "…"
    # Draw title centered vertically
    line_h = title_size + 12
    title_block_h = line_h * len(title_lines)
    start_y = (H - title_block_h) // 2 - 30
    for i, line in enumerate(title_lines):
        draw.text((60, start_y + i * line_h), line, font=title_font, fill=TEXT)

    # Stats row near bottom
    stats_font = load_font(bold_path, 32)
    stats_label_font = load_font(reg_path, 18)
    stats_y = H - 130

    # Lesson count pill
    lesson_label = "পাঠ" if bn else "LESSONS"
    lc_text = f"{lesson_count}"
    draw.text((60, stats_y), lc_text, font=load_font(bold_path, 56), fill=ACCENT)
    draw.text((60, stats_y + 60), lesson_label, font=stats_label_font, fill=MUTED)

    # Vertical divider
    draw.line([(260, stats_y + 10), (260, stats_y + 80)], fill=MUTED, width=2)

    # Free · $0
    price_label = "চিরকাল ফ্রি" if bn else "FREE FOREVER"
    draw.text((290, stats_y), "$0", font=load_font(bold_path, 56), fill=ACCENT)
    draw.text((290, stats_y + 60), price_label, font=stats_label_font, fill=MUTED)

    # Vertical divider
    draw.line([(430, stats_y + 10), (430, stats_y + 80)], fill=MUTED, width=2)

    # No signup
    ns_label = "No Signup" if not bn else "সাইনআপ ছাড়া"
    ns_label2 = "Runs in browser" if not bn else "ব্রাউজারে চলে"
    draw.text((460, stats_y + 2), ns_label, font=load_font(bold_path, 30), fill=TEXT)
    draw.text((460, stats_y + 42), ns_label2, font=stats_label_font, fill=MUTED)

    # URL at bottom-right
    url_font = load_font(reg_path, 20)
    url_text = "learn.teamzlab.com"
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    uw = bbox[2] - bbox[0]
    draw.text((W - uw - 60, H - 50), url_text, font=url_font, fill=MUTED)

    # Bottom accent bar
    draw.rectangle([(0, H - 6), (W, H)], fill=ACCENT)

    return img.convert("RGB")


# ──────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────
def output_path(cfg: dict, slug: str) -> Path:
    og_url = cfg.get("ogImage") or ""
    if og_url.startswith("http"):
        # Extract just the filename
        name = og_url.rsplit("/", 1)[-1]
    elif og_url:
        name = og_url.lstrip("/")
    else:
        name = f"og-{slug}.png"
    return ROOT / name


def main():
    args = sys.argv[1:]
    dry_run = "--dry-run" in args
    only = [a for a in args if not a.startswith("--")]

    all_slugs = sorted(d.name for d in COURSES_DIR.iterdir() if d.is_dir() and (d / "config.js").exists())
    targets = only if only else all_slugs

    print(f"Generating {len(targets)} OG image(s){' (dry run)' if dry_run else ''}:")
    # Courses pointing at the generic og-image.png share one generic image
    # (rendered at the end, not from any specific course's data).
    default_path = ROOT / "og-image.png"
    seen = {}
    deferred_default = []

    for slug in targets:
        cfg = parse_config(slug)
        lc = count_lessons(slug)
        outp = output_path(cfg, slug)
        if outp == default_path:
            deferred_default.append(slug)
            print(f"  … {slug:<40} → og-image.png (deferred, will use generic branding)")
            continue
        if outp in seen:
            print(f"  ↺ {slug} → {outp.name} (already generated by {seen[outp]})")
            continue
        seen[outp] = slug
        try:
            img = render_card(slug, cfg, lc)
            if not dry_run:
                img.save(outp, "PNG", optimize=True)
            size_kb = (outp.stat().st_size / 1024) if (not dry_run and outp.exists()) else 0
            print(f"  ✓ {slug:<40} → {outp.name:<34} ({lc} lessons{', ' + f'{size_kb:.0f}kb' if size_kb else ''})")
        except Exception as e:
            print(f"  ✗ {slug}: {e}")

    # Generic og-image.png — branded for the platform overall, not a specific course
    if not dry_run:
        print(f"\nGenerating generic og-image.png for {len(deferred_default) or 1} course(s) + fallback…")
        fallback_cfg = {
            "title": "Teamz Lab Learning",
            "subtitle": "Free Interactive Courses — Coding, Career, Exam Prep",
            "educationalLevel": "All levels"
        }
        img = render_card("default", fallback_cfg, 16)
        img.save(default_path, "PNG", optimize=True)
        print(f"  ✓ og-image.png ({(default_path.stat().st_size / 1024):.0f}kb)")


if __name__ == "__main__":
    main()
