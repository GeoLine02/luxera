import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { cookies } from "next/headers";

const intlMiddleware = createMiddleware(routing);

async function refreshAccessToken(refreshToken: string) {
  try {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;

    const res = await fetch(`${apiUrl}/user/refresh`, {
      method: "GET",
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
      credentials: "include",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data?.accessToken || null;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const { pathname } = req.nextUrl;

  const authRoutes = ["/signin", "/signup"];

  // 🟢 Case 1: User is authenticated
  if (accessToken && refreshToken) {
    if (pathname.includes(authRoutes[0]) || pathname.includes(authRoutes[1])) {
      const url = req.nextUrl.clone();
      url.pathname = "/";

      return NextResponse.redirect(url);
    }
    return intlMiddleware(req);
  }

  // 🔄 Case 2: No access token but has refresh token — try to refresh
  if (!accessToken && refreshToken) {
    const newAccessToken = await refreshAccessToken(refreshToken);
    console.log("token: ", newAccessToken);
    if (newAccessToken) {
      const response = intlMiddleware(req);

      const cookiesStore = await cookies();

      cookiesStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 60,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });

      return response;
    }
  }

  // 🟠 Case 3: Unauthenticated (no tokens)
  // Allow access to signin/signup and public routes
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
