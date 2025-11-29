// services/categories.ts
import api from "@/utils/axios";

export const fetchCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data ?? { data: [] };
  } catch (error) {
    console.error("fetchCategories error:", error);
    return { data: [] }; // prevent undefined
  }
};

export const fetchSubCategories = async () => {
  try {
    const res = await api.get("/categories/subCategories");
    return res.data ?? { data: [] };
  } catch (error) {
    console.error("fetchSubCategories error:", error);
    return { data: [] }; // prevent undefined
  }
};
