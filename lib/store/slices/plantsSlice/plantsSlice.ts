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

export const fetchPlants = createAppAsyncThunk(
  "PLANTS/fetchPlants",
  async ({ count }: DispatchArgs, { dispatch, signal }) => {
    dispatch(resetPlants());

    const response = await Http.get({
      signal,
      url: `/api/plants?count=${count}`,
    } as Request<string>);

    return response;
  },
  {
    condition: (_, { getState }) => {
      // Do not execute the request if the data is already in the store
      // Read more: https://redux-toolkit.js.org/api/createAsyncThunk#options
      return isEmptyArr(getState().plants.data);
    },
    dispatchConditionRejection: true,
  },
);

export const plantsSlice = createSlice({
  name: "PLANTS",
  initialState,
  reducers: {
    resetPlants: state => {
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
      .addCase(fetchPlants.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.error = action.error.name ?? null;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

const { resetPlants } = plantsSlice.actions;
