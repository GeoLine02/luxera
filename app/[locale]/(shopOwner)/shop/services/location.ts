import api from "@/utils/axios";

export const fetchAllCities = async () => {
  try {
    const res = await api.get("/cities");
    if (res.status === 200) {
      return res.data;
    }
    return;
  } catch (err) {
    console.log(err);
  }
};
