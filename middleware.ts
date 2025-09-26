import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // adjust path

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Update this to your frontend URL in production
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Accept, Accept-Language, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
  };

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  let response: NextResponse;

  // For API and other routes -> just pass through but add CORS
  if (req.nextUrl.pathname.startsWith("/api")) {
    response = NextResponse.next();
  } else {
    // For non-API routes -> run next-intl middleware
    response = intlMiddleware(req);
  }

  // Add CORS headers universally
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
