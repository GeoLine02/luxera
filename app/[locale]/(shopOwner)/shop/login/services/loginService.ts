import api from "@/utils/axios";
import shopLoginSchema from "../validation/shopLoginSchema";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";

export const shopLoginService = async (password: string) => {
  try {
    const validation = shopLoginSchema.safeParse({ password });

    if (!validation.success)
      return {
        type: "validation",
        errors: validation.error.flatten().fieldErrors,
      };

    const res = await api.post(`/shop/login?password=${password}`);
    if (res.status === 203) redirect("/shop");
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as AxiosError<any>;

    if (err.response) {
      throw {
        type: "server",
        status: err.response.status,
        message: err.response.data.message,
      };
    }

    throw {
      type: "network",
      message: "Network error. Please try again.",
    };
  }
};
