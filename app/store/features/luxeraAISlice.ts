import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isAllChatOpen: boolean;
}

export const luxeraAISlice = createSlice({
  name: "luxeraAI",
  initialState: <InitialStateType>{
    isAllChatOpen: false,
  },
  reducers: {
    toggleAllChat: (state) => {
      if (state.isAllChatOpen) {
        state.isAllChatOpen = false;
      } else {
        state.isAllChatOpen = true;
      }
    },
  },
});

export const { toggleAllChat } = luxeraAISlice.actions;
export default luxeraAISlice.reducer;
