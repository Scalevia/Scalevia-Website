import type { Locale } from "@/i18n/dictionaries";
import { getSolution, type SolutionSlug } from "./solutions";

// Fixed-price system packages (EGP). Shown in the pricing section and, for the branded
// solutions, on their own pages. Features of a solution's plan come from content/solutions.ts.

type Text = Record<Locale, string>;

export type SystemPlan = {
  id: string;
  solution?: SolutionSlug;
  name: Text;
  desc: Text;
  price: number; // build cost
  monthly?: number; // hosting & maintenance, per month
  features?: Text[]; // for plans without a solution page
  details?: string; // page with more about plans without a solution page, e.g. "/work/erp"
  alt?: { title: Text; price: number; note: Text }; // a smaller option inside the same plan
};

export const systemPlans: SystemPlan[] = [
  {
    id: "kitchio",
    solution: "kitchio",
    name: { ar: "ScaleVia Kitchio", en: "ScaleVia Kitchio" },
    desc: {
      ar: "النظام الكامل لمطعمك: منيو QR وطلب أونلاين وكاشير وتوصيل ومخزون وإدارة للفروع.",
      en: "The complete system for your restaurant: QR menu, online ordering, POS, delivery, inventory and branches.",
    },
    price: 30000,
    alt: {
      title: { ar: "منيو QR وموقع فقط", en: "QR menu & website only" },
      price: 3999,
      note: {
        ar: "للسنة الأولى، وبعدها 400 ج.م كل 3 شهور",
        en: "for the first year, then EGP 400 every 3 months",
      },
    },
  },
  {
    id: "hessety",
    solution: "hessety",
    name: { ar: "ScaleVia Hessety", en: "ScaleVia Hessety" },
    desc: {
      ar: "منصة تعليمية مبنية من الصفر لك وحدك، باسمك وهويتك.",
      en: "A learning platform built from scratch for you alone, under your name and brand.",
    },
    price: 10000,
    monthly: 1500,
  },
  {
    id: "store",
    name: { ar: "نظام إدارة المحل", en: "Store management system" },
    desc: {
      ar: "المبيعات والمخزون وحسابات العملاء والتقارير في نظام واحد على مقاس محلك.",
      en: "Sales, stock, customer accounts and reports in one system built around your store.",
    },
    price: 15000,
    monthly: 1500,
    features: [
      { ar: "كاشير وفواتير، وبيع نقدي وآجل", en: "Checkout and invoices, cash and credit sales" },
      { ar: "مخزون مع تنبيه للأصناف الناقصة والراكدة", en: "Stock with alerts for low and slow-moving items" },
      { ar: "حسابات العملاء ومديونياتهم", en: "Customer accounts and balances" },
      { ar: "الخزن والمصروفات", en: "Cash drawers and expenses" },
      { ar: "تقارير الأرباح وأكثر الأصناف مبيعًا", en: "Profit and best-seller reports" },
      { ar: "يعمل من الموبايل والكمبيوتر", en: "Works on mobile and desktop" },
    ],
    details: "/work/erp",
  },
];

export function planFeatures(plan: SystemPlan, locale: Locale): string[] {
  if (plan.features) return plan.features.map((f) => f[locale]);
  const solution = plan.solution && getSolution(plan.solution);
  return solution ? solution.features.map((f) => f.title[locale]) : [];
}

export function plansFor(solution: SolutionSlug) {
  return systemPlans.filter((p) => p.solution === solution);
}

// Lowest price a visitor can start with, for "from EGP …" labels
export function startingPrice(solution: SolutionSlug) {
  const prices = plansFor(solution).flatMap((p) => [p.price, p.alt?.price ?? Infinity]);
  return prices.length ? Math.min(...prices) : undefined;
}

export function formatEGP(amount: number, locale: Locale) {
  const n = amount.toLocaleString("en-US");
  return locale === "ar" ? `${n} ج.م` : `EGP ${n}`;
}
