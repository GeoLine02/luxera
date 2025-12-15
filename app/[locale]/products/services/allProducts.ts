import api from "@/utils/axios";

export const fetchAllProducts = async (
  page: number,
  subcategoryId?: string,
  priceFrom?: number,
  priceTo?: number
) => {
  try {
    const res = await api.get(
      `/products?page=${page}&subcategoryId=${subcategoryId}&priceFrom=${priceFrom}&priceTo=${priceTo}`
    );

    if (res.status === 200) {
      const data = await res.data;
      console.log("paginated products data");
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
