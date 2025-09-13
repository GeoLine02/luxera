import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

// main middleware
export default async function middleware(req: NextRequest) {
  // run next-intl middleware first
  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(req);

  // Remove getUser call from middleware as it interferes with authentication
  // User authentication should be handled in components/pages, not middleware
  
  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
