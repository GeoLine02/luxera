import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import luxeraAIReducer from "./features/luxeraAISlice";
import profileReducer from "./features/profileSlice";
import sideMenuReducer from "./features/sideMenuSlice";
import ordersReducer from "./features/ordersSlice";
import shopSLice from "./features/shopSlice";

export const store = () => {
  return configureStore({
    reducer: {
      categoriesReducer: categoriesReducer,
      luxeraAIReducer: luxeraAIReducer,
      profileReducer: profileReducer,
      sideMenuReducer: sideMenuReducer,
      ordersReducer: ordersReducer,
      shopSLice: shopSLice,
    },
  });
};
export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
