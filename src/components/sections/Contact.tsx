import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { ContactCities, ContactMethods } from "../ContactMethods";
import { Reveal } from "../ui/Reveal";

// Home-page closing section: invitation + quick contact. The form lives on /[locale]/contact.
export function Contact({ t, locale }: { t: Dictionary; locale: Locale }) {
  const c = t.contact;
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="panel relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 -start-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(125_184_224/0.35),transparent)] dark:bg-[radial-gradient(closest-side,rgb(61_111_214/0.18),transparent)]"
            />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold text-accent">{c.eyebrow}</p>
                <h2 className="mt-3 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-6xl sm:leading-[1.05]">{c.title}</h2>
                <p className="mt-5 max-w-md text-muted text-pretty sm:text-lg">{c.subtitle}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="group mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-fg px-7 font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  {t.nav.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
                <div className="mt-10">
                  <ContactCities t={t} locale={locale} />
                </div>
              </div>
              <ContactMethods t={t} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
