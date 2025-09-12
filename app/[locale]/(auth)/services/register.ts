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

  const res = await fetch(`${process.env.API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullname: parsed.data.fullName,
      email: parsed.data.email,
      password: parsed.data.password,
      password_confirmation: parsed.data.confirmPassword,
    }),
  });

  const data = await res.json();

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
