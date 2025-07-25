import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isMenuOpen: boolean;
}

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: <InitialStateType>{
    isMenuOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
