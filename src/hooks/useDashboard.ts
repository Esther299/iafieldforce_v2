import { useState } from "react";
import { useAppStore } from "../store/useAppStore";

export function useDashboard() {
  const store = useAppStore();
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(null);
  const [isQuickStatusOpen, setIsQuickStatusOpen] = useState(false);

  const isSalesForceCreator = store.activeUserRole === "sales-force-creator";

  const live = store.campaigns.filter(
    (c) => c.status === "live" || c.status === "approved",
  ).length;
  const covered = store.doctors.filter((d) => d.covered).length;
  const uncovered = store.doctors.filter((d) => !d.covered).length;

  // Reglas de gobernanza activas
  const activeRules = store.governanceRules.filter((r) => r.enforced);

  return {
    // Store data
    analytics: store.analytics,
    campaigns: store.campaigns,
    credits: store.credits,
    governanceRules: store.governanceRules,
    dispatches: store.dispatches,
    doctors: store.doctors,
    activeUserRole: store.activeUserRole,
    // Computed
    isSalesForceCreator,
    live,
    covered,
    uncovered,
    activeRules,
    // UI state
    selectedRuleId,
    isQuickStatusOpen,
    // Setters
    setSelectedRuleId,
    setIsQuickStatusOpen,
  };
}
