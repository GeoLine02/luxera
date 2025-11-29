import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import luxeraAIReducer from "./features/luxeraAISlice";
import profileReducer from "./features/profileSlice";
import sideMenuReducer from "./features/sideMenuSlice";
import ordersReducer from "./features/ordersSlice";
import shopSLice from "./features/shopSlice";
import cardEditorSlice from "./features/cardEditorSlice";
import productDetailsReducer from "./features/productDetailsSlice";
import cartReducer from "./features/cartSlice";

// Create the store configuration
export function makeStore(preloadedState?: unknown) {
  return configureStore({
    reducer: {
      categoriesReducer: categoriesReducer,
      luxeraAIReducer: luxeraAIReducer,
      profileReducer: profileReducer,
      sideMenuReducer: sideMenuReducer,
      ordersReducer: ordersReducer,
      shopSLice: shopSLice,
      cardEditorSlice: cardEditorSlice,
      productDetailsReducer: productDetailsReducer,
      cartReducer: cartReducer,
    },
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
