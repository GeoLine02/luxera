import { Order } from "@/app/types/order";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  selectedOrder: Order | null;
}

export const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: <InitialStateType>{
    selectedOrder: null,
  },
  reducers: {
    selectOrder: (state, action) => {
      const orderId = action.payload;
      state.selectedOrder = orderId;
    },
  },
});

export const { selectOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
