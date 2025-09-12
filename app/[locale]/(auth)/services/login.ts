"use server";

import { cookies } from "next/headers";
import { loginValidationSchema } from "../validation/login";
import { redirect } from "next/navigation";

export const loginService = async (_state: undefined, formData: FormData) => {
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

  const res = await fetch(`${process.env.API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: parsed.data.email,
      password: parsed.data.password,
    }),
  });

  // const res2 = await fetch("https://api.luxeragift.com/sanctum/csrf-cookie");

  const data = await res.json();

  if (data) {
    (await cookies()).set("access_token", data.token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");
  }

  return data;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getUser(): Promise<any> {
  try {
    // 1. Get token from Authorization header
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      console.warn("No token found in headers");
      return null;
    }

    // 2. Call backend /me endpoint with Bearer token
    const resp = await fetch(`${process.env.API_BASE_URL}/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        "X-Localization": "en",
      },
      cache: "no-store",
    });

    const data = await resp.json();
    console.log(data);
    // Your backend: { success: true, data: {...user} }
    const user = data?.success && data?.data ? data.data : null;

    if (!user) {
      console.warn("getUser: unexpected response shape", data);
      return null;
    }

    return user;
  } catch (error) {
    console.error("getUser failed:", error);
    return null;
  }
}
