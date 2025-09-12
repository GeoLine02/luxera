"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleGoogleCallback } from '../services/googleAuth';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing Google authentication...');

  useEffect(() => {
    const processCallback = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
          setStatus('error');
          setMessage('Google authentication was cancelled or failed.');
          setTimeout(() => router.push('/signin'), 3000);
          return;
        }

        if (!code) {
          setStatus('error');
          setMessage('No authorization code received from Google.');
          setTimeout(() => router.push('/signin'), 3000);
          return;
        }

        // Handle the callback
        const result = await handleGoogleCallback(code);
        
        if (result.token) {
          setStatus('success');
          setMessage('Successfully logged in with Google! Redirecting...');
          
          // Trigger auth change event for header to update
          window.dispatchEvent(new Event('auth-change'));
          
          // Redirect to profile or dashboard
          setTimeout(() => router.push('/profile'), 1500);
        } else {
          throw new Error('No token received');
        }
      } catch (error) {
        console.error('Google callback error:', error);
        setStatus('error');
        setMessage('Authentication failed. Please try again.');
        setTimeout(() => router.push('/signin'), 3000);
      }
    };

    processCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        {status === 'loading' && (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            <h2 className="text-xl font-semibold text-gray-900">Authenticating...</h2>
            <p className="text-gray-600">{message}</p>
          </div>
        )}
        
        {status === 'success' && (
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-900">Success!</h2>
            <p className="text-gray-600">{message}</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-900">Authentication Failed</h2>
            <p className="text-gray-600">{message}</p>
            <p className="text-sm text-gray-500">Redirecting to sign in page...</p>
          </div>
        )}
      </div>
    </div>
  );
}
