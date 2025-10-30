import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import axios from "axios";

const intlMiddleware = createMiddleware(routing);

async function refreshAccessToken(refreshToken: string) {
  try {
    const baseURL =
      process.env.NODE_ENV === "production"
        ? process.env.PROD_API_URL
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;

    const res = await axios.get(`${baseURL}/user/refresh`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
      withCredentials: true,
    });

    return res.status === 200 ? res.data.accessToken : null;
  } catch (err) {
    console.error("Refresh token failed:", err);
    return null;
  }
}

async function refreshShopAccessToken(shopRefreshToken: string) {
  try {
    const baseURL =
      process.env.NODE_ENV === "production"
        ? process.env.PROD_API_URL
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;

    const res = await axios.get(`${baseURL}/shop/refresh`, {
      headers: { Authorization: `Bearer ${shopRefreshToken}` },
      withCredentials: true,
    });

    return res.status === 200 ? res.data.shopAccessToken : null;
  } catch (err) {
    console.log("Shop refresh token failed", err);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const shopAccessToken = req.cookies.get("shopAccessToken")?.value;
  const shopRefreshToken = req.cookies.get("shopRefreshToken")?.value;

  const { pathname } = req.nextUrl;

  const authRoutes = ["/signin", "/signup"];
  const shopAuthRoutes = ["/shop/login", "/shop/register"];

  // Run intl first
  const response = intlMiddleware(req);
  let newAccessToken = accessToken;
  let newShopAccessToken = shopAccessToken;

  // Refresh user token
  if (!accessToken && refreshToken) {
    const refreshed = await refreshAccessToken(refreshToken);
    if (refreshed) {
      newAccessToken = refreshed;
      response.cookies.set("accessToken", refreshed, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60,
        path: "/",
        sameSite: "lax",
      });
    }
  }

  // Refresh shop token
  if (!shopAccessToken && shopRefreshToken) {
    const refreshedShop = await refreshShopAccessToken(shopRefreshToken);
    if (refreshedShop) {
      newShopAccessToken = refreshedShop;
      response.cookies.set("shopAccessToken", refreshedShop, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 15 * 60,
        path: "/",
        sameSite: "lax",
      });
    }
  }

  // ✅ Only protect routes under `/shop/**`
  const isShopRoute = pathname.includes("/shop");

  // ✅ If visiting `/shop/login` or `/shop/register`, skip redirects
  const isShopAuthRoute = shopAuthRoutes.some((r) => pathname.includes(r));

  // ✅ If no shop tokens and visiting a protected `/shop/**` route → redirect to login
  if (
    isShopRoute &&
    !isShopAuthRoute &&
    !newShopAccessToken &&
    !shopRefreshToken
  ) {
    const locale = pathname.split("/")[1] || "en";
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}/shop/login`;
    return NextResponse.redirect(url);
  }

  // ✅ Redirect authenticated shop user away from login/register
  if (newShopAccessToken && isShopAuthRoute) {
    const locale = pathname.split("/")[1] || "en";
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}/shop`;
    return NextResponse.redirect(url);
  }

  // ✅ Redirect authenticated normal user away from /signin, /signup
  if (newAccessToken && authRoutes.some((r) => pathname.startsWith(r))) {
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
