import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "prod-cardioflex",
    name: "CardioFlex XR",
    brand: "CardioFlex",
    molecule: "Atenolol / Indapamida",
    therapeuticArea: "Cardiología",
    indication: "Hipertensión arterial esencial",
    keyMessages: [
      "Control sostenido de la PA durante 24 horas",
      "Buena tolerabilidad en pacientes adultos",
      "Respaldo de evidencia clínica multicéntrica",
    ],
    studies: ["doc-study-cf-01"],
    sampleAvailable: true,
  },
  {
    id: "prod-respirax",
    name: "Respirax Kids",
    brand: "Respirax",
    molecule: "Montelukast",
    therapeuticArea: "Pediatría / Neumología",
    indication: "Asma y rinitis alérgica en pediatría",
    keyMessages: [
      "Facilidad de administración pediátrica",
      "Mejora en control de síntomas diurnos y nocturnos",
      "Perfil de seguridad documentado",
    ],
    studies: ["doc-study-rx-01"],
    sampleAvailable: true,
  },
  {
    id: "prod-gastropro",
    name: "GastroPro",
    brand: "GastroPro",
    molecule: "Pantoprazol",
    therapeuticArea: "Gastroenterología",
    indication: "ERGE y úlcera péptica",
    keyMessages: [
      "Alivio sintomático rápido",
      "Protección mucosa gástrica",
      "Amplia experiencia de uso",
    ],
    studies: ["doc-study-gp-01"],
    sampleAvailable: true,
  },
];
