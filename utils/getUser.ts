"use server";

import { cookies } from "next/headers";
import api from "./axios";

export async function getUser() {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;
  try {
    const res = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200) {
      const data = res.data;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}
