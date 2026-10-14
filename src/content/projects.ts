import type { Locale } from "@/i18n/dictionaries";

// Portfolio content. Each category gets its own page at /[locale]/work/[slug] listing
// every project in it. Add projects to `projects` below; screenshots go in /public/projects/.

type Text = Record<Locale, string>;

export type CategorySlug = "education" | "shopify" | "wordpress" | "landing" | "erp" | "restaurant";

export type Category = {
  slug: CategorySlug;
  mock: "course" | "store" | "landing" | "dashboard" | "pos"; // illustration used on the card
  title: Text;
  tag: Text;
  desc: Text;
};

export type Project = {
  category: CategorySlug;
  name: Text;
  summary: Text; // the client's problem and what was built, 1–2 sentences
  result?: Text; // a real, measurable outcome (optional)
  status: "delivered" | "progress";
  link?: string;
  tech: string[];
  cover?: string; // presentation image (browser + phone mockup) shown on the home page card
  images: string[]; // desktop screenshots, e.g. "/projects/my-store/home.webp" — first one is the cover
  mobileImages?: string[]; // phone screenshots, shown in phone frames
};

export const categories: Category[] = [
  {
    slug: "education",
    mock: "course",
    tag: { ar: "تعليم", en: "Education" },
    title: { ar: "منصات تعليمية", en: "E-learning platforms" },
    desc: {
      ar: "منصات تعليم أونلاين بكورسات وحسابات طلاب ومتابعة للتقدم.",
      en: "Online learning platforms with courses, student accounts and progress tracking.",
    },
  },
  {
    slug: "shopify",
    mock: "store",
    tag: { ar: "تجارة إلكترونية", en: "E-commerce" },
    title: { ar: "متاجر Shopify", en: "Shopify stores" },
    desc: {
      ar: "متاجر Shopify بثيمات مخصصة ودفع وشحن وتجربة شراء سلسة.",
      en: "Custom-themed Shopify stores with payments, shipping and a smooth checkout.",
    },
  },
  {
    slug: "wordpress",
    mock: "store",
    tag: { ar: "تجارة إلكترونية", en: "E-commerce" },
    title: { ar: "مواقع ومتاجر WordPress", en: "WordPress & WooCommerce" },
    desc: {
      ar: "مواقع WordPress ومتاجر WooCommerce يديرها فريق العميل بنفسه.",
      en: "WordPress sites and WooCommerce stores the client's team runs on their own.",
    },
  },
  {
    slug: "landing",
    mock: "landing",
    tag: { ar: "تسويق", en: "Marketing" },
    title: { ar: "صفحات الهبوط", en: "Landing pages" },
    desc: {
      ar: "صفحات هبوط للحملات مبنية للسرعة والوضوح وجمع العملاء المحتملين.",
      en: "Campaign landing pages built for speed, clarity and lead capture.",
    },
  },
  {
    slug: "erp",
    mock: "dashboard",
    tag: { ar: "أنظمة إدارة", en: "Business systems" },
    title: { ar: "أنظمة ERP", en: "ERP systems" },
    desc: {
      ar: "المخزون والمبيعات والعملاء والحسابات في نظام واحد على مقاس النشاط.",
      en: "Inventory, sales, customers and accounts in one system built around the business.",
    },
  },
  {
    slug: "restaurant",
    mock: "pos",
    tag: { ar: "مطاعم", en: "Restaurants" },
    title: { ar: "أنظمة المطاعم", en: "Restaurant systems" },
    desc: {
      ar: "الطلبات ونقاط البيع والمطبخ والمخزون في نظام واحد مترابط.",
      en: "Ordering, POS, kitchen and inventory — one connected system.",
    },
  },
];

export const projects: Project[] = [
  {
    category: "landing",
    name: { ar: "كوركت للخدمات المحاسبية", en: "Correct For Accounting Service" },
    summary: {
      ar: "كانت الشركة تحتاج صفحة هبوط حديثة وموثوقة تعكس خبرتها الممتدة لأكثر من 10 سنوات، وتعرض خدماتها المحاسبية وأنظمة ERP بشكل واضح ومباشر. صممنا وطورنا صفحة هبوط تفاعلية تركّز على تحويل الزوار، تبرز الأرقام ومراحل العمل وسابقة الأعمال لتعزيز الثقة وتشجيع طلب الاستشارة المجانية.",
      en: "The firm needed a modern, trustworthy landing page that reflects 10+ years of experience and presents its accounting services and ERP solutions clearly. We designed and built a conversion-focused, interactive landing page that highlights key numbers, the engagement process and past work to build trust and drive free-consultation requests.",
    },
    status: "delivered",
    link: "https://correct-eg.com",
    tech: [],
    cover: "/projects/correct/cover-standing.webp",
    images: [
      "/projects/correct/hero.webp",
      "/projects/correct/services.webp",
      "/projects/correct/why.webp",
      "/projects/correct/reviews.webp",
      "/projects/correct/industries.webp",
    ],
    mobileImages: [
      "/projects/correct/mobile-hero.webp",
      "/projects/correct/mobile-services.webp",
      "/projects/correct/mobile-why.webp",
      "/projects/correct/mobile-reviews.webp",
    ],
  },
  {
    category: "shopify",
    name: { ar: "متجر الحداد", en: "El-Haddad Store" },
    summary: {
      ar: "الحداد متجر لأدوات المطبخ والمائدة، من أطقم الصيني والحلل لأطقم العشاء والأدوات المنزلية، وكان محتاج متجر إلكتروني يعرض تشكيلة كبيرة من المنتجات والماركات بشكل منظم وسهل التصفح. بنينا متجر Shopify عربي بالكامل، بأقسام وماركات واضحة، وعروض وخصومات، وصفحات منتجات مصممة للشراء السريع، ومتوافق تمامًا مع الموبايل.",
      en: "El-Haddad sells kitchenware and tableware, from porcelain and cookware sets to dinner sets and home essentials, and needed an online store that presents a large catalog of products and brands in a clear, easy-to-browse way. We built a fully Arabic Shopify store with clear categories and brands, offers and discounts, product pages designed for quick checkout, and a fully mobile-friendly experience.",
    },
    status: "delivered",
    link: "https://alhadadd.myshopify.com",
    tech: ["Shopify"],
    cover: "/projects/elhaddad/cover-kitchen.webp",
    images: [
      "/projects/elhaddad/home.webp",
      "/projects/elhaddad/collections.webp",
      "/projects/elhaddad/bestsellers.webp",
      "/projects/elhaddad/collection.webp",
      "/projects/elhaddad/product-dinner.webp",
    ],
    mobileImages: [
      "/projects/elhaddad/mobile-home.webp",
      "/projects/elhaddad/mobile-collections.webp",
      "/projects/elhaddad/mobile-collection.webp",
      "/projects/elhaddad/mobile-product-dinner.webp",
    ],
  },
  {
    category: "wordpress",
    name: { ar: "منجز لتجارة الموبايلات", en: "Moungez Mobile Trading" },
    summary: {
      ar: "منجز تاجر جملة للموبايلات والإكسسوارات، وكان محتاج متجر إلكتروني يخدم التجار تحديدًا: يعرض الهواتف والإكسسوارات بالماركات والأقسام، ويخفي أسعار الجملة إلا للتجار المسجلين. بنينا متجر WordPress وWooCommerce بهوية منجز، فيه تصفح حسب الماركة والقسم، وتسجيل حسابات للتجار لعرض الأسعار، ولوحة تحكم يدير منها فريق منجز المنتجات بنفسه.",
      en: "Moungez is a wholesale supplier of mobile phones and accessories and needed an online store built for traders: browsing phones and accessories by brand and category, with wholesale prices visible only to registered traders. We built a WordPress and WooCommerce store in Moungez's identity, with brand and category browsing, trader accounts that unlock pricing, and a dashboard the Moungez team uses to manage products themselves.",
    },
    status: "delivered",
    link: "https://moungez.com",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    cover: "/projects/moungez/cover-v3.webp",
    images: [
      "/projects/moungez/home.webp",
      "/projects/moungez/brands.webp",
      "/projects/moungez/smartphones.webp",
      "/projects/moungez/accessories.webp",
      "/projects/moungez/category.webp",
      "/projects/moungez/product.webp",
    ],
    mobileImages: [
      "/projects/moungez/mobile-home.webp",
      "/projects/moungez/mobile-section.webp",
      "/projects/moungez/mobile-category.webp",
      "/projects/moungez/mobile-product.webp",
    ],
  },
  {
    category: "education",
    name: { ar: "Smart Core School", en: "Smart Core School" },
    summary: {
      ar: "تعلّم Smart Core School الأطفال والشباب البرمجة من Scratch حتى الذكاء الاصطناعي، إلى جانب مسار منفصل لكورسات البكالوريا، وكانت تحتاج موقعًا يشرح المسارين بوضوح لأولياء الأمور ويحوّل الزيارات إلى حجوزات. بنينا موقعًا بهوية تقنية حديثة يعرض ستة مسارات برمجة متدرّجة حسب السن ومستويات البكالوريا، ورحلة الطالب من أول خطوة، وآراء الطلاب وأولياء الأمور، مع نموذج للحجز والتواصل.",
      en: "Smart Core School teaches kids and teens programming from Scratch to AI, with a separate Baccalaureate track, and needed a website that explains both tracks clearly to parents and turns visits into bookings. We built a site with a modern tech identity that presents six age-based programming tracks and the Baccalaureate levels, the student journey from day one, student and parent reviews, and a booking and contact form.",
    },
    status: "delivered",
    link: "https://www.sc-school.com",
    tech: ["React", "Vite"],
    cover: "/projects/sc-school/cover-mint.webp",
    images: [
      "/projects/sc-school/home.webp",
      "/projects/sc-school/features.webp",
      "/projects/sc-school/tracks.webp",
      "/projects/sc-school/journey.webp",
      "/projects/sc-school/bacc.webp",
    ],
    mobileImages: [
      "/projects/sc-school/mobile-home.webp",
      "/projects/sc-school/mobile-tracks.webp",
      "/projects/sc-school/mobile-courses.webp",
      "/projects/sc-school/mobile-bacc.webp",
    ],
  },
  {
    category: "erp",
    name: { ar: "نظام منار لتجارة الملابس بالجملة", en: "Manar wholesale clothing ERP" },
    summary: {
      ar: "منار تاجر ملابس بالجملة كان يدير البيع والمخزون وحسابات العملاء والمصاريف يدويًا. صممنا نظام ERP عربيًا يناسب طريقة عمله اليومية: بيع نقدي وآجل وفواتير، ومخزون بالموديل مع تنبيه للبضاعة الراكدة، واستلام من المصنع وشراء قماش، وحسابات العملاء ومديونياتهم، والخزن والتحويل بينها، وتقارير تبيّن أكثر الموديلات ربحًا ورأس المال. والنظام مصمم للعمل من الموبايل بنفس سهولة الكمبيوتر.",
      en: "Manar, a wholesale clothing trader, was running sales, stock, customer balances and expenses by hand. We designed an Arabic ERP around his daily routine: cash and credit sales with invoices, per-model stock with slow-mover alerts, factory receipts and fabric purchases, customer accounts and debts, cash boxes and transfers, and reports on the most profitable models and capital. It works from a phone just as easily as from a computer.",
    },
    status: "progress",
    link: "https://manar-erp.vercel.app",
    tech: ["Next.js", "React"],
    cover: "/projects/manar/cover-phones.webp",
    images: [
      "/projects/manar/home.webp",
      "/projects/manar/sell.webp",
      "/projects/manar/inventory.webp",
      "/projects/manar/accounts.webp",
      "/projects/manar/reports.webp",
      "/projects/manar/invoices.webp",
    ],
    mobileImages: [
      "/projects/manar/mobile-home.webp",
      "/projects/manar/mobile-sell.webp",
      "/projects/manar/mobile-inventory.webp",
      "/projects/manar/mobile-reports.webp",
    ],
  },
  {
    category: "restaurant",
    name: { ar: "نظام مطعم Ming", en: "Ming restaurant system" },
    summary: {
      ar: "نبني حاليًا نظامًا مخصصًا لمطعم Ming من الصفر على طريقة عمله، وسنعرض تفاصيله وصوره عند الإطلاق.",
      en: "We're currently building a custom system for Ming restaurant from scratch around how it works. Details and screenshots will follow at launch.",
    },
    status: "progress",
    tech: [],
    images: [],
  },
  // Example — copy, fill in and uncomment:
  // {
  //   category: "shopify",
  //   name: { ar: "متجر …", en: "… store" },
  //   summary: { ar: "…", en: "…" },
  //   result: { ar: "…", en: "…" },
  //   status: "delivered",
  //   link: "https://…",
  //   tech: ["Shopify", "Liquid"],
  //   images: ["/projects/…-home.png"],
  // },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function projectsIn(slug: CategorySlug) {
  return projects.filter((p) => p.category === slug);
}

// The first project in a category that has a presentation image
export function coverFor(slug: CategorySlug) {
  return projectsIn(slug).find((p) => p.cover)?.cover;
}
