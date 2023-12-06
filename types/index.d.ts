import { type ThunkAction, type Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

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

// Cards
export interface EntityDataProps {
  creature: Creature;
}

export type Creature = {
  habitat: string;
  lifespan: string;
  size: string;
  species: string;
};

export interface LoadingPlaceholderProps {
  elementsCount: number;
}
