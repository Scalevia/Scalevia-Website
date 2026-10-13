"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Auto-playing screenshot carousel in a browser or phone frame.
// Advances every few seconds, pauses on hover/focus, and can be stepped with the arrows or dots.
export function ShotCarousel({
  images,
  alt,
  frame,
  interval = 4500,
  priority = false,
}: {
  images: string[];
  alt: string;
  frame: "browser" | "phone";
  interval?: number;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback(
    (step: number) => {
      setDir(step);
      setIndex((i) => (i + step + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused || reduce) return;
    const id = setTimeout(() => go(1), interval);
    return () => clearTimeout(id);
  }, [index, paused, reduce, count, interval, go]);

  const phone = frame === "phone";

  return (
    <div
      dir="ltr"
      className={`group relative ${phone ? "w-[150px] sm:w-[180px]" : "w-full"}`}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={
          phone
            ? "relative aspect-[9/17] overflow-hidden rounded-[1.7rem] border-[5px] border-fg bg-fg shadow-[0_30px_50px_-20px_rgb(12_12_13/0.5)]"
            : "overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_50px_-24px_rgb(12_12_13/0.4)]"
        }
      >
        {!phone && (
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-fg/15" />
            <span className="h-2 w-2 rounded-full bg-fg/15" />
            <span className="h-2 w-2 rounded-full bg-fg/15" />
          </div>
        )}
        <div className={`relative overflow-hidden ${phone ? "h-full rounded-[1.3rem]" : "aspect-[1440/760]"}`}>
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { x: `${dir * 100}%` }}
              animate={reduce ? { opacity: 1 } : { x: "0%" }}
              exit={reduce ? { opacity: 0 } : { x: `${dir * -100}%` }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            >
              <Image
                src={images[index]}
                alt={index === 0 ? alt : ""}
                fill
                priority={priority && index === 0}
                sizes={phone ? "180px" : "(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 100vw"}
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/95 text-fg shadow-md backdrop-blur transition hover:scale-105 ${
              phone ? "-left-4" : "left-3"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/95 text-fg shadow-md backdrop-blur transition hover:scale-105 ${
              phone ? "-right-4" : "right-3"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="mt-3 flex justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`${i + 1} / ${count}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-accent" : "w-1.5 bg-fg/20 hover:bg-fg/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
