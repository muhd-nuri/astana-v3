# Astana POS — Claude Code Initial Prompt

**Phase:** 1 of 4 — Foundation & Homepage

---

## Pre-flight Assumptions

- Working directory is the already-scaffolded project root (Next.js 15 + Tailwind v4 + shadcn/ui already initialised via `bunx --bun shadcn@latest init -t next .`).
- **Do NOT create a new project. Do NOT `cd` into a subdirectory. Do NOT run `create-next-app` or `shadcn init`.**
- `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components.json`, `tsconfig.json` all already exist — edit them, don't recreate them.
- **Tailwind v4 is active.** Theme tokens go inside `@theme {}` in `app/globals.css`. There is no `tailwind.config.ts` and one should not be created.
- Package manager is **Bun**. Use `bun add` and `bunx --bun shadcn@latest add`. Do not use npm/yarn/pnpm.
- Deployment is out of scope — Mat handles VPS (pm2 + nginx) separately. Do not include deploy commands or hosting configs.

Before starting, read these two files in order:
1. `astanapos_master_plan.md` — full project blueprint, stack, site map, content placeholders, env vars
2. `astanapos_design.md` — design system, typography, colour, spacing, components, full `globals.css` block

After reading both, **summarise back in 5 bullet points** what the site's job is, the design vision in one sentence, the build phase order, any conflicts you noticed between the two documents, and anything you need clarified. **Wait for confirmation before writing code.**

---

## Design Vision Summary

- **Aesthetic thesis:** A modern SaaS product page (Linear / Posthog / Tabby Cloud school) with calm green-on-warm-white palette, dashboard moments treated as the hero, sharing enough green DNA with sister brand MCBIZ that the two read as siblings in the Astana Group ecosystem without being twins.
- **Signature element (build in Phase 1):** A **numbers-led hero** — three oversized stats stacked at the top ("7,000+ kedai · 177 negara · 0 yuran tahunan"), each animating up from 0 on load with tabular figures, with a floating dashboard mockup cutaway off to the right (parallax-tied to scroll).
- **Atmosphere layer (global, render in `app/layout.tsx`):** A subtle **dotted grid** rendered as a fixed-position SVG-pattern background — 1px dots, 24px spacing, 5% opacity over the cream page background. Sits at `z-index: -10` behind all content. Pure CSS implementation, no JS needed.
- **One anti-pattern to actively avoid:** **No gradient-filled section backgrounds.** MCBIZ owns the gradient territory. Astana POS uses flat colour throughout — the only place a gradient appears is in the dashboard glow halo behind the hero mockup and the CTA button hover state. Stay flat.

---

## Your Mission

Build the Phase 1 homepage for **Astana POS** — a Malaysian SaaS POS product. The homepage must:

- Render fully on `localhost:3000` after `bun dev` with zero TypeScript or build errors
- Be **bilingual from the very start** — Bahasa Malaysia (primary) and English (secondary) — with a working language toggle in the navbar. No hardcoded copy in components; every UI string must come from `src/i18n/{ms,en}.ts`.
- Be mobile-responsive at 375px / 768px / 1280px breakpoints (test all three)
- Pass `bunx tsc --noEmit` with zero errors
- Use **only `next/image`** for any image (no `<img>` tags)
- Use **only Cabinet Grotesk and General Sans** as fonts (loaded via `next/font/local` from Fontshare WOFF2 files in `public/fonts/`)
- Have the WhatsApp floating button always visible bottom-right, linking to the Astana POS-specific prefill message

---

## Step 1 — Install Additional Dependencies

The project is already scaffolded. Only install what's missing for this site:

```bash
bun add framer-motion react-hook-form @hookform/resolvers zod react-calendly
```

Add shadcn components (run one at a time so each picks the right colour mode):

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add accordion
bunx --bun shadcn@latest add tabs
bunx --bun shadcn@latest add separator
bunx --bun shadcn@latest add sheet
```

Confirm `lucide-react`, `clsx`, and `tailwind-merge` are already present (they ship with the shadcn init). If `package.json` is missing any of those, install them.

---

## Step 2 — Download Fonts

The site uses Cabinet Grotesk and General Sans from Fontshare (both free for commercial use).

1. Download from `https://www.fontshare.com/fonts/cabinet-grotesk` — extract the WOFF2 files for **Medium (500)** and **Bold (700)**.
2. Download from `https://www.fontshare.com/fonts/general-sans` — extract WOFF2 files for **Regular (400)**, **Medium (500)**, **Semibold (600)**.
3. Place all five WOFF2 files in `public/fonts/`. Use the canonical filenames:
   - `CabinetGrotesk-Medium.woff2`
   - `CabinetGrotesk-Bold.woff2`
   - `GeneralSans-Regular.woff2`
   - `GeneralSans-Medium.woff2`
   - `GeneralSans-Semibold.woff2`

If the WOFF2 files aren't available yet at build time, scaffold the `next/font/local` config in `app/layout.tsx` exactly as design.md specifies and add a `TODO: download fonts to public/fonts/` comment at the top of `app/layout.tsx`. The site will run in a degraded fallback state until the files arrive — log a single warning, don't crash.

---

## Step 3 — Global Setup

### 3.1 Replace `app/globals.css`

Replace the entire contents of `app/globals.css` with the full block from `astanapos_design.md` under **"Full `globals.css` Block."** This installs the `@theme {}` tokens, the type scale custom utilities, the base body styles, and the selection colour.

### 3.2 Update `app/layout.tsx`

- Set page metadata: `title: "Astana POS — Sistem Juruwang Cloud untuk PKS Malaysia"`, description from the brief tagline.
- Set `<html lang="ms">` (BM is the primary language).
- Load Cabinet Grotesk + General Sans via `next/font/local` exactly as design.md specifies — both fonts expose CSS variables (`--font-display`, `--font-body`) that the `@theme {}` block consumes.
- Add the variables to the `<html>` className: `${cabinetGrotesk.variable} ${generalSans.variable}`.
- Render the global dotted-grid atmosphere overlay as a fixed-position element directly inside `<body>` (use the `DottedGridAtmosphere` component spec from design.md — it's a single div with inline styles).
- Wrap children in the `<LocaleProvider>` from Step 3.3.

### 3.3 Set up `src/i18n/`

Create three files:

```
src/i18n/en.ts          # English translation dictionary
src/i18n/ms.ts          # BM translation dictionary (primary)
src/i18n/LocaleContext.tsx   # React Context + useLocale hook
```

Translation file shape (use this exactly so it's predictable):

```ts
// src/i18n/ms.ts
export const ms = {
  nav: {
    features: 'Ciri-ciri',
    industries: 'Industri',
    pricing: 'Harga',
    about: 'Tentang',
    blog: 'Blog',
    contact: 'Hubungi',
    cta: 'Hubungi WhatsApp',
  },
  hero: {
    eyebrow: 'Sistem juruwang pintar untuk PKS Malaysia',
    stats: [
      { value: 7000, suffix: '+', label: 'kedai aktif' },
      { value: 177, suffix: '', label: 'negara di Play Store' },
      { value: 0, suffix: '', label: 'yuran tahunan tersembunyi' },
    ],
    tagline: 'Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had. Stok tanpa had. Laporan tanpa had.',
    ctaPrimary: 'Hubungi kami di WhatsApp',
    ctaSecondary: 'Tempah sesi konsultasi',
    ctaPlayStore: 'Muat turun di Google Play',
  },
  // ...etc — every string used in the homepage
} as const;

export type Dictionary = typeof ms;
```

`LocaleContext.tsx` exposes `{ locale, setLocale, t }` where `t` is the active dictionary. Default state: `locale = 'ms'`. Persist the chosen locale in `localStorage` under key `astanapos-locale`.

Use the canonical content placeholders from `astanapos_master_plan.md` for every string.

---

## Step 4 — Shared Components

Build these in `src/components/shared/`:

### 4.1 `Navbar.tsx`

- Sticky to top
- Below 20px scroll: no border, transparent background, dotted-grid shows through
- Above 20px scroll: thin bottom border (`--color-border-hairline`), background becomes `--color-page-bg` with subtle backdrop-blur
- Left: text wordmark "Astana POS" in Cabinet Grotesk Bold, with the `.` rendered in `--color-brand-primary`
- Centre: nav links from `t.nav.*`
- Right: `<LanguageToggle />` then `<CTAButton variant="primary" />` with WhatsApp icon + `t.nav.cta`
- Mobile: hamburger right side opens shadcn `<Sheet />` from the right with stacked links and CTA at the bottom
- Use `framer-motion` for the border-bottom fade-in transition on scroll threshold

### 4.2 `Footer.tsx`

- Background `--color-brand-deep`, text `--color-page-bg`
- Override the dotted-grid atmosphere inside the footer to a slightly higher opacity (8%) and `--color-page-bg` dot colour (handled in the design.md atmosphere snippet — render a second instance scoped to the footer)
- Layout: container with 4 functional columns left (Product / Company / Resources / Legal) + the oversized decorative wordmark right (absolutely positioned, very low opacity)
- Bottom row: copyright on left, sibling-brand pill on right — *"Sebahagian daripada Astana Group · Lihat juga: MCBIZ →"* / *"Part of Astana Group · See also: MCBIZ →"* linking to `process.env.NEXT_PUBLIC_MCBIZ_URL`
- Mobile: stack columns vertically, hide the decorative wordmark

### 4.3 `LanguageToggle.tsx`

- Two pill segments side-by-side: `BM` and `EN`
- Active state filled with `--color-brand-primary`, text `--color-page-bg`
- Inactive state: transparent, text `--color-ink-soft`, hairline border
- Click → calls `setLocale('ms')` or `setLocale('en')` from `LocaleContext`

### 4.4 `CTAButton.tsx`

Variants: `primary` | `secondary` | `ghost` (per design.md component spec). Accept `href`, `external`, `icon`, `children`, `onClick`. Pill-shaped (`rounded-full`). The primary variant is the WhatsApp CTA the whole site funnels into.

### 4.5 `SectionWrapper.tsx`

Standard section container: `<section>` with `py-[var(--spacing-section)]`, inner `max-w-[1280px] mx-auto px-6 md:px-10`. Accepts `id`, `tone` prop (`'page' | 'tint' | 'deep'`) for alternating section backgrounds. Wraps children in a `motion.div` with the `sectionVariants` from design.md (whileInView, viewport once).

### 4.6 `WhatsAppFloat.tsx`

Bottom-right fixed-position floating button. Visible across the whole site. Links to `wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE)}`. Render at the same level as `<Footer />` in `app/layout.tsx` so it's globally present.

### 4.7 `DashboardMockup.tsx`

The signature visual asset. A pure-DOM dashboard mockup (no image) that lives in the hero. Spec:

- Container: rounded-2xl, white background, hairline border, tinted-green soft drop shadow
- Three traffic-light dots top-left
- Faint URL bar showing `app.astanabiz.com`
- Body: a simplified sales dashboard — top row "Today" stat (RM43,567 — animate the number with the same `useCountUp` hook as the hero), a 7-day spark line (inline SVG, brand-primary stroke), a tiny inventory low-stock alert badge ("3 items low"), and a thumbnail product list of 3 items
- All using design tokens — no inline colours

Make a `props.variant` enum: `'hero' | 'mini'` so the same component can render at hero size (full mockup) or mini size (inside feature deep-dive sections later).

---

## Step 5 — Homepage Sections

Build these in `src/components/sections/home/`. Each is its own file. Each receives content via `useLocale()` — no hardcoded copy.

Picked from the archetype menu (5–7, at least one unconventional). For Astana POS I'm picking **6 sections, two unconventional**:

### 5.1 `HeroNumbers.tsx` *(unconventional — Hero Editorial variant with stat-as-hero)*

- Full viewport height min `min-h-[88vh]`
- Stat block left (60% on desktop), stacked vertically:
  - Three stat units. Each unit: oversized number in `text-hero-stat` using Cabinet Grotesk Bold with tabular figures, then a small label in `text-body-sm` directly below
  - Stats from `t.hero.stats`, animated count-up on mount using `useCountUp` hook
- `t.hero.eyebrow` rendered as eyebrow text above the stats
- `t.hero.tagline` rendered below the stats in `text-body-lg` with a max-width of 32rem
- Dual CTA row: `<CTAButton variant="primary">{t.hero.ctaPrimary}</CTAButton>` + `<CTAButton variant="secondary">{t.hero.ctaSecondary}</CTAButton>`
- Below CTAs, a small Google Play badge link `t.hero.ctaPlayStore` rendered as inline link with the Play icon
- Right column (40% on desktop, hidden on mobile <md, replaced with a smaller version below the CTAs): `<DashboardMockup variant="hero" />` with scroll-parallax `useTransform(scrollY, [0, 600], [0, -60])`
- Subtle green-glow radial gradient behind the dashboard (this is the ONE place gradient appears — see design.md)

### 5.2 `IndustryStrip.tsx`

- Full-bleed horizontal scroll on mobile, single row centred on desktop
- 12 industry items (per `astanapos_master_plan.md` content placeholders)
- Each item: icon (Lucide) + name in `text-body-sm`. Hover: icon shifts to `--color-brand-primary`
- No card chrome — minimal pill-style hover state only
- Eyebrow above: *"Untuk setiap jenis perniagaan"* / *"For every type of business"*

### 5.3 `WhyAstanaPos.tsx` *(unconventional — Bento layout, not equal grid)*

- Bento layout: 2-1-2-1 mixed-size cards on desktop. Specifically:
  - Row 1: feature 01 spans 2 columns (large), feature 02 spans 1 column (normal)
  - Row 2: feature 03 spans 1 column (normal), feature 04 spans 2 columns (large)
  - Row 3: feature 05 spans 2 columns (large), feature 06 spans 1 column (normal)
- Single column on mobile, equal stacked
- Each card uses the **hairline-divider card** variant (no shadow, no rounded corners, just a 1px top border in `--color-border-hairline`, generous padding, eyebrow number + heading + body)
- Hover: top border becomes 2px and shifts to `--color-brand-primary` over 0.4s
- Content from `t.whyAstanaPos.features` (6 features per master plan)

### 5.4 `FeatureDeepDiveTeaser.tsx`

- Two-column layout: text left (eyebrow + heading + 3-bullet list + ghost CTA "Lihat semua ciri →"), `<DashboardMockup variant="mini" />` right with a different dashboard view (e.g. "Inventory" instead of "Sales")
- One instance only on the homepage; the inner `/features` page (Phase 2) will repeat this with all six features
- Subtle horizontal divider above to separate from the previous section

### 5.5 `TrustBlock.tsx`

- Background tint: `--color-surface-tint`
- Three-column strip: each cell is icon + small label + larger description
  - "Trademark berdaftar MyIPO" + check icon
  - "177 negara di Play Store" + globe icon
  - "Disokong oleh Astana Group sejak 2020" + shield icon
- Plus a fourth cell: "Bersaudara dengan MCBIZ" + link icon — links to `process.env.NEXT_PUBLIC_MCBIZ_URL`
- Stack to 2x2 on tablet, single column on mobile

### 5.6 `FinalCTA.tsx`

- Full-bleed `--color-brand-deep` background
- Dotted-grid atmosphere intensified to 8% inside this section
- Centred content stack: large display heading (`text-display-lg`), one-line subtitle, dual CTA (WhatsApp primary, Calendly secondary), small Play Store badge below
- This is the closer. Single calm moment. No decoration except the atmosphere.

---

## Step 6 — Wiring It Together

In `app/page.tsx`:

```tsx
import { HeroNumbers } from '@/components/sections/home/HeroNumbers';
import { IndustryStrip } from '@/components/sections/home/IndustryStrip';
import { WhyAstanaPos } from '@/components/sections/home/WhyAstanaPos';
import { FeatureDeepDiveTeaser } from '@/components/sections/home/FeatureDeepDiveTeaser';
import { TrustBlock } from '@/components/sections/home/TrustBlock';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <HeroNumbers />
      <IndustryStrip />
      <WhyAstanaPos />
      <FeatureDeepDiveTeaser />
      <TrustBlock />
      <FinalCTA />
    </main>
  );
}
```

`<Navbar />`, `<Footer />`, `<WhatsAppFloat />`, and the dotted-grid atmosphere live in `app/layout.tsx`, not the page.

---

## Step 7 — Environment Variables

Create `.env.local.example` with the keys listed in `astanapos_master_plan.md` under "Environment Variables." Mat will populate `.env.local` separately. Phase 1 uses these client-side keys (the `NEXT_PUBLIC_*` ones); RESEND keys come into play in Phase 2.

---

## Step 8 — Quality Checklist

Before declaring Phase 1 done, verify every item:

**Structural**
- [ ] Project is the original scaffold — no second Next.js project created
- [ ] No `tailwind.config.ts` file exists in the project
- [ ] `app/globals.css` contains the full `@theme {}` block from design.md
- [ ] All theme utilities resolve correctly: `bg-brand-primary`, `text-brand-deep`, `border-border-hairline`, `font-display`, `font-body`, `text-hero-stat`, `text-display-lg`, etc.

**Bilingual**
- [ ] `src/i18n/ms.ts` and `src/i18n/en.ts` exist with every UI string used on the homepage
- [ ] `useLocale()` hook works; toggling the language toggle in the navbar swaps every visible string immediately
- [ ] Default state is BM, persisted to `localStorage`
- [ ] No hardcoded copy in any component — every string comes from `t.*`

**Typography & assets**
- [ ] Display font is Cabinet Grotesk (NOT Inter, NOT Roboto, NOT Plus Jakarta Sans, NOT Syne, NOT Geist)
- [ ] Body font is General Sans
- [ ] Both fonts free for commercial use (Fontshare WOFF2, self-hosted in `public/fonts/`)
- [ ] All headings use `font-display`, all body uses `font-body`
- [ ] Hero stat numbers use `tabular-nums`
- [ ] No `<img>` tags anywhere — only `next/image`

**Design fidelity**
- [ ] The numbers-led hero is implemented and visible above the fold on desktop and mobile
- [ ] Each of the three hero stats animates from 0 to its final value on mount
- [ ] The `<DashboardMockup />` is a pure-DOM component (not an image) and parallax-scrolls subtly
- [ ] The dotted-grid atmosphere renders globally (visible on the page background, not just one section)
- [ ] Footer uses `--color-brand-deep` background with the oversized decorative wordmark right + functional columns left + sibling-brand MCBIZ pill at the bottom
- [ ] No gradient-filled section backgrounds (only allowed: dashboard glow halo + button hover micro-gradient)
- [ ] USP/Why Astana POS section uses the **bento layout** (2-1-2-1-2-1 mixed sizes) and the **hairline-divider card** variant — NOT a 3-column equal grid with rounded shadow cards

**Responsiveness**
- [ ] 375px (iPhone SE) — hero stats stack vertically, dashboard hidden, CTAs full-width
- [ ] 768px (iPad) — hero stats still stack, dashboard appears below CTAs at medium size
- [ ] 1280px (desktop) — full hero layout with stats left and dashboard floating right

**Performance & quality**
- [ ] `bunx tsc --noEmit` passes with zero errors
- [ ] `bun run lint` passes
- [ ] No console errors or warnings on page load
- [ ] All `motion.div` `whileInView` animations have `viewport={{ once: true }}`
- [ ] `prefers-reduced-motion` is honoured (static fallback for the hero count-up and any scroll-tied motion)
- [ ] WhatsApp float button is visible on every viewport and links correctly

**Astana family**
- [ ] Footer contains the "Sebahagian daripada Astana Group · Lihat juga: MCBIZ →" pill linking to mcbiz.astanabiz.com
- [ ] Brand palette is unmistakably green-family (sibling resemblance) but flat application (not gradient — divergent from MCBIZ)
- [ ] Cabinet Grotesk is the display font, NOT Syne (no MCBIZ collision)

---

## What NOT to Build in Phase 1

Defer all of these to later phases — do not start them now:

- `/features`, `/industries`, `/pricing`, `/about`, `/contact` pages (Phase 2)
- Calendly embed and full booking flow (Phase 2)
- React Hook Form + Zod enquiry form with Resend (Phase 2)
- Blog index and `/blog/[slug]` MDX renderer (Phase 3)
- `/legal/privacy`, `/legal/terms` (Phase 4)
- SEO metadata beyond the homepage title/description (Phase 4)
- Structured data / JSON-LD schemas (Phase 4)
- `sitemap.xml`, `robots.txt`, OG image generation (Phase 4)
- Real product photography integration — use the pure-DOM dashboard mockups for now (client photography arrives later)
- Any custom admin / CMS work (no admin in Phase 1)
- Payload CMS, Postgres, Drizzle setup (this site uses MDX for blog if blog ever needs CMS; Phase 3 decision)
- Deployment scripts, PM2 configs, nginx files (Mat handles VPS)

---

## Done?

When Phase 1 is complete, reply with:

1. **File tree** of every new file under `src/` (sections, shared components, i18n, hooks)
2. **One screenshot** of the desktop homepage and one of the mobile (or describe each in detail if screenshots aren't possible)
3. **Translation coverage check**: confirm every string used on the homepage exists in both `src/i18n/ms.ts` and `src/i18n/en.ts`, and toggling the language updates every visible string
4. **Any blockers** — missing fonts, missing env vars, missing copy from the master plan, ambiguities you resolved with assumptions
5. Confirmation that the **quality checklist** above passes top to bottom