"use server";

import { redirect } from "next/navigation";
import { registerValidationSchema } from "../validation/signUp";
import { cookies } from "next/headers";

export const registerService = async (
  _state: undefined,
  formData: FormData
) => {
  const parsed = registerValidationSchema.safeParse({
    fullName: formData.get("fullName")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirmPassword")?.toString(),
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

  const res = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullname: parsed.data.fullName,
      email: parsed.data.email,
      password: parsed.data.password,
      password_confirmation: parsed.data.confirmPassword,
    }),
  });

  // Check if the response is successful
  if (!res.ok) {
    const errorText = await res.text();
    console.log('Register error response body:', errorText);
    
    // Try to parse error as JSON for better error messages
    let errorData;
    try {
      errorData = JSON.parse(errorText);
      console.log('Parsed register error data:', errorData);
    } catch {
      console.log('Could not parse register error as JSON');
    }
    
    return {
      success: false,
      errors: { 
        general: [errorData?.message || `Registration failed: ${res.status} ${res.statusText}`] 
      },
    };
  }

  // Check if the response is JSON
  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const responseText = await res.text();
    return {
      success: false,
      errors: { 
        general: ['Server returned an invalid response format'] 
      },
    };
  }

  let data;
  try {
    data = await res.json();
  } catch (error) {
    const responseText = await res.text();
    return {
      success: false,
      errors: { 
        general: ['Invalid server response'] 
      },
    };
  }

  if (data.success && data.access_token) {
    (await cookies()).set("access_token", data.access_token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    // redirect to locale-aware home
    redirect(`/`);
  }

  return data;
};
