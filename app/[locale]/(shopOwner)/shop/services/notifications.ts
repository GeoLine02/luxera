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

export const deleteNotification = async (id: number) => {
  try {
    const res = await api.delete(`/seller/inbox/${id}`);
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const markAsRead = async (id: number) => {
  try {
    const res = await api.post(`/seller/inbox/${id}/mark-as-read`);
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};
