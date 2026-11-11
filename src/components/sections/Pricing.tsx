import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { formatEGP, planFeatures, systemPlans, type SystemPlan } from "@/content/plans";
import { getSolution } from "@/content/solutions";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { PlanFeatures } from "./PlanFeatures";
import { SolutionName } from "./Solutions";

export function Pricing({ t, locale }: { t: Dictionary; locale: Locale }) {
  const p = t.pricing;
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        {/* Industry systems, with fixed prices */}
        <h3 className="mt-12 text-lg font-semibold lg:mt-16">{p.systemsTitle}</h3>
        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-3">
          {systemPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.06 * i} className="h-full">
              <SystemPlanCard plan={plan} t={t} locale={locale} />
            </Reveal>
          ))}
        </div>

        {/* Online store packages */}
        <h3 className="mt-14 text-lg font-semibold sm:mt-16">{p.storesTitle}</h3>
        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-3">
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
                    <h4 dir="ltr" className="text-xl font-bold">
                      {plan.name}
                    </h4>
                    {featured ? (
                      <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-xs font-semibold text-white">{p.popular}</span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted">{plan.desc}</p>

                  <div className="mt-8 border-b border-line pb-8">
                    <p className="text-xs text-muted">{p.from}</p>
                    <p className="mt-1 text-4xl font-bold tracking-tight tabular-nums">{formatEGP(plan.price, locale)}</p>
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

// A fixed-price system plan. Also used on the solution pages.
export function SystemPlanCard({
  plan,
  t,
  locale,
  showDetails = true,
}: {
  plan: SystemPlan;
  t: Dictionary;
  locale: Locale;
  showDetails?: boolean;
}) {
  const p = t.pricing;
  const solution = plan.solution ? getSolution(plan.solution) : undefined;
  const contactHref = solution
    ? `/${locale}/contact?solution=${solution.slug}`
    : `/${locale}/contact?plan=${encodeURIComponent(plan.name[locale])}`;
  const detailsHref = solution ? `/${locale}/${solution.slug}` : plan.details ? `/${locale}${plan.details}` : undefined;

  return (
    <article className="panel flex h-full flex-col rounded-3xl p-7 sm:p-8">
      <h4 className="text-xl font-bold">{solution ? <SolutionName s={solution} /> : plan.name[locale]}</h4>
      <p className="mt-2 text-sm text-muted">{plan.desc[locale]}</p>

      <div className="mt-8 border-b border-line pb-8">
        <p className="text-xs text-muted">{p.buildCost}</p>
        <p className="mt-1 text-4xl font-bold tracking-tight tabular-nums">{formatEGP(plan.price, locale)}</p>
        {plan.monthly && (
          <p className="mt-2 text-sm text-muted">{p.monthly.replace("{price}", formatEGP(plan.monthly, locale))}</p>
        )}
        {plan.alt && (
          <div className="mt-5 rounded-2xl bg-surface-2 p-4">
            <p className="text-xs text-muted">
              {p.or} · {plan.alt.title[locale]}
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight tabular-nums">{formatEGP(plan.alt.price, locale)}</p>
            <p className="mt-1 text-xs text-muted">{plan.alt.note[locale]}</p>
          </div>
        )}
      </div>

      <PlanFeatures features={planFeatures(plan, locale)} showAll={p.showAll} showLess={p.showLess} className="mt-7" />

      <div className="mt-9 flex flex-col gap-3">
        <Link
          href={contactHref}
          className="inline-flex h-12 items-center justify-center rounded-full bg-fg text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          {p.cta}
        </Link>
        {showDetails && detailsHref && (
          <Link
            href={detailsHref}
            className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-accent"
          >
            {p.details}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
}
