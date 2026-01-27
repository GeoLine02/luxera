import { OrderPayload } from "@/app/types/order";
import api from "@/utils/axios";

export const createOrder = async (payload: OrderPayload) => {
  try {
    const res = await api.post("/orders/create", payload);
    console.log(res);
    if (res.status === 200) {
      window.location.href = res.data.data.paymentUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
