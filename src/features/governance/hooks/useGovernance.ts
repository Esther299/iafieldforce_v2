import { useState } from "react";
import { useAppStore } from "@/store";

export function useGovernance() {
  const store = useAppStore();
  const [showRules, setShowRules] = useState(false);

  const activeRulesCount = store.governanceRules.filter(
    (r) => r.enforced,
  ).length;
  const totalRulesCount = store.governanceRules.length;

  const toggleRule = (id: string, enforced: boolean) => {
    store.setRuleEnforcement(id, enforced);
  };

  return {
    governanceRules: store.governanceRules,
    governanceBlocks: store.governanceBlocks,
    showRules,
    activeRulesCount,
    totalRulesCount,
    setShowRules,
    toggleRule,
  };
}
