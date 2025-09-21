import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import luxeraAIReducer from "./features/luxeraAISlice";
import profileReducer from "./features/profileSlice";
import sideMenuReducer from "./features/sideMenuSlice";
import ordersReducer from "./features/ordersSlice";
import shopSLice from "./features/shopSlice";
import cardEditorSlice from "./features/cardEditorSlice";

// Create the store configuration
export function makeStore() {
  return configureStore({
    reducer: {
      categoriesReducer: categoriesReducer,
      luxeraAIReducer: luxeraAIReducer,
      profileReducer: profileReducer,
      sideMenuReducer: sideMenuReducer,
      ordersReducer: ordersReducer,
      shopSLice: shopSLice,
      cardEditorSlice: cardEditorSlice,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
