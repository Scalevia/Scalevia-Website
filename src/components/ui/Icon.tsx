import {
  BadgeDollarSign,
  Bike,
  Building2,
  CirclePlay,
  ClipboardCheck,
  CreditCard,
  Package,
  Presentation,
  QrCode,
  ReceiptText,
  Users,
  Factory,
  Globe,
  Headset,
  Layers,
  LayoutTemplate,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  "shopping-bag": ShoppingBag,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  stethoscope: Stethoscope,
  store: Store,
  factory: Factory,
  zap: Zap,
  "shield-check": ShieldCheck,
  "badge-dollar": BadgeDollarSign,
  headset: Headset,
  // Solution features (ScaleVia Resto / Edu)
  qr: QrCode,
  order: ShoppingBag,
  pos: ReceiptText,
  delivery: Bike,
  inventory: Package,
  branches: Building2,
  video: CirclePlay,
  exam: ClipboardCheck,
  payment: CreditCard,
  app: Smartphone,
  teacher: Presentation,
  parent: Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />;
}

