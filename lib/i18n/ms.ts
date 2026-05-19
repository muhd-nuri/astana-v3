type Stat = { value: number; suffix: string; label: string };
type Industry = { key: string; name: string; icon: string };
type Feature = { number: string; title: string; body: string };
type TrustItem = { title: string; body: string; icon: string };
type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };
type DashboardProduct = { name: string; qty: number; price: string };
type DashboardRow = { name: string; status: string; qty: number };

export type Dictionary = {
  nav: {
    features: string;
    industries: string;
    pricing: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
  };
  languageToggle: { bm: string; en: string; label: string };
  hero: {
    eyebrow: string;
    stats: Stat[];
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPlayStore: string;
  };
  industries: { eyebrow: string; items: Industry[] };
  whyAstanaPos: { eyebrow: string; heading: string; features: Feature[] };
  featureDeepDive: {
    eyebrow: string;
    heading: string;
    bullets: string[];
    cta: string;
    dashboardView: string;
    dashboardSubview: string;
  };
  trust: { items: TrustItem[] };
  finalCta: {
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPlayStore: string;
  };
  footer: {
    manifesto: string;
    columns: FooterColumn[];
    copyright: string;
    siblingPill: string;
  };
  dashboard: {
    urlBar: string;
    todayLabel: string;
    today: number;
    todayPrefix: string;
    trendLabel: string;
    lowStockLabel: string;
    lowStockCount: number;
    lowStockUnit: string;
    productList: DashboardProduct[];
    miniViewInventory: {
      title: string;
      summary: string;
      rows: DashboardRow[];
    };
  };
  a11y: {
    whatsappFloat: string;
    skipToContent: string;
    decorativeDashboard: string;
  };
};

export const ms: Dictionary = {
  nav: {
    features: "Ciri-ciri",
    industries: "Industri",
    pricing: "Harga",
    about: "Tentang",
    blog: "Blog",
    contact: "Hubungi",
    cta: "Hubungi WhatsApp",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
  },
  languageToggle: {
    bm: "BM",
    en: "EN",
    label: "Tukar bahasa",
  },
  hero: {
    eyebrow: "Sistem juruwang pintar untuk PKS Malaysia",
    stats: [
      { value: 7000, suffix: "+", label: "kedai aktif" },
      { value: 177, suffix: "", label: "negara di Play Store" },
      { value: 0, suffix: "", label: "yuran tahunan tersembunyi" },
    ],
    tagline:
      "Sistem POS cloud yang tidak menghadkan pertumbuhan anda. Jualan tanpa had. Stok tanpa had. Laporan tanpa had.",
    ctaPrimary: "Hubungi kami di WhatsApp",
    ctaSecondary: "Tempah sesi konsultasi",
    ctaPlayStore: "Muat turun di Google Play",
  },
  industries: {
    eyebrow: "Untuk setiap jenis perniagaan",
    items: [
      { key: "restaurant", name: "Restoran", icon: "UtensilsCrossed" },
      { key: "cafe", name: "Kafe", icon: "Coffee" },
      { key: "retail", name: "Runcit", icon: "ShoppingBag" },
      { key: "clinic", name: "Klinik", icon: "Stethoscope" },
      { key: "gym", name: "Gim", icon: "Dumbbell" },
      { key: "hotel", name: "Hotel", icon: "BedDouble" },
      { key: "salon", name: "Salun", icon: "Scissors" },
      { key: "laundry", name: "Dobi", icon: "WashingMachine" },
      { key: "carwash", name: "Cuci Kereta", icon: "Car" },
      { key: "pharmacy", name: "Farmasi", icon: "Pill" },
      { key: "petshop", name: "Pet Shop", icon: "PawPrint" },
      { key: "boutique", name: "Butik", icon: "Shirt" },
    ],
  },
  whyAstanaPos: {
    eyebrow: "Mengapa Astana POS",
    heading: "Dibina untuk perniagaan yang tidak mahu menghadkan diri.",
    features: [
      {
        number: "01",
        title: "Cloud + Offline",
        body: "Jualan jalan walaupun internet down. Sync automatik bila online balik.",
      },
      {
        number: "02",
        title: "Stok tanpa had",
        body: "Purchase order, GRN, stok adjustment, laporan stok — semuanya satu tempat.",
      },
      {
        number: "03",
        title: "Pengurusan pekerja",
        body: "Buat akaun staf, set hak akses, jejak komisen, dapat alert bila ada login mencurigakan.",
      },
      {
        number: "04",
        title: "Laporan kewangan automatik",
        body: "Net profit, kos operasi, overhead — kira automatik tanpa accounting software berasingan.",
      },
      {
        number: "05",
        title: "Marketing terbina dalam",
        body: "Loyalty points, customer database, laporan top-selling — tukar pelanggan one-time jadi pelanggan tetap.",
      },
      {
        number: "06",
        title: "LHDN E-Invoice sedia",
        body: "MyInvois compliant. Auto-submit e-invoice tanpa kerja tambahan.",
      },
    ],
  },
  featureDeepDive: {
    eyebrow: "Stok di mana-mana",
    heading: "Lihat stok anda hidup-hidup, di setiap cawangan.",
    bullets: [
      "Purchase order auto-jana bila stok rendah",
      "GRN dan stock adjustment dengan audit trail penuh",
      "Laporan stok per-cawangan, real-time",
    ],
    cta: "Lihat semua ciri",
    dashboardView: "Inventori",
    dashboardSubview: "Stok rendah · 3 SKU",
  },
  trust: {
    items: [
      {
        title: "Trademark berdaftar MyIPO",
        body: "Disahkan dan dilindungi secara sah di Malaysia.",
        icon: "BadgeCheck",
      },
      {
        title: "Tersedia di 177 negara",
        body: "Dijumpai di Google Play di seluruh dunia.",
        icon: "Globe2",
      },
      {
        title: "Disokong Astana Group sejak 2020",
        body: "Lima tahun pengalaman dengan PKS Malaysia.",
        icon: "Shield",
      },
      {
        title: "Bersaudara dengan MCBIZ",
        body: "Hardware dan software ekosistem yang sama.",
        icon: "Link2",
      },
    ],
  },
  finalCta: {
    heading: "Sedia untuk berkembang tanpa had?",
    subtitle:
      "Hubungi kami di WhatsApp untuk demo percuma, atau tempah sesi konsultasi 30-minit.",
    ctaPrimary: "Hubungi kami di WhatsApp",
    ctaSecondary: "Tempah sesi konsultasi",
    ctaPlayStore: "Muat turun di Google Play",
  },
  footer: {
    manifesto:
      "Astana POS — sistem juruwang pintar yang berkembang dengan perniagaan anda. Tanpa had. Tanpa kompromi.",
    columns: [
      {
        title: "Produk",
        links: [
          { label: "Ciri-ciri", href: "/features" },
          { label: "Industri", href: "/industries" },
          { label: "Harga", href: "/pricing" },
          { label: "Muat turun", href: "play-store" },
        ],
      },
      {
        title: "Syarikat",
        links: [
          { label: "Tentang kami", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Hubungi", href: "/contact" },
        ],
      },
      {
        title: "Sumber",
        links: [
          { label: "Hub registrasi", href: "hub-register" },
          { label: "Log masuk", href: "hub-login" },
          { label: "MCBIZ (hardware)", href: "mcbiz" },
        ],
      },
      {
        title: "Sah",
        links: [
          { label: "Polisi privasi", href: "/legal/privacy" },
          { label: "Terma perkhidmatan", href: "/legal/terms" },
        ],
      },
    ],
    copyright: "© 2026 Astana Group Sdn Bhd. Semua hak terpelihara.",
    siblingPill: "Sebahagian daripada Astana Group · Lihat juga: MCBIZ",
  },
  dashboard: {
    urlBar: "app.astanabiz.com",
    todayLabel: "Jualan hari ini",
    today: 43567,
    todayPrefix: "RM",
    trendLabel: "7 hari lepas",
    lowStockLabel: "Stok rendah",
    lowStockCount: 3,
    lowStockUnit: "item",
    productList: [
      { name: "Nasi Lemak Ayam", qty: 142, price: "RM 8.50" },
      { name: "Teh Tarik", qty: 98, price: "RM 3.20" },
      { name: "Roti Canai", qty: 76, price: "RM 2.50" },
    ],
    miniViewInventory: {
      title: "Inventori",
      summary: "412 SKU aktif",
      rows: [
        { name: "Cookies Coklat 100g", status: "Stok rendah", qty: 6 },
        { name: "Kopi O Sachet", status: "Stok rendah", qty: 4 },
        { name: "Susu Pekat 397g", status: "Stok rendah", qty: 9 },
      ],
    },
  },
  a11y: {
    whatsappFloat: "Hubungi kami di WhatsApp",
    skipToContent: "Lompat ke kandungan utama",
    decorativeDashboard: "Gambaran papan pemuka Astana POS",
  },
};
