# Astana POS — Website Master Build Plan

**Domain:** astanabiz.com (root) — Astana POS lives on the root domain; MCBIZ continues to live at mcbiz.astanabiz.com.
**Project type:** Brochure site (SaaS product page) with WhatsApp + consultation booking as primary CTAs.
**Build phases:** 4 (Foundation/Homepage → Inner pages → Blog/news → SEO/launch polish).

---

## Client Brief Summary

| Field | Value |
|---|---|
| Brand | Astana POS |
| Parent | Astana Group / Nosweat Tech (sibling product to MCBIZ) |
| Tagline | "Unlimited Sales History, Features, Employee & Advanced Inventory Management. Don't limit your growth." |
| Three-word essence | Unlimited. Cloud. Yours. |
| Target audience | Malaysian SME owners (and globally where Astana POS Play Store presence exists — 177 countries) |
| Site type | Brochure (SaaS product page) |
| Primary CTA | WhatsApp |
| Secondary CTA | Book a consultation slot |
| Self-managed content? | No — Mat Coding handles all updates |
| Blog/news section? | Yes |
| Languages | English + Bahasa Malaysia (bilingual toggle) |
| WhatsApp integration | Yes |
| Analytics | Yes (Meta Pixel + Google Analytics 4) |
| Third-party | Consultation booking widget (Calendly) |
| Domain status | Owned (astanabiz.com) |
| Pro email | Already in place (admin@astanabiz.com) |
| Logo | Provided (PNG, see brief) |
| Colour direction | "Same as mcbiz.astanabiz.com" — emerald/forest green family |
| Brand guide | Yes (client confirmed) |
| Photography | None ready — placeholder strategy until client delivers |
| Copywriting | Client has core content; Mat Coding refines for web |
| Note from client | "I want revamp to look more modern and gain trust from customers to subscribe." |

---

## Strategic Positioning Note (read before designing)

Astana POS sits **inside the Astana Group ecosystem alongside MCBIZ**. They are siblings, not duplicates:

| | MCBIZ | Astana POS |
|---|---|---|
| Job to be done | Sell hardware bundles + setup | Sell software subscriptions / Cloud SaaS |
| Hero asset | Physical POS terminals | The app itself (dashboard, mobile, reports) |
| Closing motion | "Get a quote on a bundle" | "Try Cloud free / Book a consultation" |
| Visual direction | Bundle-led, gradient greens, warmer | Product-led, flat modern greens, cooler |

The site must feel **unmistakably part of the Astana family** (green hue, shared footer mentions of MCBIZ, same WhatsApp number where appropriate) but read as **its own software product page**, not a copy of MCBIZ. This is the core design tension and the rest of this plan resolves it.

The client's own line — *"look more modern and gain trust from customers to subscribe"* — confirms the SaaS subscription framing is the right one. Subscription customers respond to product polish, real screenshots, live numbers, and clarity. They do not respond well to brochure-style "feature tiles." Build accordingly.

---

## Reference Sites Analysis

| Site | What the client likes / what to borrow | What to NOT borrow |
|---|---|---|
| **salesplay.com/pos/malaysia/** | Industry coverage (12+ business types), Malaysian context (SST/MyInvois compliance, BM copy), feature breadth as proof of completeness | Elementor/WordPress feel, generic stock photography, feature-tile soup with no hierarchy, dated 3D blob illustrations |
| **loyverse.com** | Clean global SaaS layout, app screenshots front and centre, scrollable feature deep-dives with tab navigation, testimonial trust block, multi-language switcher pattern | Visual blandness, generic SaaS blue, no distinctive personality, no Malaysian context |
| **mcbiz.astanabiz.com** (sibling brand) | Astana family green palette, BM/EN bilingual toggle pattern, Malaysian trust signals ("7,000+ kedai", trademark berdaftar), WhatsApp CTA conversion pattern, footer treatment | Hardware-first framing, bundle cards as primary content (that's MCBIZ's job), Syne display font (collision risk), gradient-heavy aesthetic |

**One distinctive move borrowed from award-tier SaaS references:** the *product-led numbers hero* (oversized statistic typography + dashboard cutaway off to the side) is the signature element — pulled from the Linear / Posthog / Tabby Cloud playbook of leading with proof above persuasion.

---

## Important Context Notes

- **Bilingual is non-trivial.** BM as primary language for SME audience, EN toggle. All UI text including micro-copy, error states, button labels, form placeholders must be available in both. Build with a translation file from day one (`src/i18n/ms.ts`, `src/i18n/en.ts`) — do not hardcode strings in components.
- **Subscription framing wins over one-off framing.** Hero copy and CTAs lead with the cloud/subscription product, with optional hardware mention secondary. This is the lever for "gain trust from customers to subscribe."
- **No e-commerce in this site.** Astana POS is sold via WhatsApp consultation + redirect to existing registration form (`hub.astanabiz.com/registration_form` is already live). Do not build a checkout.
- **Blog/news section** requested but defer to Phase 3 — Phase 1 ships static homepage; blog content layout designed in Phase 3 with a lightweight markdown-based approach (no separate CMS unless the volume warrants it later).
- **Mobile PageSpeed matters.** Mat Coding's own funnel has identified mobile PageSpeed as a constraint elsewhere — bake performance discipline in from Phase 1: only `next/image`, lazy-load below-the-fold sections, no client-side fonts that aren't preloaded, no heavy animation libraries beyond Framer Motion.
- **WhatsApp is the conversion**. Same number used by MCBIZ (`+601159918214`) — confirm with client whether Astana POS should share or have its own. The WhatsApp prefill text should differ from MCBIZ's to route correctly internally.
- **Astana POS is on Google Play Store.** Available in 177 countries. The "download on Play Store" CTA needs to appear prominently as a secondary action — this is a credibility signal.

---

## Recommended Stack

> All items below assume the project is already scaffolded via `bunx --bun shadcn@latest init -t next .`. Document the stack for the client's reference, but do NOT generate scaffolding commands for items already in the scaffold.

| Layer | Tool | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router, TypeScript strict) | Already in scaffold. Standard Mat Coding stack. |
| Styling | Tailwind CSS v4 | Already in scaffold. `@theme {}` in `app/globals.css` — no `tailwind.config.ts`. |
| UI components | shadcn/ui | Already in scaffold. Add per-component via `bunx --bun shadcn@latest add [name]`. |
| Animation | Framer Motion | For dashboard ticker, scroll reveals, micro-interactions on stat numbers. |
| Forms | React Hook Form + Zod | Booking enquiry validation. |
| Email | Resend | Booking notifications to admin@astanabiz.com. |
| Booking | Calendly (embed via `react-calendly`) | Client confirmed Calendly for consultation slots. |
| Icons | Lucide React | Already in scaffold. |
| Fonts | `next/font/local` for Fontshare WOFF2 (Cabinet Grotesk + General Sans) | Free for commercial use. See design.md for licensing notes. |
| Package manager | Bun | Already in scaffold. |
| Deployment | Custom VPS (pm2 + nginx) | Handled separately by Mat (`/etc/nginx/conf.d/astanapos.conf` pattern). Not in scope for any output file. |

---

## Site Map

```
/                                # Homepage (Phase 1)
/features                        # Feature deep-dive (Phase 2)
/industries                      # 12-industry showcase (Phase 2)
/pricing                         # Subscription tiers (Phase 2)
/about                           # Brand story + Astana Group context (Phase 2)
/contact                         # WhatsApp + Calendly + enquiry form (Phase 2)
/blog                            # Blog index (Phase 3)
/blog/[slug]                     # Blog post (Phase 3)
/legal/privacy                   # Privacy policy (Phase 4)
/legal/terms                     # Terms of service (Phase 4)
/sitemap.xml                     # Generated (Phase 4)
/robots.txt                      # (Phase 4)
```

**External handoffs** (no routes on this site — handled by existing astanabiz.com sub-properties):
- Cloud sign-up → `https://hub.astanabiz.com/registration_form`
- Existing customer login → `https://hub.astanabiz.com/`
- Hardware bundles → `https://mcbiz.astanabiz.com/products`
- Play Store download → `https://play.google.com/store/apps/details?id=[ASTANA_POS_PACKAGE_ID]` (confirm package ID with client)

---

## Build Phases

### Phase 1 — Foundation & Homepage

**Tasks:**
1. Install additional dependencies (Framer Motion, react-hook-form, zod, react-calendly).
2. Add required shadcn components (button, dialog, accordion, tabs, separator).
3. Replace `app/globals.css` with the full Tailwind v4 `@theme {}` block from design.md.
4. Load Cabinet Grotesk + General Sans via `next/font/local` in `app/layout.tsx` (Fontshare WOFF2 files placed in `public/fonts/`).
5. Render the dotted grid atmosphere layer globally via a fixed-position SVG overlay in `app/layout.tsx`.
6. Set up `src/i18n/` with `en.ts` and `ms.ts` translation files. Build a lightweight `useLocale()` hook + Provider context. Default to BM (primary audience).
7. Build shared components: Navbar (bilingual toggle pattern from MCBIZ), Footer (sibling-brand acknowledgement of MCBIZ at the bottom), CTAButton, SectionWrapper, LanguageToggle.
8. Build the numbers-led hero (signature element) — see design.md for type scale, layout grid, and motion spec.
9. Build 5–7 homepage sections from the archetype menu (listed in initial_prompt.md).
10. Floating WhatsApp button (bottom-right, with the Astana POS-specific prefill text).

**Deliverable:** Homepage at `localhost:3000` fully rendered, bilingual toggle working, mobile responsive at 375/768/1280, `bunx tsc --noEmit` passing.

---

### Phase 2 — Inner Pages + Booking Form

**Tasks:**
1. `/features` — long-form scroll-anchored feature deep-dive with side nav (sticky on desktop, accordion on mobile). Six feature groups (Cloud POS, Offline Mode, Inventory, Employee, Financial, Marketing). Each with: heading, paragraph, dashboard screenshot, 3-4 bullet points.
2. `/industries` — 12 industry tabs with dashboard variation per industry (restaurant, cafe, retail, clinic, gym, hotel, salon, laundry, carwash, pharmacy, petshop, boutique). Borrow MCBIZ's industry icon-card pattern but with industry-specific screenshot mockups.
3. `/pricing` — clean subscription tiers (confirm tier names with client; default placeholder: Starter / Growth / Multi-store / Enterprise). Annual/monthly toggle. WhatsApp CTA per tier.
4. `/about` — Astana Group story (six years, 7,000+ kedai, 177 countries, trademark berdaftar), team mention if photos available, MCBIZ relationship explained as one ecosystem.
5. `/contact` — WhatsApp prominent, Calendly embed for "Book a consultation", enquiry form (React Hook Form + Zod) → Resend → admin@astanabiz.com.
6. Booking flow: Calendly inline widget for consultation slots. URL stored in env var `NEXT_PUBLIC_CALENDLY_URL`.

**Deliverable:** All inner pages live, forms submitting to admin email, booking widget embedded, full mobile responsiveness across all pages.

---

### Phase 3 — Blog/News + Lightweight CMS

**Tasks:**
1. Decide blog content model — likely MDX in `content/blog/` (low overhead, fast, no separate database) given client confirmed no self-management. If volume becomes high later, migrate to Payload CMS v3 (Postgres + Drizzle + Better Auth — already standard Mat Coding stack for that case).
2. Build `/blog` index with cover image, title, excerpt, date, tag.
3. Build `/blog/[slug]` post layout (MDX renderer, prose styling tuned to body font, related-post block).
4. Add three placeholder seed posts (industry trend, customer story, product update).
5. RSS feed at `/feed.xml`.

**Deliverable:** Blog live with seed posts, MDX authoring documented for Mat (one-line `bun add` + create file in `content/blog/`).

---

### Phase 4 — SEO, Schema, Performance, Launch

**Tasks:**
1. Per-page metadata via `generateMetadata()` — title, description, OG image, Twitter card.
2. Structured data: `Organization`, `SoftwareApplication` (with `applicationCategory: BusinessApplication`), `LocalBusiness` for the HQ in Bandar Puncak Alam, `FAQPage` schema if FAQ section ships on homepage.
3. `sitemap.xml` via `next-sitemap` or App Router built-in.
4. `robots.txt` with sitemap reference.
5. Open Graph image generation (`/opengraph-image.tsx`) — branded card with logo + tagline.
6. Performance audit: PageSpeed Insights target 90+ mobile. Verify: `next/image` everywhere, no client-side fonts blocking render (preload Cabinet Grotesk subset only), lazy-load Calendly iframe, defer non-critical JS.
7. Lighthouse accessibility ≥ 95: colour contrast, focus states, ARIA labels on icon-only buttons, semantic landmarks.
8. Legal pages: `/legal/privacy`, `/legal/terms` — adapt from existing Mat Coding template, brand-tuned.
9. Analytics: Meta Pixel + GA4 wired with proper event tracking on WhatsApp clicks, Calendly bookings, form submissions, Play Store CTA clicks.

**Deliverable:** Production-ready site. Mat handles VPS deployment + DNS cutover.

---

## Content Placeholders

These are the canonical strings for Phase 1. Bilingual entries — BM first, EN in parentheses.

**Hero (signature element — numbers-led):**

The hero is structured as three stacked stat blocks, each one a separate animated counter, with the dashboard mockup floating off to the right.

| Stat | BM | EN |
|---|---|---|
| Stat 1 | 7,000+ kedai aktif | 7,000+ active shops |
| Stat 2 | 177 negara di Play Store | 177 countries on Play Store |
| Stat 3 | 0 yuran tahunan tersembunyi | 0 hidden annual fees |

**Tagline below stats:**

- BM: *"Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had. Stok tanpa had. Laporan tanpa had."*
- EN: *"The cloud POS that doesn't cap your growth. Unlimited sales. Unlimited inventory. Unlimited reports."*

**Primary CTA:**
- BM: *Hubungi kami di WhatsApp*
- EN: *Chat with us on WhatsApp*

**Secondary CTA:**
- BM: *Tempah sesi konsultasi*
- EN: *Book a consultation*

**Tertiary CTA (Play Store badge):**
- BM/EN: *Muat turun di Google Play* / *Get it on Google Play*

---

**USP block ("Mengapa Astana POS") — six features, two per row, three rows on desktop:**

1. **Cloud + Offline** — *Jualan jalan walaupun internet down. Sync automatik bila online balik.* / *Sales keep running even when the internet is down. Auto-syncs when you reconnect.*

2. **Stok tanpa had** — *Purchase order, GRN, stok adjustment, laporan stok — semuanya satu tempat.* / *Purchase orders, GRN, stock adjustments, inventory reports — all in one place.*

3. **Pengurusan pekerja** — *Buat akaun staf, set hak akses, jejak komisen, dapat alert bila ada login mencurigakan.* / *Create staff accounts, set permissions, track commissions, get alerts on suspicious logins.*

4. **Laporan kewangan automatik** — *Net profit, kos operasi, overhead — kira automatik tanpa accounting software berasingan.* / *Net profit, operating cost, overhead — calculated automatically without separate accounting software.*

5. **Marketing built-in** — *Loyalty points, customer database, top-selling reports — turn one-time customers into regulars.* / *Loyalty points, customer database, top-selling reports — turn one-time customers into regulars.*

6. **LHDN E-Invoice ready** — *MyInvois compliant. Auto-submit e-invoice tanpa kerja tambahan.* / *MyInvois compliant. Auto-submit e-invoices with zero extra work.*

---

**Industry strip (12 industries — same as MCBIZ, scrollable on mobile):**

Restoran (Restaurant) · Kafe (Cafe) · Runcit (Retail) · Klinik (Clinic) · Gim (Gym) · Hotel (Hotel) · Salun (Salon) · Dobi (Laundry) · Cuci Kereta (Car Wash) · Farmasi (Pharmacy) · Pet Shop (Pet Shop) · Butik (Boutique)

---

**Trust block:**

- *Trademark berdaftar MyIPO* / *MyIPO-registered trademark*
- *Tersedia di Google Play 177 negara* / *Available on Google Play in 177 countries*
- *Disokong oleh Astana Group sejak 2020* / *Backed by Astana Group since 2020*
- *Bersaudara dengan MCBIZ — hardware + software ekosistem yang sama* / *Sister brand to MCBIZ — same hardware + software ecosystem*

---

**Footer manifesto line (above link columns):**

- BM: *Astana POS — sistem juruwang pintar yang berkembang dengan perniagaan anda. Tanpa had. Tanpa kompromi.*
- EN: *Astana POS — the smart cashier system that grows with your business. No limits. No compromises.*

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://astanabiz.com
NEXT_PUBLIC_WHATSAPP_NUMBER=601159918214                # confirm with client whether to share MCBIZ's or use a dedicated one
NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE=Hai Astana POS! Saya berminat dengan sistem juruwang cloud anda — boleh kongsi maklumat lanjut?
NEXT_PUBLIC_CALENDLY_URL=                                # to confirm — Mat to create Calendly link
NEXT_PUBLIC_PLAY_STORE_URL=                              # to confirm — Astana POS package ID
NEXT_PUBLIC_HUB_REGISTRATION_URL=https://hub.astanabiz.com/registration_form
NEXT_PUBLIC_HUB_LOGIN_URL=https://hub.astanabiz.com/
NEXT_PUBLIC_MCBIZ_URL=https://mcbiz.astanabiz.com

# Analytics (Phase 4)
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Forms (Phase 2)
RESEND_API_KEY=
RESEND_FROM_EMAIL=Astana POS <no-reply@astanabiz.com>
RESEND_TO_EMAIL=admin@astanabiz.com
```

---

## Follow-up Items Required from Client

- [ ] **Photography** — none ready. Need: 3-5 dashboard screenshots (desktop + mobile + iPad), 2-3 lifestyle shots of real Malaysian SMEs using Astana POS (cafe, retail, salon).
- [ ] **WhatsApp number decision** — share MCBIZ's `+601159918214` or dedicated Astana POS number? Routing implication on the receiving end.
- [ ] **Calendly link** — Mat to create a dedicated event type ("Astana POS Consultation, 30 min") and provide URL.
- [ ] **Play Store package ID** — to populate the Play Store badge link.
- [ ] **Subscription tier names + pricing** — Phase 2 blocker. Default placeholders for now: Starter / Growth / Multi-store / Enterprise.
- [ ] **Brand guide file** — client confirmed they have one. Request the PDF or Figma file so design.md typography/colour decisions can be cross-checked.
- [ ] **Real customer testimonials** — placeholder names in this plan. Need 3-5 real testimonials with permission to use names + business names.
- [ ] **Confirm relationship copy with MCBIZ** — "sister brand" framing in footer needs client sign-off.

---

## Notes for Claude Code

1. **The site is already scaffolded.** Do not run `create-next-app` or `shadcn init`. `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components.json`, `tsconfig.json` all exist — edit them.

2. **No `tailwind.config.ts`.** Tailwind v4 means all theme tokens live in `@theme {}` inside `app/globals.css`. Do not create the config file.

3. **Bilingual from day one.** Build `src/i18n/{en,ms}.ts` translation files and a `useLocale()` hook BEFORE writing any section components. Every UI string must reference the translation file — no hardcoded copy. Default language is BM. The toggle pattern from `mcbiz.astanabiz.com` is the reference (top-right of nav, two-letter codes "BM" / "EN").

4. **No Astana POS does NOT sell hardware on this site.** Hardware enquiries get a redirect to MCBIZ. The hero, USPs, features all centre on the *software* — the cloud product, the app, the dashboard, the reports.

5. **Performance discipline from Phase 1.** Only `next/image` for any image. Lazy-load any section below the fold. Cabinet Grotesk and General Sans loaded via `next/font/local` with `display: swap` and `preload: true` for Cabinet Grotesk's used weights (500, 700) only.

6. **Bento patterns are encouraged for the feature/USP sections** — modern SaaS-product aesthetic. Don't default to a 3-column equal grid.

7. **Deployment is out of scope.** Custom VPS (pm2 + nginx) is Mat's domain. Do not include deployment commands, hosting configs, or DNS instructions in any output.

8. **Phase 3 blog uses MDX, not Payload CMS.** Lower overhead, no database needed, faster to ship. Documented as a `bun add` + create-file workflow Mat can hand to a contractor if needed.