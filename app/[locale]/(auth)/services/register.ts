"use server";

import { redirect } from "next/navigation";
import { registerValidationSchema } from "../validation/signUp";

export const registerService = async (
  _state: undefined,
  formData: FormData
) => {
  // Validate form data
  const parsed = registerValidationSchema.safeParse({
    fullName: formData.get("fullName")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirmPassword")?.toString(),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    // Use local API URL in development, production URL otherwise
    const isProduction = process.env.NODE_ENV === 'production';
    const defaultApiUrl = isProduction 
      ? 'https://api.luxeragift.com/en' 
      : 'http://localhost:8000/en';
      
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;

    // Prepare registration data with password_confirmation field
    const registrationData = {
      fullname: parsed.data.fullName,
      email: parsed.data.email,
      password: parsed.data.password,
      password_confirmation: parsed.data.confirmPassword
    };

    // Send registration request
    const response = await fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    // Parse response data
    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      console.error("Failed to parse response as JSON:", error);
      return {
        success: false,
        message: "Invalid server response",
        errors: { general: ["The server returned an invalid response"] },
      };
    }

    // Handle error responses
    if (!response.ok) {
      console.log("Registration error response:", {
        status: response.status,
        data: responseData,
      });

      // Handle validation errors from server
      if (response.status === 422 && responseData.errors) {
        return {
          success: false,
          message: responseData.message || "Validation failed",
          errors: responseData.errors,
        };
      }

      // Handle other error responses
      return {
        success: false,
        message: responseData.message || "Registration failed",
        errors: responseData.errors || { 
          general: [responseData.message || "An unknown error occurred"] 
        },
      };
    }

    // Handle successful registration
    if (responseData.access_token) {
      // Redirect to login page after successful registration
      // The redirect function throws an error to handle the redirect
      redirect("/signin?registered=true");
      // The code below won't be reached due to the redirect
      return { success: true, message: "Redirecting to login..." };
    }

    return {
      success: true,
      message: "Registration successful",
      data: responseData,
    };
  } catch (error: unknown) {
    // Check if this is a redirect error (which is expected)
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      // Re-throw the redirect error to let Next.js handle it
      throw error;
    }
    console.error("Registration error:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
      errors: { 
        general: ["Failed to process registration. Please try again later."] 
      },
    };
  }
};
