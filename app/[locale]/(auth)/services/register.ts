"use server";

import { redirect } from "next/navigation";
import { registerValidationSchema } from "../validation/signUp";
import { cookies } from "next/headers";

export const registerService = async (
  _state: undefined,
  formData: FormData
) => {
  try {
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

    // 3️⃣ Call backend API
    const res = await fetch("https://api.luxeragift.com/en/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: parsed.data.fullName,
        email: parsed.data.email,
        password: parsed.data.password,
        password_confirmation: parsed.data.confirmPassword,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (data.success && data.access_token) {
      (await cookies()).set("access_token", data.access_token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      redirect("/");
    }

    return data;
  } catch (error) {
    console.error("Register error:", error);
    return { success: false, message: "Something went wrong" };
  }
};
