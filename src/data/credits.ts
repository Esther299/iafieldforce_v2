import type { CreditAccount } from "../types";

export const creditAccount: CreditAccount = {
  balance: 12840,
  costPerVisit: 2.5,
  costPerCta: 0,
  currency: "USD",
  transactions: [
    {
      id: "tx-1",
      type: "topup",
      amount: 15000,
      label: "Carga de saldo inicial",
      at: "2026-07-01",
    },
    {
      id: "tx-2",
      type: "setup",
      amount: -2500,
      label: "Instalación y conexión CRM",
      at: "2026-07-02",
    },
    {
      id: "tx-3",
      type: "visit",
      amount: -625,
      label: "Envío campaña CardioFlex (250 visitas)",
      at: "2026-08-09",
    },
    {
      id: "tx-4",
      type: "visit",
      amount: -35,
      label: "Envío academia farmacia (14 visitas)",
      at: "2026-08-10",
    },
  ],
};
