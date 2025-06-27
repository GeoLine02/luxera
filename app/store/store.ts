import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";

export const store = () => {
  return configureStore({
    reducer: {
      categoriesReducer: categoriesReducer,
    },
  });
};
export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
