import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isChatOpen: boolean;
}

export const luxeraAISlice = createSlice({
  name: "luxeraAI",
  initialState: <InitialStateType>{
    isChatOpen: false,
  },
  reducers: {
    toggleAiChat: (state) => {
      if (state.isChatOpen) {
        state.isChatOpen = false;
      } else {
        state.isChatOpen = true;
      }
    },
  },
});

export const { toggleAiChat } = luxeraAISlice.actions;
export default luxeraAISlice.reducer;
