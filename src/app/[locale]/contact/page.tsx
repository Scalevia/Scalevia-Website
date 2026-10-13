import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getDictionary, isLocale } from "@/i18n/dictionaries";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ContactForm } from "@/components/ContactForm";
import { ContactCities, ContactMethods } from "@/components/ContactMethods";
import { FaqList } from "@/components/sections/Faq";
import { HOME_FAQ_COUNT } from "@/config/site";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getDictionary(locale).contact;
  return {
    title: c.pageTitle,
    description: c.subtitle,
    alternates: { canonical: `/${locale}/contact`, languages: { ar: "/ar/contact", en: "/en/contact" } },
  };
}

export default async function ContactPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const c = t.contact;

  return (
    <>
      <ScrollProgress rtl={locale === "ar"} />
      <Navbar t={t} locale={locale} />
      <main className="overflow-x-clip">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[20%] left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(125_184_224/0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgb(61_111_214/0.1),transparent)]"
          />
          {/* Mobile order: heading → form → contact details. Desktop: heading + details beside the form. */}
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <Link
                href={`/${locale}`}
                className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
              >
                <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5 rtl:rotate-0 rtl:group-hover:translate-x-0.5" />
                {c.backHome}
              </Link>
              <p className="mt-8 text-sm font-semibold text-accent">{c.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-6xl sm:leading-[1.05]">{c.title}</h1>
              <p className="mt-5 max-w-md text-muted text-pretty sm:text-lg">{c.subtitle}</p>
            </div>
            <div className="panel p-3 sm:p-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
              <ContactForm t={t} />
            </div>
            <div className="space-y-10 lg:col-start-1 lg:row-start-2">
              <ContactCities t={t} locale={locale} />
              <ContactMethods t={t} />
            </div>
          </div>
        </section>

        {/* Questions not shown on the home page */}
        {t.faq.items.length > HOME_FAQ_COUNT && (
          <section id="more-faq" className="band scroll-mt-24 py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-4xl">{t.faq.moreTitle}</h2>
              <FaqList items={t.faq.items.slice(HOME_FAQ_COUNT)} idPrefix="more-faq" />
            </div>
          </section>
        )}
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton t={t} />
    </>
  );
}
