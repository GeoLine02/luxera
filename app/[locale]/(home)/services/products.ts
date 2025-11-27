import api from "@/utils/axios";

export const fetchVipProducts = async () => {
  try {
    const res = await api.get("/products/vip");
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const res = await api.get("/products/featured");
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};
