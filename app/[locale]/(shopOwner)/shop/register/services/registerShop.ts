import api from "@/utils/axios";
import shopRegisterSchema from "../validation/shopRegisterSchema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerShopService = async (
  _prevState: any,
  formData: FormData
) => {
  const formValues = {
    userId: formData.get("userId")?.toString() ?? "",
    shopName: formData.get("shopName")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    repeatPassword: formData.get("repeatPassword")?.toString() ?? "",
  };

  const validation = shopRegisterSchema.safeParse(formValues);

  if (!validation.success) {
    // Return Zod errors to your useActionState's `state`
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // Proceed with API call if valid
  const { shopName, password } = validation.data;

  const res = await api.post("/shop/register", {
    userId: formValues.userId,
    shopName,
    password,
  });

  if (res.status === 201) return res.data;
  return {
    error: {
      status: res.status,
      message: "Unexpected server response.",
    },
  };
};
