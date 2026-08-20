import { pharmacyStaff as initialPharmacyStaff } from "@/shared/data";
import type { PharmacyStaff } from "@/shared/types";

export interface PharmacySlice {
  pharmacyStaff: PharmacyStaff[];
}

export const createPharmacySlice = (): PharmacySlice => ({
  pharmacyStaff: initialPharmacyStaff,
});
