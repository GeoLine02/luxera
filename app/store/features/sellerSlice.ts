import {
  fetchSellerProductById,
  fetchSellerProducts,
} from "@/app/[locale]/(shopOwner)/shop/services/products";
import { ProductType, SellerProductType } from "@/app/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  sellerProducts: SellerProductType[];
  selectedProductId: number | null;
  sellerProduct: ProductType | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialStateType = {
  sellerProducts: [],
  selectedProductId: null,
  sellerProduct: null,
  loading: false,
  error: null,
};

export const getSellerProducts = createAsyncThunk(
  "seller/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchSellerProducts();
      return response.data; // <- returned data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch seller products"
      );
    }
  }
);

export const getSellerProductById = createAsyncThunk(
  "seller/getProduct",
  async (productId: number, { rejectWithValue }) => {
    try {
      const response = await fetchSellerProductById(productId);
      return response.data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch seller product"
      );
    }
  }
);

const sellerSlice = createSlice({
  name: "sellerSlice",
  initialState,
  reducers: {
    saveSelerProducts: (state, action) => {
      const products = action.payload;
      state.sellerProducts = products;
    },

    selectProductId: (state, action) => {
      const selectedId = action.payload;
      state.selectedProductId = selectedId;
    },
  },
  extraReducers(builder) {
    builder
      // Fetch All Seller Products
      .addCase(getSellerProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerProducts = action.payload;
      })
      .addCase(getSellerProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // Fetch Seller Product By Id
      .addCase(getSellerProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSellerProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerProduct = action.payload as ProductType;
      })
      .addCase(getSellerProductById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { saveSelerProducts, selectProductId } = sellerSlice.actions;
export default sellerSlice.reducer;
