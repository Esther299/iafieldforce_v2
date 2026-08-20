import { analytics as initialAnalytics } from "@/shared/data";
import type { AnalyticsSnapshot } from "@/shared/types";

export interface AnalyticsSlice {
  analytics: AnalyticsSnapshot;
}

export const createAnalyticsSlice = (): AnalyticsSlice => ({
  analytics: initialAnalytics,
});
