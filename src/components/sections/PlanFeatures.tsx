"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const VISIBLE = 4;

// A plan's feature list: the first four always show, the rest open on demand.
export function PlanFeatures({
  features,
  showAll,
  showLess,
  className = "",
}: {
  features: string[];
  showAll: string;
  showLess: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const extra = features.slice(VISIBLE);

  const item = (f: string, j: number) => (
    <li key={j} className="flex items-start gap-2.5 text-muted">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      {f}
    </li>
  );

  return (
    <div className={`flex-1 ${className}`}>
      <ul className="space-y-3.5 text-sm">{features.slice(0, VISIBLE).map(item)}</ul>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="space-y-3.5 overflow-hidden pt-3.5 text-sm"
          >
            {extra.map((f, j) => item(f, j + VISIBLE))}
          </motion.ul>
        )}
      </AnimatePresence>
      {extra.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          {open ? showLess : showAll.replace("{n}", String(extra.length))}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
