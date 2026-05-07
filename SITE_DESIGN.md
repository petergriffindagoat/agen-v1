# PERPETUAL STACK — Website Design Specification

> Complete site architecture, page designs, component inventory, and implementation guide.
> Derived from DESIGN.md v1.0 · May 2026

---

## Table of Contents

1. [Site Map & Information Architecture](#1-site-map--information-architecture)
2. [Homepage — Section-by-Section Design](#2-homepage--section-by-section-design)
3. [Inner Page Templates](#3-inner-page-templates)
4. [Component Inventory](#4-component-inventory)
5. [Responsive Strategy](#5-responsive-strategy)
6. [Interaction Map](#6-interaction-map)
7. [SEO & Performance Specifications](#7-seo--performance-specifications)

---

## 1. SITE MAP & INFORMATION ARCHITECTURE

### 1a. Page Structure

```
perpetualstack.com/
├── / ............................ Homepage (conversion hub)
├── /services ................... What We Build (overview)
│   ├── /services/ai-agents ..... AI Agent Development (detail)
│   ├── /services/workflow ...... Workflow Automation (detail)
│   └── /services/integrations .. Platform Integrations (detail)
├── /work ....................... Case Studies (listing)
│   └── /work/:slug ............. Individual Case Study
├── /about ...................... About / Team
├── /blog ....................... Blog (listing)
│   └── /blog/:slug ............. Individual Blog Post
├── /contact .................... Book a Call
├── /privacy .................... Privacy Policy
└── /terms ...................... Terms of Service
```

### 1b. Navigation Hierarchy

**Primary nav (always visible):**

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]     Services ▾     Work     About     Blog     [Book a Call]│
└─────────────────────────────────────────────────────────────────────┘
```

- **Logo:** Concept A mark ("The Infinite Register") at 28px height. Links to `/`.
- **Services:** Dropdown on hover/click revealing 3 service sub-pages + link to `/services` overview.
- **Work:** Links to `/work` (case studies listing).
- **About:** Links to `/about`.
- **Blog:** Links to `/blog`.
- **Book a Call:** Primary CTA button (Volt background, Graphite text). Links to `/contact`.

**Services dropdown:**

```
┌──────────────────────────────┐
│  WHAT WE BUILD               │  ← Overline label (JetBrains Mono)
│                              │
│  AI agents                   │  ← General Sans, 500
│  Custom agents that handle   │  ← General Sans, 400, secondary color
│  real work autonomously      │
│                              │
│  Workflow automation         │
│  End-to-end process          │
│  orchestration               │
│                              │
│  Platform integrations       │
│  Connect your existing       │
│  tools to AI                 │
│                              │
│  ──────────────────────────  │
│  View all services →         │  ← Link button, Ember
└──────────────────────────────┘
```

**Mobile nav:** Hamburger icon (3 horizontal lines, 24px, Graphite) triggers a slide-in panel from the right. Panel width: 75vw, max 320px. Contains all nav items stacked vertically. "Book a Call" appears as a full-width Volt button at the bottom of the panel.

### 1c. Conversion Path

```
Stranger lands on homepage
  │
  ├─→ Reads hero → understands what PS does
  │
  ├─→ Scrolls through services → sees specific capabilities
  │
  ├─→ Sees social proof (logos, stats) → builds trust
  │
  ├─→ Reads case study teaser → sees real results
  │
  ├─→ Hits final CTA → clicks "Book a 15-minute call"
  │
  └─→ /contact → fills short form or selects Calendly slot
         │
         └─→ Confirmation → receives calendar invite
```

Every page has exactly 2 entry points to `/contact`:
1. The persistent nav CTA ("Book a Call")
2. A section-level CTA block near the bottom of the page

### 1d. Footer Structure

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Dark (Soot background)                                        │
│                                                                          │
│  ┌──────────┬───────────┬───────────┬──────────────────────────────────┐ │
│  │  LOGO    │  COMPANY  │  CONNECT  │  NEWSLETTER                     │ │
│  │  mark    │           │           │                                  │ │
│  │          │  Services │  GitHub   │  "Occasional dispatches on      │ │
│  │  Tagline │  Work     │  LinkedIn │   AI automation. No spam."      │ │
│  │  text    │  About    │  Twitter  │                                  │ │
│  │          │  Blog     │           │  [email input  ] [Subscribe →]  │ │
│  │          │  Contact  │           │                                  │ │
│  └──────────┴───────────┴───────────┴──────────────────────────────────┘ │
│                                                                          │
│  ─────────────────────────────────────────────────────────────────────── │
│  © 2026 Perpetual Stack            Privacy · Terms                       │
└──────────────────────────────────────────────────────────────────────────┘
```

**Design tokens:**
- Background: `--color-soot`
- Text: `--color-text-on-dark` (primary), `--color-text-on-dark-secondary` (links, tagline)
- Column headings: JetBrains Mono, `--text-xs`, Medium 500, uppercase, `--tracking-mono`, `--color-text-on-dark-secondary`
- Links: General Sans, `--text-sm`, 400, `--color-text-on-dark-secondary`. Hover → `--color-text-on-dark`.
- Newsletter input: `--color-soot` background, `--border-dark`, `--color-text-on-dark` placeholder. Focus: `--border-accent`.
- Subscribe button: Volt background, Graphite text, `--radius-md`.
- Copyright bar: General Sans, `--text-xs`, `--color-text-on-dark-secondary`. Top border: `--border-dark`.
- Padding: `--space-20` top, `--space-12` bottom.

---

## 2. HOMEPAGE — SECTION-BY-SECTION DESIGN

### Section 1: Navigation Bar

**Purpose:** Persistent wayfinding and conversion access point.

**Wireframe (desktop, 1440px):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 24px pad                                                          24px  │
│  ┌────┐                                                    ┌──────────┐ │
│  │LOGO│   Services ▾    Work    About    Blog              │Book a Call│ │
│  │28px│                                                    │  (Volt)  │ │
│  └────┘                                                    └──────────┘ │
│ 16px pad                                                          16px  │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Logo: Concept A mark, 28px height, Ember color
- Nav links: "Services", "Work", "About", "Blog"
- CTA: "Book a Call"

**Design tokens:**
- Background: `oklch(95.5% 0.008 75 / 0.85)` (Chalk at 85% opacity)
- Backdrop: `blur(12px)`
- Padding default: `--space-4` block, `--space-6` inline
- Padding scrolled: `--space-3` block, `--space-6` inline
- Nav links: General Sans, `--text-sm`, 500, `--color-text-secondary`
- CTA button: `.btn-primary` (Volt)
- Z-index: 100
- Position: `fixed`, top: 0

**Responsive:**
- Desktop (≥1024px): Full nav as shown
- Tablet (768–1023px): Compress link spacing, keep all items visible
- Mobile (<768px): Logo left, hamburger icon right. CTA moves inside the mobile panel.

**Scroll behavior:**
- Default state: `--space-4` padding, no bottom border
- Scrolled state (>50px scroll): `--space-3` padding, hairline bottom border `oklch(78% 0.008 75)`. Transition: `200ms --ease-in-out`.

**Transition to next section:** Nav floats over the hero. Hero content begins below the nav with `--space-40` top padding.

---

### Section 2: Hero

**Purpose:** Establish what Perpetual Stack does and for whom in under 5 seconds. Drive the first CTA click.

**Wireframe (desktop, 1440px):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Light (Chalk bg)                                               │
│  padding-top: --space-40 (160px)                                         │
│  padding-bottom: --space-32 (128px)                                      │
│                                                                          │
│  ┌─────────────────────────────────┬────────────────────────────────────┐ │
│  │                                 │                                    │ │
│  │  AI AUTOMATION STUDIO           │   ┌──────────────────────────┐    │ │
│  │  ← overline, Ember              │   │                          │    │ │
│  │                                 │   │   TECHNICAL DIAGRAM      │    │ │
│  │  We build the agents            │   │   (Soot bg, rounded)     │    │ │
│  │  your team can't                │   │                          │    │ │
│  │  ← h1, Instrument Serif        │   │   Agent flow showing     │    │ │
│  │                                 │   │   Slack → Agent →        │    │ │
│  │  Your ops team writes prompts   │   │   Decision → Action      │    │ │
│  │  in Slack and hopes for the     │   │                          │    │ │
│  │  best. We deploy autonomous     │   │                          │    │ │
│  │  agents that read, decide, and  │   │                          │    │ │
│  │  act — in your existing tools.  │   └──────────────────────────┘    │ │
│  │  ← body, General Sans          │                                    │ │
│  │                                 │                                    │ │
│  │  [Book a 15-min call] [See how  │                                    │ │
│  │    (Volt)         it works →]   │                                    │ │
│  │                   (Ember outline)│                                    │ │
│  │                                 │                                    │ │
│  └─────────────────────────────────┴────────────────────────────────────┘ │
│                                                                          │
│  55% text col                       45% diagram col                      │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `AI AUTOMATION STUDIO`
- Headline: `We build the agents your team can't`
- Body: `Your ops team writes prompts in Slack and hopes for the best. We deploy autonomous agents that read, decide, and act — in your existing tools.`
- Primary CTA: `Book a 15-minute call` (Volt button)
- Secondary CTA: `See how it works` (Ember outline button, scrolls to "How it works" section)
- Supporting element: A dark technical diagram showing a simplified agent flow (Slack message → Agent processing → Decision node → Action taken). Set on a `--color-soot` background with `--radius-xl`.

**Design tokens:**
- Section bg: `--color-chalk`
- Overline: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Headline: Instrument Serif, `--text-hero`, 400, `--leading-tight`, `--tracking-tight`, `--color-text-primary`. Max-width: `16ch`.
- Body: General Sans, `--text-md`, 400, `--leading-normal`, `--color-text-secondary`. Max-width: `--width-prose`.
- CTA gap: `--space-4`
- Column gap: `--space-16`
- Text column: 55%. Diagram column: 45%.

**Responsive:**
- Desktop (≥1024px): 2-column layout as shown. Diagram vertically centered against text.
- Tablet (768–1023px): 2-column maintained, diagram scales down, column gap reduces to `--space-8`.
- Mobile (<768px): Single column. Text block first, diagram below. Diagram gets full width, `--space-8` top margin. Headline size drops to `--text-3xl`. CTAs stack vertically at full width.

**Animation:**
- Overline: fades in immediately on load
- Headline: `reveal` animation (translateY 16px → 0, opacity 0 → 1), `--duration-reveal`, `--ease-out`, 80ms delay
- Body: same reveal, 160ms delay
- CTA group: same reveal, 240ms delay
- Diagram: same reveal, 320ms delay

**Transition to next section:** `--space-16` (64px) gap. No background change — both sections on Chalk. A hairline border (`--border-subtle`) separates them subtly.

---

### Section 3: Social Proof — Technology Logos

**Purpose:** Establish credibility through association with known technologies and (if available) client logos.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Light (Chalk bg)                                               │
│  padding-block: --space-12 (48px)                                        │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │                     BUILT WITH & DEPLOYED ON                        │ │
│  │                     ← overline, centered                            │ │
│  │                                                                      │ │
│  │   [Logo]   [Logo]   [Logo]   [Logo]   [Logo]   [Logo]              │ │
│  │  OpenAI   Anthropic  AWS    Vercel  Langchain  Pinecone            │ │
│  │                                                                      │ │
│  │  All logos: 24px height, grayscale, 50% opacity                     │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `BUILT WITH & DEPLOYED ON`
- Logos: Technology partners (OpenAI, Anthropic, AWS, Vercel, LangChain, Pinecone — or whichever are accurate). Max 6.

**Design tokens:**
- Section bg: `--color-chalk`
- Overline: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-text-tertiary`. `text-align: center`.
- Logo height: 24px, `filter: grayscale(1) brightness(0.3)`, `opacity: 0.5`.
- Logo hover: `opacity: 0.8`, `filter: grayscale(1) brightness(0.15)`.
- Logo gap: `--space-10`
- Padding block: `--space-12`

**Responsive:**
- Desktop: Single row, centered, flex-wrap
- Mobile: 2 rows of 3, or horizontal scroll if needed. Gap reduces to `--space-6`.

**Animation:** Logos fade in together (`reveal`, no stagger) when section enters viewport.

**Transition to next section:** `--space-32` gap into the "What We Build" section.

---

### Section 4: What We Build — Services Overview

**Purpose:** Show the 3 core service offerings with enough detail to self-qualify ("is this for me?") and drive deeper exploration.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Light (Chalk bg)                                               │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  WHAT WE BUILD                ← overline                            │ │
│  │                                                                      │ │
│  │  Three ways we deploy         ← h2, Instrument Serif                │ │
│  │  AI into your stack                                                  │ │
│  │                                                                      │ │
│  │  32px gap                                                            │ │
│  │                                                                      │ │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │ │
│  │  │ 01               │  │ 02               │  │ 03               │   │ │
│  │  │                  │  │                  │  │                  │   │ │
│  │  │ AI agents        │  │ Workflow         │  │ Platform         │   │ │
│  │  │ ← h3             │  │ automation       │  │ integrations     │   │ │
│  │  │                  │  │ ← h3             │  │ ← h3             │   │ │
│  │  │ Custom agents    │  │                  │  │                  │   │ │
│  │  │ that handle      │  │ End-to-end       │  │ Connect your     │   │ │
│  │  │ support tickets, │  │ orchestration    │  │ CRM, helpdesk,   │   │ │
│  │  │ qualify leads,   │  │ that replaces    │  │ and internal     │   │ │
│  │  │ and process      │  │ your team's      │  │ tools to AI —    │   │ │
│  │  │ documents —      │  │ copy-paste       │  │ without          │   │ │
│  │  │ without human    │  │ workflows with   │  │ rebuilding       │   │ │
│  │  │ review.          │  │ reliable         │  │ anything.        │   │ │
│  │  │                  │  │ automation.      │  │                  │   │ │
│  │  │ See details →    │  │ See details →    │  │ See details →    │   │ │
│  │  │ ← link btn       │  │                  │  │                  │   │ │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘   │ │
│  │                                                                      │ │
│  │  Cards: --border-default, --radius-lg, --shadow-sm                  │ │
│  │  Card 01 has --border-accent (featured)                              │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `WHAT WE BUILD`
- Headline: `Three ways we deploy AI into your stack`
- Card 1 (Featured):
  - Number: `01` (JetBrains Mono, `--text-xs`, `--color-text-tertiary`)
  - Title: `AI agents`
  - Body: `Custom agents that handle support tickets, qualify leads, and process documents — without human review.`
  - Link: `See details →` → `/services/ai-agents`
- Card 2:
  - Number: `02`
  - Title: `Workflow automation`
  - Body: `End-to-end orchestration that replaces your team's copy-paste workflows with reliable automation.`
  - Link: `See details →` → `/services/workflow`
- Card 3:
  - Number: `03`
  - Title: `Platform integrations`
  - Body: `Connect your CRM, helpdesk, and internal tools to AI — without rebuilding anything.`
  - Link: `See details →` → `/services/integrations`

**Design tokens:**
- Section bg: `--color-chalk`
- Overline: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Headline: Instrument Serif, `--text-2xl`, 400, `--leading-tight`, `--color-text-primary`
- Cards: `.card` base styles. Padding: `--space-8`. Gap between cards: `--space-6`. 3-column grid.
- Card 1 variant: `.card--featured` with `--border-accent`
- Card number: JetBrains Mono, `--text-xs`, 500, `--color-text-tertiary`, `--tracking-mono`
- Card title: General Sans, `--text-lg`, 500, `--leading-snug`, `--color-text-primary`
- Card body: General Sans, `--text-base`, 400, `--leading-normal`, `--color-text-secondary`
- Card link: `.btn-link` (Ember, underlined)

**Responsive:**
- Desktop (≥1024px): 3-column grid
- Tablet (768–1023px): 3-column maintained but narrower
- Mobile (<768px): Single column stack. Cards get full width. Gap: `--space-4`.

**Animation:** Cards use staggered `reveal` (0ms, 80ms, 160ms delay).

**Transition to next section:** `--space-32` gap. Background shifts to `.section--tinted` (Ember at 4% opacity) for the "How it works" section.

---

### Section 5: How It Works — Process

**Purpose:** Demystify the engagement process. Reduce anxiety about working with an AI services company.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Tinted (Ember at 4% opacity bg)                                │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  OUR PROCESS                  ← overline                            │ │
│  │                                                                      │ │
│  │  From call to production      ← h2, Instrument Serif                │ │
│  │  in 3 weeks                                                          │ │
│  │                                                                      │ │
│  │  64px gap                                                            │ │
│  │                                                                      │ │
│  │  ┌─────────────────────────────────────────────────────────────────┐ │ │
│  │  │                                                                 │ │ │
│  │  │  WEEK 1                    WEEK 2                  WEEK 3       │ │ │
│  │  │  ────────                  ────────                ────────     │ │ │
│  │  │                                                                 │ │ │
│  │  │  Audit & scope             Build & test            Deploy &     │ │ │
│  │  │  ← h4                     ← h4                   monitor       │ │ │
│  │  │                                                    ← h4         │ │ │
│  │  │  We map your tools,        We build the agent      We deploy    │ │ │
│  │  │  your data flows, and      against real data in    to your      │ │ │
│  │  │  the 3 highest-ROI         a sandboxed copy of     production   │ │ │
│  │  │  automations. You get      your environment.       environment  │ │ │
│  │  │  a written spec before     You review, test, and   with         │ │ │
│  │  │  we write a line of        break it before we      monitoring   │ │ │
│  │  │  code.                     deploy.                 and alerts   │ │ │
│  │  │                                                    from day 1.  │ │ │
│  │  │  ● ──────────────── ● ──────────────── ●                       │ │ │
│  │  │  (Ember dots connected by subtle lines)                         │ │ │
│  │  │                                                                 │ │ │
│  │  └─────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `OUR PROCESS`
- Headline: `From call to production in 3 weeks`
- Step 1:
  - Label: `WEEK 1` (JetBrains Mono overline)
  - Title: `Audit & scope`
  - Body: `We map your tools, your data flows, and the 3 highest-ROI automations. You get a written spec before we write a line of code.`
- Step 2:
  - Label: `WEEK 2`
  - Title: `Build & test`
  - Body: `We build the agent against real data in a sandboxed copy of your environment. You review, test, and break it before we deploy.`
- Step 3:
  - Label: `WEEK 3`
  - Title: `Deploy & monitor`
  - Body: `We deploy to your production environment with monitoring and alerts from day 1.`

**Design tokens:**
- Section bg: `oklch(58% 0.18 35 / 0.04)` (`.section--tinted`)
- Overline: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Headline: Instrument Serif, `--text-2xl`, 400, `--leading-tight`
- Step label: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Step title: General Sans, `--text-lg`, 500, `--leading-snug`, `--color-text-primary`
- Step body: General Sans, `--text-base`, 400, `--leading-normal`, `--color-text-secondary`
- 3-column grid. Gap: `--space-8`.
- Timeline dots: 12px circles, `--color-ember`. Connecting line: 2px, `oklch(78% 0.008 75)`.

**Responsive:**
- Desktop: 3-column with horizontal timeline connecting the steps
- Tablet: 3-column maintained, tighter spacing
- Mobile: Single column. Timeline becomes vertical (dots on left, content right). Steps stack with `--space-8` gap.

**Animation:** Steps stagger in: 0ms, 120ms, 240ms. Timeline dots animate after the steps are visible (200ms delay after last step).

**Transition to next section:** `--space-32` gap. Background returns to Chalk.

---

### Section 6: Technical Capabilities — The AI Stack

**Purpose:** Demonstrate technical depth. Separate Perpetual Stack from no-code/low-code competitors. This is the "we're engineers, not a drag-and-drop tool" section.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Light (Chalk bg)                                               │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │                                                                      │ │
│  │  ┌──────────────────────────────┐  THE STACK            ← overline  │ │
│  │  │                              │                                    │ │
│  │  │     TECHNICAL DIAGRAM        │  Under the hood,      ← h2       │ │
│  │  │     (Full dark bg)           │  not under a          │ │
│  │  │                              │  dashboard                        │ │
│  │  │  ┌──────────┐               │                                    │ │
│  │  │  │ Your     │ ──→ ┌──────┐  │  We don't sell you a login         │ │
│  │  │  │ Slack    │     │Agent │  │  to a platform. We write           │ │
│  │  │  └──────────┘     │Engine│  │  production code that runs         │ │
│  │  │                   └──┬───┘  │  in your infrastructure,           │ │
│  │  │  ┌──────────┐       │      │  speaks your APIs, and             │ │
│  │  │  │ Your     │ ←─────┘      │  reports to your existing          │ │
│  │  │  │ CRM      │              │  dashboards.                       │ │
│  │  │  └──────────┘              │                                    │ │
│  │  │                              │  ● GPT-4, Claude, Gemini          │ │
│  │  │  Nodes: mono labels          │  ● LangChain, LlamaIndex          │ │
│  │  │  Lines: Ember for active     │  ● Vector DBs (Pinecone, Weaviate)│ │
│  │  │  paths, gray for secondary   │  ● Your infra (AWS, GCP, Azure)   │ │
│  │  │                              │                                    │ │
│  │  └──────────────────────────────┘  ← tech list in mono              │ │
│  │                                                                      │ │
│  │  55% diagram col                   45% text col                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `THE STACK`
- Headline: `Under the hood, not under a dashboard`
- Body: `We don't sell you a login to a platform. We write production code that runs in your infrastructure, speaks your APIs, and reports to your existing dashboards.`
- Tech list (each on its own line, formatted as inline items):
  - `GPT-4, Claude, Gemini` (model layer)
  - `LangChain, LlamaIndex` (orchestration)
  - `Pinecone, Weaviate` (vector storage)
  - `Your infra: AWS, GCP, Azure` (deployment)
- Diagram: Interactive agent-flow diagram on Soot background showing data moving through the system.

**Design tokens:**
- Section bg: `--color-chalk`
- Diagram container: `--color-soot` bg, `--radius-xl`, `--space-10` padding
- Diagram nodes: `.diagram__node`
- Diagram arrows: `.diagram__arrow`
- Diagram labels: `.diagram__label`
- Overline: standard overline pattern
- Headline: Instrument Serif, `--text-2xl`
- Body: General Sans, `--text-base`, `--color-text-secondary`
- Tech list labels: JetBrains Mono, `--text-sm`, 400, `--color-text-secondary`. Each preceded by a small Ember dot (6px circle).

**Responsive:**
- Desktop: 2-column (55% diagram left, 45% text right)
- Tablet: 2-column maintained, diagram scales
- Mobile: Single column. Text first (overline, headline, body), diagram below at full width.

**Animation:** Diagram nodes fade in with stagger. Connection lines draw in (stroke-dashoffset animation) after nodes are visible. Text side uses standard `reveal`.

**Transition to next section:** `--space-32` gap. Background shifts to Soot (dark) for the stats section.

---

### Section 7: Results — Stats & Metrics (Dark Section)

**Purpose:** Concrete numbers that prove ROI. This is the "is this worth the money?" section.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Dark (Soot bg)                                                 │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  RESULTS                      ← overline, Ember on dark             │ │
│  │                                                                      │ │
│  │  Numbers from production      ← h2, Instrument Serif, Chalk        │ │
│  │                                                                      │ │
│  │  64px gap                                                            │ │
│  │                                                                      │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐               │ │
│  │  │          │ │          │ │          │ │          │               │ │
│  │  │  50+     │ │  12      │ │  4hrs    │ │  98.7%   │               │ │
│  │  │  ← Ember │ │  ← Ember │ │  → 12min │ │  ← Ember │               │ │
│  │  │  agents  │ │  indust- │ │  avg     │ │  uptime  │               │ │
│  │  │  deployed│ │  ries    │ │  ticket  │ │  across  │               │ │
│  │  │          │ │          │ │  response│ │  all      │               │ │
│  │  │  Across  │ │  From    │ │  time    │ │  deployed │               │ │
│  │  │  client  │ │  fintech │ │  reduc-  │ │  agents   │               │ │
│  │  │  orgs    │ │  to      │ │  tion    │ │          │               │ │
│  │  │          │ │  health  │ │          │ │          │               │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘               │ │
│  │                                                                      │ │
│  │  4-column grid, left-aligned stats                                   │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `RESULTS`
- Headline: `Numbers from production`
- Stat 1: `50+` / `agents deployed` / `Across client organizations in 2025`
- Stat 2: `12` / `industries` / `From fintech to healthcare to logistics`
- Stat 3: `4hrs → 12min` / `avg ticket response` / `Median improvement across support automations`
- Stat 4: `98.7%` / `uptime` / `Across all deployed agents, trailing 90 days`

**Design tokens:**
- Section bg: `--color-soot`
- Section border: top and bottom `1px solid oklch(25% 0.005 75)`
- Text: `--color-text-on-dark`
- Overline: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Headline: Instrument Serif, `--text-2xl`, 400, `--leading-tight`, `--color-text-on-dark`
- Stat number: `.stat__number` — Instrument Serif, `--text-3xl`, 400, `--color-ember`, `--leading-tight`
- Stat unit: `.stat__unit` — JetBrains Mono, `--text-sm`, 400, `--color-text-on-dark-secondary`
- Stat label: `.stat__label` — General Sans, `--text-sm`, 400, `--color-text-on-dark-secondary`
- 4-column grid, gap: `--space-8`

**Responsive:**
- Desktop: 4-column
- Tablet: 2×2 grid
- Mobile: Single column stack. Each stat separated by `--border-dark` horizontal rule.

**Animation:** Numbers appear immediately — no counting animation (per anti-slop checklist). Cards stagger with `reveal` (0ms, 80ms, 160ms, 240ms).

**Transition to next section:** `--space-32` gap. Background returns to Chalk.

---

### Section 8: Case Studies / Testimonials

**Purpose:** Social proof with specificity. Show real outcomes, not generic praise.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Light (Chalk bg)                                               │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  CLIENT WORK                  ← overline                            │ │
│  │                                                                      │ │
│  │  What shipped last quarter    ← h2, Instrument Serif                │ │
│  │                                                                      │ │
│  │  64px gap                                                            │ │
│  │                                                                      │ │
│  │  ┌────────────────────────────────────────┐  ┌──────────────────┐   │ │
│  │  │                                        │  │                  │   │ │
│  │  │  FEATURED CASE STUDY                   │  │  CASE STUDY      │   │ │
│  │  │  (card--featured, large)               │  │  (standard card) │   │ │
│  │  │                                        │  │                  │   │ │
│  │  │  FINTECH · SUPPORT AUTOMATION          │  │  HEALTHTECH      │   │ │
│  │  │                                        │  │                  │   │ │
│  │  │  "We replaced 3 full-time support      │  │  Intake form     │   │ │
│  │  │  agents with one AI agent that         │  │  processing      │   │ │
│  │  │  resolves 73% of tickets               │  │  dropped from    │   │ │
│  │  │  autonomously."                        │  │  22 minutes to   │   │ │
│  │  │                                        │  │  90 seconds.     │   │ │
│  │  │  — VP of Operations, Series B          │  │                  │   │ │
│  │  │    fintech startup                     │  │  Read study →    │   │ │
│  │  │                                        │  ├──────────────────┤   │ │
│  │  │  Read the full study →                 │  │                  │   │ │
│  │  │                                        │  │  LOGISTICS       │   │ │
│  │  └────────────────────────────────────────┘  │                  │   │ │
│  │                                               │  Invoice         │   │ │
│  │  60% width                                    │  matching        │   │ │
│  │                                               │  accuracy: 99.2% │   │ │
│  │                                               │                  │   │ │
│  │                                               │  Read study →    │   │ │
│  │                                               └──────────────────┘   │ │
│  │                                               40% width              │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `CLIENT WORK`
- Headline: `What shipped last quarter`
- Featured card:
  - Tag: `FINTECH · SUPPORT AUTOMATION` (JetBrains Mono overline)
  - Quote: `"We replaced 3 full-time support agents with one AI agent that resolves 73% of tickets autonomously."`
  - Attribution: `— VP of Operations, Series B fintech startup`
  - Link: `Read the full study →` → `/work/fintech-support`
- Card 2:
  - Tag: `HEALTHTECH`
  - Summary: `Intake form processing dropped from 22 minutes to 90 seconds.`
  - Link: `Read study →`
- Card 3:
  - Tag: `LOGISTICS`
  - Summary: `Invoice matching accuracy: 99.2%`
  - Link: `Read study →`

**Design tokens:**
- Featured card: `.card--featured`, padding `--space-10`
- Featured quote: Instrument Serif, `--text-xl`, 400 italic, `--leading-snug`, `--color-text-primary`
- Attribution: General Sans, `--text-sm`, 400, `--color-text-secondary`
- Small cards: `.card` base, padding `--space-6`
- Tag on cards: JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember`
- Layout: 60/40 split. Right column has 2 stacked cards with `--space-6` gap.

**Responsive:**
- Desktop: 60/40 bento layout
- Tablet: Same layout, tighter padding
- Mobile: Single column. Featured card first, then small cards stacked below.

**Animation:** Featured card: `reveal` with 0ms delay. Small cards: stagger at 80ms and 160ms.

**Transition to next section:** `--space-32` gap into the final CTA section. Background shifts to tinted.

---

### Section 9: Final CTA

**Purpose:** The closing argument. Convert the reader who has scrolled this far.

**Wireframe (desktop):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SECTION: Tinted (Ember at 4% opacity bg)                                │
│  padding-block: --space-32 (128px)                                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │                                                                      │ │
│  │                  READY TO SHIP                 ← overline, centered │ │
│  │                                                                      │ │
│  │                  Your first agent could         ← h2, centered      │ │
│  │                  be live in 3 weeks                                   │ │
│  │                                                                      │ │
│  │                  We'll audit your stack, find    ← body, centered   │ │
│  │                  the highest-ROI automation,                          │ │
│  │                  and give you a deployment                            │ │
│  │                  plan — on a 15-minute call.                          │ │
│  │                                                                      │ │
│  │                  [Book a 15-minute call]         ← Volt CTA         │ │
│  │                                                                      │ │
│  │                  No pitch deck. No NDAs.         ← caption           │ │
│  │                  Just a technical conversation.                       │ │
│  │                                                                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Content specification:**
- Overline: `READY TO SHIP`
- Headline: `Your first agent could be live in 3 weeks`
- Body: `We'll audit your stack, find the highest-ROI automation, and give you a deployment plan — on a 15-minute call.`
- CTA: `Book a 15-minute call` (Volt button, large variant — padding `--space-4 --space-8`)
- Caption: `No pitch deck. No NDAs. Just a technical conversation.`

**Design tokens:**
- Section bg: `.section--tinted`
- All text: centered (`text-align: center`). This is the ONE exception to the left-align rule — single-purpose conversion sections with short copy.
- Overline: standard overline pattern, `--color-ember`
- Headline: Instrument Serif, `--text-2xl`, `--color-text-primary`
- Body: General Sans, `--text-md`, `--color-text-secondary`, max-width `--width-prose`, `margin-inline: auto`
- CTA: `.btn-primary` with increased padding
- Caption: General Sans, `--text-sm`, `--color-text-tertiary`

**Responsive:**
- All breakpoints: centered single-column. Only padding adjusts.

**Animation:** Entire block fades in as one unit (`reveal`, no stagger).

**Transition to next section:** `--space-32` gap into the footer (Soot bg).

---

### Section 10: Footer

(Defined in Section 1d above. Follows directly after the CTA section.)

---

## 3. INNER PAGE TEMPLATES

### 3a. Services / What We Build — Detail Page

**URL:** `/services/ai-agents` (and similar for workflow, integrations)

**Layout wireframe:**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  SECTION 1: Page Hero (Chalk bg)                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  AI AGENTS                    ← overline                            │ │
│  │                                                                      │ │
│  │  Agents that do the work,     ← h1, Instrument Serif, --text-3xl   │ │
│  │  not just the chat                                                   │ │
│  │                                                                      │ │
│  │  Body text (2–3 sentences)    ← General Sans, --text-md             │ │
│  │                                                                      │ │
│  │  [Book a 15-minute call]      ← Volt CTA                           │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 2: Capabilities Grid (Chalk bg)                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  CAPABILITIES                 ← overline                            │ │
│  │                                                                      │ │
│  │  ┌───────────────────┐  ┌───────────────────┐                       │ │
│  │  │ Capability 1      │  │ Capability 2      │                       │ │
│  │  │ Title + desc      │  │ Title + desc      │                       │ │
│  │  └───────────────────┘  └───────────────────┘                       │ │
│  │  ┌───────────────────┐  ┌───────────────────┐                       │ │
│  │  │ Capability 3      │  │ Capability 4      │                       │ │
│  │  │ Title + desc      │  │ Title + desc      │                       │ │
│  │  └───────────────────┘  └───────────────────┘                       │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 3: Technical Diagram (Soot bg)                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  Full-width architecture diagram showing agent internals             │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 4: Related Case Study (Chalk bg)                                │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  Featured case study card relevant to this service                   │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 5: CTA Section (Tinted bg)                                      │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  Same pattern as homepage final CTA                                  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Unique elements:**
- Capabilities use a 2×2 card grid instead of 3-column. Cards are larger with more descriptive text.
- Technical diagram is full-width, not 55/45 split — it's the centerpiece of the page.
- Related case study directly links the service to a real outcome.

---

### 3b. About / Team

**URL:** `/about`

**Layout wireframe:**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  SECTION 1: Page Hero (Chalk bg)                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  ABOUT US                     ← overline                            │ │
│  │                                                                      │ │
│  │  We're the engineering team   ← h1                                  │ │
│  │  companies call after the                                            │ │
│  │  AI pilot fails                                                      │ │
│  │                                                                      │ │
│  │  2–3 paragraphs about the company mission, why it exists,           │ │
│  │  and what makes the approach different. Prose format.                │ │
│  │  Max-width: --width-prose (640px).                                  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 2: Values / Principles (Tinted bg)                              │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  HOW WE WORK                  ← overline                            │ │
│  │                                                                      │ │
│  │  3 principles displayed as large text blocks:                        │ │
│  │  1. "Ship to production, not to a demo"                              │ │
│  │  2. "Your stack, not ours"                                           │ │
│  │  3. "Measure in hours saved, not features built"                     │ │
│  │                                                                      │ │
│  │  Each: Instrument Serif, --text-xl, with General Sans explanation   │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 3: Team (Chalk bg)                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  THE TEAM                     ← overline                            │ │
│  │                                                                      │ │
│  │  Grid of team member cards (2–3 columns):                           │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │ │
│  │  │ [Photo]     │  │ [Photo]     │  │ [Photo]     │                 │ │
│  │  │ Name        │  │ Name        │  │ Name        │                 │ │
│  │  │ Role        │  │ Role        │  │ Role        │                 │ │
│  │  │ 1-line bio  │  │ 1-line bio  │  │ 1-line bio  │                 │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                 │ │
│  │                                                                      │ │
│  │  Photos: square, --radius-lg, grayscale by default,                 │ │
│  │  color on hover                                                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 4: CTA (Tinted bg)                                             │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Unique elements:**
- Narrative hero (no diagram, no CTA buttons — just copy). The about page sells through story, not action.
- Team photos are grayscale → color on hover (matches the logo bar treatment — everything earns its color).
- Values section uses large serif text as pull quotes, not cards.

---

### 3c. Blog Listing + Post Template

**Blog listing (`/blog`):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  SECTION 1: Page Hero (Chalk bg)                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  BLOG                         ← overline                            │ │
│  │                                                                      │ │
│  │  Dispatches from the stack    ← h1                                  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 2: Featured Post (Chalk bg)                                     │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  ┌────────────────────────────────────────────────────────────────┐  │ │
│  │  │  FEATURED · May 2026                                          │  │ │
│  │  │                                                                │  │ │
│  │  │  Post title (h2, Instrument Serif)                            │  │ │
│  │  │                                                                │  │ │
│  │  │  Excerpt (2 lines, General Sans)                              │  │ │
│  │  │                                                                │  │ │
│  │  │  Read →                                                        │  │ │
│  │  └────────────────────────────────────────────────────────────────┘  │ │
│  │  (card--featured, full width)                                        │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 3: Post Grid (Chalk bg)                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │ │
│  │  │ Post card        │  │ Post card        │  │ Post card        │  │ │
│  │  │                  │  │                  │  │                  │  │ │
│  │  │ Tag · Date       │  │ Tag · Date       │  │ Tag · Date       │  │ │
│  │  │ Title (h3)       │  │ Title (h3)       │  │ Title (h3)       │  │ │
│  │  │ Excerpt          │  │ Excerpt          │  │ Excerpt          │  │ │
│  │  │ Read →           │  │ Read →           │  │ Read →           │  │ │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘  │ │
│  │                                                                      │ │
│  │  3-column grid, repeats                                              │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Blog post template (`/blog/:slug`):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  ARTICLE HEADER (Chalk bg)                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  ← Back to blog              ← ghost button link                    │ │
│  │                                                                      │ │
│  │  ENGINEERING · 8 MIN READ     ← overline                            │ │
│  │                                                                      │ │
│  │  Post title here              ← h1, Instrument Serif, --text-3xl   │ │
│  │                                                                      │ │
│  │  Post subtitle / lede         ← General Sans, --text-md             │ │
│  │                                                                      │ │
│  │  ┌──────┐  Author Name · May 6, 2026                                │ │
│  │  │Avatar│  ← 36px circle                                           │ │
│  │  └──────┘                                                            │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ARTICLE BODY (Chalk bg)                                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  max-width: --width-prose (640px), centered                         │ │
│  │                                                                      │ │
│  │  Body text in General Sans, --text-base, --leading-normal           │ │
│  │  h2 in Instrument Serif, --text-xl                                  │ │
│  │  h3 in General Sans, --text-lg, 500                                 │ │
│  │  Code blocks: JetBrains Mono on Soot bg, --radius-lg               │ │
│  │  Inline code: JetBrains Mono on Paper bg, --radius-sm              │ │
│  │  Block quotes: left border (--border-accent), Instrument Serif      │ │
│  │  Images: full prose width, --radius-lg, caption below               │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  RELATED POSTS (Chalk bg)                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  KEEP READING                 ← overline                            │ │
│  │  2-column grid of post cards                                        │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  CTA SECTION (Tinted bg)                                                 │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Unique elements:**
- Blog post uses `--width-prose` (640px) for the body, narrower than other pages.
- Code blocks get the full diagram treatment (Soot bg, mono, rounded).
- Reading time shown in overline next to the tag.

---

### 3d. Contact / Book a Call

**URL:** `/contact`

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  SECTION 1: Contact Hero (Chalk bg)                                      │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │                                                                      │ │
│  │  ┌────────────────────────┐  ┌──────────────────────────────────┐   │ │
│  │  │                        │  │                                  │   │ │
│  │  │  BOOK A CALL           │  │  FORM / CALENDLY EMBED          │   │ │
│  │  │  ← overline            │  │                                  │   │ │
│  │  │                        │  │  Name  [____________]            │   │ │
│  │  │  Let's talk about      │  │                                  │   │ │
│  │  │  your stack            │  │  Email [____________]            │   │ │
│  │  │  ← h1                 │  │                                  │   │ │
│  │  │                        │  │  Company [__________]            │   │ │
│  │  │  15 minutes. No pitch  │  │                                  │   │ │
│  │  │  deck. We'll look at   │  │  What do you want to            │   │ │
│  │  │  your tools, find the  │  │  automate?                      │   │ │
│  │  │  bottleneck, and tell  │  │  [________________________]     │   │ │
│  │  │  you if we can help.   │  │  [________________________]     │   │ │
│  │  │                        │  │                                  │   │ │
│  │  │  ── Or email us ──     │  │  [Book the call]  ← Volt btn   │   │ │
│  │  │  hello@perpetual       │  │                                  │   │ │
│  │  │  stack.com             │  │                                  │   │ │
│  │  │                        │  │                                  │   │ │
│  │  └────────────────────────┘  └──────────────────────────────────┘   │ │
│  │  45% text col                 55% form col                          │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Unique elements:**
- The contact page is a single section — no scrolling journey. Get in, convert, done.
- Form inputs use Paper bg, `--border-default`, `--radius-md`. Focus state: `--border-accent`.
- Optional Calendly embed instead of custom form (if client prefers).
- Email address provided as fallback for people who don't do forms.

**Form fields:**
- Name: text input, required
- Email: email input, required
- Company: text input, optional
- "What do you want to automate?": textarea, optional, 3 rows
- Submit: `Book the call` (Volt button)

---

### 3e. Case Study Template

**URL:** `/work/:slug`

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                                   │
│                                                                          │
│  SECTION 1: Case Hero (Chalk bg)                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  ← Back to work              ← ghost button link                    │ │
│  │                                                                      │ │
│  │  FINTECH · SUPPORT AUTOMATION ← overline                            │ │
│  │                                                                      │ │
│  │  73% of tickets resolved      ← h1                                  │ │
│  │  without human review                                                │ │
│  │                                                                      │ │
│  │  Summary paragraph            ← General Sans, --text-md             │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 2: Key Metrics (Soot bg)                                        │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  3–4 stats in a row (same pattern as homepage stats section)        │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 3: The Challenge (Chalk bg)                                     │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  THE CHALLENGE                ← overline                            │ │
│  │  Prose content, max-width: --width-prose                            │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 4: The Solution (Chalk bg)                                      │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  WHAT WE BUILT                ← overline                            │ │
│  │  Prose content + technical diagram                                   │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 5: Results (Chalk bg)                                           │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  THE RESULTS                  ← overline                            │ │
│  │  Prose content with inline stats                                    │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 6: Testimonial Quote (Tinted bg)                                │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  Pull quote from client, Instrument Serif italic                    │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  SECTION 7: CTA (Tinted bg)                                             │
│                                                                          │
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

**Unique elements:**
- Headline is the key result, not the client name — leads with the outcome.
- Dark stats band creates a visual break between the hero and the narrative.
- Case study body uses `--width-prose` (640px) for readability.
- Technical diagram shows the specific architecture built for this client.

---

## 4. COMPONENT INVENTORY

### 4a. Navigation Components

| Component | Tokens |
|---|---|
| `nav` | Fixed, z-100, Chalk/85% bg, blur(12px), `--space-4`/`--space-6` padding |
| `nav--scrolled` | `--space-3` padding, hairline bottom border |
| `nav__logo` | Concept A mark, 28px height, `--color-ember` |
| `nav__link` | General Sans, `--text-sm`, 500, `--color-text-secondary` |
| `nav__link--active` | `--color-text-primary` |
| `nav__cta` | `.btn-primary` (Volt) |
| `nav__dropdown` | Chalk bg, `--shadow-lg`, `--radius-lg`, `--space-6` padding |
| `nav__hamburger` | 24px, 3 bars, `--color-graphite`, 44×44 touch target |
| `nav__mobile-panel` | 75vw, max 320px, slide from right, `--shadow-lg` |

### 4b. Hero Components

| Component | Tokens |
|---|---|
| `hero` | `--space-40` top padding, `--space-32` bottom, left-aligned |
| `hero__overline` | JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-ember` |
| `hero__headline` | Instrument Serif, `--text-hero`, 400, `--leading-tight`, `--tracking-tight`, max-width 16ch |
| `hero__body` | General Sans, `--text-md`, 400, `--leading-normal`, `--color-text-secondary`, max-width `--width-prose` |
| `hero__cta-group` | Flex, `--space-4` gap, flex-wrap |
| `page-hero` | Variant for inner pages: `--text-3xl` headline, no diagram column |

### 4c. Content Blocks

| Component | Tokens |
|---|---|
| `section--light` | `--color-chalk` bg, `--space-32` padding-block |
| `section--dark` | `--color-soot` bg, `--color-text-on-dark`, `--space-32` padding-block |
| `section--tinted` | Ember/4% opacity bg, `--space-32` padding-block |
| `section__header` | Overline + h2 + optional body. `--space-8` gap to content below |
| `text-image-block` | 2-column (55/45 or 60/40). `--space-16` gap. |
| `text-diagram-block` | 2-column. Diagram side has `--color-soot` container, `--radius-xl` |
| `stats-grid` | 4-column desktop, 2×2 tablet, 1-column mobile. Dark section only. |
| `process-steps` | 3-column with timeline. Tinted section. |
| `prose-block` | max-width `--width-prose`, centered. For about, blog, case study body. |

### 4d. Card Variants

| Component | Tokens |
|---|---|
| `.card` | Chalk bg, `--border-default`, `--radius-lg`, `--space-8` padding, `--shadow-sm` |
| `.card:hover` | `--shadow-md`, translateY(-2px), `--duration-normal` |
| `.card--featured` | `--border-accent`, `--shadow-md`, Ember top bar via `::before` |
| `.card--dark` | Soot bg, `--border-dark`, `--color-text-on-dark`, `--shadow-dark-sm` |
| `.card--service` | `.card` + number label (mono), title (h3), body, link button |
| `.card--post` | `.card` + tag/date (mono), title (h3), excerpt, link button |
| `.card--case-study` | `.card` + industry tag (mono), key stat (Ember), summary, link button |
| `.card--team` | `.card` + photo (square, `--radius-lg`, grayscale), name, role, 1-line bio |

### 4e. CTA Blocks

| Component | Tokens |
|---|---|
| `cta-section` | `.section--tinted`, centered text, overline + h2 + body + Volt CTA + caption |
| `cta-inline` | Ember-bordered bar within a section. Overline + headline + Volt CTA, horizontal layout. |

### 4f. Form Elements

| Component | Tokens |
|---|---|
| `input` | Paper bg, `--border-default`, `--radius-md`, `--space-3` padding, General Sans `--text-base` |
| `input:focus` | `--border-accent`, outline: 2px `--color-ember`, offset 2px |
| `input::placeholder` | `--color-text-tertiary` |
| `textarea` | Same as input, min-height 96px |
| `input--error` | `--color-error` border, error message below in `--text-sm`, `--color-error` |
| `label` | General Sans, `--text-sm`, 500, `--color-text-primary`, `--space-2` margin-bottom |

### 4g. Blog Components

| Component | Tokens |
|---|---|
| `post-card` | `.card--post` variant (defined above) |
| `post-header` | Overline (tag + read time), h1 (`--text-3xl`), lede (`--text-md`), author row |
| `author-row` | 36px avatar circle, name (General Sans, 500), date (`--text-sm`, `--color-text-secondary`) |
| `article-body` | `--width-prose`, h2 (Instrument Serif), h3 (General Sans 500), code blocks (Soot), blockquotes (Ember left border) |
| `related-posts` | 2-column grid of `post-card` |

### 4h. Footer Elements

| Component | Tokens |
|---|---|
| `footer` | Soot bg, `--space-20` top, `--space-12` bottom |
| `footer__logo` | Concept A mark, 24px, Chalk color |
| `footer__column-title` | JetBrains Mono, `--text-xs`, 500, uppercase, `--tracking-mono`, `--color-text-on-dark-secondary` |
| `footer__link` | General Sans, `--text-sm`, 400, `--color-text-on-dark-secondary`. Hover: `--color-text-on-dark` |
| `footer__newsletter` | Input (dark variant) + Volt subscribe button |
| `footer__copyright` | General Sans, `--text-xs`, `--color-text-on-dark-secondary`, top border `--border-dark` |

### 4i. Utility Components

| Component | Tokens |
|---|---|
| `badge` | JetBrains Mono, `--text-xs`, 500, `--tracking-mono`, uppercase. Paper bg, `--radius-full`, `--space-1`/`--space-3` padding. |
| `tag` | Same as badge but with Ember text color for active tags. |
| `tooltip` | Soot bg, Chalk text, `--text-xs`, `--radius-sm`, `--shadow-dark-sm`, max-width 200px |
| `toast` | Chalk bg (light) or Soot bg (dark), `--border-default`, `--radius-md`, `--shadow-md`. Icon + text + dismiss. `aria-live="polite"`. |
| `modal` | Chalk bg, `--radius-xl`, `--shadow-lg`, max-width 560px, centered. Soot overlay at 60% opacity. Focus trap. |
| `spinner` | 16px circle, 2px Graphite border, transparent top border, `spin` animation 600ms linear infinite |
| `divider` | `--border-subtle` full width. `--space-8` margin-block. |

---

## 5. RESPONSIVE STRATEGY

### 5a. Breakpoints

| Token | Value | What Changes |
|---|---|---|
| `--bp-sm` | 640px | Single-column stacks, mobile spacing multiplier (×0.625) |
| `--bp-md` | 768px | Nav transforms to hamburger, 2-column grids reduce |
| `--bp-lg` | 1024px | 3-column → 2-column or full width, 2-column splits stack |
| `--bp-xl` | 1280px | Full desktop layout activates |
| `--bp-2xl` | 1536px | Max content width reached, extra margin on sides |

### 5b. Typography Adjustments

The `clamp()` values in the type scale handle this automatically. No manual overrides needed at breakpoints. The type scale smoothly scales between 375px and 1440px viewports:

- `--text-hero`: 44px at 375px → 80px at 1440px
- `--text-3xl`: 36px → 56px
- `--text-2xl`: 30px → 44px
- `--text-base`: 15px → 17px

### 5c. Spacing Adjustments

```css
@media (max-width: 640px) {
  /* Section spacing reduces by 37.5% */
  .section + .section { margin-top: var(--space-20); } /* 128 → 80px */
  
  /* Internal padding reduces */
  .section { padding-inline: var(--space-4); } /* 24 → 16px */
}
```

### 5d. Navigation Transformation

- **≥1024px:** Full horizontal nav with all links visible.
- **768–1023px:** Links compress spacing but remain visible. CTA stays in nav.
- **<768px:** Hamburger icon. Links move to slide-in panel. CTA moves to bottom of panel as full-width button.

### 5e. Grid Adjustments

| Section | Desktop (≥1024px) | Tablet (768–1023px) | Mobile (<768px) |
|---|---|---|---|
| Services cards | 3-column | 3-column (tighter) | 1-column |
| Process steps | 3-column + timeline | 3-column (tighter) | 1-column, vertical timeline |
| Stats grid | 4-column | 2×2 | 1-column |
| Case study cards | Bento (60/40) | Bento (60/40) | 1-column |
| Blog posts | 3-column | 2-column | 1-column |
| Footer | 4-column | 2×2 | 1-column |

### 5f. Image Handling

- **Format:** WebP with JPEG fallback via `<picture>` element.
- **Lazy loading:** All images below the fold use `loading="lazy"`.
- **Priority:** Hero diagram and above-fold images use `fetchpriority="high"`.
- **Srcset:** Provide 1x and 2x variants. Standard widths: 640px, 960px, 1280px.
- **Team photos:** 200×200px at 1x, 400×400px at 2x. Square crop. `--radius-lg`.
- **Blog images:** Full prose width (640px at 1x, 1280px at 2x). `--radius-lg`.

### 5g. Touch Target Adjustments

All interactive elements meet 44×44px minimum on mobile. Specific adjustments:
- Nav links: `padding: 12px 16px` ensures adequate tap area.
- Card links: Entire card becomes tappable (anchor wraps the card).
- Footer links: `padding-block: 8px` added for mobile.
- Close buttons (mobile menu, modals): 44×44px touch target with padding.

---

## 6. INTERACTION MAP

### 6a. Navigation

| Interaction | Behavior |
|---|---|
| Page scroll (>50px) | Nav compresses padding (`--space-4` → `--space-3`), adds hairline border. `200ms --ease-in-out`. |
| Services link hover | Dropdown appears with `--duration-normal`, `--ease-out`. Opens below the link. |
| Services dropdown dismiss | Click outside or press Escape. `--duration-normal`, `--ease-in`. |
| Mobile hamburger tap | Panel slides in from right. `300ms cubic-bezier(0.16, 1, 0.3, 1)`. Overlay appears behind at 40% opacity. |
| Mobile panel dismiss | Tap overlay, tap X button, or swipe right. Panel slides out. |
| Nav link hover | Color transitions from `--color-text-secondary` to `--color-text-primary`. `--duration-fast`. |
| Nav CTA hover | Volt → Volt hover. `translateY(-1px)`. `--duration-fast`. |

### 6b. Hero

| Interaction | Behavior |
|---|---|
| Page load | Staggered reveal: overline (0ms) → headline (80ms) → body (160ms) → CTA (240ms) → diagram (320ms). `--duration-reveal`, `--ease-out`. |
| Primary CTA hover | Volt → Volt hover, `translateY(-1px)`. |
| Secondary CTA hover | Transparent bg → Ember bg, text becomes Chalk. `--duration-fast`. |
| Diagram (if interactive) | Nodes highlight on hover with `--color-ember` border glow. Connection lines pulse subtly (stroke-dashoffset). Respects `prefers-reduced-motion`. |

### 6c. Cards

| Interaction | Behavior |
|---|---|
| Card hover | `translateY(-2px)`, shadow escalates (`--shadow-sm` → `--shadow-md`). `--duration-normal`, `--ease-out`. |
| Card focus | `2px solid --color-ember` outline, `2px` offset. |
| Card link hover | Ember → Ember-dim color. Underline offset increases by 1px. |
| Card click | Navigates to linked page. Entire card is clickable (anchor wrapper). |

### 6d. Technical Diagrams

| Interaction | Behavior |
|---|---|
| Scroll into view | Nodes fade in with stagger. Connection lines draw in via `stroke-dashoffset`. `--duration-slow`. |
| Node hover | Border color → `--color-ember`, subtle box-shadow glow. Label text brightens. |
| Reduced motion | All animations disabled. Static diagram shown immediately. |

### 6e. Forms (Contact Page)

| Interaction | Behavior |
|---|---|
| Input focus | Border color → `--color-ember`. Outline: `2px solid --color-ember`, offset `2px`. Label stays static (no floating label). |
| Input blur (invalid) | Border color → `--color-error`. Error message fades in below input (`--duration-normal`). |
| Input blur (valid) | Border returns to `--border-default`. |
| Form submit | Button enters loading state (`.btn-primary--loading`). Spinner replaces text. `pointer-events: none`. |
| Submit success | Button text changes to "Booked ✓" for 2 seconds. Toast appears confirming the booking. Redirect to confirmation view. |
| Submit error | Toast with error message (`aria-live="assertive"`). Button returns to default state. |

### 6f. Scroll Animations

| Section | Animation |
|---|---|
| Social proof logos | All logos fade in together. `threshold: 0.15`. |
| Service cards | Staggered reveal (0, 80ms, 160ms). `threshold: 0.15`. |
| Process steps | Staggered reveal (0, 120ms, 240ms). Timeline dots animate last. |
| Tech diagram | Nodes stagger, then lines draw. `threshold: 0.2`. |
| Stats | Staggered reveal (0, 80ms, 160ms, 240ms). No counter animation. |
| Case study cards | Staggered reveal. |
| Final CTA | Single reveal, no stagger. |

All scroll animations use `IntersectionObserver` with `threshold: 0.15` (unless noted). Elements get `.reveal` → `.reveal--visible` class toggle. Animations fire once only (observer disconnects after triggering).

### 6g. Links

| Type | Behavior |
|---|---|
| Internal text link | Ember color, underline. Hover: Ember-dim, underline-offset increases. `--duration-fast`. |
| External link | Same as internal + small arrow icon (↗) after text, `0.75em` size. Opens in new tab (`target="_blank"`, `rel="noopener"`). |
| Footer link | `--color-text-on-dark-secondary`. Hover: `--color-text-on-dark`. No underline by default, underline on hover. |
| Breadcrumb / back link | Ghost button style. `← Back to [section]`. Hover: Paper-tint background. |

---

## 7. SEO & PERFORMANCE SPECIFICATIONS

### 7a. Semantic HTML Structure

**Every page:**

```html
<body>
  <header role="banner">
    <nav aria-label="Main navigation">...</nav>
  </header>
  
  <main id="main-content">
    <section aria-labelledby="section-id">...</section>
    <!-- Repeat for each content section -->
  </main>
  
  <footer role="contentinfo">...</footer>
</body>
```

**Heading hierarchy per page:**

| Page | h1 | h2s | h3s |
|---|---|---|---|
| Homepage | Hero headline | Section headlines (services, process, stats, case studies, CTA) | Card titles, step titles |
| Services detail | Service name headline | "Capabilities", "Architecture", case study title | Individual capability titles |
| About | About headline | "How We Work", "The Team" | Principle titles, team member names |
| Blog listing | "Dispatches from the stack" | Featured post title | Post card titles |
| Blog post | Post title | Post section headings | Post sub-headings |
| Contact | "Let's talk about your stack" | — | — |
| Case study | Key result headline | "The Challenge", "What We Built", "The Results" | — |

### 7b. OpenGraph & Meta Tags

**Homepage:**
```html
<title>Perpetual Stack — AI Automation That Ships to Production</title>
<meta name="description" content="We build autonomous AI agents that handle support tickets, qualify leads, and process documents — deployed in your existing tools in 3 weeks.">
<meta property="og:title" content="Perpetual Stack — AI Automation That Ships to Production">
<meta property="og:description" content="Autonomous AI agents deployed in your existing stack. From call to production in 3 weeks.">
<meta property="og:image" content="/og/homepage.png">  <!-- 1200×630px -->
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

**Blog posts:**
```html
<title>{Post Title} — Perpetual Stack Blog</title>
<meta property="og:type" content="article">
<meta property="article:published_time" content="{ISO date}">
<meta property="article:author" content="{Author name}">
```

**All pages:** Include canonical URL, `lang="en"`, viewport meta.

### 7c. Image Optimization

- **Format priority:** WebP → JPEG fallback. Use `<picture>` element.
- **Compression:** Target 80% quality for WebP, 85% for JPEG.
- **Lazy loading:** `loading="lazy"` for everything below the fold.
- **Priority hints:** `fetchpriority="high"` on hero diagram/image, LCP candidate.
- **Dimensions:** Always include `width` and `height` attributes to prevent CLS.
- **OG images:** Pre-generated at 1200×630px, optimized PNG.

### 7d. Font Loading Strategy

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/InstrumentSerif-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/GeneralSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/GeneralSans-Medium.woff2" as="font" type="font/woff2" crossorigin>
```

```css
@font-face {
  font-family: "Instrument Serif";
  src: url("/fonts/InstrumentSerif-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "General Sans";
  src: url("/fonts/GeneralSans-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Additional weights follow the same pattern */
```

**Strategy:**
- Preload Regular weights of Instrument Serif and General Sans (the most-used faces).
- All other weights (General Sans Medium, Semibold; JetBrains Mono) load normally with `font-display: swap`.
- Subset fonts to Latin characters if full Unicode isn't needed. Target <40KB per file.
- JetBrains Mono can load from Google Fonts CDN (already globally cached).

### 7e. Core Web Vitals Targets

| Metric | Target | Strategy |
|---|---|---|
| LCP | <2.5s | Preload hero fonts and diagram image. Inline critical CSS. Server-side render above the fold. |
| CLS | <0.1 | Fixed dimensions on all images. Font-display: swap with size-matched fallbacks. Reserved space for nav. |
| INP | <200ms | No heavy JS on main thread. Scroll observers use passive listeners. Debounce scroll handler for nav. |

### 7f. Structured Data (JSON-LD)

**Homepage — Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Perpetual Stack",
  "url": "https://perpetualstack.com",
  "logo": "https://perpetualstack.com/logo.png",
  "description": "AI automation services — autonomous agents deployed in your existing stack.",
  "sameAs": ["https://github.com/perpetualstack", "https://linkedin.com/company/perpetualstack"]
}
```

**Blog posts — Article:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "author": { "@type": "Person", "name": "{author}" },
  "datePublished": "{ISO date}",
  "publisher": { "@type": "Organization", "name": "Perpetual Stack" }
}
```

**Services — Service:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Agent Development",
  "provider": { "@type": "Organization", "name": "Perpetual Stack" },
  "description": "Custom autonomous AI agents deployed in your infrastructure."
}
```

**Contact — ContactPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Book a Call — Perpetual Stack",
  "url": "https://perpetualstack.com/contact"
}
```

---

*Every design decision in this document references tokens from DESIGN.md v1.0. If a decision isn't covered here, default to the nearest pattern in the guidelines. When in doubt: less color, less motion, less type variation, more whitespace.*
