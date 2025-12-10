import api from "@/utils/axios";

export const createNewProduct = async (data: FormData) => {
  try {
    const res = await api.post("/seller/products/create", data);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchSellerProducts = async () => {
  try {
    const res = await api.get("/seller/products");
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw err.response?.data?.message || "Failed to fetch seller products";
  }
};

export const fetchSellerProductById = async (id: number) => {
  try {
    const res = await api.get(`/seller/products/${id}`);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw err.response?.data?.message || "Failed to fetch seller product";
  }
};

export const updateSellerProductById = async (formData: FormData) => {
  try {
    const res = await api.put("/seller/products/update", formData);
    if (res.status === 201) {
      const data = res.data;
      console.log("updated product data: ", data);
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    throw err.response?.data?.message || "Failed to upadte product";
  }
};
