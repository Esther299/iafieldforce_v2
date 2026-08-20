import { create } from "zustand";
import { createUserSlice } from "@/shared/store/userSlice";
import { createAvatarsSlice } from "@/features/team/store/avatarsSlice";
import { createProductsSlice } from "@/features/products/store/productsSlice";
import { createDoctorsSlice } from "@/features/crm/store/doctorsSlice";
import { createPharmacySlice } from "@/features/crm/store/pharmacySlice";
import { createRealRepsSlice } from "@/features/team/store/realRepsSlice";
import { createCampaignsSlice } from "@/features/campaigns/store/campaignsSlice";
import { createCreditsSlice } from "@/features/credits/store/creditsSlice";
import { createAnalyticsSlice } from "@/features/analytics/store/analyticsSlice";
import { createDispatchesSlice } from "@/features/campaigns/store/dispatchesSlice";
import { createVisitsSlice } from "@/features/visit/store/visitsSlice";
import { createTestSlice } from "@/features/campaigns/store/testSlice";
import { createGovernanceSlice } from "@/features/governance/store/governanceSlice";
import { academyModules, trainerStyles } from "@/features/academy/data";
import { territoryInsights } from "@/features/territory/data/territory";

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
    territoryInsights: typeof territoryInsights;
  };

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
  academyModules,
  trainerStyles,
  territoryInsights,
}));
