import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  if (
    (host === "dentimoderna.lat" || host === "www.dentimoderna.lat") &&
    pathname === "/"
  ) {
    return NextResponse.rewrite(new URL("/dentimoderna", request.url));
  }

  // ← Agrega esto
  if (host === "dentibot.dentimoderna.lat" && pathname === "/") {
    return NextResponse.rewrite(new URL("/dentibot", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};