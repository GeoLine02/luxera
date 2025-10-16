import api from "@/utils/axios";

export const fetchAllProducts = async () => {
  try {
    const res = await api.get("/products");

    if (res.status === 200) {
      const data = await res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
