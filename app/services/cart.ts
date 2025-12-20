import api from "@/utils/axios";

export const fetchCartItems = async (userId: number) => {
  try {
    const res = await api.get(`/cart/${userId}`);
    if (res.status !== 200) {
      return res.data.message;
    }

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeCartItemQuantityService = async (
  productId: number,
  quantity: number
) => {
  try {
    const res = await api.put(`/cart/${productId}`, {
      quantity,
    });

    if (res.status !== 200) {
      return res.data.message;
    }
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItemService = async (cartItemId: number) => {
  try {
    const res = await api.delete(`/cart/${cartItemId}`);

    console.log("data", res.data);
    if (res.status === 200) {
      const data = res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
