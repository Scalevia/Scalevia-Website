"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Factory, Stethoscope, Store, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { ProductDemo } from "./hero/ProductDemo";
import { getDemos, type BusinessKey } from "./hero/demoData";
import { ArrowWord } from "../ui/ArrowWord";
import { HeroAurora } from "./hero/HeroAurora";

const BUSINESSES: { key: BusinessKey; icon: LucideIcon }[] = [
  { key: "restaurant", icon: UtensilsCrossed },
  { key: "clinic", icon: Stethoscope },
  { key: "retail", icon: Store },
  { key: "factory", icon: Factory },
];
const CYCLE_MS = 7000;
const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero({ t, locale }: { t: Dictionary; locale: Locale }) {
  const demos = getDemos(locale);
  const reduce = useReducedMotion();
  const [active, setActive] = useState<BusinessKey>("restaurant");
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);

  // Cycle through businesses until the visitor picks one
  useEffect(() => {
    if (!auto || paused || reduce) return;
    const id = setTimeout(() => {
      const i = BUSINESSES.findIndex((b) => b.key === active);
      setActive(BUSINESSES[(i + 1) % BUSINESSES.length].key);
    }, CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, auto, paused, reduce]);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Soft brand light that follows the cursor */}
      <HeroAurora />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="relative z-10">
          <motion.h1
            {...fade(0)}
            className="pb-[0.3em] text-[2.7rem] leading-[1.08] font-bold tracking-[-0.03em] text-balance sm:text-6xl lg:text-[5rem]"
          >
            {t.hero.titleA} <ArrowWord>{t.hero.titleHighlight}</ArrowWord> {t.hero.titleB}
          </motion.h1>

          <motion.p {...fade(0.1)} className="mx-auto mt-6 max-w-2xl text-base text-muted text-pretty sm:text-xl sm:leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`/${locale}/contact`}
              className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-fg px-7 font-semibold text-bg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex h-13 w-full items-center justify-center rounded-full border border-line bg-surface/70 px-7 font-semibold backdrop-blur transition-colors hover:bg-surface sm:w-auto"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Business picker + product demo */}
      <div className="relative mt-16 sm:mt-24">
        <motion.div {...fade(0.35)} className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
          <p className="text-center text-sm font-medium text-muted">{demos.pick}</p>
          <div
            role="tablist"
            className="mx-auto mt-4 flex w-fit max-w-full gap-0.5 overflow-x-auto rounded-full border border-line bg-surface/80 p-1 shadow-sm backdrop-blur sm:gap-1"
          >
            {BUSINESSES.map(({ key, icon: Icon }) => {
              const on = key === active;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setActive(key);
                    setAuto(false);
                  }}
                  className={`relative isolate inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-colors sm:px-5 sm:text-sm ${
                    on ? "text-white" : "text-muted hover:text-fg"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="biz-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {/* Same element on server and client; with reduced motion it simply never fills */}
                  {on && auto && !paused && (
                    <motion.span
                      key={`${key}-progress`}
                      className="absolute inset-y-0 start-0 -z-10 bg-white/20"
                      initial={{ width: "0%" }}
                      animate={{ width: reduce ? "0%" : "100%" }}
                      transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                    />
                  )}
                  <Icon className="hidden h-4 w-4 sm:block" strokeWidth={2} />
                  {demos[key].label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
            <ProductDemo demos={demos} active={active} />
          </div>
          <p className="mt-4 pb-4 text-center text-xs text-muted">{demos.caption}</p>
        </motion.div>
      </div>
    </section>
  );
}
