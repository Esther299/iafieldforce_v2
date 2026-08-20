import { pharmacyStaff as initialPharmacyStaff } from "../../data";
import type { PharmacyStaff } from "../../types";

export interface PharmacySlice {
  pharmacyStaff: PharmacyStaff[];
}

export const createPharmacySlice = (): PharmacySlice => ({
  pharmacyStaff: initialPharmacyStaff,
});
