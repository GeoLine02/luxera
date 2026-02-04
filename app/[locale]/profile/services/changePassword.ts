import api from "@/utils/axios";

export const changePassword = async (newPassword: string) => {
  try {
    const res = await api.post("/user/password/reset", { newPassword });
    return res;
  } catch (error) {
    console.log(error);
  }
};
