"use client";

export const initiateGoogleAuth = () => {
  const apiUrl = process.env.NODE_ENV === 'development' 
    ? process.env.NEXT_PUBLIC_API_LOCAL_URL || 'http://127.0.0.1:8000/en'
    : process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.luxeragift.com/en';

  // Redirect to Laravel Google OAuth endpoint
  window.location.href = `${apiUrl}/auth/google/redirect`;
};

export const handleGoogleCallback = async (code: string): Promise<any> => {
  try {
    const apiUrl = process.env.NODE_ENV === 'development' 
      ? process.env.NEXT_PUBLIC_API_LOCAL_URL || 'http://127.0.0.1:8000/en'
      : process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.luxeragift.com/en';

    const response = await fetch(`${apiUrl}/auth/google/callback?code=${code}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Google authentication failed');
    }

    const data = await response.json();
    
    // Store token in cookie if successful
    if (data.token) {
      document.cookie = `access_token=${data.token}; path=/; max-age=${60 * 60 * 24 * 7}; secure=${process.env.NODE_ENV === 'production'}; samesite=lax`;
    }

    return data;
  } catch (error) {
    console.error('Google auth callback error:', error);
    throw error;
  }
};
