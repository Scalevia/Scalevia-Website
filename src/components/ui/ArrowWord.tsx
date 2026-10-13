"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

// A key word underlined by a stroke that curls up into the logo's arrowhead.
// Sized in em so it scales with its heading; kept pointing up and to the right in both languages.
const PATH = "M 4 40 C 60 50, 140 50, 192 38 C 212 33, 224 24, 231 12";
const END = { x: 231 / 240, y: 12 / 60 };

export function ArrowWord({ children, delay = 0.7 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");

  return (
    <span className="relative inline-block">
      <span className="text-gradient">{children}</span>
      <span aria-hidden dir="ltr" className="pointer-events-none absolute top-[90%] left-[-4%] h-[0.5em] w-[112%]">
        <svg viewBox="0 0 240 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2a46b0" />
              <stop offset="60%" stopColor="#3d6fd6" />
              <stop offset="100%" stopColor="#7db8e0" />
            </linearGradient>
            {/* Reveal left to right (a clip, so the non-scaling stroke draws correctly) */}
            <clipPath id={`${id}-clip`}>
              <motion.rect
                x="-10"
                y="-20"
                height="100"
                initial={reduce ? false : { width: 0 }}
                animate={{ width: 270 }}
                transition={{ duration: 1.15, delay, ease: [0.65, 0, 0.35, 1] }}
              />
            </clipPath>
          </defs>
          <path
            d={PATH}
            fill="none"
            stroke={`url(#${id}-grad)`}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            clipPath={`url(#${id}-clip)`}
            style={{ strokeWidth: "0.075em" }}
          />
        </svg>
        <motion.svg
          viewBox="0 0 40 40"
          className="absolute h-[0.34em] w-[0.34em]"
          style={{ left: `${END.x * 100}%`, top: `${END.y * 100}%`, x: "-50%", y: "-50%", rotate: -58 }}
          initial={reduce ? false : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 1.05, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <path d="M 40 20 L 4 3 Q 11 20 4 37 Z" fill="#7db8e0" />
        </motion.svg>
      </span>
    </span>
  );
}

