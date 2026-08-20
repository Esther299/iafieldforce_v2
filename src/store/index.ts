import { create } from "zustand";
import { createUserSlice } from "./slices/user";
import { createAvatarsSlice } from "./slices/avatars";
import { createProductsSlice } from "./slices/products";
import { createDoctorsSlice } from "./slices/doctors";
import { createPharmacySlice } from "./slices/pharmacy";
import { createRealRepsSlice } from "./slices/realReps";
import { createCampaignsSlice } from "./slices/campaigns";
import { createCreditsSlice } from "./slices/credits";
import { createAnalyticsSlice } from "./slices/analytics";
import { createDispatchesSlice } from "./slices/dispatches";
import { createVisitsSlice } from "./slices/visits";
import { createTestSlice } from "./slices/test";
import { createGovernanceSlice } from "./slices/governance";
import { academyModules, trainerStyles } from "../data";

export const useAppStore = create((set, get) => ({
  // Estado inicial combinado de todos los slices
  ...createUserSlice(set),
  ...createAvatarsSlice(set),
  ...createProductsSlice(set),
  ...createDoctorsSlice(),
  ...createPharmacySlice(),
  ...createRealRepsSlice(),
  ...createCampaignsSlice(set, get),
  ...createCreditsSlice(set),
  ...createAnalyticsSlice(),
  ...createDispatchesSlice(),
  ...createVisitsSlice(set, get),
  ...createTestSlice(set, get),
  ...createGovernanceSlice(set),
  // Datos estáticos adicionales
  academyModules,
  trainerStyles,
}));
