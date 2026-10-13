import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/i18n/dictionaries";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Industries } from "@/components/sections/Industries";
import { Transform } from "@/components/sections/Transform";
import { Work } from "@/components/sections/Work";
import { TechStack } from "@/components/sections/TechStack";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <ScrollProgress rtl={locale === "ar"} />
      <Navbar t={t} locale={locale} />
      <main className="overflow-x-clip">
        <Hero t={t} locale={locale} />
        <ClientLogos t={t} locale={locale} />
        <Services t={t} />
        <TechStack t={t} />
        <Industries t={t} />
        <Transform t={t} />
        <Work t={t} locale={locale} />
        <Pricing t={t} locale={locale} />
        <Testimonials t={t} />
        <Faq t={t} locale={locale} />
        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} />
      <WhatsAppButton t={t} />
    </>
  );
}
