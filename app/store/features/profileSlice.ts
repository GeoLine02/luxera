import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  activeSection: string;
}

export const profileSlice = createSlice({
  name: "profile",
  initialState: <InitialStateType>{
    activeSection: "personalInfo",
  },
  reducers: {
    selectSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { selectSection } = profileSlice.actions;
export default profileSlice.reducer;
