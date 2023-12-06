// Core
import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { createAppAsyncThunk } from "@/lib/store/createAppAsyncThunk";

// Helpers
import { Http } from "@/lib/helpers";

// Types
import { Request, SliceState } from "@/types";

const initialState: SliceState = {
  data: [],
  status: "idle",
};

export const fetchPlants = createAppAsyncThunk(
  "PLANTS/fetchPlants",
  async (count: number) => {
    const response = await Http.get({
      url: `/api/plants?count=${count}`,
    } as Request<string>);

    return response;
  },
);

export const plantsSlice = createSlice({
  name: "PLANTS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPlants.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});
