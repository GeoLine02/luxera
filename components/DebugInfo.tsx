'use client';

import { useEffect, useState } from 'react';

export default function DebugInfo() {
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const [env, setEnv] = useState<string>('');

  useEffect(() => {
    // This runs on the client side
    setApiUrl(window.location.origin);
    setEnv(process.env.NODE_ENV);
    
    console.log('Environment:', process.env.NODE_ENV);
    console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
    console.log('Current URL:', window.location.href);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <div className="fixed bottom-0 right-0 bg-black bg-opacity-80 text-white p-2 text-xs z-50">
      <div>Environment: {env}</div>
      <div>API URL: {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not set'}</div>
      <div>Current URL: {apiUrl}</div>
    </div>
  );
}
