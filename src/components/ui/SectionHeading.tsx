import { Reveal } from "./Reveal";

// Editorial section header: label + title on the start side, optional subtitle beside it.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}) {
  if (align === "center") {
    return (
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-5 text-base text-muted text-pretty sm:text-lg">{subtitle}</p>}
      </Reveal>
    );
  }
  return (
    <Reveal className="grid items-end gap-5 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div>
        <p className="text-sm font-semibold text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.1]">{title}</h2>
      </div>
      {subtitle && <p className="text-base text-muted text-pretty sm:text-lg lg:pb-1.5">{subtitle}</p>}
    </Reveal>
  );
}
