import { doctors as initialDoctors } from "../../data";
import type { Doctor } from "../../types";

export interface DoctorsSlice {
  doctors: Doctor[];
}

export const createDoctorsSlice = (): DoctorsSlice => ({
  doctors: initialDoctors,
});
