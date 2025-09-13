'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { storeAuthData } from '../services/googleAuth';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const userId = searchParams.get('user_id');
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const state = searchParams.get('state');

  useEffect(() => {
    const handleAuth = async () => {
      if (token && userId && name && email) {
        try {
          const authData = {
            token,
            user_id: parseInt(userId, 10),
            name: decodeURIComponent(name),
            email: decodeURIComponent(email)
          };

          // Store the auth data using our existing function
          storeAuthData(authData);

          // Parse state for redirect URL if it exists
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

          // If this is a popup, send message to parent
          if (window.opener) {
            window.opener.postMessage({
              type: 'google-auth-success',
              ...authData,
              redirectTo: redirectUrl
            }, window.location.origin);
            
            // Close the popup
            window.close();
          } else {
            // If not in a popup, redirect to the target URL or home
            router.push(redirectUrl);
          }
        } catch (error) {
          console.error('Auth error:', error);
          handleAuthError(error);
        }
      } else {
        handleAuthError(new Error('Missing authentication parameters'));
      }
    };

    const handleAuthError = (error: unknown) => {
      console.error('Authentication error:', error);
      if (window.opener) {
        window.opener.postMessage({
          type: 'google-auth-error',
          error: error instanceof Error ? error.message : 'Authentication failed'
        }, window.location.origin);
        window.close();
      } else {
        router.push('/signin?error=auth_failed');
      }
    };

    handleAuth();
  }, [token, userId, name, email, state, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full mx-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Completing Authentication</h1>
        <p className="text-center mb-6">Please wait while we log you in...</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full animate-pulse" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
}
