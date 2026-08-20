import type { Trainer } from "../../types/academia";

export const trainers: Trainer[] = [
  {
    id: "trainer-1",
    name: "Laura Gómez",
    role: "Formadora para visita a médicos Cd Mx",
    description:
      "Especialista en comunicación médica con enfoque en evidencia clínica y manejo de objeciones.",
    region: "CDMX",
    videos: ["Video 1", "Video 2"],
    traits: {
      origin: "CDMX",
      accent: "Neutro",
      modismos: "Expresiones coloquiales urbanas",
    },
    personality: ["Empática", "Clara", "Persuasiva"],
    education: ["Médico Cirujano", "Maestría en Comunicación en Salud"],
  },
  {
    id: "trainer-2",
    name: "Héctor Salazar",
    role: "Formador para visita a médicos Cd Mx",
    description:
      "Experto en estrategias de cierre y relación con especialistas en farmacia.",
    region: "CDMX",
    videos: ["Video 1", "Video 2"],
    traits: {
      origin: "Norte",
      accent: "Norteño",
      modismos: "Expresiones regionales del norte",
    },
    personality: ["Directo", "Carismático", "Analítico"],
    education: ["Lic. en Administración", "Diplomado en Ventas Farmacéuticas"],
  },
  {
    id: "trainer-3",
    name: "María Fernanda Ruiz",
    role: "Formadora para visita a farmacias",
    description:
      "Capacitación en recomendación responsable y manejo de mostrador.",
    region: "CDMX",
    videos: ["Video 1"],
    traits: {
      origin: "Sur",
      accent: "Sureño",
      modismos: "Expresiones locales del sur",
    },
    personality: ["Amable", "Paciente", "Didáctica"],
    education: ["Química Farmacéutica", "Maestría en Mercadotecnia"],
  },
];
