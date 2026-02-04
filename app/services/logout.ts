import api from "@/utils/axios";

export const logOut = async () => {
  try {
    const res = await api.delete("/user/logout");
    return res;
  } catch (error) {
    console.log(error);
  }
};
