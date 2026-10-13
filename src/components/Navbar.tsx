"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { Logo } from "./ui/Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ t, locale }: { t: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const other: Locale = locale === "ar" ? "en" : "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full xl:max-w-6xl 2xl:max-w-7xl border border-line bg-surface/75 py-1.5 ps-4 pe-1.5 backdrop-blur-xl transition-shadow duration-500 sm:ps-5 ${
          scrolled ? "shadow-[0_12px_40px_-18px_rgb(12_12_13/0.3)]" : ""
        }`}
      >
        <Link href={`/${locale}`} aria-label="ScaleVia" className="shrink-0">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={`/${locale}${l.href}`}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            href={`/${other}`}
            hrefLang={other}
            aria-label={t.common.switchLangLabel}
            className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">{t.common.switchLang}</span>
          </Link>
          <ThemeToggle label={t.common.themeLabel} />
          <a
            href={`/${locale}/contact`}
            className="ms-1 hidden h-10 items-center rounded-full bg-fg px-5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.common.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg hover:bg-surface-2 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Logo className="h-9 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.common.close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col gap-1 px-6">
              {t.nav.links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`/${locale}${l.href}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-2xl font-semibold hover:bg-surface-2"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pt-8">
              <a
                href={`/${locale}/contact`}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-brand-gradient font-semibold text-white"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
