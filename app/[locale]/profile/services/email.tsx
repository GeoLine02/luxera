import api from "@/utils/axios";

export const sendCodeService = async () => {
  try {
    const res = await api.post("/user/send-code");

    if (res.status === 200) {
      const data = res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const verifyEmail = async (code: string) => {
  try {
    const res = await api.post("/user/verify", { code: code });
    console.log(res.status, res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
