"use server";

import { redirect } from "next/navigation";
import { schema } from "../validations/signInValidation";

export interface SignInState {
  errors?: {
    email?: string;
    password?: string;
  };
  message?: string;
}

export const signIn = async (
  prevState: SignInState | null,
  formData: FormData
) => {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = schema.safeParse(rawData);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      errors: {
        email: errors.email?.[0] || "",
        password: errors.password?.[0] || "",
      },
    };
  }

  try {
    redirect("/");
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Authentication Error",
    };
  }
};
