import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Skip internal Next.js paths, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(png|jpg|jpeg|svg|css|js|json)$/)
  ) {
    return NextResponse.next();
  }

  // 2. Check if the pathname already has a locale
  const pathnameHasLocale =
    pathname === "/ar" ||
    pathname.startsWith("/ar/") ||
    pathname === "/en" ||
    pathname.startsWith("/en/");

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. Determine locale from cookie or default to 'ar'
  let locale = "ar";
  const localeCookie = request.cookies.get("NEXT_LOCALE");
  if (localeCookie && (localeCookie.value === "ar" || localeCookie.value === "en")) {
    locale = localeCookie.value;
  }

  // 4. Redirect to the determined locale
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url
  );
  // Preserve query parameters
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except those starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
