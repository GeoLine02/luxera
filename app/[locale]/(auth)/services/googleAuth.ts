"use client";

interface GoogleAuthResponse {
  token: string;
  user_id: number;
  name: string;
  email: string;
}

/**
 * Initiates Google OAuth flow
 * @param locale - The current locale (e.g., 'en', 'ka')
 */
export const initiateGoogleAuth = (locale: string = 'en') => {
  try {
    // Base URL for Laravel backend
    const baseUrl = (process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_LOCAL_URL || 'http://127.0.0.1:8000'
      : process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.luxeragift.com'
    ).replace(/\/+$/, '');

    // Laravel Google OAuth endpoint
    const authPath = '/auth/google/redirect';
    
    // Create state object with redirect URL
    const state = encodeURIComponent(JSON.stringify({
      redirect_after_login: window.location.href,
      _token: document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
    }));
    
    const url = `${baseUrl}${authPath}?state=${state}`;
    
    // Open in a new tab with specific dimensions
    const width = 600;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    // Open the Google OAuth URL in a popup
    const authWindow = window.open(
      url,
      'GoogleAuth',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    );

    // Add error handling for popup blockers
    if (!authWindow || authWindow.closed || typeof authWindow.closed === 'undefined') {
      throw new Error('Popup was blocked. Please allow popups for this website.');
    }

    // Listen for messages from the popup
    const messageHandler = (event: MessageEvent) => {
      // Verify the origin for security
      const allowedOrigins = [
        process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://luxeragift.netlify.app',
        'http://localhost:3000'
      ];

      if (allowedOrigins.includes(event.origin)) {
        if (event.data.type === 'google-auth-success') {
          // Handle successful authentication
          const { token, user_id, name, email, redirectTo } = event.data;
          // Store the token and user data
          storeAuthData({ token, user_id, name, email });
          // Remove the event listener
          window.removeEventListener('message', messageHandler);
          // Update auth state
          window.dispatchEvent(new Event('auth-change'));
          
          // Redirect to the original URL or profile
          const redirectUrl = redirectTo || `/${locale}/profile`;
          window.location.href = redirectUrl;
        } else if (event.data.type === 'google-auth-error') {
          // Handle authentication error
          console.error('Google auth error:', event.data.error);
          window.removeEventListener('message', messageHandler);
          throw new Error(event.data.error || 'Authentication failed');
        }
      }
    };

    window.addEventListener('message', messageHandler);

  } catch (error) {
    console.error('Failed to initiate Google Auth:', error);
    throw error;
  }
};

/**
 * Stores authentication data in cookies and localStorage
 */
export const storeAuthData = (data: GoogleAuthResponse) => {
  const { token, user_id, name, email } = data;
  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? 'secure; ' : '';
  const domain = isProduction ? 'domain=luxeragift.com; ' : '';
  
  // Store token in HTTP-only cookie
  document.cookie = `access_token=${token}; ${domain}path=/; max-age=${
    60 * 60 * 24 * 7 // 1 week
  }; ${secureFlag}samesite=lax`;
  
  // Store user data in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', JSON.stringify({ id: user_id, name, email }));
  }
};

/**
 * Handles the Google OAuth callback from the frontend URL
 * This should be called in your callback page component
 */
export const handleAuthCallback = (): GoogleAuthResponse | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userId = urlParams.get('user_id');
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const stateParam = urlParams.get('state');
    
    if (token && userId && name && email) {
      const authData = {
        token,
        user_id: parseInt(userId, 10),
        name: decodeURIComponent(name),
        email: decodeURIComponent(email)
      };
      
      // Store the auth data
      storeAuthData(authData);
      
      // Parse state if it exists
      let redirectUrl = '/';
      if (stateParam) {
        try {
          const state = JSON.parse(decodeURIComponent(stateParam));
          if (state.redirect_after_login) {
            redirectUrl = state.redirect_after_login;
          }
        } catch (e) {
          console.warn('Failed to parse state parameter', e);
        }
      }
      
      // Notify the parent window (if in popup)
      if (window.opener) {
        window.opener.postMessage({
          type: 'google-auth-success',
          ...authData,
          redirectTo: redirectUrl
        }, process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://luxeragift.netlify.app');
        
        // Close the popup after a short delay
        setTimeout(() => window.close(), 500);
      } else {
        // If not in popup, redirect directly
        window.location.href = redirectUrl;
      }
      
      return authData;
    }
    
    throw new Error('Missing required authentication parameters');
    
  } catch (error) {
    console.error('Auth callback error:', error);
    
    if (window.opener) {
      window.opener.postMessage({
        type: 'google-auth-error',
        error: error instanceof Error ? error.message : 'Authentication failed'
      }, process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://luxeragift.netlify.app');
      
      // Close the popup after a short delay
      setTimeout(() => window.close(), 500);
    }
    
    return null;
  }
};
