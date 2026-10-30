import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === "eightbits.us") {
    const destination = request.nextUrl.clone();
    destination.hostname = "www.eightbits.us";

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
