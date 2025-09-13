"use client";

export const initiateGoogleAuth = () => {
  // Ensure the base URL doesn't end with a slash
  const baseUrl = (process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_LOCAL_URL || "http://127.0.0.1:8000"
    : process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.luxeragift.com"
  ).replace(/\/+$/, ''); // Remove trailing slashes

  // Ensure the path starts with a single slash
  const path = '/auth/google/redirect'.replace(/^\/+/, '/');
  
  // Combine base URL and path
  window.location.href = `${baseUrl}${path}`;
};

export const handleGoogleCallback = async (code: string) => {
  try {
    // Ensure the base URL doesn't end with a slash
    const baseUrl = (process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.luxeragift.com"
      : process.env.NEXT_PUBLIC_API_LOCAL_URL || "http://127.0.0.1:8000"
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
