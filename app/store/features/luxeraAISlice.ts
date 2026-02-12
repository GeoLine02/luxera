import { ChatType } from "@/app/types/ai";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isAllChatOpen: boolean;
  chats: ChatType[];
}

export const luxeraAISlice = createSlice({
  name: "luxeraAI",
  initialState: <InitialStateType>{
    isAllChatOpen: false,
    chats: [],
  },
  reducers: {
    toggleAllChat: (state) => {
      if (state.isAllChatOpen) {
        state.isAllChatOpen = false;
      } else {
        state.isAllChatOpen = true;
      }
    },
    saveChatsData: (state, action) => {
      state.chats = action.payload;
    },

    addNewChat: (state, action) => {
      state.chats = [...state.chats, action.payload];
    },
  },
});

export const { toggleAllChat, saveChatsData, addNewChat } =
  luxeraAISlice.actions;
export default luxeraAISlice.reducer;
