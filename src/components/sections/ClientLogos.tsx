import Image from "next/image";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

// One-line strip of real client logos between the hero and the services.
// Up to MAX_STATIC clients the logos sit still; with more, the row scrolls slowly on a loop
// (pauses on hover), so new clients only need to be added to the list below.
// `logoDark` is an alternative file for dark mode where the original would disappear.
const CLIENTS: { logo: string; logoDark?: string; w: number; name?: { ar: string; en: string } }[] = [
  { logo: "/clients/correct.png", w: 186, name: { ar: "كوركت", en: "Correct" } },
  { logo: "/clients/elhaddad.png", logoDark: "/clients/elhaddad-light.png", w: 265 },
  { logo: "/clients/moungez.png", w: 81, name: { ar: "منجز", en: "Moungez" } },
  { logo: "/clients/sc-school-dark.png", logoDark: "/clients/sc-school.png", w: 127, name: { ar: "Smart Core School", en: "Smart Core School" } },
  { logo: "/clients/manar.svg", w: 96, name: { ar: "منار", en: "Manar" } },
];
const MAX_STATIC = 6;

function Logo({ c, locale, hidden = false }: { c: (typeof CLIENTS)[number]; locale: Locale; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-2.5">
      <Image
        src={c.logo}
        alt={hidden ? "" : (c.name?.[locale] ?? "El-Haddad")}
        width={c.w}
        height={96}
        className={`h-7 w-auto sm:h-8 ${c.logoDark ? "dark:hidden" : ""}`}
      />
      {c.logoDark && <Image src={c.logoDark} alt="" aria-hidden width={c.w} height={96} className="hidden h-7 w-auto sm:h-8 dark:block" />}
      {c.name && <span className="text-sm font-semibold whitespace-nowrap text-fg">{c.name[locale]}</span>}
    </li>
  );
}

export function ClientLogos({ t, locale }: { t: Dictionary; locale: Locale }) {
  // Phones always scroll; larger screens scroll only once there are more than MAX_STATIC clients.
  const scrollEverywhere = CLIENTS.length > MAX_STATIC;
  return (
    <section aria-label={t.clients.title} className="band py-4 sm:py-5">
      <div className="mx-auto flex max-w-6xl items-center gap-4 ps-5 sm:px-8 lg:gap-10">
        <p className="shrink-0 text-xs font-semibold text-muted sm:text-sm">{t.clients.title}</p>

        <div
          dir="ltr"
          className={`relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${
            scrollEverywhere ? "" : "lg:hidden"
          }`}
        >
          <ul className="flex w-max animate-[logos_32s_linear_infinite] gap-10 pe-10 hover:[animation-play-state:paused]">
            {CLIENTS.map((c) => (
              <Logo key={c.logo} c={c} locale={locale} />
            ))}
            {CLIENTS.map((c) => (
              <Logo key={`${c.logo}-2`} c={c} locale={locale} hidden />
            ))}
          </ul>
        </div>

        {!scrollEverywhere && (
          <ul className="hidden flex-1 items-center justify-between gap-x-9 lg:flex">
            {CLIENTS.map((c) => (
              <Logo key={c.logo} c={c} locale={locale} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
