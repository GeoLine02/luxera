"use server";

import { cookies } from "next/headers";
import api from "./axios";

export async function getUser() {
  try {
    const cookie = await cookies();
    const accessToken = cookie.get("accessToken")?.value;

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
    // if (err.response?.status === 401) {
    //   // Token expired → refresh
    //   const res = await api.get("/user/refresh", {
    //     headers: {
    //       Authorization: `Bearer ${refreshToken}`,
    //     },
    //   });

    //   if (res.data === null) return null;
    //   // Retry the original request
    //   return await api.get("/user/me");
    // }
    // throw err;
  }
}
