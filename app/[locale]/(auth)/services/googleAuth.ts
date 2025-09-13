"use client";

/**
 * Initiates Google OAuth flow
 * @param locale - The current locale (e.g., 'en', 'ka')
 * @param isAdmin - Whether this is an admin authentication flow
 */
export const initiateGoogleAuth = (locale: string = 'en', isAdmin: boolean = false) => {
  try {
    // Base URL without locale
    const baseUrl = (process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_LOCAL_URL || 'http://127.0.0.1:8000'
      : process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.luxeragift.com'
    ).replace(/\/+$/, '');

    // Determine the correct path based on admin status
    const authPath = isAdmin ? '/admin/auth/google/redirect' : `/${locale}/auth/google/redirect`;
    const url = `${baseUrl}${authPath}`;
    
    // Open in a new tab with specific dimensions
    const width = 600;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const authWindow = window.open(
      url,
      'GoogleAuth',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    );

    // Add error handling for popup blockers
    if (!authWindow || authWindow.closed || typeof authWindow.closed === 'undefined') {
      throw new Error('Popup was blocked. Please allow popups for this website.');
    }
  } catch (error) {
    console.error('Failed to initiate Google Auth:', error);
    throw error;
  }
};

/**
 * Handles the Google OAuth callback
 * @param code - The authorization code from Google
 * @param locale - The current locale (e.g., 'en', 'ka')
 * @param isAdmin - Whether this is an admin authentication flow
 */
export const handleGoogleCallback = async (code: string, locale: string = 'en', isAdmin: boolean = false) => {
  try {
    // Base URL without locale
    const baseUrl = (process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.luxeragift.com'
      : process.env.NEXT_PUBLIC_API_LOCAL_URL || 'http://127.0.0.1:8000'
    ).replace(/\/+$/, '');

    // Determine the correct callback path based on admin status
    const callbackPath = isAdmin 
      ? '/admin/auth/google/callback' 
      : `/${locale}/auth/google/callback`;
      
    const url = `${baseUrl}${callbackPath}?code=${encodeURIComponent(code)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for cookies
      cache: 'no-store', // Prevent caching
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || 'Google authentication failed',
        { cause: errorData }
      );
    }

    const data = await response.json();

    // Store token in cookie if successful
    if (data.token) {
      const isProduction = process.env.NODE_ENV === 'production';
      const secureFlag = isProduction ? 'secure; ' : '';
      const domain = isProduction ? 'domain=luxeragift.com; ' : '';
      
      document.cookie = `access_token=${data.token}; ${domain}path=/; max-age=${
        60 * 60 * 24 * 7 // 1 week
      }; ${secureFlag}samesite=lax`;
      
      // Also store in localStorage for client-side access if needed
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', data.token);
      }
    }

    return data;
  } catch (error) {
    console.error('Google auth callback error:', error);
    
    // More detailed error handling
    if (error instanceof Error) {
      if ('cause' in error) {
        console.error('Error details:', error.cause);
      }
      throw new Error(`Authentication failed: ${error.message}`, { cause: error });
    }
    
    throw new Error('An unknown error occurred during authentication');
  }
};
