import { Scale, BadgeCheck, ClipboardCheck, Database } from "lucide-react";
import type { GovernanceBlocks, GovernanceRule } from "../types";

export const governanceBlocks: GovernanceBlocks[] = [
  {
    title: "Gobernanza del Sistema",
    icon: Scale,
    description:
      "Definición de estructura organizativa, regiones y aprobaciones.",
    rules: [
      "Estructura corporativa aprobada",
      "Regiones definidas por responsable",
      "Criterios de aprobación escalados",
    ],
  },
  {
    title: "Gobernanza de los Productos",
    icon: BadgeCheck,
    description:
      "Construcción del portafolio y asignación de responsabilidades.",
    rules: [
      "Portfolio validado por brand manager",
      "Responsables por línea",
      "Indicaciones y etiquetado claros",
    ],
  },
  {
    title: "Gobernanza de las Campañas",
    icon: ClipboardCheck,
    description: "Creación y aprobación de campañas conforme a la estrategia.",
    rules: [
      "Scripts aprobados",
      "CTAs definidos",
      "Aprobación final antes de lanzamiento",
    ],
  },
  {
    title: "Gobernanza de la Información",
    icon: Database,
    description: "Definición de fuentes de IA y control de contenido externo.",
    rules: [
      "Sin terceros",
      "Solo corpus interno",
      "No alucinación ni información no aprobada",
    ],
  },
];

export const governanceRules: GovernanceRule[] = [
  {
    id: "gov-1",
    title: "Capa de gobernanza prioritaria",
    description:
      "Toda respuesta debe pasar por políticas de compliance, ética promocional y límites regulatorios del laboratorio antes de emitirse.",
    enforced: true,
    priority: 1,
  },
  {
    id: "gov-2",
    title: "Fidelidad a la campaña",
    description:
      "El VM solo comunica el script, mensajes clave y CTAs aprobados por el gerente de producto para el ciclo vigente.",
    enforced: true,
    priority: 2,
  },
  {
    id: "gov-3",
    title: "Fuentes internas exclusivas",
    description:
      "La búsqueda de información se limita a documentación aprobada de la compañía. Prohibido usar fuentes de terceros o conocimiento general no validado.",
    enforced: true,
    priority: 3,
  },
  {
    id: "gov-4",
    title: "Anti-alucinación y escalamiento",
    description:
      "Si la pregunta sale del corpus aprobado, el VM no inventa: indica que no dispone de la información y escala a médico, legal u otro departamento para la próxima visita.",
    enforced: true,
    priority: 4,
  },
  {
    id: "gov-5",
    title: "Apoyo al visitador real",
    description:
      "En médicos ya cubiertos, el VM siempre menciona que apoya la labor del visitador humano y no lo reemplaza.",
    enforced: true,
    priority: 5,
  },
  {
    id: "gov-6",
    title: "Cortesía y tono profesional",
    description:
      "Trato educado, amigable y respetuoso. Personalización con nombre del médico y memoria de conversaciones previas.",
    enforced: true,
    priority: 6,
  },
];
