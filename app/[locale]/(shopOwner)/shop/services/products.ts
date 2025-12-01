import api from "@/utils/axios";

export const createNewProduct = async (formData: FormData) => {
  try {
    const res = await api.post("/products", formData);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
