// Core
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { reducer } from "./rootReducer";

export const reduxStore = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware();
  },
});
