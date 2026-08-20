import { doctors as initialDoctors } from "@/shared/data";
import type { Doctor } from "@/shared/types";

export interface DoctorsSlice {
  doctors: Doctor[];
}

export const createDoctorsSlice = (): DoctorsSlice => ({
  doctors: initialDoctors,
});
