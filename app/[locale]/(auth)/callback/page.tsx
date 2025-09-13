'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

export default function CallbackRedirect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // Get current path and extract locale
    const pathParts = pathname.split('/');
    const locale = pathParts[1] || 'en';
    
    // Get all current search params
    const params = new URLSearchParams(searchParams.toString());
    
    // Build the new URL with all parameters
    const newUrl = new URL(
      `/${locale}/auth/google-callback?${params.toString()}`,
      window.location.origin
    );
    
    // Redirect to the google-callback page with all parameters
    window.location.href = newUrl.toString();
  }, [pathname, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>Please wait while we redirect you to the authentication page.</p>
      </div>
    </div>
  );
}
