"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { Reveal } from "../ui/Reveal";

// The technologies orbit slowly around the ScaleVia mark. Hovering a logo (or its row in the
// list) pauses the orbit and highlights both. Logos counter-rotate so they stay upright.
export function TechStack({ t }: { t: Dictionary }) {
  const [active, setActive] = useState<string | null>(null);
  const stack = site.techStack;
  const paused = active !== null;
  const play = { animationPlayState: paused ? "paused" : "running" } as const;

  return (
    <section id="stack" className="band relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Copy + list */}
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-accent">{t.stack.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.1]">{t.stack.title}</h2>
            <p className="mt-5 max-w-md text-base text-muted text-pretty sm:text-lg">{t.stack.subtitle}</p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-x-6">
            {stack.map((tech) => {
              const on = active === tech.name;
              return (
                <li
                  key={tech.name}
                  onPointerEnter={() => setActive(tech.name)}
                  onPointerLeave={() => setActive(null)}
                  className={`flex items-center gap-3 border-b border-line py-3.5 transition-opacity duration-300 ${
                    paused && !on ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <Image
                    src={tech.logo}
                    alt=""
                    width={24}
                    height={24}
                    className={`h-6 w-6 object-contain ${"invertInDark" in tech && tech.invertInDark ? "dark:invert" : ""}`}
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      <bdi>{tech.name}</bdi>
                    </span>
                    <span className="block text-xs leading-relaxed text-muted">{t.stack.roles[tech.name]}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Orbit */}
        <Reveal delay={0.1}>
          <div dir="ltr" className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* Rings */}
            <div className="absolute inset-[8%] rounded-full border border-dashed border-fg/15" />
            <div className="absolute inset-[30%] rounded-full border border-line" />
            <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(closest-side,rgb(125_184_224/0.35),transparent)] dark:bg-[radial-gradient(closest-side,rgb(61_111_214/0.25),transparent)]" />

            {/* Center mark */}
            <div className="absolute top-1/2 left-1/2 flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-[0_20px_50px_-20px_rgb(61_111_214/0.6)] ring-1 ring-line dark:bg-surface-2 dark:shadow-[0_0_40px_-10px_rgb(61_111_214/0.5)]">
              <Image src="/brand/icon.png" alt="ScaleVia" width={80} height={80} className="h-[62%] w-[62%] object-contain" />
            </div>

            {/* Orbiting logos */}
            <div className="animate-orbit absolute inset-[8%]" style={play}>
              {stack.map((tech, i) => {
                const angle = (i / stack.length) * Math.PI * 2 - Math.PI / 2;
                const on = active === tech.name;
                return (
                  <div
                    key={tech.name}
                    className="absolute h-0 w-0"
                    style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
                  >
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-orbit-reverse" style={play}>
                      <button
                        type="button"
                        aria-label={tech.name}
                        onPointerEnter={() => setActive(tech.name)}
                        onPointerLeave={() => setActive(null)}
                        onFocus={() => setActive(tech.name)}
                        onBlur={() => setActive(null)}
                        className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-surface shadow-[0_12px_30px_-12px_rgb(12_12_13/0.35)] ring-1 transition-all dark:bg-surface-2 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] duration-300 sm:h-[74px] sm:w-[74px] ${
                          on ? "scale-115 ring-[#3d6fd6]/60 dark:shadow-[0_0_28px_-6px_rgb(61_111_214/0.55)]" : paused ? "scale-95 opacity-50 ring-line" : "ring-line"
                        }`}
                      >
                        <Image
                          src={tech.logo}
                          alt=""
                          width={40}
                          height={40}
                          className={`h-8 w-8 object-contain sm:h-9 sm:w-9 ${"invertInDark" in tech && tech.invertInDark ? "dark:invert" : ""}`}
                        />
                        <span
                          className={`pointer-events-none absolute top-full mt-2 rounded-full bg-fg px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-bg transition-all duration-300 ${
                            on ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                          }`}
                        >
                          {tech.name}
                        </span>
                      </button>
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
