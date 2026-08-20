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

// Definir el tipo del estado combinado
type AppState = ReturnType<typeof createUserSlice> &
  ReturnType<typeof createAvatarsSlice> &
  ReturnType<typeof createProductsSlice> &
  ReturnType<typeof createDoctorsSlice> &
  ReturnType<typeof createPharmacySlice> &
  ReturnType<typeof createRealRepsSlice> &
  ReturnType<typeof createCampaignsSlice> &
  ReturnType<typeof createCreditsSlice> &
  ReturnType<typeof createAnalyticsSlice> &
  ReturnType<typeof createDispatchesSlice> &
  ReturnType<typeof createVisitsSlice> &
  ReturnType<typeof createTestSlice> &
  ReturnType<typeof createGovernanceSlice> & {
    academyModules: typeof academyModules;
    trainerStyles: typeof trainerStyles;
  };

// Creamos el store con el tipo explícito
export const useAppStore = create<AppState>((set, get) => ({
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
  // Datos adicionales
  academyModules,
  trainerStyles,
}));
