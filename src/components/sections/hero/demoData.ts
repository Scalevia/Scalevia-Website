import type { Locale } from "@/i18n/dictionaries";

// Fictional sample data for the hero product demos.

export type BusinessKey = "restaurant" | "clinic" | "retail" | "factory";

export type Kpi = { label: string; value: number; decimals?: number; suffix?: string };

export type DemoCommon = {
  label: string;
  app: string;
  nav: string[];
  kpis: Kpi[];
  toast: { title: string; body: string };
};

export type RestaurantDemo = DemoCommon & {
  columns: { title: string; tone: "new" | "prep" | "ready"; orders: { id: string; where: string; items: string; time: string }[] }[];
};
export type ClinicDemo = DemoCommon & {
  heading: string;
  rows: { time: string; patient: string; type: string; doctor: string; status: "done" | "in" | "waiting" | "booked" }[];
  statusLabels: Record<"done" | "in" | "waiting" | "booked", string>;
};
export type RetailDemo = DemoCommon & {
  heading: string;
  cols: [string, string, string, string];
  rows: { name: string; sku: string; qty: number; max: number }[];
  low: string;
  ok: string;
  chartTitle: string;
  days: string[];
};
export type FactoryDemo = DemoCommon & {
  heading: string;
  orders: { id: string; product: string; qty: string; progress: number; line: string }[];
  machinesTitle: string;
  machines: { name: string; state: "run" | "idle" | "fix" }[];
  stateLabels: Record<"run" | "idle" | "fix", string>;
};

export type Demos = {
  pick: string;
  caption: string;
  live: string;
  search: string;
  restaurant: RestaurantDemo;
  clinic: ClinicDemo;
  retail: RetailDemo;
  factory: FactoryDemo;
};

const ar: Demos = {
  pick: "اختر نشاطك وشاهد نظامك",
  caption: "واجهة توضيحية لنظام نبنيه لك",
  live: "مباشر",
  search: "بحث…",
  restaurant: {
    label: "مطعم",
    app: "إدارة المطعم",
    nav: ["الطلبات", "المنيو", "المطبخ", "المخزون", "التقارير"],
    kpis: [
      { label: "مبيعات اليوم", value: 18450, suffix: " ج.م" },
      { label: "طلبات اليوم", value: 126 },
      { label: "متوسط التحضير", value: 12, suffix: " د" },
    ],
    columns: [
      {
        title: "جديد",
        tone: "new",
        orders: [
          { id: "#1051", where: "طاولة 4", items: "2× برجر كلاسيك · بطاطس", time: "الآن" },
          { id: "#1050", where: "توصيل", items: "بيتزا مارجريتا · كولا", time: "2 د" },
        ],
      },
      {
        title: "قيد التحضير",
        tone: "prep",
        orders: [
          { id: "#1048", where: "طاولة 9", items: "3× شاورما · سلطة", time: "6 د" },
          { id: "#1047", where: "تيك أواي", items: "باستا ألفريدو", time: "9 د" },
        ],
      },
      {
        title: "جاهز",
        tone: "ready",
        orders: [
          { id: "#1045", where: "طاولة 2", items: "2× ستيك · عصير", time: "14 د" },
          { id: "#1044", where: "توصيل", items: "4× كريب · بيبسي", time: "17 د" },
        ],
      },
    ],
    toast: { title: "طلب جديد #1052", body: "طاولة 7 · 3 أصناف" },
  },
  clinic: {
    label: "عيادة",
    app: "إدارة العيادة",
    nav: ["المواعيد", "المرضى", "الأطباء", "الفواتير", "التقارير"],
    kpis: [
      { label: "مواعيد اليوم", value: 32 },
      { label: "في الانتظار", value: 4 },
      { label: "نسبة الحضور", value: 94, suffix: "%" },
    ],
    heading: "مواعيد اليوم",
    rows: [
      { time: "10:00", patient: "سارة محمود", type: "كشف", doctor: "د. أحمد", status: "done" },
      { time: "10:30", patient: "محمد علي", type: "متابعة", doctor: "د. أحمد", status: "in" },
      { time: "11:00", patient: "منى حسن", type: "استشارة", doctor: "د. ريم", status: "waiting" },
      { time: "11:30", patient: "يوسف كمال", type: "كشف", doctor: "د. ريم", status: "booked" },
      { time: "12:00", patient: "هدى سمير", type: "متابعة", doctor: "د. أحمد", status: "booked" },
    ],
    statusLabels: { done: "تم", in: "في الكشف", waiting: "في الانتظار", booked: "مؤكد" },
    toast: { title: "حجز أونلاين جديد", body: "غدًا 4:30 م · د. ريم" },
  },
  retail: {
    label: "تجارة",
    app: "المخزون والمبيعات",
    nav: ["المخزون", "المبيعات", "العملاء", "الموردين", "التقارير"],
    kpis: [
      { label: "مبيعات الأسبوع", value: 284, suffix: "K" },
      { label: "طلبات جملة اليوم", value: 17 },
      { label: "أصناف منخفضة", value: 3 },
    ],
    heading: "المخزون",
    cols: ["الصنف", "الكود", "الكمية", "الحالة"],
    rows: [
      { name: "قميص قطن — أبيض", sku: "SH-104", qty: 420, max: 500 },
      { name: "بنطلون جينز — أزرق", sku: "JN-221", qty: 36, max: 400 },
      { name: "تيشيرت بولو — كحلي", sku: "PL-310", qty: 275, max: 400 },
      { name: "جاكيت شتوي — أسود", sku: "JK-087", qty: 18, max: 200 },
      { name: "فستان صيفي — زهري", sku: "DR-152", qty: 190, max: 300 },
      { name: "شورت رياضي — رمادي", sku: "SP-064", qty: 310, max: 350 },
    ],
    low: "منخفض",
    ok: "متوفر",
    chartTitle: "المبيعات هذا الأسبوع",
    days: ["سبت", "أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"],
    toast: { title: "تنبيه مخزون", body: "جاكيت شتوي — باقي 18 قطعة" },
  },
  factory: {
    label: "مصنع",
    app: "إدارة الإنتاج",
    nav: ["الإنتاج", "أوامر التشغيل", "الخامات", "الجودة", "التقارير"],
    kpis: [
      { label: "إنتاج اليوم", value: 3840, suffix: " قطعة" },
      { label: "كفاءة الخطوط", value: 87, suffix: "%" },
      { label: "أوامر متأخرة", value: 1 },
    ],
    heading: "أوامر التشغيل",
    orders: [
      { id: "PO-231", product: "عبوات بلاستيك 1 لتر", qty: "5,000", progress: 82, line: "خط 1" },
      { id: "PO-232", product: "أغطية عبوات", qty: "12,000", progress: 54, line: "خط 2" },
      { id: "PO-233", product: "كراتين تغليف", qty: "2,400", progress: 23, line: "خط 3" },
    ],
    machinesTitle: "حالة الماكينات",
    machines: [
      { name: "M-01", state: "run" },
      { name: "M-02", state: "run" },
      { name: "M-03", state: "fix" },
      { name: "M-04", state: "run" },
      { name: "M-05", state: "idle" },
      { name: "M-06", state: "run" },
    ],
    stateLabels: { run: "تعمل", idle: "متوقفة", fix: "صيانة" },
    toast: { title: "اكتمل أمر تشغيل", body: "PO-230 · 3,000 قطعة" },
  },
};

const en: Demos = {
  pick: "Pick your business, see your system",
  caption: "Illustrative interface of a system we build",
  live: "Live",
  search: "Search…",
  restaurant: {
    label: "Restaurant",
    app: "Restaurant OS",
    nav: ["Orders", "Menu", "Kitchen", "Inventory", "Reports"],
    kpis: [
      { label: "Today's sales", value: 18450, suffix: " EGP" },
      { label: "Orders today", value: 126 },
      { label: "Avg. prep time", value: 12, suffix: " min" },
    ],
    columns: [
      {
        title: "New",
        tone: "new",
        orders: [
          { id: "#1051", where: "Table 4", items: "2× Classic burger · Fries", time: "now" },
          { id: "#1050", where: "Delivery", items: "Margherita pizza · Cola", time: "2m" },
        ],
      },
      {
        title: "Preparing",
        tone: "prep",
        orders: [
          { id: "#1048", where: "Table 9", items: "3× Shawarma · Salad", time: "6m" },
          { id: "#1047", where: "Takeaway", items: "Pasta Alfredo", time: "9m" },
        ],
      },
      {
        title: "Ready",
        tone: "ready",
        orders: [
          { id: "#1045", where: "Table 2", items: "2× Steak · Juice", time: "14m" },
          { id: "#1044", where: "Delivery", items: "4× Crêpe · Pepsi", time: "17m" },
        ],
      },
    ],
    toast: { title: "New order #1052", body: "Table 7 · 3 items" },
  },
  clinic: {
    label: "Clinic",
    app: "Clinic Manager",
    nav: ["Appointments", "Patients", "Doctors", "Billing", "Reports"],
    kpis: [
      { label: "Appointments today", value: 32 },
      { label: "Waiting", value: 4 },
      { label: "Attendance rate", value: 94, suffix: "%" },
    ],
    heading: "Today's appointments",
    rows: [
      { time: "10:00", patient: "Sarah Mahmoud", type: "Check-up", doctor: "Dr. Ahmed", status: "done" },
      { time: "10:30", patient: "Mohamed Ali", type: "Follow-up", doctor: "Dr. Ahmed", status: "in" },
      { time: "11:00", patient: "Mona Hassan", type: "Consultation", doctor: "Dr. Reem", status: "waiting" },
      { time: "11:30", patient: "Youssef Kamal", type: "Check-up", doctor: "Dr. Reem", status: "booked" },
      { time: "12:00", patient: "Hoda Samir", type: "Follow-up", doctor: "Dr. Ahmed", status: "booked" },
    ],
    statusLabels: { done: "Done", in: "In session", waiting: "Waiting", booked: "Confirmed" },
    toast: { title: "New online booking", body: "Tomorrow 4:30 PM · Dr. Reem" },
  },
  retail: {
    label: "Retail",
    app: "Stock & Sales",
    nav: ["Inventory", "Sales", "Customers", "Suppliers", "Reports"],
    kpis: [
      { label: "Sales this week", value: 284, suffix: "K" },
      { label: "Wholesale orders today", value: 17 },
      { label: "Low-stock items", value: 3 },
    ],
    heading: "Inventory",
    cols: ["Item", "SKU", "Qty", "Status"],
    rows: [
      { name: "Cotton shirt — White", sku: "SH-104", qty: 420, max: 500 },
      { name: "Denim jeans — Blue", sku: "JN-221", qty: 36, max: 400 },
      { name: "Polo T-shirt — Navy", sku: "PL-310", qty: 275, max: 400 },
      { name: "Winter jacket — Black", sku: "JK-087", qty: 18, max: 200 },
      { name: "Summer dress — Pink", sku: "DR-152", qty: 190, max: 300 },
      { name: "Sports shorts — Grey", sku: "SP-064", qty: 310, max: 350 },
    ],
    low: "Low",
    ok: "In stock",
    chartTitle: "Sales this week",
    days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    toast: { title: "Stock alert", body: "Winter jacket — 18 left" },
  },
  factory: {
    label: "Factory",
    app: "Production Hub",
    nav: ["Production", "Work orders", "Materials", "Quality", "Reports"],
    kpis: [
      { label: "Output today", value: 3840, suffix: " pcs" },
      { label: "Line efficiency", value: 87, suffix: "%" },
      { label: "Late orders", value: 1 },
    ],
    heading: "Work orders",
    orders: [
      { id: "PO-231", product: "1L plastic bottles", qty: "5,000", progress: 82, line: "Line 1" },
      { id: "PO-232", product: "Bottle caps", qty: "12,000", progress: 54, line: "Line 2" },
      { id: "PO-233", product: "Shipping cartons", qty: "2,400", progress: 23, line: "Line 3" },
    ],
    machinesTitle: "Machine status",
    machines: [
      { name: "M-01", state: "run" },
      { name: "M-02", state: "run" },
      { name: "M-03", state: "fix" },
      { name: "M-04", state: "run" },
      { name: "M-05", state: "idle" },
      { name: "M-06", state: "run" },
    ],
    stateLabels: { run: "Running", idle: "Idle", fix: "Maintenance" },
    toast: { title: "Work order complete", body: "PO-230 · 3,000 pcs" },
  },
};

export function getDemos(locale: Locale): Demos {
  return locale === "ar" ? ar : en;
}
