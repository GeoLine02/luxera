import { changeCartItemQuantityService } from "@/app/services/cart";
import { CartType } from "@/app/types/cart";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  cart: CartType[];
}

const initialState: InitialStateType = {
  cart: [],
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
      err.response?.data?.message || "Failed to update quantity"
    );
  }
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    saveCartItems: (state, action) => {
      const cartItems = action.payload;
      state.cart = cartItems;
    },
  },
  extraReducers(builder) {
    builder.addCase(changeCartItemQuantity.fulfilled, (state, action) => {
      const updatedItem = action.payload.data;
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === updatedItem.id
          ? { ...cartItem, product_quantity: updatedItem.product_quantity }
          : cartItem
      );
    });
  },
});

export const { saveCartItems } = cartSlice.actions;
export default cartSlice.reducer;
