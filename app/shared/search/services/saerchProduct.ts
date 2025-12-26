import api from "@/utils/axios";

export const searchProcutService = async (query: string) => {
  try {
    const res = await api.get(`/products/search?q=${query}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
