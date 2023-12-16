// Core
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { creaturesSlice } from "./slices";

const reducer = {
  creatures: creaturesSlice.reducer,
};

export const reduxStore = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware();
  },
});
