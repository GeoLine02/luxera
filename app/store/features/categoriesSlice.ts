import { CategoryType } from "@/app/types/categories";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isCategoriesModalOpen: boolean;
  selectedCategory: null | CategoryType;
  selectedSubCategory: null | string;
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: <InitialStateType>{
    isCategoriesModalOpen: false,
    selectedCategory: null,
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
      const category: CategoryType = action.payload;
      if (
        state.selectedCategory &&
        state?.selectedCategory.label === category.label
      ) {
        state.selectedCategory = null;
      } else {
        state.selectedCategory = action.payload;
      }
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
