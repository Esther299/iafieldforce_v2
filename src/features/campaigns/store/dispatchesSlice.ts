import { dispatches as initialDispatches } from "@/shared/data";
import type { DispatchJob } from "@/shared/types";

export interface DispatchesSlice {
  dispatches: DispatchJob[];
}

export const createDispatchesSlice = (): DispatchesSlice => ({
  dispatches: initialDispatches,
});
