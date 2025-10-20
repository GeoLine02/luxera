import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import api from "./utils/axios";
import { cookies } from "next/headers";

const intlMiddleware = createMiddleware(routing);

async function refeshAccessToken(refreshToken: string) {
  try {
    const res = await api.get("/user/refresh", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.status === 200) {
      const data = res.data;

      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function middleware(req: NextRequest) {
  const cookie = await cookies();
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const { pathname } = req.nextUrl;

  const authRoutes = ["/signin", "/signup"];
  if (!accessToken && refreshToken) {
    const res = await refeshAccessToken(refreshToken);
    if (res.accessToken) {
      cookie.set("accessToken", res.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60,
        path: "/",
        sameSite: "lax",
      });
    }
  }

  // Redirect logged-in users away from auth pages
  if (accessToken && authRoutes.some((route) => pathname.startsWith(route))) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req); // only i18n routing here
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
