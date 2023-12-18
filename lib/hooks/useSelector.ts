// Core
import {
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux";

// Types
import type { ReduxState } from "@/types";

export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
