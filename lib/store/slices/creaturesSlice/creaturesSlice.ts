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

export const fetchCreatures = createAppAsyncThunk(
  "CREATURES/fetchCreatures",
  async (count: number) => {
    const response = await Http.get({
      url: `/api/creatures?count=${count}`,
    } as Request<string>);

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
