import api from "@/utils/axios";

export const deleteShopService = async (userId: number, password: string) => {
  try {
    const res = await api.delete(`/shop?userId=${userId}&password=${password}`);

    console.log(res);

    if (res.status !== 200) {
      return { error: res.data.message };
    }

    // const cookieStore = await cookies();

    // cookieStore.delete("shopAccessToken");
    // cookieStore.delete("shopRefreshToken");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateShopLocation = async (
  cityId: number | null,
  customCityName: string
) => {
  try {
    const res = await api.patch(`/shop/location`, {
      locationId: cityId,
      customCity: customCityName,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
