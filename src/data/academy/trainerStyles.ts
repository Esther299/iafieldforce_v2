import type { TrainerStyle } from "../../types/academia";

export const trainerStyles: TrainerStyle[] = [
  {
    id: "tr-1",
    trainerName: "Formadora Laura Gómez",
    accent: "cdmx",
    speakingStyle: 'Cálida, pausada, usa "con mucho gusto" y "permítame"',
    samplePhrases: [
      "Con mucho gusto le comento lo aprobado para este ciclo.",
      "Si le parece, repasamos la evidencia en un minuto.",
    ],
    notes: "Evitar muletillas; priorizar nombres de estudios internos.",
  },
  {
    id: "tr-2",
    trainerName: "Formador Héctor Salazar",
    accent: "norte",
    speakingStyle: "Cercano, claro, frases cortas",
    samplePhrases: [
      "Se lo pongo sencillo, doctor.",
      "Esta es la data que maneja el laboratorio.",
    ],
    notes: "Mantener formalidad aunque el tono sea cercano.",
  },
];
