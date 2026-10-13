"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { HOME_FAQ_COUNT } from "@/config/site";
import { Reveal } from "../ui/Reveal";


type Item = { q: string; a: string };

export function FaqList({ items, idPrefix }: { items: Item[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="panel px-6 sm:px-8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line last:border-0">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-start text-lg font-semibold"
              >
                {item.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? "rotate-45 border-fg bg-fg text-bg" : "border-line"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${idPrefix}-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl pe-12 pb-7 leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

export function Faq({ t, locale }: { t: Dictionary; locale: Locale }) {
  const hasMore = t.faq.items.length > HOME_FAQ_COUNT;
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-sm font-semibold text-accent">{t.faq.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.1]">{t.faq.title}</h2>
          </Reveal>
        </div>

        <Reveal>
          <FaqList items={t.faq.items.slice(0, HOME_FAQ_COUNT)} idPrefix="faq" />
          {hasMore && (
            <Link
              href={`/${locale}/contact#more-faq`}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              {t.faq.more}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
