import type { CreditAccount } from "@/shared/types";
import { creditAccount as initialCredits } from "@/shared/data";
import { uid } from "@/shared/lib/store-utils";

export interface CreditsSlice {
  credits: CreditAccount;
  topUpCredits: (amount: number) => void;
}

export const createCreditsSlice = (set: any): CreditsSlice => ({
  credits: initialCredits,
  topUpCredits: (amount) =>
    set((state: any) => ({
      credits: {
        ...state.credits,
        balance: state.credits.balance + amount,
        transactions: [
          {
            id: uid("tx"),
            type: "topup",
            amount,
            label: `Carga de saldo (+${amount})`,
            at: new Date().toISOString().slice(0, 10),
          },
          ...state.credits.transactions,
        ],
      },
    })),
});
