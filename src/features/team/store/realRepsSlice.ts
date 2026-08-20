import { realReps as initialRealReps } from "@/shared/data";
import type { RealRep } from "@/shared/types";

export interface RealRepsSlice {
  realReps: RealRep[];
}

export const createRealRepsSlice = (): RealRepsSlice => ({
  realReps: initialRealReps,
});
