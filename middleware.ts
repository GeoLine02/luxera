// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import api from "./utils/axios";

const intlMiddleware = createMiddleware(routing);

async function refreshAccessToken(refreshToken: string) {
  try {
    const res = await api.get("/user/refresh", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.status === 200) {
      return res.data.accessToken; // Make sure this returns the token string
    }
    return null; // Explicit return
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const { pathname } = req.nextUrl;
  const authRoutes = ["/signin", "/signup"];

  const response = intlMiddleware(req);
  let newAccessToken = accessToken;

  // Refresh token if needed
  if (!accessToken && refreshToken) {
    const refreshedToken = await refreshAccessToken(refreshToken);

    if (refreshedToken) {
      // Type guard: ensures refreshedToken is string, not null
      newAccessToken = refreshedToken;

      // Set cookie on response
      response.cookies.set("accessToken", refreshedToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60,
        path: "/",
        sameSite: "lax",
      });
    }
  }

  // Redirect logged-in users away from auth pages
  if (
    newAccessToken &&
    authRoutes.some((route) => pathname.startsWith(route))
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
