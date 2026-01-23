import {
  changeCartItemQuantityService,
  deleteCartItemService,
} from "@/app/services/cart";
import { CartType } from "@/app/types/cart";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  cart: CartType[];
  selectedCartItems: CartType[]; // ✅ new
}

const initialState: InitialStateType = {
  cart: [],
  selectedCartItems: [], // ✅ new
};

interface QuantityUpdateReturnType {
  success: boolean;
  data: CartType;
}

interface QuantityUpdateArgs {
  cartItemId: number;
  quantity: number;
}

export const changeCartItemQuantity = createAsyncThunk<
  QuantityUpdateReturnType,
  QuantityUpdateArgs,
  { rejectValue: string }
>("cart/changeQuantity", async ({ cartItemId, quantity }, thunkAPI) => {
  try {
    const data = await changeCartItemQuantityService(cartItemId, quantity);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Failed to update quantity",
    );
  }
});

export const deleteCartItem = createAsyncThunk<
  { success: boolean; data: { itemId: number } },
  { cartItemId: number },
  { rejectValue: string }
>("cart/delteItem", async ({ cartItemId }, thunkAPI) => {
  try {
    const res = await deleteCartItemService(cartItemId);
    return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to Delete Item",
    );
  }
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    saveCartItems: (state, action) => {
      state.cart = action.payload;

      // reset selections when cart is refreshed
      state.selectedCartItems = [];
    },

    toggleCartItemSelection: (state, action) => {
      const { cartItemId, selected } = action.payload;

      const cartItem = state.cart.find((item) => item.id === cartItemId);
      if (!cartItem) return;

      if (selected) {
        const exists = state.selectedCartItems.some(
          (item) => item.id === cartItemId,
        );
        if (!exists) state.selectedCartItems.push(cartItem);
      } else {
        state.selectedCartItems = state.selectedCartItems.filter(
          (item) => item.id !== cartItemId,
        );
      }
    },
    toggleSelectAllCartItems: (state, action) => {
      const selected = action.payload;

      if (selected) {
        state.selectedCartItems = [...state.cart];
      } else {
        state.selectedCartItems = [];
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(changeCartItemQuantity.fulfilled, (state, action) => {
      const updatedItem = action.payload.data;

      state.cart = state.cart.map((cartItem) =>
        cartItem.id === updatedItem.id
          ? { ...cartItem, product_quantity: updatedItem.product_quantity }
          : cartItem,
      );
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const cartItemId = action.payload.data.itemId;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== cartItemId);

      // remove from selected if deleted
      state.selectedCartItems = state.selectedCartItems.filter(
        (item) => item.id !== cartItemId,
      );
    });
  },
});

export const {
  saveCartItems,
  toggleCartItemSelection,
  toggleSelectAllCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
