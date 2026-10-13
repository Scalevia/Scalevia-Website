import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/dictionaries";

// Sends visitors without a locale prefix to /ar or /en based on their browser language.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept.toLowerCase().startsWith("en") ? "en" : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|brand|favicon.ico|apple-touch-icon.png|robots.txt|sitemap.xml|.*\..*).*)"],
};
