import api from "@/utils/axios";

export const createNewProduct = async (data: FormData) => {
  try {
    const res = await api.post("/seller/products/create", data);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
