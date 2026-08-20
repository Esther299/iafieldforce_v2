import {
  governanceRules as initialGovRules,
  governanceBlocks as initialGovBlocks,
} from "@/shared/data";
import type { GovernanceRule, GovernanceBlocks } from "@/shared/types";

export interface GovernanceSlice {
  governanceRules: GovernanceRule[];
  governanceBlocks: GovernanceBlocks[];
  setRuleEnforcement: (id: string, enforced: boolean) => void;
}

export const createGovernanceSlice = (set: any): GovernanceSlice => ({
  governanceRules: initialGovRules,
  governanceBlocks: initialGovBlocks,
  setRuleEnforcement: (id, enforced) =>
    set((state: any) => ({
      governanceRules: state.governanceRules.map((r: GovernanceRule) =>
        r.id === id ? { ...r, enforced } : r,
      ),
    })),
});
