import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { formatPhone, site, whatsappLink } from "@/config/site";
import { Logo } from "./ui/Logo";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { SocialIcon } from "./ui/SocialIcon";

export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  const socialNames: Record<string, string> = { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", facebook: "Facebook", x: "X" };
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1.2fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link href={`/${locale}`} aria-label="ScaleVia">
            <Logo className="h-11 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">{t.footer.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-4 text-sm">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-fg">
                    <SocialIcon name={name} className="h-4 w-4" />
                    {socialNames[name] ?? name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-fg">
                <Mail className="h-4 w-4" />
                <span dir="ltr">{site.email}</span>
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+${p}`} className="inline-flex items-center gap-2 hover:text-fg">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr" className="tabular-nums">
                    {formatPhone(p)}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappLink(t.contact.whatsappText)} className="inline-flex items-center gap-2 hover:text-fg">
                <WhatsAppIcon className="h-4 w-4" />
                {t.contact.whatsapp}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {site.cities[locale].join(" · ")}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.legal}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <Link href={`/${locale}/terms`} className="hover:text-fg">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/privacy`} className="hover:text-fg">
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} ScaleVia. {t.footer.rights}
          </p>
          <p dir="ltr" className="font-medium">
            Your Way to Scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
