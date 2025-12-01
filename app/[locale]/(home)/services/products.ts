import api from "@/utils/axios";

export const fetchVipProducts = async () => {
  try {
    const res = await api.get("/products/vip");
    console.log("vip products", res.data);
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
    return {
      data: [],
    };
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const res = await api.get("/products/featured");
    console.log("featured products: ", res.data);
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};
