import { type ThunkAction, type Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// HTTP
export type Request<T> = {
  method?: "GET" | "POST";
  url: string;
};

// Store
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

export interface SliceState {
  data: EntityDataProps;
  status: "idle" | "loading" | "failed";
}

// Cards
export interface EntityDataProps {
  id: string;
  habitat: string;
  lifespan: string;
  size: string;
  species: string;
}

export interface LoadingPlaceholderProps {
  elementsCount: number;
}
