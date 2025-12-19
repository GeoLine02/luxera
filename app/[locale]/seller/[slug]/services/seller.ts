import api from "@/utils/axios";

export const fetchShopById = async (shopId: number) => {
  try {
    const res = await api.get(`/shop/${shopId}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const ferchSellerProducts = async (shopId: number, page: number) => {
  try {
    const res = await api.get(`/product/seller?shopId=${shopId}&page=${page}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
