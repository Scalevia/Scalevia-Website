import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { solutions, type Solution } from "@/content/solutions";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Photos from Pexels (free for commercial use), by industry icon
const PHOTOS: Record<string, string> = {
  stethoscope: "/industries/clinic-room.webp",
  store: "/industries/retail-hd.webp",
  factory: "/industries/factory-hd.webp",
};

// Industries section: the branded solutions (ScaleVia Resto, ScaleVia Edu) as large cards
// linking to their own pages, then the other industries we build for in a smaller row.
export function Solutions({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section id="solutions" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.solutions.eyebrow} title={t.solutions.title} subtitle={t.solutions.subtitle} />
        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={0.08 * i} className="h-full">
              <SolutionCard s={s} t={t} locale={locale} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-sm font-semibold text-muted sm:mt-14">{t.solutions.alsoLabel}</p>
        {/* Phones: a swipeable row; larger screens: three columns */}
        <ul className="-mx-5 mt-4 flex snap-x snap-mandatory scroll-ps-5 gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {t.solutions.industries.map((item, i) => (
            <li key={item.title} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <Reveal delay={0.06 * i} className="h-full">
                <article className="relative isolate flex aspect-[4/3] h-full flex-col justify-end overflow-hidden rounded-3xl bg-surface-2 p-5 text-white shadow-[0_24px_50px_-30px_rgb(12_12_13/0.5)]">
                  <Image
                    src={PHOTOS[item.icon]}
                    alt=""
                    fill
                    quality={85}
                    sizes="(min-width: 640px) 33vw, 80vw"
                    className="-z-20 object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-linear-to-t from-black/80 via-black/40 to-transparent"
                  />
                  <span className="mb-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/30">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold [text-shadow:0_1px_8px_rgb(0_0_0/0.45)]">{item.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/90 [text-shadow:0_1px_6px_rgb(0_0_0/0.5)]">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolutionName({ s, className = "" }: { s: Solution; className?: string }) {
  return (
    <span dir="ltr" className={className}>
      ScaleVia <span style={{ color: s.accent }}>{s.short}</span>
    </span>
  );
}

export function SolutionCard({ s, t, locale }: { s: Solution; t: Dictionary; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/${s.slug}`}
      className="panel group flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(12_12_13/0.3)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        <Image
          src={s.photo}
          alt=""
          fill
          quality={85}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-[-0.01em] sm:text-3xl">
          <SolutionName s={s} />
        </h3>
        <p className="mt-2 text-muted text-pretty">{s.tagline[locale]}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {s.features.map((f) => (
            <li
              key={f.icon}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted"
            >
              <span style={{ color: s.accent }}>
                <Icon name={f.icon} className="h-3.5 w-3.5" />
              </span>
              {f.title[locale]}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold" style={{ color: s.accent }}>
          {t.solutions.explore.replace("{name}", s.short)}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
