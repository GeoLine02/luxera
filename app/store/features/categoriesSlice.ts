import { allCategoriesData } from "@/data/categories";
import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isCategoriesModalOpen: false,
    selectedCategory: allCategoriesData[0],
    selectedSubCategory: null,
  },
  reducers: {
    openCategoiresModal: (state) => {
      state.isCategoriesModalOpen = true;
    },
    closeCategoriesModal: (state) => {
      state.isCategoriesModalOpen = false;
    },
    chooseSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    chooseSelectedSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
});

export const {
  openCategoiresModal,
  closeCategoriesModal,
  chooseSelectedSubCategory,
  chooseSelectedCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
