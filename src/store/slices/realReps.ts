import { realReps as initialRealReps } from "../../data";
import type { RealRep } from "../../types";

export interface RealRepsSlice {
  realReps: RealRep[];
}

export const createRealRepsSlice = (): RealRepsSlice => ({
  realReps: initialRealReps,
});
