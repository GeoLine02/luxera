// utils/getUser.ts
"use server";

import { cookies } from "next/headers";
import api from "./axios";

export async function getUser() {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;

  if (!accessToken) {
    return null;
  }

  try {
    const res = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("ressss::::", res.data);
    if (res.status === 200) {
      console.log("userrrrrrr", res.data);
      return res.data;
    }

    return null;
  } catch (err) {
    console.error("Failed to fetch user:", err);
    return null;
  }
}
