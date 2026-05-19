import type { Dictionary } from "./ms";

export const en: Dictionary = {
  nav: {
    features: "Features",
    industries: "Industries",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    cta: "Chat on WhatsApp",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  languageToggle: {
    bm: "BM",
    en: "EN",
    label: "Switch language",
  },
  hero: {
    eyebrow: "The smart cashier system for Malaysian SMEs",
    stats: [
      { value: 7000, suffix: "+", label: "active shops" },
      { value: 177, suffix: "", label: "countries on Play Store" },
      { value: 0, suffix: "", label: "hidden annual fees" },
    ],
    tagline:
      "The cloud POS that doesn't cap your growth. Unlimited sales. Unlimited inventory. Unlimited reports.",
    ctaPrimary: "Chat with us on WhatsApp",
    ctaSecondary: "Book a consultation",
    ctaPlayStore: "Get it on Google Play",
  },
  industries: {
    eyebrow: "For every kind of business",
    items: [
      { key: "restaurant", name: "Restaurant", icon: "UtensilsCrossed" },
      { key: "cafe", name: "Cafe", icon: "Coffee" },
      { key: "retail", name: "Retail", icon: "ShoppingBag" },
      { key: "clinic", name: "Clinic", icon: "Stethoscope" },
      { key: "gym", name: "Gym", icon: "Dumbbell" },
      { key: "hotel", name: "Hotel", icon: "BedDouble" },
      { key: "salon", name: "Salon", icon: "Scissors" },
      { key: "laundry", name: "Laundry", icon: "WashingMachine" },
      { key: "carwash", name: "Car Wash", icon: "Car" },
      { key: "pharmacy", name: "Pharmacy", icon: "Pill" },
      { key: "petshop", name: "Pet Shop", icon: "PawPrint" },
      { key: "boutique", name: "Boutique", icon: "Shirt" },
    ],
  },
  whyAstanaPos: {
    eyebrow: "Why Astana POS",
    heading: "Built for businesses that refuse to cap themselves.",
    features: [
      {
        number: "01",
        title: "Cloud + Offline",
        body: "Sales keep running even when the internet is down. Auto-syncs the moment you reconnect.",
      },
      {
        number: "02",
        title: "Unlimited inventory",
        body: "Purchase orders, GRN, stock adjustments, inventory reports — all in one place.",
      },
      {
        number: "03",
        title: "Employee management",
        body: "Create staff accounts, set permissions, track commissions, get alerts on suspicious logins.",
      },
      {
        number: "04",
        title: "Automatic financial reports",
        body: "Net profit, operating cost, overhead — calculated automatically without separate accounting software.",
      },
      {
        number: "05",
        title: "Marketing built-in",
        body: "Loyalty points, customer database, top-selling reports — turn one-time customers into regulars.",
      },
      {
        number: "06",
        title: "LHDN E-Invoice ready",
        body: "MyInvois compliant. Auto-submits e-invoices with zero extra work.",
      },
    ],
  },
  featureDeepDive: {
    eyebrow: "Inventory anywhere",
    heading: "See your stock alive, branch by branch.",
    bullets: [
      "Purchase orders auto-generated when stock runs low",
      "GRN and stock adjustments with full audit trail",
      "Inventory reports per branch, in real time",
    ],
    cta: "Explore all features",
    dashboardView: "Inventory",
    dashboardSubview: "Low stock · 3 SKUs",
  },
  trust: {
    items: [
      {
        title: "MyIPO-registered trademark",
        body: "Verified and legally protected in Malaysia.",
        icon: "BadgeCheck",
      },
      {
        title: "Available in 177 countries",
        body: "Discoverable on Google Play worldwide.",
        icon: "Globe2",
      },
      {
        title: "Backed by Astana Group since 2020",
        body: "Five years of experience with Malaysian SMEs.",
        icon: "Shield",
      },
      {
        title: "Sister brand to MCBIZ",
        body: "Same hardware and software ecosystem.",
        icon: "Link2",
      },
    ],
  },
  finalCta: {
    heading: "Ready to grow without limits?",
    subtitle:
      "Chat with us on WhatsApp for a free demo, or book a 30-minute consultation.",
    ctaPrimary: "Chat with us on WhatsApp",
    ctaSecondary: "Book a consultation",
    ctaPlayStore: "Get it on Google Play",
  },
  footer: {
    manifesto:
      "Astana POS — the smart cashier system that grows with your business. No limits. No compromises.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Industries", href: "/industries" },
          { label: "Pricing", href: "/pricing" },
          { label: "Download", href: "play-store" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Hub registration", href: "hub-register" },
          { label: "Sign in", href: "hub-login" },
          { label: "MCBIZ (hardware)", href: "mcbiz" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy policy", href: "/legal/privacy" },
          { label: "Terms of service", href: "/legal/terms" },
        ],
      },
    ],
    copyright: "© 2026 Astana Group Sdn Bhd. All rights reserved.",
    siblingPill: "Part of Astana Group · See also: MCBIZ",
  },
  dashboard: {
    urlBar: "app.astanabiz.com",
    todayLabel: "Today's sales",
    today: 43567,
    todayPrefix: "RM",
    trendLabel: "Last 7 days",
    lowStockLabel: "Low stock",
    lowStockCount: 3,
    lowStockUnit: "items",
    productList: [
      { name: "Chicken Nasi Lemak", qty: 142, price: "RM 8.50" },
      { name: "Teh Tarik", qty: 98, price: "RM 3.20" },
      { name: "Roti Canai", qty: 76, price: "RM 2.50" },
    ],
    miniViewInventory: {
      title: "Inventory",
      summary: "412 active SKUs",
      rows: [
        { name: "Chocolate Cookies 100g", status: "Low stock", qty: 6 },
        { name: "Kopi O Sachet", status: "Low stock", qty: 4 },
        { name: "Condensed Milk 397g", status: "Low stock", qty: 9 },
      ],
    },
  },
  a11y: {
    whatsappFloat: "Chat with us on WhatsApp",
    skipToContent: "Skip to main content",
    decorativeDashboard: "Astana POS dashboard preview",
  },
};
