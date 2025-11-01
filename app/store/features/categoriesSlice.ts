import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isCategoriesModalOpen: boolean;
  selectedCategory: null | CategoryType;
  selectedSubCategory: null | string;
  categories: CategoryType[];
  subCategories: SubCategoryType[];
  loading: boolean;
  error: string | null;
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: <InitialStateType>{
    isCategoriesModalOpen: false,
    selectedCategory: null,
    selectedSubCategory: null,
    categories: [],
    subCategories: [],
    loading: false,
    error: null,
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
        state?.selectedCategory.categoryImage === category.categoryImage
      ) {
        state.selectedCategory = null;
      } else {
        state.selectedCategory = action.payload;
      }
    },
    chooseSelectedSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
    clearCategoriesError: (state) => {
      state.error = null;
    },
    // Helpers for client-side fetching without thunk
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setCategories: (state, action) => {
      state.loading = false;
      state.categories = action.payload as CategoryType[];
    },
    setSubCategories: (state, action) => {
      state.loading = false;
      state.subCategories = action.payload as SubCategoryType[];
    },
    setCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
});

export const {
  openCategoiresModal,
  closeCategoriesModal,
  chooseSelectedSubCategory,
  chooseSelectedCategory,
  clearCategoriesError,
  startLoading,
  setCategories,
  setSubCategories,
  setCategoriesError,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
