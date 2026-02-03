import api from "@/utils/axios";
import { cookies } from "next/headers";

export const fetchUserOrders = async () => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();
    const res = await api.get("/orders", {
      headers: {
        Cookie: cookieHeader,
      },
    });
    if (res.status === 200) {
      const data = res.data.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
