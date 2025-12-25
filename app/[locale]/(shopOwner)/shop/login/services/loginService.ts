import api from "@/utils/axios";
import shopLoginSchema from "../validation/shopLoginSchema";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const shopLoginService = async (_prevState: any, formData: FormData) => {
  const formValues = {
    email: formData.get("email")?.toString() as string,
    password: formData.get("password")?.toString() as string,
  };

  const validation = shopLoginSchema.safeParse(formValues);

  if (!validation.success) {
    return {
      email: formValues.email,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { password } = validation.data;

  const res = await api.post(`/shop/login?password=${password}`);

  if (res.status === 203) redirect("/shop");

  return {
    error: {
      status: res.status,
      message: "Unexpected server response",
    },
  };
};
