import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxera-storage.hel1.your-objectstorage.com",
        port: "",
        pathname: "/**",
      },
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
      {
        protocol: "https",
        hostname: `${process.env.PROD_HOST}`,
        pathname: "/uploads/**",
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
      // without locale
      {
        source: "/api/:path*",
        destination,
      },
      // with locale
      {
        source: "/:locale/api/:path*",
        destination,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
