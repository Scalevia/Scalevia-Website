"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { PlaceholderBadge } from "../ui/PlaceholderBadge";
import { Reveal } from "../ui/Reveal";

// Testimonials carousel: one card on phones, two on larger screens. The arrows step one card
// at a time and wrap around at either end.
export function Testimonials({ t }: { t: Dictionary }) {
  const track = useRef<HTMLUListElement>(null);

  const go = (step: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;
    // In RTL scrollLeft runs from 0 to negative, so work with its absolute value.
    const rtl = getComputedStyle(el).direction === "rtl";
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const stride = cards[0].offsetWidth + gap;
    const perView = Math.max(1, Math.round((el.clientWidth + gap) / stride));
    const last = Math.max(0, cards.length - perView);
    const current = Math.round(Math.abs(el.scrollLeft) / stride);
    let next = current + step;
    if (next > last) next = 0;
    if (next < 0) next = last;
    el.scrollTo({ left: (rtl ? -1 : 1) * next * stride, behavior: "smooth" });
  };

  const arrow = "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-fg hover:bg-fg hover:text-bg";

  return (
    <section className="band relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-accent">{t.testimonials.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.1]">{t.testimonials.title}</h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => go(-1)} aria-label={t.testimonials.prev} className={arrow}>
              <ChevronLeft className="h-5 w-5 rtl:-scale-x-100" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.testimonials.next} className={arrow}>
              <ChevronRight className="h-5 w-5 rtl:-scale-x-100" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12 lg:mt-16">
          <ul
            ref={track}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {t.testimonials.items.map((item, i) => (
              <li key={i} className="w-full shrink-0 snap-start md:w-[calc(50%-0.5rem)]">
                <figure className="flex h-full flex-col rounded-3xl border border-dashed border-fg/20 bg-surface-2 p-7">
                  <PlaceholderBadge label={t.common.placeholder} className="self-start" />
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-muted">{item.quote}</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                    <span className="h-10 w-10 rounded-full bg-surface" />
                    <span>
                      <span className="block text-sm font-semibold">{item.name}</span>
                      <span className="block text-xs text-muted">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
