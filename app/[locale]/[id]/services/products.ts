"use server";

import api from "@/utils/axios";

export const fetchProductById = async (productId: number) => {
  try {
    const res = await api.get(`/products/${productId}`);
    if (res.status !== 200) {
      return res.data?.message;
    }

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
