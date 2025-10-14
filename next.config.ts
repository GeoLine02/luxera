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

  // Use stable params API instead of experimental async params
  experimental: {
    typedRoutes: false,
  },

  // Configure rewrites for development proxy
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!backendUrl) {
        console.warn('NEXT_PUBLIC_API_URL is not set. Proxy will not work.');
        return [];
      }
      
      const backendHost = new URL(backendUrl).host;
      
      return [
        {
          source: '/api/backend/:path*',
          destination: `${backendUrl}/:path*`,
        },
      ];
    }
    return [];
  },

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

    // Add path resolution for @ alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };

    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
