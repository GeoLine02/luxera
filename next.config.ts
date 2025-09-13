import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Remove static export for dynamic routes
  // output: 'export',
  
  // Set the base path if your app is served from a subdirectory
  // basePath: '/your-base-path',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slashes for Netlify
  trailingSlash: true,
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `net` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        dns: false,
        fs: false,
        child_process: false,
      };
    }
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
