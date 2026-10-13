import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { PlaceholderBadge } from "../ui/PlaceholderBadge";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { PlanFeatures } from "./PlanFeatures";

export function Pricing({ t, locale }: { t: Dictionary; locale: Locale }) {
  const p = t.pricing;
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="mt-12 grid items-stretch gap-4 lg:mt-16 lg:grid-cols-3">
          {p.plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <Reveal key={plan.name} delay={0.06 * i} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                    featured
                      ? "panel relative border-2 border-[#3d6fd6] shadow-[0_30px_70px_-35px_rgb(61_111_214/0.55)] lg:-translate-y-3"
                      : "panel"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 dir="ltr" className="text-xl font-bold">
                      {plan.name}
                    </h3>
                    {featured ? (
                      <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-xs font-semibold text-white">{p.popular}</span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted">{plan.desc}</p>

                  <div className="mt-8 border-b border-line pb-8">
                    <p className="text-xs text-muted">{p.from}</p>
                    <p className="mt-1 text-4xl font-semibold tracking-tight text-fg/30">—</p>
                    <PlaceholderBadge label={p.soon} className="mt-3" />
                  </div>

                  {plan.includes && <p className="mt-7 text-sm font-semibold text-accent">{plan.includes}</p>}
                  <PlanFeatures
                    features={plan.features}
                    showAll={p.showAll}
                    showLess={p.showLess}
                    className={plan.includes ? "mt-4" : "mt-7"}
                  />

                  <a
                    href={`/${locale}/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`mt-9 inline-flex h-12 items-center justify-center rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                      featured ? "bg-brand-gradient text-white" : "bg-fg text-bg"
                    }`}
                  >
                    {p.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4">
          <div className="panel flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-lg font-semibold">{p.custom.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{p.custom.desc}</p>
            </div>
            <a
              href={`/${locale}/contact`}
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold transition-colors hover:bg-surface-2"
            >
              {p.custom.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
