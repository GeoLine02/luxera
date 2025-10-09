import api from "@/utils/axios";

export const fetchSubCategories = async () => {
  try {
    const res = await api.get("/categories/subCategories");
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};
