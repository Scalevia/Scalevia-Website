"use client";

import { useEffect, useRef } from "react";

// Soft light-blue glow behind the hero headline that follows the cursor.
// Without a mouse (phones) it drifts on its own.
// Paused while the hero is off screen; static when reduced motion is on.

const BLOBS = [{ color: "125,184,224", size: 0.44, follow: 1, drift: 0.02, phase: 0, alpha: 0.8 }];
const HOME = [{ x: 0.5, y: 0.35 }];

export function HeroAurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const section = root?.parentElement;
    if (!root || !section) return;
    const els = Array.from(root.children) as HTMLElement[];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const target = { x: 0.5, y: 0.35 };
    const pos = { x: 0.5, y: 0.35 };
    let hasMouse = false;
    let lastMove = 0;
    let visible = true;
    let raf = 0;

    const place = (t: number) => {
      const { width: W, height: H } = root.getBoundingClientRect();
      els.forEach((el, i) => {
        const b = BLOBS[i];
        const h = HOME[i];
        const s = Math.max(W, H) * b.size;
        const dx = Math.sin(t * 0.00018 + b.phase) * b.drift;
        const dy = Math.cos(t * 0.00015 + b.phase) * b.drift;
        const x = (h.x + (pos.x - h.x) * b.follow + dx) * W - s / 2;
        const y = (h.y + (pos.y - h.y) * b.follow + dy) * H - s / 2;
        el.style.width = el.style.height = `${s}px`;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const loop = (t: number) => {
      if (!hasMouse || performance.now() - lastMove > 2500) {
        // idle / touch: wander gently around the headline
        target.x = 0.5 + Math.sin(t * 0.00035) * 0.22;
        target.y = 0.38 + Math.sin(t * 0.0005) * 0.14;
      }
      pos.x += (target.x - pos.x) * 0.05;
      pos.y += (target.y - pos.y) * 0.05;
      place(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = root.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = (e.clientY - r.top) / r.height;
      hasMouse = true;
      lastMove = performance.now();
    };

    if (reduce) {
      place(0);
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    });
    io.observe(section);
    section.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      section.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(100%,820px)] overflow-hidden opacity-90 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] dark:opacity-60"
    >
      {BLOBS.map((b) => (
        <span
          key={b.color}
          className="absolute top-0 left-0 rounded-full blur-[65px] will-change-transform"
          style={{ background: `radial-gradient(closest-side, rgba(${b.color},${b.alpha}), transparent)` }}
        />
      ))}
    </div>
  );
}
