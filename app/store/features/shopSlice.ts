import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  activeSection: string;
  isSectionsOpen: boolean;
}

export const shopSlice = createSlice({
  name: "shopSlice",
  initialState: <InitialStateType>{
    activeSection: "main",
    isSectionsOpen: false,
  },
  reducers: {
    changeSection: (state, action) => {
      state.activeSection = action.payload;
    },
    openSection: (state) => {
      state.isSectionsOpen = true;
    },
    closeSection: (state) => {
      state.isSectionsOpen = false;
    },
  },
});

export const { changeSection, closeSection, openSection } = shopSlice.actions;
export default shopSlice.reducer;
