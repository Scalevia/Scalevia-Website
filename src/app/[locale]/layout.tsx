import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Aref_Ruqaa, Caveat, JetBrains_Mono, Readex_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary, isLocale, locales } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import "../globals.css";

// One family for both scripts; its rounded geometry echoes the ScaleVia wordmark
const readex = Readex_Pro({ subsets: ["arabic", "latin"], variable: "--font-readex", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face", display: "swap" });
// Handwriting for the "before" paper note (Ruqaa is everyday Arabic handwriting)
const handLatin = Caveat({ subsets: ["latin"], variable: "--font-hand-latin", display: "swap" });
const handArabic = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-hand-arabic", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en", "x-default": "/ar" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: [{ url: "/brand/og.png", width: 1080, height: 1080, alt: site.name }],
    },
    twitter: { card: "summary", title: t.meta.title, description: t.meta.description, images: ["/brand/og.png"] },
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0f" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/icon.png`,
    slogan: "Your Way to Scale.",
    email: site.email,
    telephone: site.phones.map((p) => `+${p}`),
    sameAs: Object.values(site.socials).filter(Boolean),
    address: site.cities.en.map((city) => ({ "@type": "PostalAddress", addressLocality: city, addressCountry: "EG" })),
  };

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${readex.variable} ${mono.variable} ${handLatin.variable} ${handArabic.variable}`}
    >
      {/* Browser extensions (e.g. ColorZilla) inject attributes into <body> before hydration */}
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
