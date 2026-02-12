import api from "@/utils/axios";

export const createNewChat = async (prompt: string) => {
  try {
    const res = await api.post("/chatbot/conversations/new", {
      userPrompt: prompt,
    });
    console.log("New chat created:", res.data);
    return res;
  } catch (error) {
    console.error("Error creating new chat:", error);
  }
};

export const SendNextMessage = async (
  prompt: string,
  conversationId: string,
) => {
  try {
    const res = await api.post(
      `/chatbot/conversations/${conversationId}/respond`,
      {
        userPrompt: prompt,
      },
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
