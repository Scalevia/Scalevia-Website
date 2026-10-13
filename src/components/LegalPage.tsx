import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { LAST_UPDATED, legal, type LegalSlug } from "@/content/legal";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollProgress } from "./ScrollProgress";

export function LegalPage({ slug, t, locale }: { slug: LegalSlug; t: Dictionary; locale: Locale }) {
  const doc = legal[slug][locale];
  const date = new Date(LAST_UPDATED).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <ScrollProgress rtl={locale === "ar"} />
      <Navbar t={t} locale={locale} />
      <main className="overflow-x-clip">
        <article className="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
          <Link
            href={`/${locale}`}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5 rtl:rotate-0 rtl:group-hover:translate-x-0.5" />
            {t.contact.backHome}
          </Link>
          <h1 className="mt-8 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted">
            {doc.updated}: {date}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{doc.intro}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-semibold">{s.h}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-muted">
                  {s.p.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton t={t} />
    </>
  );
}
