import { Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { formatPhone, site, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

// Offices + WhatsApp, phones and email. Shared by the home CTA and the contact page.
export function ContactCities({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-sm font-semibold">
        <MapPin className="h-4 w-4 text-accent" />
        {t.contact.citiesLabel}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {site.cities[locale].map((city) => (
          <li key={city} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium">
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactMethods({ t }: { t: Dictionary }) {
  const c = t.contact;
  const external = Boolean(site.whatsapp);
  return (
    <div className="space-y-3">
      <a
        href={whatsappLink(c.whatsappText)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-colors hover:bg-surface-2"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        <span className="font-semibold">{c.whatsapp}</span>
      </a>
      <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
          <Phone className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-muted">{c.phonesLabel}</span>
          <span className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1">
            {site.phones.map((p) => (
              <a key={p} href={`tel:+${p}`} dir="ltr" className="font-semibold tabular-nums hover:text-accent">
                {formatPhone(p)}
              </a>
            ))}
          </span>
        </span>
      </div>
      <a
        href={`mailto:${site.email}`}
        className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-colors hover:bg-surface-2"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fg text-bg">
          <Mail className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-muted">{c.emailLabel}</span>
          <span className="block font-semibold">
            <bdi>{site.email}</bdi>
          </span>
        </span>
      </a>
    </div>
  );
}
