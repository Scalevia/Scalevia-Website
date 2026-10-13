"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Thin brand-gradient line across the top of the viewport that fills as the page is read,
// led by a small arrowhead centred on the line (its top half runs off the top of the screen). Fills from the reading start side (right in Arabic).
export function ScrollProgress({ rtl }: { rtl: boolean }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const tip = useTransform(progress, (v) => `${v * 100}%`);
  const tipOpacity = useTransform(progress, [0, 0.02], [0, 1]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[5px] bg-fg/[0.06]">
      <motion.div
        className={`h-full shadow-[0_0_12px_rgb(61_111_214/0.6)] ${rtl ? "origin-right bg-linear-to-l" : "origin-left bg-linear-to-r"} from-[#2a46b0] via-[#3d6fd6] to-[#7db8e0]`}
        style={{ scaleX: progress }}
      />
      <motion.svg
        viewBox="0 0 40 40"
        className="absolute top-1/2 h-4 w-4 drop-shadow-[0_0_6px_rgb(61_111_214/0.7)]"
        style={{
          [rtl ? "right" : "left"]: tip,
          x: rtl ? "50%" : "-50%",
          y: "-50%",
          rotate: rtl ? 180 : 0,
          opacity: tipOpacity,
        }}
      >
        <path d="M 40 20 L 4 3 Q 11 20 4 37 Z" fill="#7db8e0" />
      </motion.svg>
    </div>
  );
}
