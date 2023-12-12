// Core
import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { createAppAsyncThunk } from "@/lib/store/createAppAsyncThunk";

// Helpers
import { Http, isEmptyArr } from "@/lib/helpers";

// Types
import { DispatchArgs, Request, SliceState } from "@/types";

const initialState: SliceState = {
  data: [],
  error: null,
  status: "idle",
};

export const fetchCreatures = createAppAsyncThunk(
  "CREATURES/fetchCreatures",
  async ({ count }: DispatchArgs, { dispatch, signal }) => {
    dispatch(resetCreatures());

    const response = await Http.get({
      signal,
      url: `/api/creatures?count=${count}`,
    } as Request<string>);

    return response;
  },
  {
    condition: (_, { getState }) => {
      // Do not execute the request if the data is already in the store
      // Read more: https://redux-toolkit.js.org/api/createAsyncThunk#options
      return isEmptyArr(getState().creatures.data);
    },
    dispatchConditionRejection: true,
  },
);

export const creaturesSlice = createSlice({
  name: "CREATURES",
  initialState,
  reducers: {
    resetCreatures: state => {
      // Keep the status field unchanged while resetting data and error
      return {
        ...state,
        data: initialState.data,
        error: initialState.error,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCreatures.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchCreatures.rejected, (state, action) => {
        state.error = action.error.name ?? null;
      })
      .addCase(fetchCreatures.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

const { resetCreatures } = creaturesSlice.actions;
