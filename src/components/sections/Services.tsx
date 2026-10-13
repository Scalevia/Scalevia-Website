import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Bento layout: column spans per service, in dictionary order
const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3"];

export function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * (i % 3)} className={`h-full ${SPANS[i]}`}>
              <article className="panel group flex h-full flex-col overflow-hidden p-6 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(12_12_13/0.25)] sm:p-7">
                <div className="flex items-center gap-2.5">
                  <Icon name={s.icon} className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted">{s.desc}</p>
                <div
                  dir="ltr"
                  className="relative mt-7 min-h-[170px] flex-1 overflow-hidden rounded-2xl bg-surface-2 transition-transform duration-700 group-hover:scale-[1.015]"
                >
                  <ServiceVisual kind={s.icon} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const line = "rounded-full bg-fg/10";

// Small product-style illustrations, one per service
function ServiceVisual({ kind }: { kind: string }) {
  switch (kind) {
    case "globe":
      return (
        <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-xl border border-line bg-surface shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-fg/15" />
            <span className="h-2 w-2 rounded-full bg-fg/15" />
            <span className="ms-auto h-1.5 w-10 rounded-full bg-fg/10" />
            <span className="h-1.5 w-10 rounded-full bg-fg/10" />
            <span className="h-4 w-12 rounded-full bg-fg" />
          </div>
          <div className="grid grid-cols-[1.3fr_1fr] gap-4 p-5">
            <div className="space-y-2">
              <div className={`h-3 w-11/12 ${line}`} />
              <div className={`h-3 w-3/4 ${line}`} />
              <div className="h-1.5 w-full rounded-full bg-fg/5" />
              <div className="h-1.5 w-5/6 rounded-full bg-fg/5" />
              <div className="mt-3 h-5 w-20 rounded-full bg-brand-gradient" />
            </div>
            <div className="rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgb(125_184_224/0.6),rgb(61_111_214/0.25))]" />
          </div>
        </div>
      );
    case "smartphone":
      return (
        <div className="absolute top-5 left-1/2 h-[260px] w-[132px] -translate-x-1/2 rounded-[1.6rem] border-[5px] border-fg bg-surface p-2.5">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-fg/80" />
          <div className="mt-3 h-14 rounded-xl bg-brand-gradient" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-2 flex items-center gap-2 rounded-lg border border-line p-1.5">
              <span className="h-5 w-5 rounded-md bg-fg/10" />
              <span className="flex-1 space-y-1">
                <span className="block h-1.5 w-4/5 rounded-full bg-fg/15" />
                <span className="block h-1.5 w-1/2 rounded-full bg-fg/8" />
              </span>
            </div>
          ))}
        </div>
      );
    case "layers":
      return (
        <div className="absolute inset-5 flex flex-col gap-2.5">
          <div className="grid grid-cols-3 gap-2">
            {[64, 82, 45].map((v, i) => (
              <div key={i} className="rounded-lg border border-line bg-surface p-2.5">
                <div className="h-1.5 w-1/2 rounded-full bg-fg/10" />
                <div className="mt-2 text-sm font-bold text-fg tabular-nums">{v}%</div>
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-lg border border-line bg-surface">
            {["#28c840", "#f59e0b", "#3d6fd6"].map((c, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-line px-3 py-2 last:border-0">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
                <span className="h-1.5 w-24 rounded-full bg-fg/10" />
                <span className="ms-auto h-1.5 w-10 rounded-full bg-fg/10" />
              </div>
            ))}
          </div>
        </div>
      );
    case "shopping-bag":
      return (
        <div className="absolute inset-5 flex items-end justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-[30%] max-w-[150px] rounded-xl border border-line bg-surface p-2 shadow-sm ${i === 1 ? "mb-4" : ""}`}
            >
              <div
                className={`aspect-square rounded-lg ${i === 1 ? "bg-brand-gradient" : "bg-[radial-gradient(circle_at_40%_35%,rgb(125_184_224/0.5),rgb(12_12_13/0.06))]"}`}
              />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-fg/15" />
              <div className="mt-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-fg">$4{i}</span>
                <span className="h-4 w-8 rounded-full bg-fg" />
              </div>
            </div>
          ))}
        </div>
      );
    case "layout":
      return (
        <div className="absolute inset-5 grid grid-cols-[0.8fr_2fr] gap-3">
          <div className="space-y-1.5 rounded-lg border border-line bg-surface p-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-1.5 rounded-md bg-surface-2 p-1.5">
                <span className="h-3 w-3 rounded bg-fg/15" />
                <span className="h-1.5 flex-1 rounded-full bg-fg/10" />
              </div>
            ))}
          </div>
          <div className="space-y-2 rounded-lg border border-line bg-surface p-3">
            <div className={`h-2.5 w-2/3 ${line}`} />
            <div className="rounded-md p-1.5 ring-2 ring-[#3d6fd6]">
              <div className="h-12 rounded bg-[#3d6fd6]/15" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-fg/5" />
            <div className="h-1.5 w-4/5 rounded-full bg-fg/5" />
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute inset-5 flex items-center justify-center gap-3">
          <div className="h-16 w-24 rounded-xl border-2 border-dashed border-fg/15" />
          <span className="h-px w-6 bg-fg/20" />
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fg text-2xl font-light text-bg">+</div>
          <span className="h-px w-6 bg-fg/20" />
          <div className="h-16 w-24 rounded-xl border-2 border-dashed border-fg/15" />
        </div>
      );
  }
}
