import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";

export async function middleware(request) { // must be named "middleware"
  const token = request.cookies.get("token")?.value; // cookies, plural
  const user = token ? await verifyToken(token) : null;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home"], // protect the actual route you're using
};