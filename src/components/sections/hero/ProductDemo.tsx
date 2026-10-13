"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  ClipboardList,
  LayoutGrid,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { CountUp } from "../../ui/CountUp";
import type {
  BusinessKey,
  ClinicDemo,
  DemoCommon,
  Demos,
  FactoryDemo,
  RestaurantDemo,
  RetailDemo,
} from "./demoData";

const NAV_ICONS: LucideIcon[] = [LayoutGrid, ClipboardList, Users, Boxes, BarChart3];
const ease = [0.2, 0.8, 0.2, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export function ProductDemo({ demos, active }: { demos: Demos; active: BusinessKey }) {
  const d = demos[active] as DemoCommon;
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setToast(false);
    const show = setTimeout(() => setToast(true), 1800);
    const hide = setTimeout(() => setToast(false), 5600);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [active]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_50px_100px_-40px_rgb(15_23_42/0.45),0_0_0_1px_rgb(255_255_255/0.04)] sm:rounded-[1.4rem]">
      {/* Window top bar */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-2/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        </div>
        <div className="mx-auto flex h-7 w-full max-w-xs items-center gap-2 rounded-lg border border-line bg-surface px-3 text-xs text-muted">
          <Search className="h-3.5 w-3.5" />
          {demos.search}
        </div>
        <Bell className="h-4 w-4 text-muted" />
        <span className="h-6 w-6 shrink-0 rounded-full bg-brand-gradient" />
      </div>

      <div className="flex h-[440px] sm:h-[460px]">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col border-e border-line bg-surface-2/30 p-3 md:flex">
          <div className="flex items-center gap-2 px-2 py-2">
            <Image src="/brand/icon.png" alt="" width={28} height={28} className="h-7 w-7" />
            <AnimatePresence mode="wait">
              <motion.span
                key={d.app}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="truncate text-sm font-semibold"
              >
                {d.app}
              </motion.span>
            </AnimatePresence>
          </div>
          <nav className="mt-4 space-y-0.5">
            {d.nav.map((label, i) => {
              const Icon = NAV_ICONS[i] ?? LayoutGrid;
              return (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                    i === 0 ? "bg-[#3d6fd6]/10 font-semibold text-accent" : "text-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {label}
                </div>
              );
            })}
          </nav>
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-line bg-surface p-2.5 text-[11px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28c840]" />
            </span>
            {demos.live}
          </div>
        </aside>

        {/* Main */}
        <div className="relative min-w-0 flex-1 overflow-hidden p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              className="flex h-full flex-col gap-4"
            >
              <Kpis kpis={d.kpis} />
              <div className="min-h-0 flex-1">
                {active === "restaurant" && <Restaurant d={demos.restaurant} />}
                {active === "clinic" && <Clinic d={demos.clinic} />}
                {active === "retail" && <Retail d={demos.retail} />}
                {active === "factory" && <Factory d={demos.factory} />}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Live notification */}
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.4, ease }}
                className="absolute end-4 bottom-4 flex items-center gap-3 rounded-xl border border-line bg-surface/95 py-2.5 ps-2.5 pe-4 shadow-[0_18px_40px_-14px_rgb(15_23_42/0.45)] backdrop-blur"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
                  <Bell className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold">{d.toast.title}</span>
                  <span className="block text-[11px] text-muted">{d.toast.body}</span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Kpis({ kpis }: { kpis: DemoCommon["kpis"] }) {
  return (
    <motion.div variants={item} className="grid grid-cols-3 gap-2.5 sm:gap-3">
      {kpis.map((k) => (
        <div key={k.label} className="rounded-xl border border-line bg-surface p-3 sm:p-3.5">
          <p className="truncate text-[11px] text-muted sm:text-xs">{k.label}</p>
          <p className="mt-1 text-sm font-bold whitespace-nowrap tabular-nums sm:text-xl">
            <CountUp to={k.value} decimals={k.decimals} suffix={k.suffix} duration={1.2} />
          </p>
        </div>
      ))}
    </motion.div>
  );
}

const TONES = {
  new: "bg-[#3d6fd6]",
  prep: "bg-amber-500",
  ready: "bg-[#28c840]",
};

function Restaurant({ d }: { d: RestaurantDemo }) {
  return (
    <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-3">
      {d.columns.map((col, ci) => (
        <motion.div
          key={col.title}
          variants={item}
          className={`flex-col gap-2 rounded-xl bg-surface-2/60 p-2.5 ${ci === 0 ? "flex" : "hidden sm:flex"}`}
        >
          <div className="flex items-center gap-2 px-1 pb-1 text-xs font-semibold">
            <span className={`h-2 w-2 rounded-full ${TONES[col.tone]}`} />
            {col.title}
            <span className="ms-auto rounded-md bg-surface px-1.5 text-[11px] text-muted">{col.orders.length}</span>
          </div>
          {col.orders.map((o) => (
            <motion.div key={o.id} variants={item} className="rounded-lg border border-line bg-surface p-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold tabular-nums">{o.id}</span>
                <span className="text-muted">{o.time}</span>
              </div>
              <p className="mt-1 text-[11px] font-medium text-accent">{o.where}</p>
              <p className="mt-1 truncate text-[11px] text-muted">{o.items}</p>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

const CLINIC_STATUS = {
  done: "bg-fg/8 text-muted",
  in: "bg-[#3d6fd6]/12 text-accent",
  waiting: "bg-amber-500/12 text-amber-700 dark:text-amber-300",
  booked: "bg-[#28c840]/12 text-[#1f9e3a] dark:text-[#5ee07a]",
};

function Clinic({ d }: { d: ClinicDemo }) {
  return (
    <motion.div variants={item} className="h-full rounded-xl border border-line">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5 text-sm font-semibold">
        <CalendarDays className="h-4 w-4 text-accent" />
        {d.heading}
      </div>
      <ul>
        {d.rows.map((r) => (
          <motion.li
            key={r.time}
            variants={item}
            className={`flex items-center gap-3 border-b border-line px-4 py-2.5 last:border-0 ${
              r.status === "in" ? "bg-[#3d6fd6]/[0.05]" : ""
            }`}
          >
            <span className="w-11 shrink-0 text-xs font-semibold tabular-nums text-muted">{r.time}</span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[11px] font-bold text-accent">
              {r.patient.charAt(0)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold">{r.patient}</span>
              <span className="block truncate text-[11px] text-muted">
                {r.type} · {r.doctor}
              </span>
            </span>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${CLINIC_STATUS[r.status]}`}>
              {d.statusLabels[r.status]}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

const SALES = [42, 55, 48, 66, 58, 74, 88];

function Retail({ d }: { d: RetailDemo }) {
  return (
    <div className="grid h-full gap-3 lg:grid-cols-[1.6fr_1fr]">
      <motion.div variants={item} className="rounded-xl border border-line">
        <div className="grid grid-cols-[1.6fr_1.2fr_0.8fr] gap-2 border-b border-line px-4 py-2.5 sm:grid-cols-[1.6fr_0.8fr_1.2fr_0.8fr] text-[11px] font-semibold text-muted">
          {d.cols.map((c, i) => (
            <span key={c} className={`truncate ${i === 1 ? "hidden sm:block" : ""}`}>
              {c}
            </span>
          ))}
        </div>
        {d.rows.map((r) => {
          const low = r.qty / r.max < 0.15;
          return (
            <motion.div
              key={r.sku}
              variants={item}
              className="grid grid-cols-[1.6fr_1.2fr_0.8fr] items-center gap-2 border-b border-line px-4 py-3 last:border-0 sm:grid-cols-[1.6fr_0.8fr_1.2fr_0.8fr]"
            >
              <span className="truncate text-[13px] font-medium">{r.name}</span>
              <span dir="ltr" className="hidden truncate text-start font-mono text-[11px] text-muted sm:block">
                {r.sku}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-xs font-semibold tabular-nums">{r.qty}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-fg/8">
                  <motion.span
                    className={`block h-full rounded-full ${low ? "bg-red-500" : "bg-brand-gradient"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(r.qty / r.max) * 100}%` }}
                    transition={{ duration: 0.9, delay: 0.3, ease }}
                  />
                </span>
              </span>
              <span
                className={`w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  low ? "bg-red-500/12 text-red-600 dark:text-red-400" : "bg-[#28c840]/12 text-[#1f9e3a] dark:text-[#5ee07a]"
                }`}
              >
                {low ? d.low : d.ok}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={item} className="hidden flex-col rounded-xl border border-line p-4 lg:flex">
        <p className="text-xs font-semibold">{d.chartTitle}</p>
        <div className="mt-4 flex flex-1 items-end gap-2">
          {SALES.map((v, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <motion.div
                className={`w-full rounded-md ${i === SALES.length - 1 ? "bg-brand-gradient" : "bg-[#3d6fd6]/20"}`}
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease }}
              />
              <span className="text-[10px] text-muted">{d.days[i]}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const MACHINE = { run: "bg-[#28c840]", idle: "bg-fg/25", fix: "bg-amber-500" };

function Factory({ d }: { d: FactoryDemo }) {
  return (
    <div className="grid h-full gap-3 lg:grid-cols-[1.6fr_1fr]">
      <motion.div variants={item} className="rounded-xl border border-line">
        <div className="border-b border-line px-4 py-2.5 text-sm font-semibold">{d.heading}</div>
        {d.orders.map((o) => (
          <motion.div key={o.id} variants={item} className="border-b border-line px-4 py-3.5 last:border-0">
            <div className="flex items-center gap-2 text-[13px]">
              <span dir="ltr" className="font-mono text-[11px] font-semibold text-accent">
                {o.id}
              </span>
              <span className="truncate font-semibold">{o.product}</span>
              <span className="ms-auto shrink-0 text-xs font-bold tabular-nums">{o.progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-fg/8">
              <motion.div
                className="h-full rounded-full bg-brand-gradient"
                initial={{ width: 0 }}
                animate={{ width: `${o.progress}%` }}
                transition={{ duration: 1.1, delay: 0.3, ease }}
              />
            </div>
            <p className="mt-1.5 text-[11px] text-muted">
              {o.line} · {o.qty}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={item} className="hidden rounded-xl border border-line p-4 lg:block">
        <p className="text-xs font-semibold">{d.machinesTitle}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {d.machines.map((m) => (
            <div key={m.name} className="rounded-lg bg-surface-2/70 p-2.5">
              <div className="flex items-center justify-between">
                <span dir="ltr" className="font-mono text-[11px] font-semibold">
                  {m.name}
                </span>
                <span className={`h-2 w-2 rounded-full ${MACHINE[m.state]} ${m.state === "run" ? "animate-pulse" : ""}`} />
              </div>
              <p className="mt-1 text-[11px] text-muted">{d.stateLabels[m.state]}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
