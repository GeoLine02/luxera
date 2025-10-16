"use server";

import { registerValidationSchema } from "../validation/signUp";
import fetchData from "@/utils/fetchData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerService(_prevState: any, formData: FormData) {
  const userRegisterCreds = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validatedFields = registerValidationSchema.safeParse(userRegisterCreds);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const res = await fetchData("/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegisterCreds),
    });

    if (!res.ok) {
      const data = await res.json();

      return {
        values: userRegisterCreds,
        error: data.error || "Failed to register user.",
        status: data.status,
      };
    }

    const data = await res.json();
    if (data) return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
}
