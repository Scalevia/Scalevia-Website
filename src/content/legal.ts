import type { Locale } from "@/i18n/dictionaries";

// Terms and privacy copy. Draft based on what the site actually does — review with a lawyer
// and add the registered company name before launch.

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: { h: string; p: string[] }[];
};

export const LAST_UPDATED = "2026-10-13";

const privacy: Record<Locale, LegalDoc> = {
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث",
    intro:
      "توضح هذه السياسة البيانات التي تجمعها ScaleVia عند زيارتك لموقع scalevia.net أو تواصلك معنا، وكيف نستخدمها ونحميها.",
    sections: [
      {
        h: "البيانات التي نجمعها",
        p: [
          "عند إرسال نموذج التواصل نجمع: الاسم، والبريد الإلكتروني، ورقم الهاتف، واسم الشركة (اختياري)، والخدمة المطلوبة، ونص رسالتك.",
          "عند تواصلك معنا عبر واتساب أو البريد الإلكتروني نحتفظ بالمحادثة للرد عليك ومتابعة طلبك.",
          "لا يستخدم الموقع حاليًا أدوات تتبع إعلانية. نحفظ في متصفحك فقط اختيارك للوضع الفاتح أو الغامق.",
        ],
      },
      {
        h: "كيف نستخدم بياناتك",
        p: [
          "للرد على استفسارك، وتقديم عرض سعر، وترتيب الاستشارة، ومتابعة مشروعك معك.",
          "لا نبيع بياناتك ولا نشاركها مع أي طرف لأغراض تسويقية.",
        ],
      },
      {
        h: "أين تُحفظ البيانات",
        p: [
          "تُرسل بيانات نموذج التواصل إلى بريدنا الإلكتروني وتُحفظ في جدول Google Sheets خاص بفريقنا. الموقع مستضاف على Vercel.",
          "يحصل على البيانات فريق ScaleVia فقط بالقدر اللازم للتواصل معك.",
        ],
      },
      {
        h: "مدة الاحتفاظ",
        p: ["نحتفظ ببيانات التواصل طوال فترة تعاملنا معك، ثم نحذفها عند طلبك أو عندما لا نحتاجها."],
      },
      {
        h: "حقوقك",
        p: [
          "يمكنك في أي وقت طلب نسخة من بياناتك، أو تصحيحها، أو حذفها، بمراسلتنا على tech@scalevia.net.",
        ],
      },
      {
        h: "التعديلات على هذه السياسة",
        p: ["قد نحدّث هذه السياسة من وقت لآخر، وسيظهر تاريخ آخر تحديث أعلى الصفحة."],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated",
    intro:
      "This policy explains what data ScaleVia collects when you visit scalevia.net or contact us, and how we use and protect it.",
    sections: [
      {
        h: "Data we collect",
        p: [
          "When you send the contact form we collect your name, email, phone number, company (optional), the service you need and your message.",
          "When you contact us on WhatsApp or by email, we keep the conversation to reply to you and follow up on your request.",
          "The site does not currently use advertising trackers. Your browser only stores your choice of light or dark mode.",
        ],
      },
      {
        h: "How we use your data",
        p: [
          "To answer your enquiry, send a quote, arrange the consultation and follow up on your project.",
          "We do not sell your data or share it with anyone for marketing.",
        ],
      },
      {
        h: "Where data is stored",
        p: [
          "Contact form submissions are sent to our email and saved in a private Google Sheets file used by our team. The site is hosted on Vercel.",
          "Only the ScaleVia team can access this data, and only as needed to contact you.",
        ],
      },
      {
        h: "How long we keep it",
        p: ["We keep contact details for as long as we work with you, and delete them when you ask or when we no longer need them."],
      },
      {
        h: "Your rights",
        p: ["You can ask for a copy of your data, a correction or its deletion at any time by emailing tech@scalevia.net."],
      },
      {
        h: "Changes to this policy",
        p: ["We may update this policy from time to time; the date at the top shows the latest version."],
      },
    ],
  },
};

const terms: Record<Locale, LegalDoc> = {
  ar: {
    title: "الشروط والأحكام",
    updated: "آخر تحديث",
    intro: "باستخدامك لموقع scalevia.net فإنك توافق على الشروط التالية.",
    sections: [
      {
        h: "عن الموقع",
        p: [
          "هذا الموقع يعرّف بخدمات ScaleVia في تصميم وتطوير المواقع وتطبيقات الموبايل وأنظمة إدارة الأعمال، ويتيح لك التواصل معنا.",
        ],
      },
      {
        h: "الأسعار والعروض",
        p: [
          "الأسعار والباقات المعروضة استرشادية. السعر النهائي ومدة التنفيذ ونطاق العمل يتم الاتفاق عليها في عرض سعر مكتوب لكل مشروع.",
          "أي مشروع نتفق عليه يخضع لاتفاق منفصل بيننا وبين العميل، وهو المرجع عند أي اختلاف مع ما هو مكتوب في الموقع.",
        ],
      },
      {
        h: "أعمالنا المعروضة",
        p: [
          "المشاريع المعروضة في قسم أعمالنا تخص عملاءنا، وتُعرض بموافقتهم. العلامات التجارية والشعارات ملك لأصحابها.",
          "الشاشات التوضيحية في الصفحة الرئيسية تحتوي على بيانات تجريبية ولا تمثل بيانات عملاء حقيقيين.",
        ],
      },
      {
        h: "الملكية الفكرية",
        p: ["تصميم الموقع ومحتواه وشعار ScaleVia ملك لـ ScaleVia، ولا يجوز نسخها أو إعادة استخدامها دون إذن كتابي."],
      },
      {
        h: "حدود المسؤولية",
        p: [
          "نحرص على دقة المعلومات في الموقع، لكنها مقدمة كما هي دون ضمان، ولا نتحمل مسؤولية أي قرار يُتخذ بناءً عليها دون التواصل معنا.",
        ],
      },
      {
        h: "التواصل",
        p: ["لأي استفسار عن هذه الشروط راسلنا على tech@scalevia.net."],
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    updated: "Last updated",
    intro: "By using scalevia.net you agree to the following terms.",
    sections: [
      {
        h: "About this site",
        p: [
          "This site presents ScaleVia's services in website, mobile app and business system design and development, and lets you get in touch with us.",
        ],
      },
      {
        h: "Prices and offers",
        p: [
          "Prices and packages shown are indicative. The final price, timeline and scope are agreed in a written quote for each project.",
          "Every project we take on is governed by a separate agreement with the client, which prevails over anything stated on this site.",
        ],
      },
      {
        h: "Our work",
        p: [
          "Projects shown in Our work belong to our clients and are shown with their permission. Trademarks and logos belong to their owners.",
          "The illustrative screens on the home page use sample data and do not show real client data.",
        ],
      },
      {
        h: "Intellectual property",
        p: ["The site's design, content and the ScaleVia logo belong to ScaleVia and may not be copied or reused without written permission."],
      },
      {
        h: "Limitation of liability",
        p: [
          "We work to keep the information here accurate, but it is provided as is, without warranty, and we are not liable for decisions made on it without talking to us.",
        ],
      },
      {
        h: "Contact",
        p: ["For any question about these terms, email tech@scalevia.net."],
      },
    ],
  },
};

export const legal = { privacy, terms };
export type LegalSlug = keyof typeof legal;
