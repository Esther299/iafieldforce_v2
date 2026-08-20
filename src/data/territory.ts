import type { TerritoryInsight } from "../types";

export const territoryInsights: TerritoryInsight[] = [
  {
    repId: "rep-ana",
    zone: "CDMX Sur",
    totalDoctors: 86,
    covered: 64,
    highPotentialUncovered: 9,
    topSpecialties: [
      { name: "Pediatría", count: 28 },
      { name: "Cardiología", count: 22 },
      { name: "Medicina Interna", count: 18 },
    ],
    suggestedActions: [
      "Reforzar CardioFlex en cardiólogos productivos con VM de ciclo",
      "Invitar pediatras tag evento-q3 a campaña Respirax",
      "Abrir base de 9 no cubiertos alto potencial con visita multiproducto",
    ],
    lastCyclePerformance: { visits: 210, samples: 64, events: 1 },
  },
  {
    repId: "rep-luis",
    zone: "Monterrey",
    totalDoctors: 54,
    covered: 40,
    highPotentialUncovered: 6,
    topSpecialties: [
      { name: "Cardiología", count: 20 },
      { name: "Medicina Interna", count: 16 },
    ],
    suggestedActions: [
      "Usar avatar norteño Diego Rivas",
      "Priorizar WhatsApp en zona industrial",
    ],
    lastCyclePerformance: { visits: 132, samples: 41, events: 0 },
  },
];
