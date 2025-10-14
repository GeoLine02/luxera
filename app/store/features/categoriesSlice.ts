import { CategoryType } from "@/app/types/categories";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Define the API response type
interface CategoriesResponse {
  data: CategoryType[];
  success: boolean;
  message: string;
}

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk<
  CategoryType[],
  string,
  { rejectValue: string }
>(
  'categories/fetchCategories',
  async (locale: string, { rejectWithValue }) => {
    try {
      // Support multiple env vars and normalize the base URL
      const rawBaseUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        process.env.API_LOCAL_URL ||
        process.env.API_BASE_URL;

      if (!rawBaseUrl) {
        return rejectWithValue("API base URL env var is not defined (set NEXT_PUBLIC_API_URL)");
      }

      // Trim trailing slashes
      let baseUrl = rawBaseUrl.replace(/\/+$/, "");
      // Remove a trailing '/en' or '/ka' locale segment if present
      baseUrl = baseUrl.replace(/\/(en|ka)$/i, "");

      const response = await axios.get<CategoriesResponse>(
        `${baseUrl}/${locale}/categories`,
        {
          headers: {
            'Accept-Language': locale,
          },
        }
      );
      if (response.data.success) {
        return response.data.data;
      }
      return rejectWithValue(response.data.message || 'Failed to fetch categories');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message?: string }>;
        return rejectWithValue(axiosError.response?.data?.message || 'Network error');
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

interface InitialStateType {
  isCategoriesModalOpen: boolean;
  selectedCategory: null | CategoryType;
  selectedSubCategory: null | string;
  categories: CategoryType[];
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
    setCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch categories';
      });
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
  setCategoriesError,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
