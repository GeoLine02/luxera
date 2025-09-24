import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CORS headers for API routes
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Update this to your frontend URL in production
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept, Accept-Language, X-Requested-With',
  'Access-Control-Allow-Credentials': 'true',
};

// Main middleware
export async function middleware(req: NextRequest) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204, // No Content
      headers: corsHeaders,
    });
  }

  // Handle API routes CORS
  if (req.nextUrl.pathname.startsWith('/')) {
    const response = NextResponse.next();
    
    // Add CORS headers to API responses
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // Run next-intl middleware for non-API routes
  const intlMiddleware = createMiddleware(routing);
  return intlMiddleware(req);
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public folder
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
