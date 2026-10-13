import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

// Photos from Pexels (free for commercial use), in dictionary order
const PHOTOS: Record<string, string> = {
  utensils: "/industries/restaurant-hd2.webp",
  stethoscope: "/industries/clinic-room.webp",
  store: "/industries/retail-hd.webp",
  factory: "/industries/factory-hd.webp",
};

export function Industries({ t }: { t: Dictionary }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.industries.eyebrow} title={t.industries.title} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {t.industries.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={0.06 * i} className="h-full">
                <article className="group relative isolate flex aspect-[16/11] h-full flex-col sm:aspect-[3/4] justify-end overflow-hidden rounded-3xl bg-surface-2 p-6 text-white shadow-[0_24px_50px_-30px_rgb(12_12_13/0.5)]">
                  <Image
                    src={PHOTOS[item.icon]}
                    alt=""
                    fill
                    quality={88}
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  {/* Short shade at the bottom only, so the text is readable and the photo stays clear */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-black/75 via-black/35 to-transparent"
                  />
                  <span className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/30">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold [text-shadow:0_1px_8px_rgb(0_0_0/0.45)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90 [text-shadow:0_1px_6px_rgb(0_0_0/0.5)]">{item.desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
