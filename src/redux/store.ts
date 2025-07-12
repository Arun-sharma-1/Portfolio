import { configureStore } from "@reduxjs/toolkit";
import { AllReducers } from "./slices";

export const makeStore = () => {
  return configureStore({
    reducer: AllReducers,
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
