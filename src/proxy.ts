import { NextRequest, NextResponse } from "next/server";
import { startsWith } from "zod";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  if ((request.nextUrl.pathname, startsWith("/dashboard") && token)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next;
}

export const config = {
  matcher: "/dashboard/:path*",
};
