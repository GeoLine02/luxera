"use server";

import api from "@/utils/axios";
import { registerValidationSchema } from "../validation/signUp";

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
    const res = await api.post("/user/register", userRegisterCreds);

    if (res.status !== 201) {
      const data = await res.data;

      return {
        values: userRegisterCreds,
        error: data.error || "Failed to register user.",
        status: data.status,
      };
    }

    if (res.status === 201) {
      const data = await res.data;

      if (data) return { success: true };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
}
