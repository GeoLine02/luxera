'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallbackRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the current path to extract locale
      const pathParts = window.location.pathname.split('/');
      const locale = pathParts[1] || 'en';
      
      // Get all search params
      const searchParams = new URLSearchParams(window.location.search);
      
      // Create the new URL with the correct locale
      const newUrl = new URL(
        `/${locale}/auth/google-callback?${searchParams.toString()}`,
        window.location.origin
      );
      
      // Redirect to the correct route
      window.location.href = newUrl.toString();
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>Please wait while we redirect you to the authentication page.</p>
      </div>
    </div>
  );
}
