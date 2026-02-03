import api from "@/utils/axios";

export const fetchNotifications = async (page: number) => {
  try {
    const res = await api.get(`/seller/inbox?page=${page}`);

    if (res.status === 200) {
      const data = res.data.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
