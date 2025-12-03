import { ProductFormType } from "@/app/types/product";
import api from "@/utils/axios";

export const createNewProduct = async (data: ProductFormType) => {
  try {
    const res = await api.post("/seller/products/create", data);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
