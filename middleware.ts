import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import axios from "axios"; // ⬅️ use direct axios instead of your axios instance

const intlMiddleware = createMiddleware(routing);

// ✅ Direct axios instance avoids recursive proxy calls
async function refreshAccessToken(refreshToken: string) {
  try {
    const baseURL =
      process.env.NODE_ENV === "production"
        ? process.env.PROD_API_URL
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;

    const res = await axios.get(`${baseURL}/user/refresh`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
      withCredentials: true,
    });

    if (res.status === 200 && res.data?.accessToken) {
      return res.data.accessToken;
    }
    return null;
  } catch (err) {
    console.error("Refresh token failed:", err);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const shopAccessToken = req.cookies.get("shopAccessToken")?.value;
  const shopRefreshTokn = req.cookies.get("shopRefreshToken")?.value;

  const { pathname } = req.nextUrl;

  const authRoutes = ["/signin", "/signup"];
  const shopAuthRoutes = ["/shop/login", "/shop/register"];

  // Run intl middleware first
  const response = intlMiddleware(req);
  let newAccessToken = accessToken;
  const newShopAccessToken = shopAccessToken;

  // ✅ Refresh if accessToken is missing but refreshToken exists
  if (!accessToken && refreshToken) {
    const refreshedToken = await refreshAccessToken(refreshToken);
    console.log("🔄 Refresh triggered");

    if (refreshedToken) {
      newAccessToken = refreshedToken;

      // ✅ Always set cookies on *response*, not req
      response.cookies.set("accessToken", refreshedToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60, // 15 minutes
        path: "/",
        sameSite: "lax",
      });
    }
  }

  if (
    newShopAccessToken &&
    shopAuthRoutes.some((route) => pathname.startsWith(route))
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // ✅ Redirect authenticated users away from signin/signup
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
