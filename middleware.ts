import createMiddleware from "next-intl/middleware";
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
  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
