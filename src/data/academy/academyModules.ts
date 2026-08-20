import type { AcademyModule } from "../../types/academia";

export const academyModules: AcademyModule[] = [
  {
    id: "ac-gov",
    title: "Gobernanza y compliance del VM",
    description:
      "Reglas de oro: fuentes internas, anti-alucinación y escalamiento.",
    audience: "avatar_trainer",
    lessons: [
      {
        id: "l1",
        title: "Las 3 capas obligatorias",
        content:
          "1) Gobernanza. 2) Fidelidad a campaña. 3) Solo documentación interna. Nunca inventar ni salir del corpus.",
        durationMin: 12,
      },
      {
        id: "l2",
        title: "Frase de escalamiento",
        content:
          'Cuando no hay información: "No dispongo de esa información en este momento; con gusto la consultaré con el departamento {dept} y se la traeré en la próxima visita."',
        durationMin: 8,
      },
    ],
  },
  {
    id: "ac-accent",
    title: "Estilos de habla y acentos regionales",
    description: "La IA aprende maneras, formas y acento de cada formador.",
    audience: "avatar_trainer",
    lessons: [
      {
        id: "l3",
        title: "Acento CDMX vs Norte",
        content:
          "CDMX: cortesía urbana, ritmo medio. Norte: trato más directo y cálido. Registrar frases modelo del formador.",
        durationMin: 15,
      },
    ],
  },
  {
    id: "ac-pharma",
    title: "Profesionalización del dependiente",
    description: "Curso para dependientes con certificado final.",
    audience: "pharmacy_staff",
    certificateTitle: "Certificado ia-rep — Atención responsable en mostrador",
    lessons: [
      {
        id: "lp1",
        title: "Recordación de marca sin diagnosticar",
        content:
          "Escucha activa, identificación de necesidad, recomendación de marcas del laboratorio y derivación al médico cuando corresponda.",
        durationMin: 20,
      },
      {
        id: "lp2",
        title: "CardioFlex y GastroPro en mostrador",
        content:
          "Mensajes aprobados de recordación, materiales de apoyo y cuándo no recomendar.",
        durationMin: 18,
      },
    ],
  },
];
