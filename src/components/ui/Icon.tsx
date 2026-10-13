import {
  BadgeDollarSign,
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
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />;
}

