"use server";

import { cookies } from "next/headers";
import { loginValidationSchema } from "../validation/login";
import { redirect } from "next/navigation";
import {
  LoginResponse,
  UserResponse,
  User,
  LoginServiceResponse,
} from "../../../types/user";

export const loginService = async (
  _state: LoginServiceResponse | undefined,
  formData: FormData
): Promise<LoginServiceResponse> => {
  const parsed = loginValidationSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Determine the base URL based on environment
  // Use local API URL in development, production URL otherwise
  const isProduction = process.env.NODE_ENV === 'production';
  const defaultApiUrl = isProduction 
    ? 'https://api.luxeragift.com/en' 
    : 'http://localhost:8000/en';
    
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;
  
  console.log('Environment:', process.env.NODE_ENV);
  console.log('API URL:', apiUrl);
  
  if (!apiUrl) {
    console.error('API URL is not configured');
    return {
      success: false,
      errors: {
        general: ['Server configuration error']
      }
    } as LoginServiceResponse;
  }
  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: parsed.data.email,
      password: parsed.data.password,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch {}

    return {
      success: false,
      errors: {
        general: [
          errorData?.message || `Login failed: ${res.status} ${res.statusText}`,
        ],
      },
    };
  }
  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return {
      success: false,
      errors: {
        general: ["Server returned an invalid response format"],
      },
    };
  }

  let data: LoginResponse;
  try {
    data = await res.json() as LoginResponse;
    
  } catch {
    await res.text();
    return {
      success: false,
      errors: {
        general: ["Invalid server response"],
      },
    };
  }

  // Extract token from response
  const token =
    data.token ||
    data.access_token ||
    data.data?.token ||
    data.data?.access_token;

  if (!token) {
    return {
      success: false,
      errors: {
        general: ["Login successful but no token received"],
      },
    };
  }

  // Set the token in a secure, httpOnly cookie
  (await cookies()).set({
    name: 'access_token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  // Get user data from response if available
  const userData = data.data?.user;
  
  // Store user data in localStorage if available
  if (userData && typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(userData));
    // Dispatch auth-change event to update all components
    window.dispatchEvent(new Event('auth-change'));
  }

  // Redirect to profile page
  redirect('/profile');
  
  // This return is just for TypeScript, will be ignored due to redirect
  return { success: true };

  return data;
};

export async function getUser(): Promise<User | null> {
  try {
    // 1. Get token from Authorization header
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token")?.value;
    if (!token) {
      console.log('No access token found');
      return null;
    }
    
    // Use the same URL logic as loginService
    const isProduction = process.env.NODE_ENV === 'production';
    const defaultApiUrl = isProduction 
      ? 'https://api.luxeragift.com/en' 
      : 'http://localhost:8000/en';
      
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;
    
    console.log('Fetching user from:', apiUrl);
    
    if (!apiUrl) {
      console.error('API URL is not configured');
      return null;
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Localization": "en",
    };

    const resp = await fetch(`${apiUrl}/me`, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!resp.ok) {
      return null;
    }

    const contentType = resp.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return null;
    }

    let data: UserResponse;
    try {
      data = await resp.json() as UserResponse;
    } catch {
      return null;
    }

    const user = data?.success && data?.data ? data.data : null;

    if (!user) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export async function logoutService(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return true; // Already logged out
    }

    // Use the same URL logic as loginService and getUser
    const isProduction = process.env.NODE_ENV === 'production';
    const defaultApiUrl = isProduction 
      ? 'https://api.luxeragift.com/en' 
      : 'http://localhost:8000/en';
      
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;
    
    console.log('Logging out from:', apiUrl);

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Localization": "en",
    };

    await fetch(`${apiUrl}/logout`, {
      method: "POST",
      headers,
      cache: "no-store",
    });

    // Clear the cookie regardless of API response
    (await cookies()).delete("access_token");

    return true;
  } catch {
    // Clear cookie even if API call fails
    try {
      (await cookies()).delete("access_token");
    } catch {}
    return true;
  }
}
