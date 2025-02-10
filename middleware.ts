import { NextResponse } from "next/server";

export function middleware(req) {
  const acceptLanguage = req.headers.get("accept-language") || "";
  const preferredLanguage = acceptLanguage.startsWith("de") ? "de" : "en"; // Detect language

  // Add the language as a cookie for use in the app
  const response = NextResponse.next();
  response.cookies.set("language", preferredLanguage);
  return response;
}
