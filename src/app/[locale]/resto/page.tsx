import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/i18n/dictionaries";
import { getSolution } from "@/content/solutions";
import { SolutionPage, solutionMetadata } from "@/components/SolutionPage";

type Params = Promise<{ locale: string }>;
const solution = getSolution("resto")!;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return solutionMetadata(solution, locale);
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SolutionPage s={solution} t={getDictionary(locale)} locale={locale} />;
}
