"use server";

import api from "@/utils/axios";
import { cookies } from "next/headers";

export const deleteShopService = async (userId: number, password: string) => {
  try {
    const res = await api.delete(`/shop?userId=${userId}&password=${password}`);

    console.log(res);

    if (res.status !== 200) {
      return { error: res.data.message };
    }

    const cookieStore = await cookies();

    cookieStore.delete("shopAccessToken");
    cookieStore.delete("shopRefreshToken");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
