import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { categories, coverFor, projectsIn } from "@/content/projects";
import { MockScreen } from "../ui/MockScreen";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Arabic number agreement: 1 مشروع واحد, 2 مشروعان, 3–10 مشاريع, 11+ مشروعًا
function countLabel(n: number, locale: Locale) {
  if (locale === "en") return n === 1 ? "1 project" : `${n} projects`;
  if (n === 1) return "مشروع واحد";
  if (n === 2) return "مشروعان";
  return n <= 10 ? `${n} مشاريع` : `${n} مشروعًا`;
}

export function Work({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} subtitle={t.work.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {categories.map((c, i) => {
            const count = projectsIn(c.slug).length;
            const cover = coverFor(c.slug);
            return (
              <Reveal key={c.slug} delay={0.05 * (i % 3)} className="h-full">
                <Link
                  href={`/${locale}/work/${c.slug}`}
                  className="panel group flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(12_12_13/0.3)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={c.title[locale]}
                        fill
                        quality={90}
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-x-6 top-6 bottom-0 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                        <MockScreen kind={c.mock} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 border-t border-line p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-muted">{c.tag[locale]}</span>
                      {count > 0 && (
                        <span className="ms-auto rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                          {countLabel(count, locale)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold">{c.title[locale]}</h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted">{c.desc[locale]}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent">
                      {t.work.view}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
