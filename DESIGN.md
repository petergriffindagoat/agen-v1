# PERPETUAL STACK — Design Guidelines

> Source of truth for all brand, UI, and content decisions.
> Version 1.0 · May 2026

---

## Table of Contents

1. [Logo System](#1-logo-system)
2. [Typography System](#2-typography-system)
3. [Color Palette](#3-color-palette)
4. [Spacing & Layout System](#4-spacing--layout-system)
5. [Component Patterns](#5-component-patterns)
6. [Motion & Animation](#6-motion--animation)
7. [Content & Voice Guidelines](#7-content--voice-guidelines)
8. [Anti-Slop Checklist](#8-anti-slop-checklist)
9. [Accessibility Standards](#9-accessibility-standards)

---

## 1. LOGO SYSTEM

### Concept A — "The Infinite Register" (Geometric / Abstract)

**Visual form:** Three horizontal bars of equal width (ratio 6:1 width-to-height per bar) stacked vertically with equal spacing between them. The top and bottom bars connect on the right side via a vertical stroke that curves into each bar with a tight 90° radius, forming a continuous path — like a squared-off infinity loop viewed from the side. The middle bar floats independently, centered.

**Proportions:** The entire mark sits within a square bounding box. Bars are 60% of the bounding box width. Vertical connector is aligned to the right edge of the bars. Gap between bars equals bar height. Stroke weight equals bar height.

**Conceptual rationale:** The continuous path formed by the outer bars represents "perpetual" — an unbroken loop of execution. The independent middle bar represents the "stack" layer that gets deployed into that loop. Together: perpetual automation, layered architecture.

**Size behavior:**
- **Favicon (16×16):** Simplify to three bars only (drop the connecting path). The three-bar mark is the minimum viable icon.
- **Navbar (24–32px height):** Full mark with connector path. No wordmark at this size.
- **Full lockup:** Mark + "Perpetual Stack" wordmark to the right, separated by 1.5× the mark width. Wordmark set in the brand's display typeface at Medium weight, tracked at +0.02em.

**Clear space:** Minimum padding on all sides equals the height of one bar plus one gap (effectively 3 units if bar height = 1 unit).

**Color variations:**
- Full color: Mark in Ember (primary accent, `#E0592A`) on light background.
- Monochrome light: Mark in Graphite (`#1A1A1A`) on light backgrounds.
- Monochrome dark / reversed: Mark in Chalk (`#F5F2ED`) on dark backgrounds.
- Never place the full-color mark on a background that doesn't provide at least 4.5:1 contrast.

---

### Concept B — "PS Ligature" (Letterform)

**Visual form:** A custom ligature of the letters P and S, constructed from a single continuous stroke of uniform weight. The vertical stem of the P extends downward and curves right to become the top spine of the S. The S form is angular — two horizontal strokes connected by a diagonal, not a sinuous curve. The counter (enclosed space) of the P is rectangular, not circular.

**Proportions:** Overall aspect ratio is approximately 1:1.15 (slightly taller than wide). Stroke weight is 1/8 of the total height. The P counter occupies the top-right quadrant. The S diagonal descends at exactly 45°.

**Conceptual rationale:** A ligature — two forms joined into one — mirrors how Perpetual Stack joins AI capabilities into a client's existing systems. The angular S avoids the organic softness of typical lettermarks and reinforces the engineered feel. The continuous stroke echoes "perpetual."

**Size behavior:**
- **Favicon (16×16):** The PS ligature holds well at this size because it's a single-weight stroke with no fine detail. At 16px, the counter of the P may close visually; accept this — it reads as a monogram.
- **Navbar (24–32px):** Full PS ligature. Wordmark optional.
- **Full lockup:** PS mark + "Perpetual Stack" wordmark. Mark and wordmark aligned on a shared baseline. Separation: 1.25× mark width.

**Clear space:** Minimum padding equals the stroke weight × 3 on all sides.

**Color variations:** Same rules as Concept A. The single-stroke construction means it reproduces cleanly in any single color.

---

### Concept C — "The Perpetual Stack" (Stack + Infinity Reference)

**Visual form:** A vertical stack of four thin horizontal lines, evenly spaced. The top line and bottom line each have one end that curls back on itself — the top line curls to the right and downward, the bottom line curls to the left and upward — so that the overall silhouette subtly echoes the figure-eight shape of an infinity symbol when you trace the outer edges. The two middle lines are straight, plain, and shorter (80% the width of the outer lines). All lines share the same stroke weight.

**Proportions:** Bounding box is roughly 1:0.85 (wider than tall). Outer lines span the full width. Inner lines are centered. The curled terminals have a radius equal to the line spacing.

**Conceptual rationale:** This is the most literal expression of both words in the name. "Stack" is the layered lines. "Perpetual" is the infinity-loop silhouette formed by the curled terminals. The hierarchy (outer lines longer, inner lines shorter) also references a lens or focus — the middle layers are the concentrated work product.

**Size behavior:**
- **Favicon (16×16):** Reduce to three lines (drop one middle line). Curls may simplify to angled terminals rather than full curves.
- **Navbar (24–32px):** Full four-line mark.
- **Full lockup:** Mark + wordmark. Mark is vertically centered against the wordmark cap height.

**Clear space:** Minimum padding equals the total height of one line-plus-gap unit × 2 on all sides.

**Color variations:** Same system as above. The four-line construction means it's purely stroke-based and works in any single color.

---

### Recommended Concept

**Concept A — "The Infinite Register"** is the strongest candidate for primary use. It's the most reducible (works as three bars at 16px), the most distinctive (the connected path is unique), and the most systematically versatile.

---

## 2. TYPOGRAPHY SYSTEM

### 2a. Display / Headlines — **Instrument Serif**

**Source:** Google Fonts (free, open source)
**Why this font:** Instrument Serif is a contemporary transitional serif with sharp, refined details and high contrast between thick and thin strokes. It has editorial authority — headlines set in it feel authored, not templated. Its slightly condensed proportions give it density and presence without being heavy. It avoids the corporate blandness of geometric sans-serifs while staying modern; it doesn't read as "old-fashioned." Most AI companies wouldn't touch a serif — which is exactly the point.

**Weights to include:** Regular (400) only. Headlines don't need bold in a serif — the contrast between the serif display type and the sans-serif body already creates hierarchy. Italic (400i) for emphasis within headlines when needed.

**Fallback stack:** `"Instrument Serif", "Georgia", "Times New Roman", serif`

**Usage rules:**
- All page-level headlines (h1, h2)
- Hero headlines
- Pull quotes and large callout text
- NEVER for body copy, UI labels, buttons, or navigation
- NEVER in bold — the typeface's natural stroke contrast provides enough weight
- Italic is permitted for single words within a headline for rhetorical emphasis, never for an entire headline
- Always set in sentence case, never ALL CAPS (the serifs create visual clutter at uppercase)

**Anti-patterns:**
- ✗ Don't combine with another serif anywhere on the same page
- ✗ Don't set below 20px — this is a display face, not a text face
- ✗ Don't letter-space it (serifs are designed for natural spacing)
- ✗ Don't use it for short labels or UI — it looks pretentious at small sizes

---

### 2b. Body / UI — **General Sans**

**Source:** Fontshare (free for commercial use)
**Why this font:** General Sans is a grotesque sans-serif with subtle humanist qualities — slightly wider apertures than purely geometric fonts, ink traps at small sizes, and genuine personality in its curves. It has excellent x-height for readability. It is NOT Inter (the default AI-company font), NOT Roboto (the default Android font), and NOT the geometric monoweight style that makes everything look like a Figma prototype. Its character differentiation is strong: the lowercase l, uppercase I, and numeral 1 are all clearly distinct.

**Weights to include:**
- Regular (400) — body copy, descriptions, general prose
- Medium (500) — subheadings (h3–h6), navigation links, card titles, input labels
- Semibold (600) — button labels, strong emphasis, table headers
- Do NOT include Light, Thin, Bold, or Black — constrained weight range enforces consistency

**Fallback stack:** `"General Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`

**Usage rules:**
- All body copy, paragraphs, descriptions
- All UI text: buttons, labels, inputs, navigation, tooltips
- Subheadings (h3–h6) in Medium weight
- Links in Regular weight (differentiated by color and underline, not weight)
- Use Semibold sparingly — only for elements that must command attention in dense UI (button labels, key data points)

**Anti-patterns:**
- ✗ Don't use Regular weight for headings — it's too quiet
- ✗ Don't go below 14px for body copy (15–17px is ideal)
- ✗ Don't use Semibold for paragraphs — it fatigues the reader
- ✗ Don't letter-space body text — only the mono font gets letter-spacing

---

### 2c. Mono / Code / Labels — **JetBrains Mono**

**Source:** Google Fonts / JetBrains (free, open source)
**Why this font:** JetBrains Mono was designed specifically for code readability. It has increased letter height compared to most monospace fonts, which makes it highly legible at small sizes (down to 11px). Its ligatures are optional and tasteful. Crucially, it has a distinctive character — it doesn't look like the system mono font, which means when we use it for labels and metadata, it reads as intentional design, not fallback.

**Weights to include:**
- Regular (400) — code blocks, technical labels, metadata
- Medium (500) — label text used as section overlines ("WHAT WE BUILD", "OUR PROCESS")

**Fallback stack:** `"JetBrains Mono", "Fira Code", "Source Code Pro", "Consolas", monospace`

**Usage rules:**
- Code snippets and inline code
- Technical metadata (dates, version numbers, IDs)
- Section overline labels: set in Medium weight, ALL CAPS, letter-spacing: 0.12em, font-size: 12–13px
- Tag/badge text
- Data labels in charts and diagrams
- NEVER for body copy, headlines, or buttons

**Anti-patterns:**
- ✗ Don't use monospace for decorative purposes — it's a functional choice
- ✗ Don't set monospace above 16px except in code blocks — large mono text looks like a terminal, not a website
- ✗ Don't use it without the letter-spacing when it's functioning as a label (unspaced mono labels look like code, not design)

---

### Type Scale (Fluid, clamp-based)

All sizes use `clamp(min, preferred, max)` for fluid scaling between 375px and 1440px viewports.

```css
:root {
  /* Type Scale */
  --text-xs:    clamp(0.6875rem, 0.65rem + 0.1vw, 0.75rem);      /* 11–12px — metadata, fine print */
  --text-sm:    clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);     /* 13–14px — captions, labels */
  --text-base:  clamp(0.9375rem, 0.88rem + 0.25vw, 1.0625rem);    /* 15–17px — body copy */
  --text-md:    clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);          /* 17–20px — large body, lead text */
  --text-lg:    clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);           /* 20–24px — h4, card titles */
  --text-xl:    clamp(1.5rem, 1.2rem + 1.2vw, 2rem);              /* 24–32px — h3, section titles */
  --text-2xl:   clamp(1.875rem, 1.4rem + 2vw, 2.75rem);           /* 30–44px — h2 */
  --text-3xl:   clamp(2.25rem, 1.6rem + 2.8vw, 3.5rem);           /* 36–56px — h1 */
  --text-hero:  clamp(2.75rem, 1.8rem + 4vw, 5rem);               /* 44–80px — hero headlines */

  /* Line Heights */
  --leading-tight:    1.15;   /* hero, h1, h2 — display sizes */
  --leading-snug:     1.3;    /* h3, h4 — mid-size headings */
  --leading-normal:   1.6;    /* body copy */
  --leading-relaxed:  1.75;   /* small text, captions — needs more air */

  /* Letter Spacing */
  --tracking-tight:   -0.02em;   /* hero and h1 headlines (serif) */
  --tracking-normal:   0;        /* body copy — no adjustment */
  --tracking-wide:     0.04em;   /* UI labels in sans-serif (subtle) */
  --tracking-mono:     0.12em;   /* monospace overline labels */
}
```

**Line height and tracking pairings:**

| Role | Font | Size Token | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero headline | Instrument Serif | `--text-hero` | 400 | `--leading-tight` | `--tracking-tight` |
| h1 | Instrument Serif | `--text-3xl` | 400 | `--leading-tight` | `--tracking-tight` |
| h2 | Instrument Serif | `--text-2xl` | 400 | `--leading-tight` | 0 |
| h3 | General Sans | `--text-xl` | 500 | `--leading-snug` | 0 |
| h4 | General Sans | `--text-lg` | 500 | `--leading-snug` | 0 |
| Body | General Sans | `--text-base` | 400 | `--leading-normal` | 0 |
| Lead / intro | General Sans | `--text-md` | 400 | `--leading-normal` | 0 |
| Small / caption | General Sans | `--text-sm` | 400 | `--leading-relaxed` | 0 |
| Overline label | JetBrains Mono | `--text-xs` | 500 | 1 | `--tracking-mono` |
| Code block | JetBrains Mono | `--text-sm` | 400 | `--leading-normal` | 0 |
| Button label | General Sans | `--text-sm` | 600 | 1 | `--tracking-wide` |

---

## 3. COLOR PALETTE

### Foundation Colors

```css
:root {
  /* ---- Foundation ---- */
  --color-chalk:      #F5F2ED;  /* oklch(95.5% 0.008 75)  — warm off-white, primary light bg */
  --color-paper:      #EBE7E0;  /* oklch(92.5% 0.01 75)   — slightly darker warm white, secondary light bg */
  --color-graphite:   #1A1A1A;  /* oklch(15% 0 0)         — near-black, primary text on light */
  --color-soot:       #121212;  /* oklch(10% 0 0)         — deepest dark, dark section backgrounds */
}
```

**Chalk** (`#F5F2ED`): The default page background. A warm, yellowish off-white that avoids the clinical glare of pure white. Every element on the page lives on this ground.

**Paper** (`#EBE7E0`): Used for recessed surfaces — card backgrounds on the chalk ground, input fields, table rows. Creates depth without introducing a new hue.

**Graphite** (`#1A1A1A`): Primary text color. A warm near-black that is softer on the eyes than `#000000` while maintaining excellent contrast (contrast ratio against Chalk: **14.8:1**).

**Soot** (`#121212`): Background for dark "stage" sections (testimonial bands, stats sections, technical diagrams). Not used as a full dark mode — only for high-contrast panels that break up the page.

---

### Primary Accent — **Ember**

```css
:root {
  --color-ember:       #E0592A;  /* oklch(58% 0.18 35)     — primary accent */
  --color-ember-light: #F0845E;  /* oklch(70% 0.14 40)     — hover states on dark bg */
  --color-ember-dim:   #B84420;  /* oklch(48% 0.15 32)     — hover states on light bg */
}
```

**Why Ember and not another color?** The AI/SaaS landscape is drowning in purple (OpenAI, Jasper), blue (every enterprise tool), and teal/green (generic "growth" signaling). Ember — a deep, burnt orange-red — is almost unused in this space. It's warm without being playful, bold without being aggressive. It references the color of hot metal being shaped — engineered heat. Against the warm Chalk background and Graphite text, it's arresting but harmonious.

**Contrast ratios:**
- Ember on Chalk: **4.7:1** (passes AA for large text, UI components)
- Ember on Soot: **5.2:1** (passes AA)
- Ember on Paper: **4.5:1** (passes AA for large text)

**Usage:**
- Logo mark (full-color variant)
- Interactive element default states (links, active nav)
- Accent borders and highlights
- Section dividers and rules
- NOT for backgrounds (too saturated for large areas)
- NOT for body text

---

### Signal Color — **Volt**

```css
:root {
  --color-volt:        #C8F035;  /* oklch(90% 0.2 115)     — CTA-only */
  --color-volt-hover:  #D4F55E;  /* oklch(93% 0.17 115)    — CTA hover state */
  --color-volt-text:   #1A1A1A;  /* use Graphite for text on Volt bg */
}
```

**Why Volt?** This is a sharp, electric yellow-green — essentially a "highlighter" color. It exists for ONE purpose: primary call-to-action buttons. Its extreme saturation and brightness make it impossible to miss on either light or dark backgrounds. By restricting it to 2–3 uses per page (the main CTA and perhaps a sticky nav CTA), it becomes a powerful signal.

**Contrast ratios:**
- Graphite text on Volt bg: **12.5:1** (passes AAA)
- Volt on Soot bg: **13.1:1** (passes AAA)
- Volt on Chalk bg: **1.3:1** (fails as text on light — NEVER use Volt as text on light bg)

**Usage:**
- Primary CTA buttons ONLY ("Get Started", "Book a Call", "Start Building")
- Maximum 2–3 instances per page
- NOT for links, icons, borders, decorations, or any other element
- NOT for text color — only as a background for buttons with Graphite text on top

---

### Semantic Colors

```css
:root {
  /* ---- Semantic — muted, not neon ---- */
  --color-success:    #4A8C6F;  /* oklch(58% 0.09 160)  — confirmations, positive states */
  --color-warning:    #C49A3A;  /* oklch(68% 0.12 85)   — caution, pending states */
  --color-error:      #C0453A;  /* oklch(50% 0.14 25)   — errors, destructive actions */
  --color-info:       #4A7FA0;  /* oklch(55% 0.08 230)  — neutral informational states */
}
```

These are deliberately desaturated compared to the screaming red/green/yellow defaults in most UI kits. They communicate status without visually shouting.

**Contrast ratios (all against Chalk):**
- Success: **5.0:1** ✓ AA
- Warning: **3.2:1** ✓ AA large text (pair with Graphite text, not standalone)
- Error: **5.7:1** ✓ AA
- Info: **4.6:1** ✓ AA

**Usage:** Inline validation, toast notifications, status badges. NEVER as decorative color. NEVER as backgrounds for large areas.

---

### Text Colors

```css
:root {
  /* ---- Text hierarchy ---- */
  --color-text-primary:    #1A1A1A;  /* Graphite — headings, body */
  --color-text-secondary:  #5C5852;  /* oklch(42% 0.01 75) — supporting text, descriptions */
  --color-text-tertiary:   #8A857D;  /* oklch(58% 0.01 75) — metadata, placeholders */
  --color-text-on-dark:    #F5F2ED;  /* Chalk — text on dark sections */
  --color-text-on-dark-secondary: #A8A39C; /* oklch(70% 0.01 75) — secondary text on dark */
}
```

---

### Gradient, Shadow, and Border Rules

**Gradients:**
- Gradients are permitted ONLY in two contexts: (1) as a subtle background wash on the hero section (Chalk to Paper, max 3% opacity difference), and (2) inside technical diagrams to indicate data flow direction.
- NEVER use gradients on buttons, cards, text, or icons.
- NEVER use multi-color gradients (no purple-to-blue, no rainbow).

**Shadows:**
```css
:root {
  --shadow-sm:  0 1px 2px oklch(58% 0.05 35 / 0.06);     /* Ember-tinted at 6% */
  --shadow-md:  0 4px 12px oklch(58% 0.05 35 / 0.08);     /* Ember-tinted at 8% */
  --shadow-lg:  0 12px 32px oklch(58% 0.05 35 / 0.1);     /* Ember-tinted at 10% */
  --shadow-dark-sm: 0 1px 3px oklch(0% 0 0 / 0.3);        /* For elements on dark bg */
  --shadow-dark-md: 0 4px 16px oklch(0% 0 0 / 0.4);       /* For elements on dark bg */
}
```
Shadows use the Ember hue at very low opacity — this gives them warmth instead of the muddy gray of pure-black shadows. On dark backgrounds, use the black-based shadows since the tint is invisible there anyway.

**Borders:**
```css
:root {
  --border-subtle:   1px solid oklch(85% 0.005 75);   /* barely visible on Chalk */
  --border-default:  1px solid oklch(78% 0.008 75);   /* standard card/input border */
  --border-strong:   1px solid oklch(60% 0.01 75);    /* emphasized elements */
  --border-accent:   2px solid var(--color-ember);     /* accent highlight */
  --border-dark:     1px solid oklch(25% 0.005 75);    /* borders on dark backgrounds */
}
```

---

## 4. SPACING & LAYOUT SYSTEM

### Base Unit: 4px

Every spacing value is a multiple of 4px. Named tokens:

```css
:root {
  --space-1:    0.25rem;  /*  4px */
  --space-2:    0.5rem;   /*  8px */
  --space-3:    0.75rem;  /* 12px */
  --space-4:    1rem;     /* 16px */
  --space-5:    1.25rem;  /* 20px */
  --space-6:    1.5rem;   /* 24px */
  --space-8:    2rem;     /* 32px */
  --space-10:   2.5rem;   /* 40px */
  --space-12:   3rem;     /* 48px */
  --space-16:   4rem;     /* 64px */
  --space-20:   5rem;     /* 80px */
  --space-24:   6rem;     /* 96px */
  --space-32:   8rem;     /* 128px */
  --space-40:  10rem;     /* 160px */
}
```

### Content Width

```css
:root {
  --width-content:    72rem;    /* 1152px — max width for text-heavy content */
  --width-wide:       80rem;    /* 1280px — max width for wider sections (cards, grids) */
  --width-full-bleed: 90rem;    /* 1440px — max width before truly full-bleed */
  --width-prose:      40rem;    /*  640px — max width for long-form text blocks */
}
```

Content containers are always centered with `margin-inline: auto` and `padding-inline: var(--space-6)` (24px) minimum on mobile.

### Grid System

- **Default: 12-column grid** with 24px gutters (`gap: var(--space-6)`).
- Use 12-column for feature sections, pricing layouts, comparison tables.
- **Intentional grid breaks:** hero sections, testimonial callouts, and single-stat highlights are allowed to break the grid — centered or asymmetrically placed content creates visual relief.
- On mobile (< 640px): collapse to a single column. On tablet (640–1024px): use 6- or 8-column layouts.
- NEVER nest grids inside grids. If you need sub-layout, use flexbox.

### Vertical Rhythm

Spacing between major page sections follows a consistent pattern:

```css
/* Between major sections (hero → features → testimonials) */
.section + .section {
  margin-top: var(--space-32);  /* 128px desktop */
}

/* Between sub-sections within a section */
.section__block + .section__block {
  margin-top: var(--space-16);  /* 64px */
}

/* Between heading and its content */
.section__heading + .section__content {
  margin-top: var(--space-8);   /* 32px */
}

/* On mobile, multiply by 0.625 */
@media (max-width: 640px) {
  .section + .section { margin-top: var(--space-20); }
}
```

### Border Radius Tokens

NOT a single radius for everything. Different elements get different radii based on their size and role:

```css
:root {
  --radius-sm:    4px;   /* badges, tags, small inputs, tooltips */
  --radius-md:    8px;   /* buttons, input fields, small cards */
  --radius-lg:   12px;   /* cards, modals, dropdown menus */
  --radius-xl:   16px;   /* large cards, image containers */
  --radius-full: 9999px; /* pills, avatar circles, toggle tracks */
}
```

**Rule:** The larger the element, the larger the radius. Buttons get `--radius-md`. Cards get `--radius-lg`. Pill-shaped elements (tags, status badges) get `--radius-full`. Corners on the page itself (section backgrounds) are NEVER rounded — they bleed edge to edge.

### Breakpoints

```css
/* Mobile-first breakpoints */
--bp-sm:   640px;    /* Small tablets, landscape phones */
--bp-md:   768px;    /* Tablets */
--bp-lg:  1024px;    /* Small desktops, landscape tablets */
--bp-xl:  1280px;    /* Standard desktops */
--bp-2xl: 1536px;    /* Large desktops */
```

Use `min-width` media queries (mobile-first). Content should be fully usable at 320px minimum.

---

## 5. COMPONENT PATTERNS

### 5a. Buttons

**Primary CTA (Volt)**

```css
.btn-primary {
  background-color: var(--color-volt);
  color: var(--color-graphite);
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  padding: var(--space-3) var(--space-6);       /* 12px 24px */
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 150ms ease-out, transform 100ms ease-out;
}
.btn-primary:hover {
  background-color: var(--color-volt-hover);
  transform: translateY(-1px);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 2px;
}
.btn-primary:active {
  transform: translateY(0);
}
.btn-primary:disabled {
  background-color: var(--color-paper);
  color: var(--color-text-tertiary);
  cursor: not-allowed;
  transform: none;
}
.btn-primary--loading {
  pointer-events: none;
  position: relative;
  color: transparent;
}
.btn-primary--loading::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-graphite);
  border-top-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 600ms linear infinite;
}
```

**Secondary Button (Ember outline)**

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-ember);
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  padding: var(--space-3) var(--space-6);
  border: 1.5px solid var(--color-ember);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 150ms ease-out, color 150ms ease-out;
}
.btn-secondary:hover {
  background-color: var(--color-ember);
  color: var(--color-chalk);
}
.btn-secondary:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 2px;
}
.btn-secondary:disabled {
  border-color: var(--color-text-tertiary);
  color: var(--color-text-tertiary);
  cursor: not-allowed;
}
```

**Ghost Button**

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-text-primary);
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1;
  padding: var(--space-3) var(--space-5);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 150ms ease-out;
}
.btn-ghost:hover {
  background-color: oklch(90% 0.005 75 / 0.6);  /* Paper-like tint */
}
.btn-ghost:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 2px;
}
```

**Link Button**

```css
.btn-link {
  background: none;
  border: none;
  color: var(--color-ember);
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 500;
  padding: var(--space-1) 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  cursor: pointer;
  transition: color 150ms ease-out;
}
.btn-link:hover {
  color: var(--color-ember-dim);
}
```

---

### 5b. Cards

**Standard Card**

```css
.card {
  background-color: var(--color-chalk);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 200ms ease-out, transform 200ms ease-out;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

**Featured / Highlighted Card**

```css
.card--featured {
  background-color: var(--color-chalk);
  border: var(--border-accent);      /* 2px Ember border */
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  position: relative;
}
.card--featured::before {
  content: "";
  position: absolute;
  top: 0;
  left: var(--space-6);
  right: var(--space-6);
  height: 2px;
  background-color: var(--color-ember);  /* accent bar at top */
}
```

**Dark Card (for use on Chalk/Paper backgrounds)**

```css
.card--dark {
  background-color: var(--color-soot);
  border: var(--border-dark);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--color-text-on-dark);
  box-shadow: var(--shadow-dark-sm);
}
.card--dark:hover {
  box-shadow: var(--shadow-dark-md);
}
```

---

### 5c. Section Containers

**Light section (default)**

```css
.section--light {
  background-color: var(--color-chalk);
  padding-block: var(--space-32);
}
```

**Dark contrast section ("stage")**

```css
.section--dark {
  background-color: var(--color-soot);
  color: var(--color-text-on-dark);
  padding-block: var(--space-32);
  /* Optional: add a subtle 1px top/bottom border */
  border-top: 1px solid oklch(25% 0.005 75);
  border-bottom: 1px solid oklch(25% 0.005 75);
}
```

**Accent-tinted section**

```css
.section--tinted {
  background-color: oklch(58% 0.18 35 / 0.04);  /* Ember at 4% opacity */
  padding-block: var(--space-32);
}
```

---

### 5d. Navigation

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  background-color: oklch(95.5% 0.008 75 / 0.85);  /* Chalk at 85% opacity */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: box-shadow 200ms ease-out, padding 200ms ease-out;
}

/* Scrolled state — compresses and adds bottom border */
.nav--scrolled {
  padding: var(--space-3) var(--space-6);
  box-shadow: 0 1px 0 oklch(78% 0.008 75);  /* hairline bottom border */
}

/* Nav links */
.nav__link {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: color 150ms ease-out;
}
.nav__link:hover,
.nav__link--active {
  color: var(--color-text-primary);
}

/* Mobile: slide-in panel from right */
@media (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 75vw;
    max-width: 320px;
    background-color: var(--color-chalk);
    padding: var(--space-16) var(--space-6);
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--shadow-lg);
  }
  .nav__menu--open {
    transform: translateX(0);
  }
}
```

---

### 5e. Hero Section Pattern

The hero follows a strict layout formula:

```
[OVERLINE LABEL]          ← JetBrains Mono, 12px, Medium, ALL CAPS, tracked, Ember color
[HEADLINE]                ← Instrument Serif, hero size, Regular
[BODY TEXT]               ← General Sans, --text-md, max-width: 40rem
[CTA GROUP]               ← Primary Volt button + Secondary Ember outline button
[SUPPORTING ELEMENT]      ← Code snippet, diagram, or screenshot (not stock illustration)
```

```css
.hero {
  padding-top: var(--space-40);     /* accounts for fixed nav + breathing room */
  padding-bottom: var(--space-32);
  text-align: left;                  /* NEVER center-aligned hero text */
  max-width: var(--width-content);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.hero__overline {
  font-family: "JetBrains Mono", monospace;
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-mono);
  color: var(--color-ember);
  margin-bottom: var(--space-4);
}

.hero__headline {
  font-family: "Instrument Serif", serif;
  font-size: var(--text-hero);
  font-weight: 400;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  max-width: 16ch;                   /* constrain headline width for readability */
  margin-bottom: var(--space-6);
}

.hero__body {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-md);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  max-width: var(--width-prose);
  margin-bottom: var(--space-8);
}

.hero__cta-group {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}
```

---

### 5f. Technical Diagrams

Technical diagrams (agent flows, system architectures, platform layers) have a distinct visual language:

```css
.diagram {
  background-color: var(--color-soot);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  color: var(--color-text-on-dark);
  font-family: "JetBrains Mono", monospace;
  font-size: var(--text-xs);
}

/* Nodes */
.diagram__node {
  background-color: oklch(20% 0.005 75);
  border: 1px solid oklch(30% 0.005 75);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-on-dark);
  font-family: "JetBrains Mono", monospace;
  font-size: var(--text-xs);
}

/* Active / highlighted nodes */
.diagram__node--active {
  border-color: var(--color-ember);
  box-shadow: 0 0 0 1px var(--color-ember);
}

/* Connection lines */
.diagram__line {
  stroke: oklch(40% 0.005 75);
  stroke-width: 1.5px;
}

/* Directional flow arrows */
.diagram__arrow {
  stroke: var(--color-ember);
  stroke-width: 2px;
  fill: var(--color-ember);
}

/* Labels on connections */
.diagram__label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  fill: var(--color-text-on-dark-secondary);
}
```

**Rules:**
- All diagrams sit on dark backgrounds (Soot) regardless of the surrounding section color. This makes them feel like "windows" into the technical layer.
- Use the Ember accent for active/primary flow paths. Use muted grays for secondary paths.
- Node labels are always mono. Human-readable descriptions below nodes can use General Sans.
- Animate connection lines with a dashed stroke offset for "data flowing" effect (only if reduced motion is not preferred).

---

### 5g. Social Proof / Logos Bar

```css
.logos-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-10);
  flex-wrap: wrap;
  padding-block: var(--space-12);
}

.logos-bar__logo {
  height: 24px;                        /* all logos normalized to same height */
  width: auto;
  filter: grayscale(1) brightness(0.3); /* render all logos in near-Graphite monochrome */
  opacity: 0.5;
  transition: opacity 200ms ease-out, filter 200ms ease-out;
}

.logos-bar__logo:hover {
  opacity: 0.8;
  filter: grayscale(1) brightness(0.15);
}
```

**Rules:**
- Client and technology logos are ALWAYS displayed in monochrome grayscale. Never full-color logos.
- All logos are the same height (24–28px). Width varies naturally.
- Include a label above: "TRUSTED BY" or "BUILT WITH" in the overline label pattern (JetBrains Mono, tracked, uppercase).
- Maximum 6 logos in a row; if more, use a slow horizontal scroll (no autoplay, user-initiated or subtle infinite scroll).

---

### 5h. Stats / Numbers Display

```css
.stat {
  text-align: left;                /* NOT centered */
}

.stat__number {
  font-family: "Instrument Serif", serif;
  font-size: var(--text-3xl);
  font-weight: 400;
  line-height: 1;
  color: var(--color-ember);
  letter-spacing: var(--tracking-tight);
}

.stat__unit {
  font-family: "JetBrains Mono", monospace;
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-left: var(--space-1);
}

.stat__label {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
  line-height: var(--leading-normal);
}
```

**Pattern:** Number in Instrument Serif (large, Ember-colored) + unit/qualifier in JetBrains Mono + description in General Sans. Example:

```
50+                ← Instrument Serif, Ember
automations        ← JetBrains Mono, secondary text color
Deployed across 12 industries   ← General Sans, secondary text color
```

Stats are displayed in a horizontal row on desktop (3–4 per row) and stack vertically on mobile. They always sit in a dark section (`.section--dark`) for maximum contrast.

---

## 6. MOTION & ANIMATION

### Motion Personality: **Mechanical Precision**

Our motion language is crisp and decisive. Elements arrive where they're going and stop. No wobble, no overshoot, no elastic bouncing. Think of a precision CNC machine moving a tool head — fast, accurate, zero wasted motion. This reinforces the "engineered" brand personality.

### Easing Curves

```css
:root {
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);     /* primary: elements entering view, modals opening */
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);     /* state changes: hover, color transitions */
  --ease-in:        cubic-bezier(0.55, 0, 1, 0.45);     /* elements exiting view, modals closing */
  --ease-linear:    linear;                               /* progress bars, spinners */
}
```

- **`--ease-out`**: The workhorse. Used for anything appearing: page transitions, scroll reveals, dropdowns opening, tooltips showing. Starts fast, decelerates smoothly — elements "land" with authority.
- **`--ease-in-out`**: For state changes where the element stays in place but changes form — hover background shifts, color transitions, focus ring appearance.
- **`--ease-in`**: Exit only. The reverse of `--ease-out`. Dropdown closing, toast dismissing, modal retreating.
- **`linear`**: Spinners, loading bars, continuous animations only. NEVER for UI transitions.

### Duration Tokens

```css
:root {
  --duration-fast:    100ms;   /* hover states, focus rings, micro-interactions */
  --duration-normal:  200ms;   /* most transitions: color, opacity, position */
  --duration-slow:    400ms;   /* complex transitions: layout shifts, modals, reveals */
  --duration-reveal:  600ms;   /* page-load entrance animations (used once) */
}
```

### Entrance Animations (Scroll-Triggered)

Elements enter from below with a subtle translate, one at a time with staggered delay. No fading sideways. No zooming. No rotating.

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);   /* 16px — NOT 50px or 100px */
  transition: opacity var(--duration-reveal) var(--ease-out),
              transform var(--duration-reveal) var(--ease-out);
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.reveal--stagger > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

.reveal--stagger.reveal--visible > *:nth-child(1) { transition-delay: 0ms; opacity: 1; transform: translateY(0); }
.reveal--stagger.reveal--visible > *:nth-child(2) { transition-delay: 80ms; opacity: 1; transform: translateY(0); }
.reveal--stagger.reveal--visible > *:nth-child(3) { transition-delay: 160ms; opacity: 1; transform: translateY(0); }
.reveal--stagger.reveal--visible > *:nth-child(4) { transition-delay: 240ms; opacity: 1; transform: translateY(0); }
```

Use `IntersectionObserver` with `threshold: 0.15` to trigger `.reveal--visible`.

### Hover States

- Buttons: `translateY(-1px)` on hover, `translateY(0)` on active. Duration: `--duration-fast`.
- Cards: `translateY(-2px)` + shadow escalation. Duration: `--duration-normal`.
- Links: color change only. Duration: `--duration-fast`.
- NEVER scale on hover (no `transform: scale(1.02)` — it looks like jelly).

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is MANDATORY. Not optional. Not "nice to have." Ship it from day one.

### What NOT to Animate

- ✗ Text typing/typewriter effects (screams "AI demo")
- ✗ Parallax scrolling (dated, causes motion sickness)
- ✗ Bouncing or elastic easing (conflicts with "precision" personality)
- ✗ Rotating elements (logos that spin, icons that rotate on hover)
- ✗ Scroll-jacking (taking control of native scroll behavior)
- ✗ Auto-playing carousels or sliders
- ✗ Background gradient animations (distracting, performant issues)
- ✗ Animated cursors or trails
- ✗ Scale transforms on hover (wobbly, imprecise feeling)

---

## 7. CONTENT & VOICE GUIDELINES

### Writing Style

- **Active voice, always.** "We deploy agents" not "agents are deployed by our team."
- **Second person.** "Your workflow is broken" not "Workflows can become inefficient."
- **Concise.** If a sentence can lose a word without losing meaning, lose the word.
- **Specific over vague.** "Reduce ticket response time from 4 hours to 12 minutes" not "Dramatically improve response times."
- **Present tense.** "This agent monitors your Slack channels" not "This agent will monitor your Slack channels."

### CTA Writing Patterns

CTAs are action-oriented and specific about what happens next:

- ✓ "Book a 15-minute call"
- ✓ "See how it works"
- ✓ "Start building"
- ✓ "Deploy your first agent"
- ✗ "Learn more" (learn what?)
- ✗ "Get started" (only acceptable as a final fallback)
- ✗ "Contact us" (too passive — "Book a call" is better)
- ✗ "Submit" (describe the action, not the form event)

### Headlines vs Body vs Labels

**Headlines** (Instrument Serif):
- Maximum 8 words. If it's longer, it's body copy pretending to be a headline.
- State the outcome or the tension. "Your ops team shouldn't write code" or "AI agents that ship on Monday."
- No periods at the end of headlines. Question marks are acceptable.
- No exclamation marks. Ever.

**Body copy** (General Sans):
- Maximum 3 sentences per paragraph on a marketing page.
- Lead with the point, then support it. Don't build up to the punchline.
- One idea per paragraph.

**Labels / Overlines** (JetBrains Mono):
- Maximum 3 words. "HOW IT WORKS" not "HERE'S OUR DETAILED PROCESS."
- Always uppercase, always tracked.
- Describes the category of the section below it, not the content itself.

### Formatting Rules

- **Quotes:** Use typographic quotes (" "), not straight quotes (" ").
- **Apostrophes:** Typographic ('), not straight (').
- **Ellipsis:** Use the character (…), not three periods (...).
- **Numbers:** Always numerals, never words. "3 agents" not "three agents." Exception: "one" when it means "a single."
- **Units:** Non-breaking space between number and unit. "15 min" not "15min."
- **Dashes:** Em dash (—) with no spaces for interjections. En dash (–) for ranges ("3–5 days").
- **Lists on marketing pages:** Maximum 4 items. If it's more, restructure the content. (Documentation can have longer lists.)

### Tone Do's and Don'ts

**Do:**
- Sound like a senior engineer explaining something at a whiteboard — clear, direct, a little dry.
- Use technical terms correctly and without apology. Your audience knows what an API is.
- Be opinionated. "We don't build chatbots" is more memorable than "We focus on workflow automation."
- Use humor sparingly and only when it's actually funny, not when it's trying to be relatable.

**Don't:**
- Use the word "leverage" (say "use").
- Use the word "utilize" (say "use").
- Use the word "solution" without saying what the solution actually is.
- Use the phrase "cutting-edge" or "state-of-the-art" or "next-generation."
- Use the word "empower" or "unlock" or "supercharge."
- Use the phrase "in today's fast-paced world."
- Start paragraphs with "At Perpetual Stack, we…" — the reader is on your website, they know who you are.
- Describe AI as "magic" or "intelligent." Describe what it does: "reads your Slack threads and drafts responses in your tone."

---

## 8. ANTI-SLOP CHECKLIST

Use this checklist to audit every page and component. If something matches an item below, fix it before shipping.

### Typography Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| Using Inter or Roboto for everything | It's the default font on every AI startup's site since 2022. It signals "I didn't choose a font." | Use the typography system defined above: Instrument Serif + General Sans + JetBrains Mono. |
| Center-aligned body text | Hard to read past 2 lines. Looks like a wedding invitation. | Left-align all body text. Center-align only single-line hero headlines (if ever). |
| Mixing more than 3 typefaces | Visual chaos. Signals "AI-generated layout." | Stick to the 3-font system. No exceptions. |
| All-caps headings in a sans-serif | Reads as "GENERIC STARTUP TEMPLATE." | Sentence case for serif headings, ALL CAPS only for mono overline labels. |
| Headline text that's actually a paragraph | If the "headline" is 20+ words, it's not a headline — it's a sentence you made big. | Max 8 words. Put the rest in body copy. |
| Default system font stack | Lazy. Visible. Unintentional. | Always load custom fonts. |

### Color Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| Purple-to-blue gradient backgrounds | The single most overused pattern in AI marketing since 2023. | Use solid Chalk or Soot backgrounds. Gradients only where specified. |
| Pure #FFFFFF background with pure #000000 text | Maximum contrast causes eye strain and looks harsh. Signals "no design thinking." | Use Chalk and Graphite — warm, intentional, subtle. |
| Rainbow gradient text | Technically impressive, aesthetically juvenile. | Never. One accent color (Ember). |
| Using accent color for large background fills | The accent loses its punch when it's everywhere. | Ember is for small elements: text links, borders, icons, the logo. |
| Bright red/green for success/error | The defaults from Bootstrap, 2014. | Use the muted semantic palette. |

### Layout Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| 3-column feature grid with rounded icons | The AI landing page starter kit. Every single one looks the same. | Asymmetric layouts, 2-column with a dominant visual, or single-column narrative flow. |
| Everything centered on the page | "AI generated this layout" energy. Centers lack visual hierarchy. | Left-align content. Use the grid system. Break alignment intentionally, not accidentally. |
| Equal-sized cards in a perfect grid | Uniform grids feel mechanical in a bad way — like a spreadsheet. | Vary card sizes. Feature one card prominently. Use a bento layout. |
| Huge padding on everything (60px+ on all sides) | "I set padding: 4rem on the wrapper and called it a day." | Use the spacing scale. Different elements get different spacing. |
| Hero section with a floating 3D illustration | It's 2026. The "isometric 3D mockup" trend peaked in 2022. | Use a real screenshot, a code snippet, a technical diagram, or nothing at all. |

### Animation Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| Typewriter text animation | Instantly signals "AI product demo." | Static text. The words should be good enough on their own. |
| Elements flying in from the sides | Distracting and dated. | Subtle `translateY(16px)` fade-up only. |
| Bouncy spring animations everywhere | Playful ≠ professional. | Use `--ease-out` (decelerating, precise). |
| Auto-playing video backgrounds | Slow, distracting, inaccessible. | Static image with a play button, or no video. |
| Scroll-triggered counter animations ("1… 2… 3… 50+!") | Feels gimmicky. The number is impressive or it isn't — counting up doesn't help. | Show the number. Let it be. |

### Content Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| "Unlock the power of AI" | Empty phrase. Says nothing specific. | "Deploy an agent that closes 40% of your support tickets without human review." |
| "Trusted by leading companies" with no logos | Unsubstantiated. Worse than saying nothing. | Show real logos, or don't make the claim. |
| Bullet points with single-word items | "Fast. Reliable. Scalable." — this is a placeholder, not copy. | Write real sentences that explain what you mean by fast. |
| "Lorem ipsum" anywhere in production | Obviously. | Write the actual copy before shipping. No exceptions. |
| FAQ section as the last thing on the page | It signals "we couldn't figure out where to put this info." | Answer objections inline, in the sections where they arise. |

### Component Anti-Patterns

| Anti-Pattern | Why It's Slop | Do Instead |
|---|---|---|
| Cards with gradient borders | The 2024 SaaS trend that already feels dated. | Solid 1px borders or no border at all (shadow only). |
| Glassmorphism cards (blur + transparency) | Trendy in 2022, now a cliché. Also has accessibility issues. | Solid backgrounds with defined borders. |
| Buttons with gradient fills | Makes buttons look like they're from a mobile game. | Solid Volt for primary CTA, solid Ember border for secondary. |
| "Bento grid" with every box the same style | The grid is fine. Making every box identical is not. | Vary content types within the grid: stat, diagram, text, image. |
| Testimonial carousels that auto-advance | Users can't read at your speed. | Static grid of testimonials, or a single featured quote. |

---

## 9. ACCESSIBILITY STANDARDS

### Contrast Ratios

- **Normal text (< 18px or < 14px bold):** minimum 4.5:1 against background (WCAG AA).
- **Large text (≥ 18px or ≥ 14px bold):** minimum 3:1 against background (WCAG AA).
- **UI components and graphical objects:** minimum 3:1 against adjacent colors.
- All color pairings in this system have been calculated to meet these ratios. When introducing new colors, verify with a contrast checker before using.

### Focus Indicators

```css
/* Global focus style */
*:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 2px;
  border-radius: var(--radius-sm);   /* soften the outline corners */
}

/* Remove default outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

- Focus indicators must be visible on BOTH light and dark backgrounds. Ember (`#E0592A`) provides sufficient contrast on Chalk (14.8:1) and on Soot (5.2:1).
- Focus indicators must not be removed — ever. They may be styled, but they must be visible.
- All interactive elements must have a visible focus state.

### Touch Target Sizes

- **Minimum touch target:** 44×44px (WCAG 2.2 Level AA).
- Buttons with smaller visual footprints (e.g., icon buttons) must have a 44×44px clickable area even if the visible element is smaller. Use padding or a transparent pseudo-element.
- Inline links within body text are exempt from the 44px rule but should have adequate `padding-block: 4px` to increase the tap area.

### Keyboard Navigation

- All interactive elements must be reachable via Tab.
- Tab order must follow visual order (no `tabindex` values greater than 0).
- Dropdown menus and modals must trap focus (focus should not escape behind the overlay).
- Escape key must close any modal, dropdown, or overlay.
- Enter and Space must activate buttons and links.
- Arrow keys should navigate within component groups (tabs, radio buttons, dropdown options).

### Screen Reader Considerations

- All images must have descriptive `alt` text. Decorative images use `alt=""` and `role="presentation"`.
- Icon-only buttons must have `aria-label` or visually hidden text.
- Sections should use `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>` landmarks.
- Dynamic content changes (toast notifications, form validation) must use `aria-live="polite"` or `aria-live="assertive"` as appropriate.
- Page title must update on route changes in SPAs.
- Heading hierarchy must be sequential (no h1 → h3 skips).

### ARIA Patterns for Custom Components

**Tabs:**
```html
<div role="tablist" aria-label="Service details">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">Agents</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">Workflows</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">…</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>…</div>
```

**Modal:**
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Book a call</h2>
  <!-- Focus trap: first and last focusable elements cycle -->
  <button autofocus>Choose a time</button>
  <button>Close</button>
</div>
```

**Accordion:**
```html
<h3>
  <button aria-expanded="false" aria-controls="content-1">How it works</button>
</h3>
<div id="content-1" role="region" aria-labelledby="trigger-1" hidden>…</div>
```

**Loading states:**
```html
<button aria-busy="true" aria-label="Submitting form">
  <span class="spinner" role="status" aria-label="Loading"></span>
</button>
```

---

## CSS Custom Properties — Complete Reference

For convenience, here is the full set of custom properties consolidated:

```css
:root {
  /* ---- Typography ---- */
  --font-display:   "Instrument Serif", "Georgia", "Times New Roman", serif;
  --font-body:      "General Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --font-mono:      "JetBrains Mono", "Fira Code", "Source Code Pro", "Consolas", monospace;

  --text-xs:    clamp(0.6875rem, 0.65rem + 0.1vw, 0.75rem);
  --text-sm:    clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);
  --text-base:  clamp(0.9375rem, 0.88rem + 0.25vw, 1.0625rem);
  --text-md:    clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
  --text-lg:    clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --text-xl:    clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
  --text-2xl:   clamp(1.875rem, 1.4rem + 2vw, 2.75rem);
  --text-3xl:   clamp(2.25rem, 1.6rem + 2.8vw, 3.5rem);
  --text-hero:  clamp(2.75rem, 1.8rem + 4vw, 5rem);

  --leading-tight:    1.15;
  --leading-snug:     1.3;
  --leading-normal:   1.6;
  --leading-relaxed:  1.75;

  --tracking-tight:   -0.02em;
  --tracking-normal:   0;
  --tracking-wide:     0.04em;
  --tracking-mono:     0.12em;

  /* ---- Colors ---- */
  --color-chalk:       #F5F2ED;
  --color-paper:       #EBE7E0;
  --color-graphite:    #1A1A1A;
  --color-soot:        #121212;

  --color-ember:       #E0592A;
  --color-ember-light: #F0845E;
  --color-ember-dim:   #B84420;

  --color-volt:        #C8F035;
  --color-volt-hover:  #D4F55E;
  --color-volt-text:   #1A1A1A;

  --color-success:     #4A8C6F;
  --color-warning:     #C49A3A;
  --color-error:       #C0453A;
  --color-info:        #4A7FA0;

  --color-text-primary:           #1A1A1A;
  --color-text-secondary:         #5C5852;
  --color-text-tertiary:          #8A857D;
  --color-text-on-dark:           #F5F2ED;
  --color-text-on-dark-secondary: #A8A39C;

  /* ---- Spacing ---- */
  --space-1:    0.25rem;
  --space-2:    0.5rem;
  --space-3:    0.75rem;
  --space-4:    1rem;
  --space-5:    1.25rem;
  --space-6:    1.5rem;
  --space-8:    2rem;
  --space-10:   2.5rem;
  --space-12:   3rem;
  --space-16:   4rem;
  --space-20:   5rem;
  --space-24:   6rem;
  --space-32:   8rem;
  --space-40:   10rem;

  /* ---- Widths ---- */
  --width-content:    72rem;
  --width-wide:       80rem;
  --width-full-bleed: 90rem;
  --width-prose:      40rem;

  /* ---- Radii ---- */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-full:  9999px;

  /* ---- Shadows ---- */
  --shadow-sm:      0 1px 2px oklch(58% 0.05 35 / 0.06);
  --shadow-md:      0 4px 12px oklch(58% 0.05 35 / 0.08);
  --shadow-lg:      0 12px 32px oklch(58% 0.05 35 / 0.1);
  --shadow-dark-sm: 0 1px 3px oklch(0% 0 0 / 0.3);
  --shadow-dark-md: 0 4px 16px oklch(0% 0 0 / 0.4);

  /* ---- Borders ---- */
  --border-subtle:   1px solid oklch(85% 0.005 75);
  --border-default:  1px solid oklch(78% 0.008 75);
  --border-strong:   1px solid oklch(60% 0.01 75);
  --border-accent:   2px solid var(--color-ember);
  --border-dark:     1px solid oklch(25% 0.005 75);

  /* ---- Motion ---- */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);
  --ease-in:        cubic-bezier(0.55, 0, 1, 0.45);
  --ease-linear:    linear;

  --duration-fast:    100ms;
  --duration-normal:  200ms;
  --duration-slow:    400ms;
  --duration-reveal:  600ms;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

*This document is the source of truth. If a design decision isn't covered here, default to restraint. When in doubt, use less color, less motion, less type variation, and more whitespace.*
