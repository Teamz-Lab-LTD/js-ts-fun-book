# Teamz Lab Design System

Extracted from Figma: Generic Pages for Teamz Apps (Shibly)

---

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| Neon Green | `#D9FE06` | Primary accent, button backgrounds, highlights |
| Black | `#000000` / `#12151A` | Text, Neutral++ button bg, Ghost borders |
| White | `#FFFFFF` | Surface (light), text on dark |
| Light | `#F4F5F5` | Background (light mode), Neutral button bg |
| Border Color | `#DDDDDD` | Input borders (idle state) |
| Dark Surface | `#1D1F25` | Surface (dark mode) |
| Dark BG | `#12151A` | Background (dark mode) |

### Theme Mapping

| CSS Variable | Dark Mode | Light Mode |
|-------------|-----------|------------|
| `--bg` | `#12151A` | `#F4F5F5` |
| `--surface` | `#1D1F25` | `#FFFFFF` |
| `--text` | `#FFFFFF` | `#12151A` |
| `--border` | `rgba(255,255,255,0.15)` | `#DDDDDD` |
| `--accent` | `#D9FE06` | `#D9FE06` (same both modes) |
| `--accent-text` | `#12151A` | `#12151A` (text ON accent bg) |
| `--accent-fg` | `#D9FE06` | `#4a6800` (accent used AS text color) |

> **Key rule**: `--accent` (#D9FE06) is ALWAYS the neon green for button backgrounds and fills.
> When accent is used as **text/link/icon color** on light backgrounds, use `--accent-fg` instead (darker green for readability).

---

## Typography

### Typefaces
- **Primary**: `'Poppins', sans-serif` — weights 400 (Regular), 700 (Bold)
- **Accent/Display**: `'Playfair Display', Georgia, serif` — Regular 400, Bold-Italic 700
- **Code**: `'Fira Code', Consolas, monospace`

### Line Height
All text sizes use `line-height: 140%` consistently.

### Size Scale

| Token | Size | Line Height | CSS Variable |
|-------|------|-------------|-------------|
| 6XL | 96px | 134px | `--text-6xl` |
| 5XL | 80px | 112px | `--text-5xl` |
| 4XL | 72px | 101px | `--text-4xl` |
| 3XL | 64px | 90px | `--text-3xl` |
| 2XL | 56px | 78px | `--text-2xl` |
| XL | 48px | 67px | `--text-xl` |
| H1 | 40px | 56px | `--text-h1` |
| H2 | 32px | 45px | `--text-h2` |
| H3 | 28px | 39px | `--text-h3` |
| H4 | 24px | 34px | `--text-h4` |
| H5 | 20px | 28px | `--text-h5` |
| H6 | 18px | 25px | `--text-h6` |
| LG | 16px | 22px | `--text-lg` |
| MD | 14px | 20px | `--text-md` |
| SM | 12px | 17px | `--text-sm` |
| XS | 10px | 14px | `--text-xs` |

### Usage Mapping

| Element | Poppins Token | Weight |
|---------|--------------|--------|
| Hero / Display headings | 2XL–6XL | 700 |
| Page title (h1) | H1 (40px) | 700 |
| Section headings (h2) | H2 (32px) | 700 |
| Subsection headings (h3) | H3 (28px) | 700 |
| Card titles (h4) | H4 (24px) | 700 |
| Large labels (h5) | H5 (20px) | 700 |
| Small headings (h6) | H6 (18px) | 700 |
| Body / buttons (LG) | LG (16px) | 400 |
| Secondary text / small buttons | MD (14px) | 400 |
| Captions / fine print | SM (12px) | 400 |
| Micro labels | XS (10px) | 400 |

### Playfair Display Usage
Used for accent text (`.font-accent`), decorative headings, and italic emphasis. Same size scale applies with Bold-Italic (700i) as the primary variant.

---

## Buttons

All buttons use `border-radius: 22px` (pill shape) and `font-family: 'Poppins'`.

### Button Types

#### Primary (Pr)
- Background: `#D9FE06` (Neon Green)
- Text: `#000000` (Black)
- Border: none
- Use for: Main CTAs, "Complete & Next", "Hire Us"

#### Ghost (Gh)
- Background: transparent
- Text: `#000000` (light) / `#FFFFFF` (dark)
- Border: `1px solid` text color
- Use for: Secondary actions, "Visit Teamz Lab", "See Our Apps"

#### Neutral++ (Ne++)
- Background: `#000000` (Black)
- Text: `#FFFFFF` (White)
- Border: none
- Use for: Dark emphasis buttons on light backgrounds

#### Neutral (Ne)
- Background: `#F4F5F5` (Light)
- Text: `#000000` (Black)
- Border: none
- Use for: Subtle/tertiary actions, share buttons, rate buttons

### Button Sizes

| Size | Padding | Height | Font Size |
|------|---------|--------|-----------|
| LG | `12px 16px` | 44px | 16px |
| SM | `8px 16px` | 36px | 14px |
| Icon-only LG | `12px` | 44px | -- |
| Icon-only SM | `8px` | 36px | -- |

### Button Variants

| Variant | Description |
|---------|-------------|
| Hug | Width fits content |
| Fill | Width fills container |
| +Icon | Includes leading icon (20x20) with 8px gap |
| Icon-only | Square, icon centered |

---

## Text Inputs

All inputs use `border-radius: 8px` and `font-family: 'Poppins'`.

### Input States

| State | Background | Border | Text Opacity |
|-------|-----------|--------|-------------|
| Idle | `#F4F5F5` | `1px solid #DDDDDD` | 0.5 (placeholder) |
| Active/Focus | transparent | `1px solid #000000` | 1.0 |
| Inactive/Disabled | `#F4F5F5` | none | 0.5 |

### Input Sizes

| Size | Padding | Height | Font Size |
|------|---------|--------|-----------|
| LG | `8px 16px` | 44px | 16px |
| SM | `8px 16px` | 36px | 14px |

---

## Spacing & Layout

- Gap between icon and text in buttons: `8px`
- Standard card border-radius: `12px`
- Button border-radius: `22px` (pill)
- Input border-radius: `8px`

---

## Dark Mode Specifics

In dark mode, button types adapt:
- **Primary**: Same (`#D9FE06` bg, `#000000` text) -- neon stays neon
- **Ghost**: Border becomes `1px solid #FFFFFF` or `var(--border)`
- **Neutral++**: Becomes `#FFFFFF` bg with `#000000` text (inverted)
- **Neutral**: Becomes `var(--surface)` bg with `var(--text)` text

---

## Usage in This Project

### CSS Variables Applied
```css
/* Both modes */
--accent: #D9FE06;          /* Button backgrounds, badges, progress fills */
--accent-text: #12151A;     /* Text ON accent-colored backgrounds */

/* Dark mode (default) */
--accent-fg: #D9FE06;       /* Accent as text color -- visible on dark bg */

/* Light mode */
--accent-fg: #4a6800;       /* Accent as text color -- darker for readability */
```

### Where to use each:
- `background: var(--accent)` + `color: var(--accent-text)` -- Primary buttons
- `color: var(--accent-fg)` -- Links, badges, tags, icon colors on surface/bg
- `border-color: var(--accent)` -- Ghost button borders, active states
- `background: var(--bg)` + `border: 1px solid var(--border)` -- Neutral buttons
- `background: var(--text)` + `color: var(--bg)` -- Neutral++ buttons
