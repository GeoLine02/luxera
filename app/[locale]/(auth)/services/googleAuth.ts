"use client";

export const initiateGoogleAuth = (locale: string = 'en') => {
  // Ensure the base URL doesn't end with a slash
  const baseUrl = (process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_LOCAL_URL || `http://127.0.0.1:8000/${locale}`
    : process.env.NEXT_PUBLIC_API_BASE_URL || `https://api.luxeragift.com/${locale}`
  ).replace(/\/+$/, ''); // Remove trailing slashes

  // Ensure the path starts with a single slash
  const path = '/auth/google/redirect'.replace(/^\/+/, '/');
  const url = `${baseUrl}${path}`;
  
  // Open in a new tab with specific dimensions
  const width = 600;
  const height = 700;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  
  window.open(
    url,
    'GoogleAuth',
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
  );
};

export const handleGoogleCallback = async (code: string) => {
  try {
    // Ensure the base URL doesn't end with a slash
    const baseUrl = (process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.luxeragift.com/en"
      : process.env.NEXT_PUBLIC_API_LOCAL_URL || "http://127.0.0.1:8000/en"
    ).replace(/\/+$/, ''); // Remove trailing slashes

    // Ensure the path starts with a single slash
    const path = '/auth/google/callback'.replace(/^\/+/, '/');
    const url = `${baseUrl}${path}?code=${encodeURIComponent(code)}`;

    const response = await fetch(url,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Google authentication failed");
    }

    const data = await response.json();

    // Store token in cookie if successful
    if (data.token) {
      document.cookie = `access_token=${data.token}; path=/; max-age=${
        60 * 60 * 24 * 7
      }; secure=${process.env.NODE_ENV === "production"}; samesite=lax`;
    }

    return data;
  } catch (error) {
    console.error("Google auth callback error:", error);
    throw error;
  }
};
