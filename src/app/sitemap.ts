import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { categories } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/contact", "/terms", "/privacy", ...categories.map((c) => `/work/${c.slug}`)];
  return paths.flatMap((path) =>
    ["ar", "en"].map((l) => ({
      url: `${site.url}/${l}${path}`,
      lastModified: new Date(),
      alternates: { languages: { ar: `${site.url}/ar${path}`, en: `${site.url}/en${path}` } },
    })),
  );
}
