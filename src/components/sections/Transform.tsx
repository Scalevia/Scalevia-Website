"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "../ui/SectionHeading";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Transform({ t }: { t: Dictionary }) {
  const tr = t.transform;
  const reduce = useReducedMotion();
  const enter = (from: number, delay = 0) =>
    reduce
      ? { style: { rotate: from < 0 ? -1.5 : 0 } }
      : {
          initial: { opacity: 0, x: from, rotate: from < 0 ? -4 : 2 },
          whileInView: { opacity: 1, x: 0, rotate: from < 0 ? -1.5 : 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="band relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={tr.eyebrow} title={tr.title} align="center" />

        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Before: a handwritten order sheet */}
          <div>
            <p className="mb-4 text-center text-sm font-semibold text-muted">{tr.before}</p>
            <motion.div
              {...enter(-40)}
              className="paper relative mx-auto max-w-md rounded-sm pt-7 pe-6 pb-10 ps-14 shadow-[0_24px_50px_-24px_rgb(12_12_13/0.35)]"
            >
              {/* Coffee ring */}
              <span className="absolute end-6 bottom-6 h-16 w-16 rounded-full border-[5px] border-[#8a5a2b]/15" />
              <p className="font-hand text-[1.9rem] leading-[2.15rem] text-[#1f2a6b]">{tr.paperTitle}</p>
              <ul className="font-hand mt-1 text-[1.45rem] leading-[2.15rem] text-[#1f2a6b]/85">
                {tr.rows.map((row, i) => (
                  <li key={i} className={i === 1 ? "line-through decoration-[#c0392b]/60 decoration-2" : ""}>
                    {row.before}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <span className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full bg-fg text-bg lg:rotate-0">
              <ArrowRight className="h-5 w-5 rtl:-scale-x-100" />
            </span>
          </div>

          {/* After: the same work, organized in a system */}
          <div>
            <p className="mb-4 text-center text-sm font-semibold text-accent">{tr.after}</p>
            <motion.div
              {...enter(40, 0.15)}
              className="panel mx-auto max-w-md overflow-hidden shadow-[0_30px_60px_-30px_rgb(12_12_13/0.3)]"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <p className="text-sm font-semibold">{tr.dashTitle}</p>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28c840]" />
                </span>
              </div>
              <ul>
                {tr.rows.map((row, i) => (
                  <motion.li
                    key={i}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease }}
                    className="flex items-center gap-3 border-b border-line px-5 py-4 last:border-0"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3d6fd6]/12">
                      <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-medium">{row.after}</span>
                    <span className="ms-auto shrink-0 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted">
                      {tr.auto}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
