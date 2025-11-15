import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("authToken");

  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/favicon.ico") ||
    request.nextUrl.pathname.startsWith("/logo") ||
    request.nextUrl.pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Apply middleware to all pages
};