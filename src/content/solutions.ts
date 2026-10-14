import type { Locale } from "@/i18n/dictionaries";
import type { CategorySlug } from "./projects";

// Industry solutions marketed under their own names. Each is custom-built per client;
// the home page shows a card per solution and each one has a page at /[locale]/[slug].

type Text = Record<Locale, string>;

export type SolutionSlug = "resto" | "edu";

export type Solution = {
  slug: SolutionSlug;
  name: string; // brand name, same in both languages
  short: string;
  accent: string; // sub-brand color used for icons and highlights
  photo: string;
  category: CategorySlug; // portfolio category whose projects appear on the page
  tagline: Text; // one line, used on the home card and in metadata
  title: Text;
  intro: Text;
  featuresTitle: Text;
  features: { icon: string; title: Text; desc: Text }[];
  why: { title: Text; desc: Text }[];
  ctaTitle: Text;
  ctaDesc: Text;
};

export const solutions: Solution[] = [
  {
    slug: "resto",
    name: "ScaleVia Resto",
    short: "Resto",
    accent: "#ea7a2b",
    photo: "/solutions/resto.webp",
    category: "restaurant",
    tagline: {
      ar: "نظام مطعمك، مبني من الصفر على طريقة شغلك.",
      en: "Your restaurant's system, built from scratch around how you work.",
    },
    title: {
      ar: "نظام واحد يدير مطعمك من الطلب حتى التوصيل",
      en: "One system that runs your restaurant, from order to delivery",
    },
    intro: {
      ar: "مع ScaleVia Resto نبني لمطعمك نظامًا خاصًا به من الصفر: منيو QR وطلب أونلاين وكاشير وتوصيل ومخزون وإدارة للفروع، مصممًا على طريقة عملك وليس قالبًا جاهزًا.",
      en: "With ScaleVia Resto we build your restaurant its own system from scratch: QR menu, online ordering, POS, delivery, inventory and multi-branch management, designed around how you work rather than a ready-made template.",
    },
    featuresTitle: { ar: "كل ما يحتاجه مطعمك في مكان واحد", en: "Everything your restaurant needs, in one place" },
    features: [
      {
        icon: "qr",
        title: { ar: "منيو QR", en: "QR menu" },
        desc: {
          ar: "منيو رقمي يفتحه العميل من الطاولة بمسح الكود، وتعدّل الأصناف والأسعار في أي وقت.",
          en: "A digital menu guests open from the table with a scan, with items and prices you can change any time.",
        },
      },
      {
        icon: "order",
        title: { ar: "طلب أونلاين", en: "Online ordering" },
        desc: {
          ar: "موقع أو تطبيق باسم مطعمك يستقبل الطلبات من عملائك مباشرة.",
          en: "A website or app under your restaurant's name that takes orders straight from your customers.",
        },
      },
      {
        icon: "pos",
        title: { ar: "كاشير (POS)", en: "Point of sale" },
        desc: {
          ar: "نقطة بيع سريعة للصالة والتيك أواي، بفواتير وطرق دفع متعددة.",
          en: "A fast POS for dine-in and takeaway, with invoices and multiple payment methods.",
        },
      },
      {
        icon: "delivery",
        title: { ar: "التوصيل", en: "Delivery" },
        desc: {
          ar: "متابعة طلبات التوصيل والطيارين وحالة كل طلب لحظة بلحظة.",
          en: "Track delivery orders, drivers and the status of every order in real time.",
        },
      },
      {
        icon: "inventory",
        title: { ar: "المخزون", en: "Inventory" },
        desc: {
          ar: "خصم الخامات مع كل طلب، وتنبيه قبل أن تنفد.",
          en: "Ingredients deducted with every order, with an alert before they run out.",
        },
      },
      {
        icon: "branches",
        title: { ar: "أكثر من فرع", en: "Multiple branches" },
        desc: {
          ar: "كل الفروع في نظام واحد، بتقارير لكل فرع وللمطعم كله.",
          en: "Every branch in one system, with reports per branch and for the whole business.",
        },
      },
    ],
    why: [
      {
        title: { ar: "مصمم لمطعمك أنت", en: "Designed for your restaurant" },
        desc: {
          ar: "نبدأ من طريقة عمل مطبخك وصالتك، لا من قالب جاهز يفرض عليك خطواته.",
          en: "We start from how your kitchen and floor work, not from a template that forces its own steps on you.",
        },
      },
      {
        title: { ar: "ابدأ بما تحتاجه الآن", en: "Start with what you need now" },
        desc: {
          ar: "اختر المميزات التي تحتاجها اليوم، وأضف الباقي عندما يكبر مطعمك.",
          en: "Pick the features you need today and add the rest as your restaurant grows.",
        },
      },
      {
        title: { ar: "معك قبل الإطلاق وبعده", en: "With you before and after launch" },
        desc: {
          ar: "عرض لما أنجزناه كل أسبوع أثناء التنفيذ، ودعم بعد التشغيل.",
          en: "A demo of our progress every week during the build, and support after launch.",
        },
      },
    ],
    ctaTitle: { ar: "احكِ لنا عن مطعمك", en: "Tell us about your restaurant" },
    ctaDesc: {
      ar: "استشارة مجانية نفهم فيها طريقة عملك ونقترح عليك المميزات المناسبة.",
      en: "A free consultation where we learn how you work and suggest the right features.",
    },
  },
  {
    slug: "edu",
    name: "ScaleVia Edu",
    short: "Edu",
    accent: "#13a37c",
    photo: "/solutions/edu-teacher.webp",
    category: "education",
    tagline: {
      ar: "منصة تعليمية باسمك، مبنية من الصفر لطلابك.",
      en: "An e-learning platform under your name, built from scratch for your students.",
    },
    title: {
      ar: "منصتك التعليمية، باسمك وبطريقتك",
      en: "Your e-learning platform, under your name and your way",
    },
    intro: {
      ar: "مع ScaleVia Edu نبني للمدارس والمراكز التعليمية والمدرسين منصة تعليم أونلاين خاصة بهم من الصفر: كورسات فيديو وامتحانات ودفع أونلاين وتطبيق موبايل ولوحات متابعة للمدرس وولي الأمر.",
      en: "With ScaleVia Edu we build schools, learning centers and teachers their own online learning platform from scratch: video courses, exams, online payments, a mobile app and dashboards for teachers and parents.",
    },
    featuresTitle: { ar: "كل ما تحتاجه منصتك التعليمية", en: "Everything your learning platform needs" },
    features: [
      {
        icon: "video",
        title: { ar: "كورسات فيديو", en: "Video courses" },
        desc: {
          ar: "دروس مرتبة في كورسات ووحدات، ويتابع الطالب تقدمه فيها.",
          en: "Lessons organized into courses and units, with progress tracking for every student.",
        },
      },
      {
        icon: "exam",
        title: { ar: "امتحانات وواجبات", en: "Exams & assignments" },
        desc: {
          ar: "امتحانات وواجبات بتصحيح تلقائي للأسئلة الاختيارية ونتائج فورية.",
          en: "Exams and assignments with automatic grading for multiple-choice questions and instant results.",
        },
      },
      {
        icon: "payment",
        title: { ar: "دفع أونلاين", en: "Online payments" },
        desc: {
          ar: "يشترك الطالب ويدفع من المنصة مباشرة.",
          en: "Students subscribe and pay right on the platform.",
        },
      },
      {
        icon: "app",
        title: { ar: "تطبيق موبايل", en: "Mobile app" },
        desc: {
          ar: "تطبيق iOS وAndroid باسم منصتك.",
          en: "An iOS and Android app under your platform's name.",
        },
      },
      {
        icon: "teacher",
        title: { ar: "لوحة المدرس", en: "Teacher dashboard" },
        desc: {
          ar: "يرفع المدرس المحتوى ويتابع الطلاب ونتائجهم من مكان واحد.",
          en: "Teachers upload content and follow students and their results from one place.",
        },
      },
      {
        icon: "parent",
        title: { ar: "لوحة ولي الأمر", en: "Parent dashboard" },
        desc: {
          ar: "يتابع ولي الأمر درجات ابنه وتقدمه أولًا بأول.",
          en: "Parents follow their child's grades and progress as it happens.",
        },
      },
    ],
    why: [
      {
        title: { ar: "باسمك وهويتك", en: "Your name, your brand" },
        desc: {
          ar: "منصة وتطبيق بهوية مدرستك أو مركزك، وليس حسابًا على منصة شخص آخر.",
          en: "A platform and app in your school's or center's identity, not an account on someone else's platform.",
        },
      },
      {
        title: { ar: "ابدأ بما تحتاجه الآن", en: "Start with what you need now" },
        desc: {
          ar: "اختر المميزات التي تحتاجها اليوم، وأضف الباقي عندما يزيد طلابك.",
          en: "Pick the features you need today and add the rest as your student base grows.",
        },
      },
      {
        title: { ar: "معك قبل الإطلاق وبعده", en: "With you before and after launch" },
        desc: {
          ar: "عرض لما أنجزناه كل أسبوع أثناء التنفيذ، ودعم بعد التشغيل.",
          en: "A demo of our progress every week during the build, and support after launch.",
        },
      },
    ],
    ctaTitle: { ar: "احكِ لنا عن منصتك", en: "Tell us about your platform" },
    ctaDesc: {
      ar: "استشارة مجانية نفهم فيها طلابك وطريقة تدريسك ونقترح عليك المميزات المناسبة.",
      en: "A free consultation where we learn about your students and teaching and suggest the right features.",
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
