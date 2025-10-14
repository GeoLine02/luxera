import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
<<<<<<< HEAD
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";
import { getUser } from "./app/[locale]/(auth)/services/login";

// your user fetcher

// main middleware
export default async function middleware(req: NextRequest) {
  // run next-intl middleware first
  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(req);

  // fetch user for this request
  const user = await getUser();
  // optionally attach user info to request/response
  if (user) {
    response.headers.set("x-user-id", user.id); // example: pass along user info
  }
=======
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

>>>>>>> 07de716efb37bb364e84ea9282f48e194e625c46
  return response;
}

export const config = {
<<<<<<< HEAD
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
=======
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
>>>>>>> 07de716efb37bb364e84ea9282f48e194e625c46
};
