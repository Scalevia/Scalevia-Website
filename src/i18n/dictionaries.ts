export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Content flagged with `placeholder: true` renders with a visible "placeholder" badge
// until the real content is ready.

const en = {
  meta: {
    title: "ScaleVia — Software that scales with your business",
    description:
      "ScaleVia builds websites, mobile apps, ERP systems and Shopify & WordPress stores for small and medium businesses. Your Way to Scale.",
  },
  common: {
    placeholder: "Placeholder",
    inProgress: "In progress",
    delivered: "Delivered",
    switchLang: "العربية",
    switchLangLabel: "Switch to Arabic",
    themeLabel: "Toggle dark mode",
    menu: "Menu",
    close: "Close",
  },
  nav: {
    links: [
      { href: "#services", label: "Services" },
      { href: "#solutions", label: "Solutions" },
      { href: "#work", label: "Work" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Book a free consultation",
  },
  hero: {
    titleA: "The systems your business",
    titleHighlight: "scales",
    titleB: "on.",
    subtitle:
      "We design and build websites, mobile apps and ERP systems for small and medium businesses — fast, well-engineered, and supported long after launch.",
    primaryCta: "Book a free consultation",
    secondaryCta: "See our work",
  },
  clients: {
    title: "Trusted by",
  },
  solutions: {
    eyebrow: "Industries",
    title: "Systems shaped around your industry",
    subtitle: "Every industry runs differently. Restaurants and education have complete solutions under their own names, and every system is built from scratch for its client.",
    alsoLabel: "We also build for",
    industries: [
      {
        icon: "stethoscope",
        title: "Clinics & Healthcare",
        desc: "Online booking, patient records and reminders that cut no-shows and paperwork.",
      },
      {
        icon: "store",
        title: "Retail & Trading",
        desc: "Online stores, wholesale management and real-time stock across every channel.",
      },
      {
        icon: "factory",
        title: "Factories & Manufacturing",
        desc: "Production tracking, raw materials and orders — visible in one dashboard.",
      },
    ],
    explore: "Explore {name}",
    back: "All industries",
    whyTitle: "Why build it with us",
    stepsTitle: "How we work",
    steps: [
      { title: "Free consultation", desc: "We learn how you work and what you need." },
      { title: "Design", desc: "We design the screens and you approve them before we build." },
      { title: "Build with weekly demos", desc: "You see what's done every week and give feedback early." },
      { title: "Launch & support", desc: "We launch, train your team and stay with you after launch." },
    ],
    workTitle: "From our work in this industry",
    workCta: "See the project",
    alsoTitle: "Also from ScaleVia",
  },
  services: {
    eyebrow: "What we build",
    title: "One partner for your whole digital stack",
    subtitle: "From your first website to the system that runs your entire operation.",
    items: [
      {
        icon: "globe",
        title: "Websites & Landing Pages",
        desc: "Fast, SEO-ready websites and high-converting landing pages that turn visitors into customers.",
      },
      {
        icon: "smartphone",
        title: "Mobile Apps",
        desc: "iOS and Android apps your customers actually enjoy using, built on modern cross-platform stacks.",
      },
      {
        icon: "layers",
        title: "ERP & Business Systems",
        desc: "Inventory, sales, accounting and HR in one system — tailored to how your business really works.",
      },
      {
        icon: "shopping-bag",
        title: "Shopify Stores",
        desc: "Conversion-focused Shopify stores with custom themes, payments and shipping set up end to end.",
      },
      {
        icon: "layout",
        title: "WordPress & WooCommerce",
        desc: "Flexible WordPress sites and WooCommerce stores your team can manage without a developer.",
      },
      {
        icon: "sparkles",
        title: "Custom Solutions",
        desc: "Have something unique in mind? We scope, design and engineer it around your exact needs.",
      },
    ],
  },
  transform: {
    eyebrow: "The difference",
    title: "From scattered work to one system",
    before: "Before ScaleVia",
    after: "After ScaleVia",
    paperTitle: "Orders — Thursday",
    dashTitle: "Operations dashboard",
    auto: "Automatic",
    rows: [
      { before: "Orders tracked on paper and WhatsApp", after: "Every order in one live dashboard" },
      { before: "Stock counted by hand, often wrong", after: "Real-time inventory with low-stock alerts" },
      { before: "Customers can't find you online", after: "A fast website that ranks and converts" },
      { before: "Reports take days in Excel", after: "Instant reports, one click away" },
    ],
  },
  work: {
    eyebrow: "Our work",
    title: "Projects we're proud of",
    subtitle: "Pick a category to see every project we've built in it.",
    view: "View projects",
    back: "All work",
    emptyTitle: "Projects coming soon",
    emptyDesc: "We're preparing the case studies for this category. Want to see similar work? Get in touch.",
    result: "Result",
    visit: "Visit project",
  },
  stack: {
    eyebrow: "Technologies",
    title: "Built with tools the world trusts",
    subtitle: "We pick the right technology for each project: fast, secure and ready to grow.",
    roles: {
      React: "Web interfaces",
      "Next.js": "Fast, SEO-ready websites",
      Flutter: "iOS & Android apps",
      "Node.js": "Servers & APIs",
      NestJS: "Enterprise back-ends",
      Figma: "Interface design",
    } as Record<string, string>,
  },
  pricing: {
    eyebrow: "Pricing",
    title: "A package for every stage of your business",
    subtitle: "Three e-commerce packages, from your first online store to a fully custom brand experience. Anything else gets a custom quote.",
    from: "Starting from",
    soon: "Price coming soon",
    popular: "Most popular",
    showAll: "Show all features (+{n})",
    showLess: "Show less",
    cta: "Get started",
    plans: [
      {
        name: "Starter",
        desc: "For businesses starting their journey that want to present their products professionally.",
        includes: "",
        features: [
          "An online store designed around your brand identity",
          "Custom domain with fast, secure hosting",
          "Products organized into categories and brands",
          "Up to 10 products with images, sizes, colors, stock and descriptions (content provided by you)",
          "Full control dashboard with low-stock alerts",
          "Cash on delivery, with order confirmation emails and instant owner notifications",
          "Fast, mobile-friendly design linked to your social media",
        ],
      },
      {
        name: "Operational Pro",
        desc: "Our most requested package, for businesses aiming for real sales performance and full market coverage.",
        includes: "Everything in Starter, plus:",
        features: [
          "Online payments: credit cards, Meeza and e-wallets",
          "Advanced shipping: cost per city and shipment tracking",
          "Discount coupons to raise conversions and engagement",
          "Advanced sales, product and customer-behavior reports",
          "Mobile app to manage products and orders anywhere",
        ],
      },
      {
        name: "Signature UX/UI",
        desc: "For brands that want a distinctive identity and an exceptional experience that puts them ahead of competitors.",
        includes: "Everything in Operational Pro, plus:",
        features: [
          "A dedicated UI/UX designer for your project",
          "Professional wireframes for the full site structure",
          "A visual identity aligned with your brand personality",
          "100% unique, custom design",
          "A customer journey built on sales psychology",
          "High-converting sales pages",
        ],
      },
    ],
    custom: {
      title: "Have an idea outside these packages?",
      desc: "Custom platforms, business systems, landing pages and mobile apps are priced on scope, technical requirements and features.",
      cta: "Request a custom quote",
    },
  },
  testimonials: {
    eyebrow: "Client stories",
    title: "What our clients say",
    prev: "Previous",
    next: "Next",
    items: [
      { quote: "Client testimonial will appear here once it's ready.", name: "Client name", role: "Role, Company" },
      { quote: "Client testimonial will appear here once it's ready.", name: "Client name", role: "Role, Company" },
      { quote: "Client testimonial will appear here once it's ready.", name: "Client name", role: "Role, Company" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    more: "More questions",
    moreTitle: "More questions",
    items: [
      {
        q: "How long does a project take?",
        a: "It depends on scope. A landing page is much faster than a full ERP. After the consultation you get a written timeline with clear milestones before we start.",
      },
      {
        q: "How much will my project cost?",
        a: "Most projects fit one of our three packages. For custom systems we send a detailed quote based on your requirements — no hidden costs.",
      },
      {
        q: "Do you work with clients outside Egypt?",
        a: "Yes. We work remotely with clear communication and regular demos, so location isn't a barrier.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We offer maintenance and support after launch so your system keeps running smoothly as you grow.",
      },
      {
        q: "Can you work on an existing website or system?",
        a: "Yes. We can review what you have, then improve, extend or rebuild it — whichever makes more sense for your business.",
      },
      {
        q: "Will I be able to manage the content myself?",
        a: "Yes. We build admin panels and train your team so you can update content, products and data without a developer.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Ready to scale your business?",
    subtitle: "Tell us about your project. We'll reply within one business day with next steps.",
    whatsapp: "Chat on WhatsApp",
    whatsappText: "Hi ScaleVia, I'd like to discuss a project.",
    emailLabel: "Or email us",
    phonesLabel: "Call us",
    pageTitle: "Contact us — ScaleVia",
    backHome: "Back to home",
    citiesLabel: "Where we are",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      company: "Company (optional)",
      service: "What do you need?",
      servicePlaceholder: "Choose a service",
      services: [
        "Website / Landing page",
        "Mobile app",
        "ERP / Business system",
        "Shopify store",
        "WordPress / WooCommerce",
        "Restaurant system (Resto)",
        "E-learning platform (Edu)",
        "Something else",
      ],
      message: "Tell us about your project",
      submit: "Send request",
      sending: "Sending…",
      success: "Thanks! We received your request and will get back to you soon.",
      error: "Something went wrong. Please try again or reach us on WhatsApp.",
      required: "Please fill in your name, email and phone.",
      planPrefill: "I'm interested in the {plan} package.",
      solutionPrefill: "I'm interested in {solution}.",
    },
  },
  footer: {
    tagline: "Software, websites and systems for small and medium businesses.",
    rights: "All rights reserved.",
    contact: "Contact",
    legal: "Legal",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "ScaleVia — تقنية تنمو مع أعمالك",
    description:
      "ScaleVia تبني المواقع وتطبيقات الموبايل وأنظمة ERP ومتاجر Shopify وWordPress للشركات الصغيرة والمتوسطة. Your Way to Scale.",
  },
  common: {
    placeholder: "محتوى مؤقت",
    inProgress: "قيد التنفيذ",
    delivered: "تم التسليم",
    switchLang: "English",
    switchLangLabel: "التبديل إلى الإنجليزية",
    themeLabel: "تبديل الوضع الليلي",
    menu: "القائمة",
    close: "إغلاق",
  },
  nav: {
    links: [
      { href: "#services", label: "خدماتنا" },
      { href: "#solutions", label: "حلولنا" },
      { href: "#work", label: "أعمالنا" },
      { href: "#pricing", label: "الأسعار" },
      { href: "#faq", label: "الأسئلة الشائعة" },
    ],
    cta: "احجز استشارة مجانية",
  },
  hero: {
    titleA: "الأنظمة التي",
    titleHighlight: "تكبُر",
    titleB: "بها أعمالك.",
    subtitle:
      "نصمم ونطوّر المواقع وتطبيقات الموبايل وأنظمة ERP للشركات الصغيرة والمتوسطة — بسرعة، وبجودة هندسية عالية، ومع دعم مستمر بعد الإطلاق.",
    primaryCta: "احجز استشارة مجانية",
    secondaryCta: "شاهد أعمالنا",
  },
  clients: {
    title: "عملاء وثقوا بنا",
  },
  solutions: {
    eyebrow: "القطاعات",
    title: "أنظمة مصممة على مقاس قطاعك",
    subtitle: "لكل قطاع طريقة عمل مختلفة. للمطاعم والتعليم حلول متكاملة باسمها، وكل نظام نبنيه من الصفر لعميله.",
    alsoLabel: "ونخدم أيضًا",
    industries: [
      {
        icon: "stethoscope",
        title: "العيادات والرعاية الصحية",
        desc: "حجز أونلاين وملفات مرضى وتذكيرات تقلل المواعيد الضائعة والأوراق.",
      },
      {
        icon: "store",
        title: "التجارة والتجزئة",
        desc: "متاجر إلكترونية وإدارة جملة ومخزون لحظي عبر كل قنوات البيع.",
      },
      {
        icon: "factory",
        title: "المصانع والتصنيع",
        desc: "متابعة الإنتاج والخامات والطلبات في لوحة تحكم واحدة.",
      },
    ],
    explore: "اكتشف {name}",
    back: "كل القطاعات",
    whyTitle: "لماذا تبنيه معنا",
    stepsTitle: "كيف نعمل",
    steps: [
      { title: "استشارة مجانية", desc: "نفهم طريقة عملك وما تحتاجه بالضبط." },
      { title: "التصميم", desc: "نصمم الشاشات وتوافق عليها قبل أن نبدأ البرمجة." },
      { title: "تنفيذ بعرض أسبوعي", desc: "ترى ما أنجزناه كل أسبوع وتعطينا ملاحظاتك أولًا بأول." },
      { title: "الإطلاق والدعم", desc: "نطلق النظام وندرّب فريقك ونبقى معك بعد التشغيل." },
    ],
    workTitle: "من شغلنا في هذا القطاع",
    workCta: "شاهد المشروع",
    alsoTitle: "اكتشف أيضًا",
  },
  services: {
    eyebrow: "ماذا نبني",
    title: "شريك واحد لكل احتياجاتك التقنية",
    subtitle: "من أول موقع لشركتك إلى النظام الذي يدير عملياتك بالكامل.",
    items: [
      {
        icon: "globe",
        title: "المواقع وصفحات الهبوط",
        desc: "مواقع سريعة ومتوافقة مع محركات البحث، وصفحات هبوط تحوّل الزوار إلى عملاء.",
      },
      {
        icon: "smartphone",
        title: "تطبيقات الموبايل",
        desc: "تطبيقات iOS وAndroid يستمتع عملاؤك باستخدامها، مبنية بأحدث التقنيات.",
      },
      {
        icon: "layers",
        title: "أنظمة ERP وإدارة الأعمال",
        desc: "المخزون والمبيعات والحسابات والموارد البشرية في نظام واحد مصمم على طريقة عملك.",
      },
      {
        icon: "shopping-bag",
        title: "متاجر Shopify",
        desc: "متاجر Shopify مصممة للبيع، بثيم مخصص وإعداد كامل للدفع والشحن.",
      },
      {
        icon: "layout",
        title: "WordPress وWooCommerce",
        desc: "مواقع WordPress ومتاجر WooCommerce مرنة يديرها فريقك بدون الحاجة لمبرمج.",
      },
      {
        icon: "sparkles",
        title: "حلول مخصصة",
        desc: "لديك فكرة مختلفة؟ نحللها ونصممها ونبنيها حسب احتياجك بالضبط.",
      },
    ],
  },
  transform: {
    eyebrow: "الفرق",
    title: "من شغل متفرق إلى نظام واحد",
    before: "قبل ScaleVia",
    after: "بعد ScaleVia",
    paperTitle: "طلبات يوم الخميس",
    dashTitle: "لوحة التشغيل",
    auto: "تلقائي",
    rows: [
      { before: "الطلبات على الورق والواتساب", after: "كل الطلبات في لوحة تحكم واحدة مباشرة" },
      { before: "جرد المخزون يدويًا وغالبًا بأخطاء", after: "مخزون لحظي مع تنبيهات عند النقص" },
      { before: "العملاء لا يجدونك على الإنترنت", after: "موقع سريع يظهر في البحث ويجلب عملاء" },
      { before: "التقارير تأخذ أيامًا على Excel", after: "تقارير فورية بضغطة زر" },
    ],
  },
  work: {
    eyebrow: "أعمالنا",
    title: "مشاريع نفخر بها",
    subtitle: "اختر نوع المشروع لتشاهد كل أعمالنا فيه.",
    view: "عرض المشاريع",
    back: "كل الأعمال",
    emptyTitle: "المشاريع قريبًا",
    emptyDesc: "نجهّز دراسات الحالة لهذا النوع حاليًا. تحب تشوف أعمال مشابهة؟ تواصل معنا.",
    result: "النتيجة",
    visit: "زيارة المشروع",
  },
  stack: {
    eyebrow: "التقنيات",
    title: "نبني بأدوات يثق بها العالم",
    subtitle: "نختار التقنية المناسبة لكل مشروع: سريعة، وآمنة، وجاهزة للنمو.",
    roles: {
      React: "واجهات الويب",
      "Next.js": "مواقع سريعة ومتوافقة مع البحث",
      Flutter: "تطبيقات iOS وAndroid",
      "Node.js": "الخوادم والواجهات البرمجية",
      NestJS: "أنظمة خلفية للمؤسسات",
      Figma: "تصميم الواجهات",
    } as Record<string, string>,
  },
  pricing: {
    eyebrow: "الأسعار",
    title: "باقة لكل مرحلة من مشروعك",
    subtitle: "ثلاث باقات للمتاجر الإلكترونية، من أول متجر لك حتى تجربة براند مصممة بالكامل. وأي مشروع آخر له عرض سعر مخصص.",
    from: "يبدأ من",
    soon: "السعر قريبًا",
    popular: "الأكثر طلبًا",
    showAll: "عرض كل المميزات (+{n})",
    showLess: "عرض أقل",
    cta: "ابدأ الآن",
    plans: [
      {
        name: "Starter",
        desc: "للشركات التي تبدأ رحلتها وتريد عرض منتجاتها بشكل احترافي.",
        includes: "",
        features: [
          "تصميم متجر إلكتروني يعكس هوية علامتك التجارية",
          "تسجيل دومين خاص باسم مشروعك مع استضافة سريعة وآمنة",
          "تنظيم المنتجات في أقسام وعلامات تجارية لتصفح أسهل",
          "إضافة حتى 10 منتجات بالصور والمقاسات والألوان والكميات والوصف (المحتوى من العميل)",
          "لوحة تحكم كاملة مع تنبيهات عند قرب نفاد المخزون",
          "الدفع عند الاستلام، مع إيميل تأكيد للعميل وإشعار فوري لصاحب المتجر",
          "تصميم سريع ومتوافق مع الموبايل ومربوط بحسابات السوشيال ميديا",
        ],
      },
      {
        name: "Operational Pro",
        desc: "الباقة الأكثر طلبًا، للشركات التي تستهدف أداء مبيعات حقيقي وتغطية كاملة للسوق.",
        includes: "كل مميزات Starter، بالإضافة إلى:",
        features: [
          "بوابات دفع إلكتروني: بطاقات الائتمان وميزة والمحافظ الإلكترونية",
          "نظام شحن متقدم: تكلفة لكل مدينة وتتبع الشحنات",
          "كوبونات خصم لزيادة معدل الشراء وتفاعل العملاء",
          "تقارير متقدمة للمبيعات وأداء المنتجات وسلوك العملاء",
          "تطبيق موبايل لإدارة المنتجات والطلبات من أي مكان",
        ],
      },
      {
        name: "Signature UX/UI",
        desc: "للعلامات التجارية التي تبحث عن هوية مميزة وتجربة استثنائية تضعها في مقدمة منافسيها.",
        includes: "كل مميزات Operational Pro، بالإضافة إلى:",
        features: [
          "مصمم UI/UX متخصص لمشروعك",
          "تصميم Wireframes احترافي لهيكل الموقع بالكامل",
          "هوية بصرية متكاملة تعكس شخصية علامتك",
          "تصميم مخصص وفريد بنسبة 100%",
          "رحلة عميل مبنية على سيكولوجية الشراء",
          "صفحات بيع عالية التحويل",
        ],
      },
    ],
    custom: {
      title: "عندك فكرة خارج الباقات؟",
      desc: "المنصات المخصصة والأنظمة وصفحات الهبوط وتطبيقات الموبايل يتم تسعيرها حسب نطاق العمل والمتطلبات التقنية.",
      cta: "اطلب عرض سعر مخصص",
    },
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ماذا يقول عملاؤنا",
    prev: "السابق",
    next: "التالي",
    items: [
      { quote: "سيظهر رأي العميل هنا عند تجهيزه.", name: "اسم العميل", role: "المنصب، الشركة" },
      { quote: "سيظهر رأي العميل هنا عند تجهيزه.", name: "اسم العميل", role: "المنصب، الشركة" },
      { quote: "سيظهر رأي العميل هنا عند تجهيزه.", name: "اسم العميل", role: "المنصب، الشركة" },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات لأسئلتك",
    more: "باقي الأسئلة",
    moreTitle: "أسئلة أخرى",
    items: [
      {
        q: "كم يستغرق تنفيذ المشروع؟",
        a: "يعتمد على حجم المشروع؛ صفحة الهبوط أسرع بكثير من نظام ERP كامل. بعد الاستشارة تحصل على جدول زمني مكتوب بمراحل واضحة قبل البدء.",
      },
      {
        q: "كم ستكون تكلفة مشروعي؟",
        a: "أغلب المشاريع تندرج تحت إحدى باقاتنا الثلاث. أما الأنظمة المخصصة فنرسل لها عرض سعر تفصيليًا حسب متطلباتك — بدون تكاليف خفية.",
      },
      {
        q: "هل تعملون مع عملاء خارج مصر؟",
        a: "نعم. نعمل عن بُعد بتواصل واضح وعروض دورية، فالموقع الجغرافي ليس عائقًا.",
      },
      {
        q: "هل تقدمون دعمًا بعد الإطلاق؟",
        a: "نعم. نقدم صيانة ودعمًا بعد الإطلاق ليستمر نظامك في العمل بسلاسة مع نمو أعمالك.",
      },
      {
        q: "هل يمكنكم العمل على موقع أو نظام موجود بالفعل؟",
        a: "نعم. نراجع ما لديك، ثم نحسّنه أو نطوّره أو نعيد بناءه — حسب الأنسب لنشاطك.",
      },
      {
        q: "هل سأستطيع إدارة المحتوى بنفسي؟",
        a: "نعم. نبني لوحات تحكم وندرّب فريقك ليتمكن من تحديث المحتوى والمنتجات والبيانات بدون مبرمج.",
      },
    ],
  },
  contact: {
    eyebrow: "لنتحدث",
    title: "جاهز تكبّر نشاطك؟",
    subtitle: "أخبرنا عن مشروعك، وسنرد عليك خلال يوم عمل واحد بالخطوات التالية.",
    whatsapp: "تواصل عبر واتساب",
    whatsappText: "مرحبًا ScaleVia، أود مناقشة مشروع.",
    emailLabel: "أو راسلنا على",
    phonesLabel: "اتصل بنا",
    pageTitle: "تواصل معنا — ScaleVia",
    backHome: "الرجوع للرئيسية",
    citiesLabel: "مكاتبنا",
    form: {
      name: "الاسم بالكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف / واتساب",
      company: "اسم الشركة (اختياري)",
      service: "ما الذي تحتاجه؟",
      servicePlaceholder: "اختر الخدمة",
      services: [
        "موقع / صفحة هبوط",
        "تطبيق موبايل",
        "نظام ERP / إدارة أعمال",
        "متجر Shopify",
        "WordPress / WooCommerce",
        "نظام مطعم (Resto)",
        "منصة تعليمية (Edu)",
        "شيء آخر",
      ],
      message: "أخبرنا عن مشروعك",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال…",
      success: "شكرًا لك! استلمنا طلبك وسنتواصل معك قريبًا.",
      error: "حدث خطأ. حاول مرة أخرى أو تواصل معنا عبر واتساب.",
      required: "من فضلك أدخل الاسم والبريد الإلكتروني ورقم الهاتف.",
      planPrefill: "أنا مهتم بباقة {plan}.",
      solutionPrefill: "أنا مهتم بـ {solution}.",
    },
  },
  footer: {
    tagline: "برمجيات ومواقع وأنظمة للشركات الصغيرة والمتوسطة.",
    rights: "جميع الحقوق محفوظة.",
    contact: "تواصل",
    legal: "قانوني",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
