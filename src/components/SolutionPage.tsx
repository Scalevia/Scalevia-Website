import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { getCategory, projectsIn } from "@/content/projects";
import { solutions, type Solution } from "@/content/solutions";
import { whatsappLink } from "@/config/site";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollProgress } from "./ScrollProgress";
import { Icon } from "./ui/Icon";
import { MockScreen } from "./ui/MockScreen";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { SolutionCard, SolutionName } from "./sections/Solutions";

// Landing page for one industry solution, at /[locale]/resto and /[locale]/edu.
export function SolutionPage({ s, t, locale }: { s: Solution; t: Dictionary; locale: Locale }) {
  const projects = projectsIn(s.category);
  const category = getCategory(s.category);
  const others = solutions.filter((o) => o.slug !== s.slug);
  const contactHref = `/${locale}/contact?solution=${s.slug}`;
  const whatsappText = t.contact.form.solutionPrefill.replace("{solution}", s.name);

  return (
    <>
      <ScrollProgress rtl={locale === "ar"} />
      <Navbar t={t} locale={locale} />
      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[25%] left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 rounded-[50%] opacity-25 dark:opacity-15"
            style={{ background: `radial-gradient(closest-side, ${s.accent}, transparent)` }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <Link
                href={`/${locale}#solutions`}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
              >
                <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5 rtl:rotate-0 rtl:group-hover:translate-x-0.5" />
                {t.solutions.back}
              </Link>
              <p className="mt-8 text-base font-bold sm:text-lg">
                <SolutionName s={s} />
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.08]">
                {s.title[locale]}
              </h1>
              <p className="mt-5 max-w-xl text-muted text-pretty sm:text-lg">{s.intro[locale]}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={contactHref}
                  className="inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  {t.nav.cta}
                </Link>
                <a
                  href={whatsappLink(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold transition-colors hover:border-fg"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface-2 shadow-[0_30px_60px_-30px_rgb(12_12_13/0.45)]">
                <Image
                  src={s.photo}
                  alt=""
                  fill
                  priority
                  quality={85}
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="band py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl">{s.featuresTitle[locale]}</h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {s.features.map((f, i) => (
                <li key={f.icon}>
                  <Reveal delay={0.05 * (i % 3)} className="h-full">
                    <article className="panel flex h-full gap-4 p-5 sm:block sm:p-7">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                        style={{ color: s.accent, background: `${s.accent}1f` }}
                      >
                        <Icon name={f.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold sm:mt-5">{f.title[locale]}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2">{f.desc[locale]}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why build it with us */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{t.solutions.whyTitle}</h2>
            </Reveal>
            <ul className="mt-10 grid gap-7 md:grid-cols-3 md:gap-8 lg:mt-12">
              {s.why.map((w, i) => (
                <li key={i}>
                  <Reveal delay={0.06 * i}>
                    <div className="h-0.5 w-10 rounded-full" style={{ background: s.accent }} />
                    <h3 className="mt-5 text-lg font-semibold">{w.title[locale]}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{w.desc[locale]}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section className="band py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{t.solutions.stepsTitle}</h2>
            </Reveal>
            <ol className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4">
              {t.solutions.steps.map((step, i) => (
                <li key={i}>
                  <Reveal delay={0.05 * i} className="h-full">
                    <div className="panel h-full p-4 sm:p-6">
                      <span className="font-mono text-sm font-semibold" style={{ color: s.accent }}>
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects in this industry */}
        {projects.length > 0 && category && (
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{t.solutions.workTitle}</h2>
              </Reveal>
              <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
                {projects.map((p) => {
                  const cover = p.cover ?? p.images[0];
                  const progress = p.status === "progress";
                  return (
                    <li key={p.name.en}>
                      <Reveal className="h-full">
                        <Link
                          href={`/${locale}/work/${category.slug}`}
                          className="panel group flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(12_12_13/0.3)]"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                            {cover ? (
                              <Image
                                src={cover}
                                alt={p.name[locale]}
                                fill
                                quality={90}
                                sizes="(min-width: 768px) 560px, 100vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              />
                            ) : (
                              <div className="absolute inset-x-6 top-6 bottom-0">
                                <MockScreen kind={category.mock} />
                              </div>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col border-t border-line p-6">
                            <span
                              className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                                progress
                                  ? "bg-amber-500/12 text-amber-700 dark:text-amber-300"
                                  : "bg-[#28c840]/12 text-[#1f9e3a] dark:text-[#5ee07a]"
                              }`}
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${progress ? "animate-pulse bg-amber-500" : "bg-[#28c840]"}`} />
                              {progress ? t.common.inProgress : t.common.delivered}
                            </span>
                            <h3 className="mt-3 text-xl font-semibold">{p.name[locale]}</h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{p.summary[locale]}</p>
                            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                              {t.solutions.workCta}
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                            </span>
                          </div>
                        </Link>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* Call to action */}
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-3xl bg-fg px-6 py-12 text-center text-bg sm:px-12 sm:py-16">
                <div
                  aria-hidden
                  className="absolute -top-1/2 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-[50%] opacity-40"
                  style={{ background: `radial-gradient(closest-side, ${s.accent}, transparent)` }}
                />
                <h2 className="text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl">{s.ctaTitle[locale]}</h2>
                <p className="mx-auto mt-4 max-w-lg text-bg/70 text-pretty">{s.ctaDesc[locale]}</p>
                <Link
                  href={contactHref}
                  className="mt-8 inline-flex h-12 items-center rounded-full bg-bg px-6 text-sm font-semibold text-fg transition-transform hover:-translate-y-0.5"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The other solutions */}
        {others.length > 0 && (
          <section className="band py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{t.solutions.alsoTitle}</h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {others.map((o) => (
                  <SolutionCard key={o.slug} s={o} t={t} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton t={t} />
    </>
  );
}

export function solutionMetadata(s: Solution, locale: Locale) {
  return {
    title: `${s.name} — ${s.title[locale]}`,
    description: s.tagline[locale],
    alternates: { canonical: `/${locale}/${s.slug}`, languages: { ar: `/ar/${s.slug}`, en: `/en/${s.slug}` } },
    openGraph: { title: s.name, description: s.tagline[locale], images: [s.photo] },
  };
}
