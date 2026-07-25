import { NextResponse } from "next/server";

export async function POST() { 
  const res = NextResponse.json({ message: "Logout successful" }); // fixed message
  res.cookies.set("token", "", {
    maxAge: 0,
    path: "/", // must match the path used when setting the cookie
  });

  

  return res;
}