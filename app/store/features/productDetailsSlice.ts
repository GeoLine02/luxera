import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  selectedVaraintId: number | null;
}

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: <InitialStateType>{
    selectedVaraintId: null,
  },
  reducers: {
    selectVariantId: (state, action) => {
      const variantId = action.payload;
      state.selectedVaraintId = variantId;
    },
  },
});

export const { selectVariantId } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
