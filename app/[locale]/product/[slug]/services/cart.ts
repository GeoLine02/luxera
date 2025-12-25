import api from "@/utils/axios";

export const addToCartService = async (
  userId: number,
  productId: number,
  productVariantId: number,
  productQuantity: number
) => {
  try {
    const res = await api.post("/cart", {
      userId,
      productId,
      variantId: productVariantId,
      quantity: productQuantity,
    });
    if (res.status !== 201) {
      return res.data.message;
    }

    const data = res.data.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
