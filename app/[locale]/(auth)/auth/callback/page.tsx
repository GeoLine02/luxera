'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallbackRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Get the full URL with all parameters
    const url = new URL(window.location.href);
    
    // Create the new URL with the correct path
    const newUrl = new URL('/en/auth/google-callback' + url.search, window.location.origin);
    
    // Redirect to the correct route
    window.location.href = newUrl.toString();
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
