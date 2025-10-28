import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**", // allow any file under /uploads
      },
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: false,

  // 👇 Add this block
  async rewrites() {
    const destination =
      process.env.NODE_ENV === "production"
        ? `${process.env.PROD_API_URL}/:path*`
        : `${process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL}/:path*`;

    return [
      {
        source: "/:locale/api/:path*", // any call to /api/*
        destination: destination, // proxies to your Express backend
      },
    ];
  },
};

export default withNextIntl(nextConfig);
