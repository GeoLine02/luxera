import api from "@/utils/axios";
import { cookies } from "next/headers";

export const getAllChats = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await api.get("/chatbot/conversations", {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getChatById = async (chatId: string) => {
  try {
    if (chatId === "new-chat") {
      return Promise.resolve([]);
    } else {
      const cookieStore = await cookies();
      const accessToken = cookieStore.get("accessToken")?.value;

      const res = await api.get(
        `/chatbot/conversations/${chatId}/load-responses`,
        {
          headers: {
            Cookie: `accessToken=${accessToken}`,
          },
        },
      );
      return res.data.data;
    }
  } catch (error) {
    console.log(error);
    return []; // optional: keep return type consistent
  }
};
