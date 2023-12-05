// Core
import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { createAppAsyncThunk } from "@/lib/store/createAppAsyncThunk";
import { http } from "./http";

const initialState: CreaturesSliceState = {
  data: [],
  status: "idle",
};

export const fetchCreatures = createAppAsyncThunk(
  "CREATURES/fetchCreatures",
  async () => {
    const response = await http();

    return response;
  },
);

export const creaturesSlice = createSlice({
  name: "CREATURES",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCreatures.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchCreatures.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

// Types
export interface CreaturesSliceState {
  data: {};
  status: "idle" | "loading" | "failed";
}
