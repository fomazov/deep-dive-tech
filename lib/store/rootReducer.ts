// Slices
import { creaturesSlice, plantsSlice } from "./slices";

export const reducer = {
  creatures: creaturesSlice.reducer,
  plants: plantsSlice.reducer,
};
