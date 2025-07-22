import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categoriesSlice";
import luxeraAIReducer from "./features/luxeraAISlice";
import profileReducer from "./features/profileSlice";

export const store = () => {
  return configureStore({
    reducer: {
      categoriesReducer: categoriesReducer,
      luxeraAIReducer: luxeraAIReducer,
      profileReducer: profileReducer,
    },
  });
};
export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
