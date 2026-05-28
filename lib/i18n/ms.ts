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
  // v3 homepage sections
  heroSection: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
    checks: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBand: {
    subtitle: string;
    stats: Stat[];
  };
  approachGrid: {
    eyebrow: string;
    heading: string;
    body: string;
    items: Array<{ title: string; body: string }>;
  };
  featureBlocks: {
    salesAnalytics: { eyebrow: string; title: string; body: string; bullets: string[]; cta: string };
    inventory: { eyebrow: string; title: string; body: string; bullets: string[]; cta: string };
    multiStore: { eyebrow: string; title: string; body: string; bullets: string[]; cta: string };
    payments: { eyebrow: string; title: string; body: string; bullets: string[]; cta: string };
  };
  brandPillars: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    items: Array<{ name: string; tagline: string; body: string; visitLabel: string }>;
  };
  industriesGrid: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
    items: Array<{ title: string; examples: string; features: string }>;
  };
  testimonials: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    items: Array<{ name: string; role: string; title: string; body: string }>;
  };
  partnerCta: {
    chip: string;
    heading: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  // Phase 2 inner pages
  pricingPage: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
    modulesEyebrow: string;
    modulesHeading: string;
    modulesBody: string;
    modules: Array<{ name: string; description: string }>;
    subscribeHeading: string;
    subscribeBody: string;
    subscribeCta: string;
    faqEyebrow: string;
    faqHeading: string;
    faqs: Array<{ q: string; a: string }>;
  };
  featuresPage: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
  };
  aboutPage: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
    missionEyebrow: string;
    missionHeading: string;
    missionBody: string;
  };
  industriesPage: {
    eyebrow: string;
    headingPart1: string;
    headingAccent: string;
    headingPart2: string;
    body: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    body: string;
    options: Array<{ icon: string; title: string; body: string; cta: string; href: string }>;
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
  heroSection: {
    eyebrow: "Sistem Jualan · Cloud + Offline · E-Invoice LHDN sedia",
    headingPart1: "Kuatkan perniagaan anda",
    headingAccent: "tanpa had",
    headingPart2: "Di mana-mana, bila-bila masa.",
    body: "Urus dan pantau jualan, inventori, dan pekerja dari satu POS cloud. Muat turun dan daftar sekarang untuk akses percuma tanpa had kepada semua laporan dan ciri.",
    checks: [
      "Laporan & ciri tanpa had",
      "Sync cloud + offline",
      "1 bulan percubaan percuma — tanpa kad",
    ],
    ctaPrimary: "Mula sekarang — percuma",
    ctaSecondary: "Lihat harga",
  },
  trustBand: {
    subtitle: "Dipercayai oleh PKS di seluruh 14 negeri Malaysia & 177 buah negara",
    stats: [
      { value: 10000, suffix: "+", label: "Pemasangan" },
      { value: 177, suffix: "", label: "Negara di Play Store" },
      { value: 144, suffix: "", label: "Ciri terbina dalam" },
      { value: 300, suffix: "%", label: "Peningkatan prestasi" },
    ],
  },
  approachGrid: {
    eyebrow: "Pendekatan kami",
    heading: "Satu sistem. Setiap bahagian kedai anda.",
    body: "Enam modul yang beroperasi sebagai satu — dibina untuk pemilik perniagaan kecil yang efisien dan berkembang pesat.",
    items: [
      { title: "Perkhidmatan Cloud", body: "Pantau dan urus jualan, pekerja, inventori, laporan dan pelbagai kedai tanpa had." },
      { title: "Bekerja Offline", body: "Teruskan merekod jualan dan operasi walaupun offline; pangkalan data sync ke cloud sebaik online semula." },
      { title: "Pengurusan Inventori", body: "Buat pesanan pembelian, nota terima barang, anggaran, laporan sejarah inventori dan urus stok." },
      { title: "Pengurusan Pekerja", body: "Cipta pengguna, tetapkan komisen staf, urus hak akses, amaran log masuk dan jualan mengikut pekerja." },
      { title: "Pengurusan Kewangan", body: "Ringkasan jualan automatik dengan penapis tarikh tanpa had — kira untung bersih sebelum COGS, overhead dan opex." },
      { title: "Pengurusan Pemasaran", body: "Kenalpasti produk terlaris, analisis tingkah laku pelanggan dan gunakan mata penebusan untuk memupuk kesetiaan." },
    ],
  },
  featureBlocks: {
    salesAnalytics: {
      eyebrow: "Analitik Jualan",
      title: "Lihat setiap ringgit bergerak — dari telefon, tablet atau desktop.",
      body: "Akses laporan anda dari telefon pintar, tablet atau komputer bila-bila masa, di mana-mana.",
      bullets: [
        "Lihat hasil, jualan purata dan keuntungan sekilas pandang",
        "Jejak trend jualan dan bertindak balas kepada perubahan dengan segera",
        "Tentukan produk dan kategori terlaris",
        "Sejarah jualan penuh dengan julat tarikh tanpa had",
        "Eksport ke hamparan dalam satu klik",
      ],
      cta: "Terokai laporan",
    },
    inventory: {
      eyebrow: "Pengurusan Inventori",
      title: "Jangan kehabisan stok lagi.",
      body: "Keterlihatan stok masa nyata di setiap kedai dengan amaran stok rendah automatik.",
      bullets: [
        "Jejak paras stok dalam masa nyata",
        "Terima amaran stok rendah automatik",
        "Hantar pesanan kepada pembekal dan jejak penerimaan",
        "Pindah stok antara kedai anda",
        "Cetak label barcode dalam beberapa saat",
      ],
      cta: "Lihat alat inventori",
    },
    multiStore: {
      eyebrow: "Pengurusan Berbilang Kedai",
      title: "Berkembang dari satu kedai ke seratus.",
      body: "Urus setiap produk, pekerja dan pelanggan di pelbagai lokasi dari satu akaun.",
      bullets: [
        "Bandingkan prestasi kedai anda bersebelahan",
        "Produk, staf dan pelanggan berpusat merentasi lokasi",
        "Tingkatkan perniagaan anda dengan automasi ERP",
      ],
      cta: "Terokai berbilang kedai",
    },
    payments: {
      eyebrow: "Pengurusan Kewangan",
      title: "Tuntaskan setiap pembayaran, secara automatik.",
      body: "Ringkasan jualan automatik dengan penapis tarikh tanpa had — lihat untung bersih sebelum COGS, overhead dan opex.",
      bullets: [
        "P&L, Kunci kira-kira, AP & AR — sudah terbina",
        "Pengiraan gaji EPF, SOCSO, EIS",
        "Margin keuntungan, mark-up dan nilai inventori",
      ],
      cta: "Lihat suite kewangan",
    },
  },
  brandPillars: {
    eyebrow: "Jenama kami",
    headingPart1: "Satu ekosistem.",
    headingAccent: "Tiga tiang.",
    items: [
      {
        name: "Astana POS",
        tagline: "Perisian",
        body: "Perisian pengurusan jualan dan perniagaan untuk perniagaan kecil dan sederhana. Mulakan dengan percubaan 1 bulan, bayar hanya apabila berpuas hati, dan tamatkan bila-bila masa.",
        visitLabel: "Lawati Astana POS",
      },
      {
        name: "Astana Biz",
        tagline: "Perkhidmatan",
        body: "Pemasangan, konfigurasi, latihan dan waranti untuk lebih 10,000 penempatan. Pelbagai perkhidmatan inovatif untuk memastikan setiap klien mendapat penyelesaian terbaik.",
        visitLabel: "Lawati Astana Biz",
      },
      {
        name: "MCBIZ",
        tagline: "Perkakasan",
        body: "Jenama perkakasan untuk perniagaan kecil. Terminal, pencetak dan periferal berkualiti tinggi pada harga terendah — lebih 10,000 dijual dalam talian.",
        visitLabel: "Lawati MCBIZ",
      },
    ],
  },
  industriesGrid: {
    eyebrow: "Mengikut industri",
    headingPart1: "144 ciri terbaik untuk",
    headingAccent: "matlamat perniagaan",
    headingPart2: "anda.",
    body: "Walau apa pun yang anda jual, Astana mempunyai alat yang disesuaikan siap untuk anda.",
    items: [
      { title: "Restoran, Kafe, Kiosk", examples: "F&B", features: "Menu QR · pesanan meja · pencetak dapur · tempahan · pisah pesanan · paparan pelanggan · giliran buzzer." },
      { title: "Pendandan Rambut, Salun, Outlet", examples: "Kecantikan", features: "Komisen staf · keahlian · kalendar tempahan · pengurusan syif · nota." },
      { title: "Hotel, Pet Shop, Gim, Klinik", examples: "Tempahan", features: "Janji temu · jadual tempahan · keahlian · kehadiran staf · pelanggan tetap." },
      { title: "Runcit, Farmasi, Barang Runcit", examples: "Runcit", features: "Pesanan pembelian · penerimaan · nilai inventori · pembekal · pemindahan · tarikh luput · amaran inventori rendah." },
      { title: "Perkhidmatan, Membaiki Kereta/Motor, Pengedar, Dobi", examples: "Perkhidmatan", features: "Jualan kredit · kalendar janji temu · pengurusan penghutang · anggaran · invois · tahap harga." },
      { title: "Cuci Kereta, Pengilatan, Butik", examples: "Kepakaran", features: "Kad kesetiaan · nota pelanggan · tempahan · pelan diskaun · CRM · keahlian." },
    ],
  },
  testimonials: {
    eyebrow: "Klien kami berkata",
    headingPart1: "Lebih 10,000 pemilik.",
    headingAccent: "Satu platform.",
    items: [
      {
        name: "Sophia",
        role: "Pemilik Perniagaan, AS",
        title: "Mesra pengguna. Mudah digunakan. Bertanggungjawab.",
        body: "Saya telah menggunakan Astana POS untuk beberapa kedai dan mereka memberikan kami penyelesaian juruwang terbaik dan ciri yang hebat. Pengalamannya menyenangkan, profesional dan melebihi jangkaan kami. Pasukan sentiasa berfikir untuk memperbaiki aplikasi mereka.",
      },
      {
        name: "Wati",
        role: "Pemilik Perniagaan, Restoran",
        title: "Bandingkan harga dan features mereka!",
        body: "Itu yang mampu saya katakan, mereka memberikan servis dan pandangan yang baik untuk bisnes saya. Ialah baru buka kedai, mereka menggunakan pengalaman untuk memberikan tawaran harga fleksibal dan sangat murah berbanding di pasaran. Terima kasih Astana POS.",
      },
      {
        name: "Haiqal",
        role: "Pengedar DNA · Distributor · Reseller",
        title: "Boleh dipercayai. Responsif. Rakan kongsi profesional.",
        body: "Aplikasi Astana POS telah bekerjasama dengan pasukan DNA untuk beberapa projek — termasuk menjadi pengedar nombor 1 untuk perisian mereka merentasi lebih 3,000 klien. Kami teruja untuk meneruskan perjalanan bersama Astana POS.",
      },
    ],
  },
  partnerCta: {
    chip: "Bermitra dengan kami",
    heading: "Bersama, kita boleh berkembang dan mengubah dunia.",
    body: "Sertai lebih 10,000 pemilik kedai Malaysia yang menggunakan Astana untuk beroperasi lebih cekap, menjual lebih banyak dan kekal dalam kawalan — di mana-mana, bila-bila masa.",
    ctaPrimary: "Mula sekarang — percuma",
    ctaSecondary: "Jadi rakan kongsi",
  },
  pricingPage: {
    eyebrow: "Harga",
    headingPart1: "Satu pelan.",
    headingAccent: "Semua ciri.",
    headingPart2: "Tiada kejutan.",
    body: "Mulakan percubaan percuma selama 1 bulan dengan akses penuh kepada semua 6 modul. Tiada kad kredit diperlukan.",
    modulesEyebrow: "Apa yang anda dapat",
    modulesHeading: "6 modul. Semua percuma semasa percubaan.",
    modulesBody: "Setiap modul beroperasi bersama-sama untuk memberikan pandangan lengkap perniagaan anda.",
    modules: [
      { name: "Dashboard", description: "Pantau jualan tanpa had, produk terlaris, komisen staf melalui aplikasi mudah alih." },
      { name: "Perakaunan", description: "Untung Rugi, Kunci Kira-kira, Akaun Belum Bayar/Terima, panduan percukaian." },
      { name: "Pemasaran", description: "Blast pemasaran melalui e-mel & WhatsApp, program kesetiaan, peruntukan belanjawan." },
      { name: "Operasi", description: "Pengurusan inventori, margin keuntungan, mark-up, nilai inventori, potensi untung." },
      { name: "HRM", description: "Gaji dengan pengiraan EPF, SOCSO, EIS, surat tawaran, KPI, pengurusan kehadiran & cuti." },
      { name: "Pentadbiran", description: "5 SOP perniagaan, perkhidmatan pelanggan, onboarding staf." },
    ],
    subscribeHeading: "Teruskan lepas percubaan.",
    subscribeBody: "Langgan melalui WhatsApp — pilih bulanan atau tahunan. Harga fleksibel, tamatkan bila-bila masa.",
    subscribeCta: "Hubungi kami untuk harga",
    faqEyebrow: "Soalan lazim",
    faqHeading: "Yang selalu ditanya.",
    faqs: [
      { q: "Boleh guna offline?", a: "Ya — Astana POS terus merekod jualan walaupun tiada internet. Data sync automatik bila online semula." },
      { q: "Ada percubaan percuma?", a: "Ya, 1 bulan akses penuh kepada semua ciri. Tiada kad kredit diperlukan." },
      { q: "Berapa banyak produk atau staf boleh saya tambah?", a: "Tanpa had. Produk, pengguna, pelanggan, laporan — semua tanpa had." },
      { q: "Adakah ia menyokong pengimbas barcode?", a: "Ya, pengimbasan barcode sudah terbina dalam dan berfungsi pada semua peranti." },
      { q: "Di mana data saya disimpan?", a: "Data disandarkan secara automatik ke portal Backoffice cloud, dan juga disimpan pada peranti semasa offline." },
    ],
  },
  featuresPage: {
    eyebrow: "Ciri-ciri",
    headingPart1: "144 ciri untuk",
    headingAccent: "setiap perniagaan",
    headingPart2: "di Malaysia.",
    body: "Dari jualan dan inventori hinggalah gaji dan pemasaran — semua yang anda perlukan dalam satu sistem cloud.",
  },
  aboutPage: {
    eyebrow: "Tentang kami",
    headingPart1: "Membina untuk",
    headingAccent: "10,000 perniagaan",
    headingPart2: "seterusnya.",
    body: "Astana POS bermula dari satu matlamat: bantu pemilik perniagaan kecil Malaysia berkembang tanpa had.",
    missionEyebrow: "Misi kami",
    missionHeading: "Kejayaan adalah misi kami. Terus maju ke hadapan.",
    missionBody: "Sejak 2020, Astana Group telah membantu lebih 10,000 perniagaan kecil di 14 negeri Malaysia — dan 177 buah negara di seluruh dunia — untuk beroperasi lebih cekap, menjual lebih banyak dan berkembang tanpa had.\n\nKami percaya setiap pemilik perniagaan berhak mendapat alat yang sama seperti syarikat besar. Itulah sebabnya Astana POS menawarkan ciri tanpa had pada harga yang terjangkau — supaya anda boleh fokus pada perniagaan anda, bukan sistem.",
  },
  industriesPage: {
    eyebrow: "Industri",
    headingPart1: "Untuk setiap jenis",
    headingAccent: "perniagaan",
    headingPart2: "di Malaysia.",
    body: "Walau apa pun yang anda jual, Astana POS ada alat yang disesuaikan untuk anda — siap untuk digunakan hari ini.",
  },
  contactPage: {
    eyebrow: "Hubungi",
    heading: "Mari berbual.",
    body: "Pilih cara yang paling mudah untuk anda. Kami sedia membantu.",
    options: [
      {
        icon: "MessageCircle",
        title: "WhatsApp",
        body: "Hubungi kami terus di WhatsApp untuk demo percuma atau soalan tentang Astana POS.",
        cta: "Mula berbual",
        href: "whatsapp",
      },
      {
        icon: "UserPlus",
        title: "Daftar akaun",
        body: "Daftar di Hub Astana untuk mula percubaan percuma 1 bulan anda hari ini.",
        cta: "Daftar sekarang",
        href: "hub-register",
      },
      {
        icon: "MapPin",
        title: "Pejabat kami",
        body: "No 19A Jalan Astana Alam E13/E, Bandar Puncak Alam 42300, Selangor. +603 3396 5656",
        cta: "Lihat peta",
        href: "maps",
      },
    ],
  },
};
