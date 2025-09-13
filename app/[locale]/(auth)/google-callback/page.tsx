"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleAuthCallback } from '../services/googleAuth';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing Google authentication...');

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Check if we have the required parameters
        const token = searchParams.get('token');
        const userId = searchParams.get('user_id');
        const name = searchParams.get('name');
        const email = searchParams.get('email');

        if (!token || !userId || !name || !email) {
          throw new Error('Missing authentication parameters');
        }

        // Handle the auth callback
        const result = await handleAuthCallback();
        
        if (result) {
          setStatus('success');
          setMessage('Authentication successful! Redirecting...');
          
          // Get redirect URL from state or use default
          const state = searchParams.get('state');
          let redirectUrl = '/';
          
          if (state) {
            try {
              const parsedState = JSON.parse(decodeURIComponent(state));
              if (parsedState.redirect_after_login) {
                redirectUrl = parsedState.redirect_after_login;
              }
            } catch (e) {
              console.warn('Failed to parse state parameter', e);
            }
          }
          
          // Redirect after a short delay
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 1500);
        } else {
          throw new Error('Authentication failed: No data returned');
        }
      } catch (err) {
        console.error('Google callback error:', err);
        setStatus('error');
        setMessage(
          err instanceof Error 
            ? `Authentication failed: ${err.message}` 
            : 'An unknown error occurred during authentication'
        );
        
        // Redirect to login page after showing error
        setTimeout(() => {
          const redirectUrl = new URL('/signin', window.location.origin);
          if (err instanceof Error) {
            redirectUrl.searchParams.set('error', encodeURIComponent(err.message));
          }
          window.location.href = redirectUrl.toString();
        }, 3000);
      }
    };

    processCallback();
  }, [router, searchParams]);

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
            <p className="text-sm text-gray-500">Redirecting to login page...</p>
          </div>
        )}
      </div>
    </div>
  );
}
