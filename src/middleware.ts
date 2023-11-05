import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      "https://colorbattles.toasteddev.repl.co"
    )
  );
}
