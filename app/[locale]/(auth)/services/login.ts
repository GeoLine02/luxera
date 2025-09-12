"use server";

import { cookies } from "next/headers";
import { loginValidationSchema } from "../validation/login";
import { redirect } from "next/navigation";
import { LoginResponse, UserResponse, User, LoginServiceResponse } from "../../../types/user";

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

  // Use local API URL in development, production URL otherwise
  const apiUrl = process.env.NODE_ENV === 'development' 
    ? process.env.API_LOCAL_URL 
    : process.env.API_BASE_URL;

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
    } catch {
    }
    
    return {
      success: false,
      errors: { 
        general: [errorData?.message || `Login failed: ${res.status} ${res.statusText}`] 
      },
    };
  } 
  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return {
      success: false,
      errors: { 
        general: ['Server returned an invalid response format'] 
      },
    };
  }

  let data: LoginResponse;
  try {
    data = await res.json() as LoginResponse;
    
  } catch (error) {
    const responseText = await res.text();
    return {
      success: false,
      errors: { 
        general: ['Invalid server response'] 
      },
    };
  }

  // Extract token from response
  const token = data.token || data.access_token || data.data?.token || data.data?.access_token;
  
  if (token) {
    (await cookies()).set("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/profile");
  } else {
    return {
      success: false,
      errors: { 
        general: ['Login successful but no token received'] 
      },
    };
  }

  return data;
};

export async function getUser(): Promise<User | null> {
  try {
    // 1. Get token from Authorization header
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token")?.value;
    if (!token) {
      return null;
    }
    // 2. Call backend /me endpoint with Bearer token
    // Use local API URL in development, production URL otherwise
    const apiUrl = process.env.NODE_ENV === 'development' 
      ? process.env.API_LOCAL_URL 
      : process.env.API_BASE_URL;


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

    const contentType = resp.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return null;
    }

    let data: UserResponse;
    try {
      data = await resp.json() as UserResponse;
    } catch (error) {
      return null;
    }

    const user = data?.success && data?.data ? data.data : null;

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
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

    const apiUrl = process.env.NODE_ENV === 'development' 
      ? process.env.API_LOCAL_URL 
      : process.env.API_BASE_URL;

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
  } catch (error) {
    // Clear cookie even if API call fails
    try {
      (await cookies()).delete("access_token");
    } catch {}
    return true;
  }
}
