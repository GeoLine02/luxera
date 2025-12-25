import {
  fetchSellerProductById,
  fetchSellerProducts,
  updateSellerProductById,
} from "@/app/[locale]/(shopOwner)/shop/services/products";
import { ProductType, SellerProductType } from "@/app/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  sellerProducts: SellerProductType[];
  selectedProductId: number | null;
  sellerProduct: ProductType | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: InitialStateType = {
  sellerProducts: [],
  selectedProductId: null,
  sellerProduct: null,
  success: false,
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

interface UpdateProductResponse {
  success: boolean;
  message: string;
  data?: ProductType;
}

export const updateProductThunk = createAsyncThunk<
  UpdateProductResponse,
  { formData: FormData }
>("products/updateProductThunk", async ({ formData }, { rejectWithValue }) => {
  try {
    const result = await updateSellerProductById(formData);
    return result.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

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
        state.success = true;
      })
      .addCase(getSellerProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.success = false;
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
        state.success = false;
      })
      // Update Product By ID
      .addCase(updateProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProductThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export const { saveSelerProducts, selectProductId } = sellerSlice.actions;
export default sellerSlice.reducer;
