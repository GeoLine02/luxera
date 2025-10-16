import { ShopRegisterType } from "@/app/types/shop";
import api from "@/utils/axios";

export const registerShopService = async (
  formData: FormData,
  userId: number
) => {
  try {
    const shopPayload: ShopRegisterType = {
      owenerId: userId,
      password: formData.get("password")?.toString() as string,
      repeatPassword: formData.get("repeatPassword")?.toString() as string,
      shopName: formData.get("shopName")?.toString() as string,
    };

    const res = await api.post("/shop/register", shopPayload);

    if (res.status === 201) {
      const data = await res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
