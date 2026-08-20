import { useState } from "react";
import { useAppStore } from "../store/";

export function useTerritory() {
  const store = useAppStore();
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(
    null,
  );

  const selectedInsight = selectedInsightId
    ? store.territoryInsights.find((t) => t.repId === selectedInsightId)
    : null;
  const selectedRep = selectedInsight
    ? store.realReps.find((r) => r.id === selectedInsight.repId)
    : null;

  const getCampaignCountForZone = (zone: string) => {
    return store.campaigns.filter((c) => c.filters.zones?.includes(zone))
      .length;
  };

  const totalDoctors = store.doctors.length;
  const totalCovered = store.doctors.filter((d) => d.covered).length;
  const totalUncovered = totalDoctors - totalCovered;

  return {
    // Store data
    territoryInsights: store.territoryInsights,
    realReps: store.realReps,
    campaigns: store.campaigns,
    doctors: store.doctors,
    // UI state
    selectedInsightId,
    selectedInsight,
    selectedRep,
    // Computed
    totalDoctors,
    totalCovered,
    totalUncovered,
    // Setters
    setSelectedInsightId,
    // Helpers
    getCampaignCountForZone,
  };
}
