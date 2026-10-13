import type { Dictionary } from "@/i18n/dictionaries";
import { site, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function WhatsAppButton({ t }: { t: Dictionary }) {
  const external = Boolean(site.whatsapp);
  return (
    <a
      href={whatsappLink(t.contact.whatsappText)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={t.contact.whatsapp}
      className="fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
