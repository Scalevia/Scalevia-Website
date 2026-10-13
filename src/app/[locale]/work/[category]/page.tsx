import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getDictionary, isLocale, locales, type Dictionary, type Locale } from "@/i18n/dictionaries";
import { categories, getCategory, projectsIn, type Project } from "@/content/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MockScreen } from "@/components/ui/MockScreen";
import { ShotCarousel } from "@/components/ui/ShotCarousel";
import { Reveal } from "@/components/ui/Reveal";

type Params = Promise<{ locale: string; category: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => categories.map((c) => ({ locale, category: c.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = getCategory(category);
  if (!isLocale(locale) || !cat) return {};
  return {
    title: `${cat.title[locale]} — ScaleVia`,
    description: cat.desc[locale],
    alternates: {
      canonical: `/${locale}/work/${cat.slug}`,
      languages: { ar: `/ar/work/${cat.slug}`, en: `/en/work/${cat.slug}` },
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { locale, category } = await params;
  const cat = getCategory(category);
  if (!isLocale(locale) || !cat) notFound();
  const t = getDictionary(locale);
  const items = projectsIn(cat.slug);
  const others = categories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <ScrollProgress rtl={locale === "ar"} />
      <Navbar t={t} locale={locale} />
      <main className="overflow-x-clip">
        {/* Header */}
        <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-10">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Link
              href={`/${locale}#work`}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
            >
              <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5 rtl:rotate-0 rtl:group-hover:translate-x-0.5" />
              {t.work.back}
            </Link>
            <p className="mt-5 text-sm font-semibold text-accent">{cat.tag[locale]}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl">{cat.title[locale]}</h1>
            <p className="mt-3 max-w-2xl text-base text-muted text-pretty">{cat.desc[locale]}</p>
          </div>
        </section>

        {/* Projects */}
        <section className="band py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            {items.length > 0 ? (
              <div className="space-y-6">
                {items.map((p, i) => (
                  <ProjectCard key={p.name.en + i} project={p} t={t} locale={locale} mock={cat.mock} />
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="rounded-3xl border border-dashed border-fg/20 bg-surface-2 px-6 py-16 text-center sm:py-20">
                  <h2 className="text-2xl font-semibold">{t.work.emptyTitle}</h2>
                  <p className="mx-auto mt-3 max-w-md text-muted">{t.work.emptyDesc}</p>
                  <Link
                    href={`/${locale}/contact`}
                    className="mt-8 inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Other categories */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{t.work.title}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${locale}/work/${c.slug}`}
                    className="panel group flex items-center justify-between gap-4 p-5 transition-colors hover:border-[#3d6fd6]/40"
                  >
                    <span>
                      <span className="block text-xs font-semibold text-muted">{c.tag[locale]}</span>
                      <span className="mt-1 block font-semibold">{c.title[locale]}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton t={t} />
    </>
  );
}

function ProjectCard({ project: p, t, locale, mock }: { project: Project; t: Dictionary; locale: Locale; mock: string }) {
  const progress = p.status === "progress";
  const phones = p.mobileImages ?? [];
  return (
    <Reveal>
      <article className="panel overflow-hidden">
        {/* Screens: desktop carousel + phone carousel */}
        <div className="flex flex-col items-center gap-8 bg-surface-2 p-5 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10">
          <div className="w-full min-w-0 flex-1">
            {p.images.length > 0 ? (
              <ShotCarousel images={p.images} alt={p.name[locale]} frame="browser" priority />
            ) : (
              <div className="relative aspect-[16/10] w-full">
                <div className="absolute inset-x-4 top-4 bottom-0">
                  <MockScreen kind={mock} />
                </div>
              </div>
            )}
          </div>
          {phones.length > 0 && (
            <div className="shrink-0">
              <ShotCarousel images={phones} alt="" frame="phone" interval={3800} />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            <span
              className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                progress ? "bg-amber-500/12 text-amber-700 dark:text-amber-300" : "bg-[#28c840]/12 text-[#1f9e3a] dark:text-[#5ee07a]"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${progress ? "animate-pulse bg-amber-500" : "bg-[#28c840]"}`} />
              {progress ? t.common.inProgress : t.common.delivered}
            </span>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{p.name[locale]}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{p.summary[locale]}</p>
            {p.result && (
              <div className="mt-5 max-w-xl rounded-2xl bg-[#3d6fd6]/8 p-4">
                <p className="text-xs font-semibold text-accent">{t.work.result}</p>
                <p className="mt-1 font-semibold">{p.result[locale]}</p>
              </div>
            )}
            {p.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <li key={tech} dir="ltr" className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center gap-1.5 rounded-full bg-fg px-6 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              {t.work.visit}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
