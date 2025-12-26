import api from "@/utils/axios";

export const fetchAllProducts = async (
  page: number,
  subcategory?: string,
  priceFrom?: string,
  priceTo?: string,
  search?: string
) => {
  try {
    const res = await api.get(
      `/products?page=${page}&subcategory=${subcategory}&priceFrom=${priceFrom}&priceTo=${priceTo}&search=${search}`
    );

    if (res.status === 200) {
      const data = await res.data;
      console.log("paginated products data", data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
