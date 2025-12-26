import { ProductWithPrimaryVariant } from "@/app/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface InitialSateType {
  searchValue: string;
  searchResult: ProductWithPrimaryVariant[];
}

const initialState: InitialSateType = {
  searchValue: "",
  searchResult: [],
};

const searchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
