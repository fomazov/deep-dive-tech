// Core
import { useDispatch as useReduxDispatch } from "react-redux";

// Types
import type { ReduxDispatch } from "@/types";

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
