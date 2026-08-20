import { analytics as initialAnalytics } from "../../data";
import type { AnalyticsSnapshot } from "../../types";

export interface AnalyticsSlice {
  analytics: AnalyticsSnapshot;
}

export const createAnalyticsSlice = (): AnalyticsSlice => ({
  analytics: initialAnalytics,
});
