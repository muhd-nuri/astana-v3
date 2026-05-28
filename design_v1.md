# Astana POS — Design System & Style Guide

## Design Vision

**Three-word brand statement:** *Unlimited. Cloud. Yours.*

**Aesthetic thesis (one sentence):**
Astana POS looks and feels like a modern SaaS product page from the Linear / Posthog / Tabby Cloud school — disciplined typography, calm green-on-warm-white palette, dashboard moments treated as the hero — while sharing enough green DNA with MCBIZ that the two sites read as siblings inside one Astana Group ecosystem.

**Signature element:**
The **numbers-led hero** — three oversized stats stacked at the top ("7,000+ kedai · 177 negara · 0 yuran tahunan"), each one animating up on page load, with a floating dashboard cutaway off to the right. The numbers ARE the hero, the dashboard is the proof.

**Atmosphere layer (mandatory, global):**
A **subtle dotted grid** rendered as a fixed background — small dots (~1px), ~24px spacing, ~5% opacity over the cream page background. Technical, calm, product-software-y. Distinct from MCBIZ's gradient-mesh atmosphere; clearly aligned with the Linear/Posthog SaaS-product aesthetic.

**Voice & copy tone:**
Confident, plain-spoken, slightly understated. Astana POS doesn't shout. Numbers do the persuading; the prose stays clean and direct. BM-primary, with EN as a faithful translation (not a louder version).

---

## Anti-Patterns — Do Not Ship

**Do not use:**
- Inter, Inter Tight, Roboto, Arial, Plus Jakarta Sans, or Space Grotesk anywhere on the site
- **Syne** as display font (MCBIZ uses it — collision risk, weakens family-resemblance strategy by being too literal)
- Generic SaaS blue accents — this is a green-family brand, not a CRM-blue brand
- Purple-on-white gradients ("AI startup default")
- Three-equal-column feature tile grids (Salesplay's failure pattern)
- Cartoon/3D blob illustrations of laptops with checkmarks
- Pure black (`#000`) or pure white (`#fff`) — use near-black and warm cream
- Hover-scale 1.05 on every card
- Heavy gradients across multiple sections (that's MCBIZ's territory — Astana POS goes flat)
- Floating "AI" badges or sparkle icons
- Stock photo of a smiling cashier holding a tablet at 45°

**Do use:**
- One dominant green hue with disciplined hierarchy (DEFAULT, mid, light, pale)
- Cream page background — warm, not blue-cold
- Cabinet Grotesk for display, General Sans for body (Fontshare, free for commercial use)
- Bento layouts (not equal grids) for feature sections
- Real dashboard screenshots (or polished placeholder dashboard mockups) — never illustrations
- Tabular figures for any number that animates or sits in a stat block

---

## Color Palette

**Hue strategy:** family resemblance to MCBIZ through the green family, divergence through *application*. MCBIZ uses emerald + dark gradients. Astana POS uses a slightly cooler, more muted emerald applied flat, with warm cream as the dominant page background. The MCBIZ green and the Astana POS green should feel like the same family at the same dinner table — not the same person.

| Token | Value (oklch + hex fallback) | Usage |
|---|---|---|
| `--color-brand-primary` | `oklch(0.52 0.16 158)` ≈ `#0F8C5C` | Primary CTAs, headline accents, brand mark |
| `--color-brand-mid` | `oklch(0.62 0.14 158)` ≈ `#26A876` | Hover states, secondary chips |
| `--color-brand-light` | `oklch(0.78 0.10 158)` ≈ `#75CBA9` | Highlights, focused borders |
| `--color-brand-pale` | `oklch(0.94 0.04 158)` ≈ `#DDF2E7` | Tag/badge backgrounds, section tints |
| `--color-brand-deep` | `oklch(0.32 0.10 165)` ≈ `#0B4A35` | Footer background, dark accent moments |
| `--color-ink` | `oklch(0.20 0.02 250)` ≈ `#1A1F2B` | Body text, headlines (warm near-black) |
| `--color-ink-soft` | `oklch(0.42 0.02 250)` ≈ `#5A6273` | Secondary text, paragraph body |
| `--color-text-muted` | `oklch(0.62 0.02 250)` ≈ `#8E93A4` | Captions, labels, micro-copy |
| `--color-page-bg` | `oklch(0.98 0.005 80)` ≈ `#FAF9F5` | Page background (warm cream, not white) |
| `--color-surface` | `oklch(1 0 0)` ≈ `#FFFFFF` | Cards, dashboard mockup backgrounds |
| `--color-surface-tint` | `oklch(0.96 0.008 80)` ≈ `#F2EFE7` | Alternating section background |
| `--color-border-hairline` | `oklch(0.90 0.005 250)` ≈ `#E0E2E5` | Hairline dividers, card borders |

**Color rules:**
- **Dominant + accent** discipline. Brand green is the only chromatic colour in the system. All neutrals are derived from the same warm-cool spine.
- **Page bg is warm cream**, never pure white. This is the single biggest visual differentiator from generic blue-tinted SaaS sites.
- **Footer is `--color-brand-deep`** (deep forest green) with `--color-page-bg` text. No gradient — flat colour.
- **No gradients in section backgrounds.** Reserve gradient (if any) for one specific moment: the CTA button hover and the dashboard mockup glow halo. MCBIZ owns the gradient territory; Astana POS owns the flat.

---

## Typography

**Display font:** **Cabinet Grotesk** (Fontshare — free for commercial use)
**Body font:** **General Sans** (Fontshare — free for commercial use)

**Why this pairing:**
Cabinet Grotesk is a geometric humanist sans with a confident "product brand" character — it shows up well on the oversized stat numbers in the hero and on section headings without feeling generic (Inter, Plus Jakarta) or pretentious (Cormorant, Newsreader). General Sans is its body companion from the same foundry — tuned for screen readability at small sizes, excellent Latin Extended coverage for BM diacritics, and visual harmony with Cabinet Grotesk. Neither has been used in any Mat Coding project in the last 90 days.

**Weights to load:**
- Cabinet Grotesk: 500 (Medium), 700 (Bold) — only these two
- General Sans: 400 (Regular), 500 (Medium), 600 (Semibold)

**Loading approach:** `next/font/local` with Fontshare WOFF2 files self-hosted in `public/fonts/`. Cabinet Grotesk gets `preload: true` (it's above-the-fold). General Sans uses `display: swap` without preload.

**`next/font` snippet for `app/layout.tsx`:**

```tsx
import localFont from 'next/font/local';

const cabinetGrotesk = localFont({
  src: [
    { path: '../public/fonts/CabinetGrotesk-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/CabinetGrotesk-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const generalSans = localFont({
  src: [
    { path: '../public/fonts/GeneralSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

// Apply to <html>:
// <html lang="ms" className={`${cabinetGrotesk.variable} ${generalSans.variable}`}>
```

Download Fontshare WOFF2s at: `https://www.fontshare.com/fonts/cabinet-grotesk` and `https://www.fontshare.com/fonts/general-sans`.

**Type scale:**

| Token | Size / Line / Weight / Family | Use |
|---|---|---|
| `text-hero-stat` | clamp(4rem, 12vw, 9rem) / 0.9 / 700 / display | Hero stat numbers ("7,000+") |
| `text-display-xl` | clamp(2.5rem, 6vw, 4.5rem) / 1.05 / 700 / display | H1 section heroes (inner pages) |
| `text-display-lg` | clamp(2rem, 4vw, 3.25rem) / 1.1 / 700 / display | Section H2 |
| `text-display-md` | 2rem / 1.15 / 500 / display | Subsection headings |
| `text-display-sm` | 1.5rem / 1.2 / 500 / display | Card headings |
| `text-body-lg` | 1.125rem / 1.6 / 400 / body | Hero subhead, intro paragraphs |
| `text-body` | 1rem / 1.65 / 400 / body | Default paragraph |
| `text-body-sm` | 0.875rem / 1.55 / 400 / body | Secondary copy |
| `text-eyebrow` | 0.75rem / 1.4 / 600 / body / 0.12em letter-spacing / uppercase | Section eyebrows ("MENGAPA ASTANA POS") |
| `text-caption` | 0.75rem / 1.4 / 400 / body | Captions, fine print |

**Typography rules:**
- All headings use Cabinet Grotesk (`font-display`).
- All body, paragraph, button, and form text uses General Sans (`font-body`).
- Hero stat numbers use **tabular figures**: `font-variant-numeric: tabular-nums;` so digits align when animating.
- No all-uppercase body copy. Only `text-eyebrow` uses uppercase.
- Letter-spacing: tighten display sizes by `-0.02em` (subtle), leave body at default.

---

## Spacing System

| Token | Value | Usage |
|---|---|---|
| `--space-3xs` | 0.25rem | Inline gap between icon + text |
| `--space-2xs` | 0.5rem | Form input padding-y |
| `--space-xs` | 0.75rem | Card internal gaps |
| `--space-sm` | 1rem | Default content gap |
| `--space-md` | 1.5rem | Section internal blocks |
| `--space-lg` | 2.5rem | Between sub-sections |
| `--space-xl` | 4rem | Between cards in a grid |
| `--space-2xl` | 6rem | Default desktop section padding-y |
| `--space-3xl` | 9rem | Hero section padding-y |
| `--space-section-mobile` | 4rem | Section padding-y on mobile |
| `--space-section` | 6rem | Section padding-y on tablet+ |
| `--space-section-lg` | 9rem | Reserved for hero only |

Use `clamp()` in section components to bridge mobile → desktop without intermediate breakpoints, e.g. `py-[clamp(4rem,8vw,6rem)]`.

---

## Layout Grid Choice

**Chosen: 12-column with off-grid breaks.**

- Standard sections live inside `max-w-[1280px] mx-auto px-6 md:px-10` with a 12-column conceptual grid (use Tailwind's `grid-cols-12` for content layout).
- One or two sections per page intentionally break full-width to the viewport edge for visual rhythm — the industry strip (horizontally scrollable on mobile, full-bleed on desktop) and the dashboard mockup hero (image bleeds beyond the right container edge into the viewport edge).
- Hero is full-viewport-width container with the stat block left-aligned and the dashboard floating with intentional off-grid offset (translated 10% to the right of its column on desktop).

This is the default Mat Coding bespoke choice — the right answer for most SaaS-style sites that want visual variety without going Magazine 8-col asymmetric (overkill here) or full Broken Grid (off-brand for a trust-and-subscribe pitch).

---

## Component Design Tokens

### Navbar

**Variant:** Sticky on scroll with a subtle hairline border-bottom that *appears* (transitions in) only after scroll > 20px. Above scroll threshold, the nav is borderless and the page-bg dotted grid shows through.

**Layout:**
- Left: logo (Astana POS wordmark in Cabinet Grotesk Bold)
- Centre: nav links (Features · Industries · Pricing · About · Blog · Contact)
- Right: language toggle (BM/EN, two-character chips, active state filled with `--color-brand-primary`), then primary CTA "Hubungi WhatsApp" (button-primary style)

**Mobile:** hamburger right side, slide-down sheet (shadcn `Sheet`) with stacked links and the CTA at the bottom.

**Twist (per skill requirement):** the **language toggle is the most prominent right-side element** before the CTA — it tells the audience this is a Malaysian product immediately. This is the navbar twist that signals "made for you" to BM-primary users in the first 100ms.

### Buttons

**Primary (`btn-primary`):**
- Background: `--color-brand-primary` solid (no gradient — that's MCBIZ's move)
- Text: `--color-page-bg` (warm cream, not pure white — feels softer, less SaaS-default)
- Padding: `px-6 py-3`
- Border-radius: `rounded-full` (pill) — adds friendliness, signals consumer SaaS not enterprise
- Hover: background shifts to `--color-brand-mid`, with a 1px white inner ring fading in (`box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15)`)
- Active: `translateY(1px)` for press feedback
- Icon: optional `ArrowRight` from Lucide, 16px, 6px gap

**Secondary (`btn-secondary`):**
- Background: transparent
- Text: `--color-ink`
- Border: 1px solid `--color-border-hairline`
- Padding: `px-6 py-3`
- Border-radius: `rounded-full`
- Hover: border becomes `--color-brand-primary`, text becomes `--color-brand-primary`

**Ghost (`btn-ghost`):**
- Background: transparent, no border
- Text: `--color-ink`
- Hover: `--color-brand-primary` text colour, no background change

### Cards

**Variant for feature/USP grid:** **Hairline-divider card** (no card chrome, just a top hairline + generous padding).

Specifically:
- No rounded corners, no shadow, no border-radius
- 1px top border in `--color-border-hairline`
- Generous padding (`pt-10 pb-8 pr-6`)
- Eyebrow number ("01", "02") in `text-eyebrow` at top
- Heading in `text-display-sm`, body in `text-body-sm`
- Hover: top border becomes 2px and shifts to `--color-brand-primary` over 0.4s ease-out, no movement, no scale

This breaks the "rounded card with icon" SaaS default and gives a more editorial/product-document feel that pairs with the Linear-style atmosphere.

### Footer

**Treatment:** Deep brand (`--color-brand-deep`) background with `--color-page-bg` text and dotted-grid atmosphere intensified to ~8% opacity over the dark.

**Twist:** Oversized brand wordmark fills the height of the footer at the right edge (`text-[clamp(6rem,14vw,12rem)]` Cabinet Grotesk Bold, set to `--color-brand-mid` with low opacity ~0.15, decorative). The functional footer columns sit left-aligned inside the same container, scaled normally. This delivers a "brand statement footer" without spending bandwidth on a literal manifesto block.

**Sibling-brand acknowledgement:**
At the very bottom, above the copyright line, a small horizontal pill: *"Sebahagian daripada Astana Group · Lihat juga: MCBIZ →"* / *"Part of Astana Group · See also: MCBIZ →"* linking to mcbiz.astanabiz.com. This is the visual handshake between siblings.

---

## Texture & Visual Atmosphere

**Implementation: subtle dotted grid (mandatory, global)**

Rendered as an SVG pattern fixed to the viewport, sitting behind all content. Specs:

- Dot size: 1px
- Grid spacing: 24px × 24px
- Dot colour: `--color-ink` at 5% opacity (over light), `--color-page-bg` at 8% opacity (over dark sections like the footer)
- Pattern is `pointer-events: none`
- Fixed positioned at `top:0 left:0 right:0 bottom:0` with `position: fixed` and `z-index: -1`

**Implementation snippet for `app/layout.tsx`:**

```tsx
function DottedGridAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-ink) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        opacity: 0.05,
      }}
    />
  );
}
```

For the dark footer, render a second instance scoped to the footer with `opacity: 0.08` and `--color-page-bg` as the dot colour.

---

## Image Style Guide

**Treatment:** **Full-bleed contained** for dashboard screenshots, **natural / untouched** for photography when client supplies it.

**Dashboard mockups (the dominant visual asset):**
- Always rendered inside a "browser chrome" wrapper — a subtle rounded-`rounded-2xl` container with a hairline border, three traffic-light dots in the top-left, and a faint URL bar showing `app.astanabiz.com`
- Drop shadow: `shadow-[0_24px_60px_-20px_rgba(15,140,92,0.18)]` — a tinted-green soft shadow that hints at the brand without being heavy
- On the hero, the dashboard floats with a subtle `translateY` parallax tied to scroll (Framer Motion `useScroll` + `useTransform`)
- A subtle green glow halo sits behind the dashboard via a `radial-gradient` blur — this is the *one* place gradient appears

**Real photography (when supplied):**
- Aspect ratio: 4:3 or 16:10 (no extreme crops)
- No filter, no duotone, no painterly overlay — keep it real
- Show real Malaysian SMEs: a kopitiam, a salon, a butik, a klinik — not staged stock
- Frame inside a rounded-3xl container with the same `--color-border-hairline` 1px border for consistency

**Placeholder strategy until client delivers photos:** generate dashboard mockups directly in CSS/HTML inside the components (Phase 1 builds these as real DOM, not images). For lifestyle slots, use neutral grey-tinted placeholders with the brand pale colour overlay until photos arrive.

---

## Animation & Motion

**Motion concept: Orchestrated reveal on initial load, quiet thereafter.**

The hero stat numbers animate up on page load (count from 0 to final number over ~1.2s with easeOut), the dashboard fades in 200ms after, and the CTAs settle in last. After the hero, scroll behaviour is restrained: `whileInView` on each section, single `y: 16 → 0, opacity: 0 → 1` over 0.7s easeOut, viewport `once: true`. No hover-scale anywhere. No marquee. No pin-and-reveal — the dashboard mockup parallaxing on scroll is the only scroll-tied motion.

**Framer Motion patterns:**

```tsx
// Default section reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// Stat number count-up (hero)
function useCountUp(target: number, duration: number = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

// Dashboard parallax (hero)
const { scrollY } = useScroll();
const dashboardY = useTransform(scrollY, [0, 600], [0, -60]);
// then on motion.div: style={{ y: dashboardY }}
```

**Easing standard:** `[0.16, 1, 0.3, 1]` (custom easeOutExpo curve), expressed as the CSS variable `--ease-out-expo`.

**Reduced motion:** wrap any animation in a `prefers-reduced-motion` check; deliver static final states for users who request reduced motion. This is non-negotiable for accessibility.

---

## Layout Patterns Per Section

| Section | Layout | Notes |
|---|---|---|
| Hero | Full-viewport-height. Stats left (60%), dashboard right (40%, off-grid translated +10%). | Stats stack vertically, dashboard floats. Below stats: tagline + dual CTA. |
| Industry strip | Full-bleed horizontal scroll on mobile, single row on desktop with industry icons + names. | Reuses MCBIZ's 12-industry list for ecosystem consistency. |
| Why Astana POS (USPs) | Bento — 2-1-2-1-2 mixed-size cards on desktop, single column on mobile. | Hairline-divider card variant. Numbers 01-06 as eyebrows. |
| Feature deep-dive teaser | Two-column: text left (eyebrow + heading + 3-bullet list + CTA), dashboard screenshot right. Alternating sides. | Repeats 2-3 times for 2-3 features. Each one its own component. |
| Trust block | Three-column logo-or-stat strip on a `--color-surface-tint` background. | Trademark, Play Store, Astana Group since 2020. |
| Testimonials | Single oversized pull-quote (full-bleed) + three smaller quotes below in a row. | Editorial pull-quote treatment, not generic carousel. |
| Final CTA | Full-bleed `--color-brand-deep` band. Heading + WhatsApp CTA + Calendly CTA + Play Store badge. | Single calm moment of "yes" — no decoration except the dotted grid atmosphere intensified. |
| Footer | Deep brand background. Oversized wordmark right (decorative). Functional columns left. Sibling-brand pill at the bottom. | See Footer treatment above. |

---

## Full `globals.css` Block

> Copy this block directly into `app/globals.css`. Replaces all default content. Tailwind v4 — no `tailwind.config.ts` required.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme {
  /* Brand greens (family resemblance with MCBIZ, distinct application) */
  --color-brand-primary: oklch(0.52 0.16 158);
  --color-brand-mid: oklch(0.62 0.14 158);
  --color-brand-light: oklch(0.78 0.10 158);
  --color-brand-pale: oklch(0.94 0.04 158);
  --color-brand-deep: oklch(0.32 0.10 165);

  /* Ink + neutrals (warm-tinted, never blue-cold) */
  --color-ink: oklch(0.20 0.02 250);
  --color-ink-soft: oklch(0.42 0.02 250);
  --color-text-muted: oklch(0.62 0.02 250);

  /* Surfaces */
  --color-page-bg: oklch(0.98 0.005 80);
  --color-surface: oklch(1 0 0);
  --color-surface-tint: oklch(0.96 0.008 80);

  /* Lines */
  --color-border-hairline: oklch(0.90 0.005 250);

  /* Typography (via next/font CSS variables exposed on <html>) */
  --font-display: var(--font-display), "Helvetica Neue", system-ui, sans-serif;
  --font-body: var(--font-body), "Helvetica Neue", system-ui, sans-serif;

  /* Type scale custom utilities (Tailwind v4 picks these up as text-* utilities) */
  --text-hero-stat: clamp(4rem, 12vw, 9rem);
  --text-hero-stat--line-height: 0.9;
  --text-display-xl: clamp(2.5rem, 6vw, 4.5rem);
  --text-display-xl--line-height: 1.05;
  --text-display-lg: clamp(2rem, 4vw, 3.25rem);
  --text-display-lg--line-height: 1.1;
  --text-display-md: 2rem;
  --text-display-md--line-height: 1.15;
  --text-display-sm: 1.5rem;
  --text-display-sm--line-height: 1.2;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.6;
  --text-body: 1rem;
  --text-body--line-height: 1.65;
  --text-body-sm: 0.875rem;
  --text-body-sm--line-height: 1.55;
  --text-eyebrow: 0.75rem;
  --text-eyebrow--line-height: 1.4;
  --text-eyebrow--letter-spacing: 0.12em;

  /* Spacing extensions */
  --spacing-section: 6rem;
  --spacing-section-lg: 9rem;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

:root {
  /* Atmosphere variables (consumed by custom CSS, not utility classes) */
  --grid-dot-opacity: 0.05;
  --grid-dot-opacity-dark: 0.08;
  --grid-spacing: 24px;
}

@layer base {
  html {
    background: var(--color-page-bg);
    color: var(--color-ink);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background: var(--color-page-bg);
    color: var(--color-ink);
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    color: var(--color-ink);
    letter-spacing: -0.02em;
  }

  ::selection {
    background: var(--color-brand-pale);
    color: var(--color-brand-deep);
  }

  /* Tabular figures for stat numbers */
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
}
```

---

## Do's and Don'ts (Astana POS specific)

**Do:**
- Lead every page above the fold with the product itself (dashboard mockup) or proof (numbers).
- Use the bilingual toggle to signal Malaysian-made within 100ms of arrival.
- Maintain visual family resemblance with MCBIZ through the green palette and the footer sibling-brand link.
- Use Cabinet Grotesk for every heading and every stat number, full stop.
- Use tabular figures (`tabular-nums`) on any number that animates or sits in a stat block, so digits don't jitter when counting up.
- Keep CTAs to two per section maximum: one primary, one secondary.

**Don't:**
- Don't gradient-fill section backgrounds. That's MCBIZ. Astana POS is flat.
- Don't add a third typeface (no Cabinet Grotesk + General Sans + Display). The pairing is intentional and disciplined.
- Don't use card-shadow chrome on USP cards — the hairline-divider treatment is the design move, don't soften it back to default.
- Don't fall back to 3-column equal grids for feature sections — use the bento pattern from "Layout Patterns Per Section."
- Don't introduce any third-party UI library beyond shadcn/ui — no Nova, no Mega, no Magic UI components dropped in unmodified.
- Don't write English copy first and translate to BM. Write the BM copy first (or have client review BM first), then translate to EN. BM is the primary audience.