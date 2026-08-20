import { dispatches as initialDispatches } from "../../data";
import type { DispatchJob } from "../../types";

export interface DispatchesSlice {
  dispatches: DispatchJob[];
}

export const createDispatchesSlice = (): DispatchesSlice => ({
  dispatches: initialDispatches,
});
