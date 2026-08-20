/**
 * Datos maestros de la Academia.
 *
 * Fuente única y tipada para áreas, subsecciones, formadores, cursos,
 * productos de marca, líneas médicas y documentos. La navegación de las
 * vistas principales y subpáginas se construye dinámicamente desde
 * `academyAreas`.
 */
import {
  Building2,
  FolderOpen,
  FolderTree,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import type {
  AcademyArea,
  AcademyDocument,
  AcademyModule,
  Course,
  MedicalLine,
  ProductMarca,
  Trainer,
  TrainerStyle,
} from "../types/academia";

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

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Manejo de Objecciones",
    date: "18 agosto 2026",
    instructor: "Pedro Pérez",
    objective:
      "Capacitar a los visitadores médicos en técnicas efectivas para manejar objeciones comunes durante la visita.",
    instructions:
      "Revisar el material de apoyo, practicar role-playing y completar el cuestionario final.",
    documents: [
      { name: "Guía de objeciones.pdf", type: "pdf" },
      { name: "Ejercicios prácticos.pptx", type: "ppt" },
      { name: "Video demostración.mp4", type: "video" },
    ],
  },
  {
    id: "course-2",
    title: "Cómo lograr el compromiso del médico",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective:
      "Desarrollar habilidades para generar compromiso y fidelización del médico con la marca.",
    instructions:
      "Leer el caso de estudio, participar en el foro de discusión y presentar un plan de acción.",
    documents: [
      { name: "Casos de éxito.pdf", type: "pdf" },
      { name: "Plan de acción.docx", type: "doc" },
    ],
  },
  {
    id: "course-3",
    title: "POASDAS paos dpasoa",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective: "Curso de ejemplo para demostrar la funcionalidad.",
    instructions: "Completar los módulos y realizar la evaluación.",
    documents: [],
  },
  {
    id: "course-4",
    title: "impor asi iajs daosd a d",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective: "Curso de ejemplo para demostrar la funcionalidad.",
    instructions: "Completar los módulos y realizar la evaluación.",
    documents: [],
  },
  // ... más cursos
];

// Documentos para RRHH
export const hrDocuments: Record<
  "company" | "policies" | "faqs",
  AcademyDocument[]
> = {
  company: [
    {
      id: "hr-doc-1",
      title: "Historia Compañía Ejemplo.pdf",
      type: "pdf",
      uploadedAt: "2026-01-10",
      url: "#",
    },
    {
      id: "hr-doc-2",
      title: "Reporte Anual 2025.pdf",
      type: "pdf",
      uploadedAt: "2026-02-15",
      url: "#",
    },
    {
      id: "hr-doc-3",
      title: "Reportaje El País Sep 2023",
      type: "link",
      uploadedAt: "2023-09-20",
      url: "https://elpais.com",
    },
  ],
  policies: [
    {
      id: "hr-pol-1",
      title: "Política sobre empleo discapacitados",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-2",
      title: "Política de contratación de empleados",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-3",
      title: "Política de vacaciones",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-4",
      title: "Política xyz",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
  ],
  faqs: [
    {
      id: "hr-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
  ],
};

// Documentos Comerciales
export const commercialDocuments: Record<
  "priceLists" | "policies" | "promotions" | "faqs",
  AcademyDocument[]
> = {
  priceLists: [
    {
      id: "comm-pricelist-1",
      title: "Lista de precios sugeridos al público.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pricelist-2",
      title: "https://www.farmatodo.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-pricelist-3",
      title: "https://www.farmaciaseconomicas.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmaciaseconomicas.com",
    },
    {
      id: "comm-pricelist-4",
      title: "https://www.farmasanpablo.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmasanpablo.com",
    },
  ],
  policies: [
    {
      id: "comm-pol-1",
      title: "Política de fijación de precios.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-2",
      title: "Política de descuentos.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-3",
      title: "Política de devoluciones.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
  ],
  promotions: [
    {
      id: "comm-prom-1",
      title: "Promociones Vigentes Mes de Septiembre 2026.pdf",
      type: "pdf",
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-2",
      title: "Promociones Canal Especial Septiembre 2026.pdf",
      type: "pdf",
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-3",
      title: "https://www.farmatodo.com",
      type: "link",
      uploadedAt: "2026-08-20",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-prom-4",
      title: "https://www.farmaciaeseconomicas.com",
      type: "link",
      uploadedAt: "2026-08-20",
      url: "https://www.farmaciaeseconomicas.com",
    },
  ],
  faqs: [
    {
      id: "comm-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
  ],
};

// Documentos Marketing
export const marketingDocuments: Record<
  "brandIdentity" | "policies" | "faqs",
  AcademyDocument[]
> = {
  brandIdentity: [
    {
      id: "mkt-brand-1",
      title: "Posicionamiento clave de la marca de compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-2",
      title: "Por que hacemos lo que hacemos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-3",
      title: "Manifiesto de la marca compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-4",
      title: "Propósito Vision y Valores de la compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
  policies: [
    {
      id: "mkt-pol-1",
      title: "Política de branding.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-2",
      title: "Política de presencia en congresos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-3",
      title: "Política de apoyos a medicos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
  faqs: [
    {
      id: "mkt-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
};

// Productos para Gerente de Marca
export const brandProducts: ProductMarca[] = [
  {
    id: "prod-1",
    name: "Producto 1",
    campaigns: [
      {
        id: "camp-1-1",
        name: "Campaña producto 1 trimestre 1 2024",
        documents: [
          {
            id: "doc-camp-1-1",
            title: "Manual de Manejo de Objecciones Producto 1 2026.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-camp-1-2",
            title: "Campaña producto 1 trimestre 2 2024",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-camp-1-3",
            title: "Campaña producto 1 trimestre 3 2024",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
        ],
      },
      {
        id: "camp-1-2",
        name: "Campaña producto 1 trimestre 2 2024",
        documents: [],
      },
    ],
    objections: [
      {
        id: "obj-1-1",
        title: "Manual de manejo de objeciones 2026.pdf",
        type: "pdf",
        uploadedAt: "2026-08-01",
      },
    ],
    faqs: [
      {
        id: "faq-1-1",
        title: "Manual de preguntas frecuentes Producto 1 2026.pdf",
        type: "pdf",
        uploadedAt: "2026-08-01",
      },
    ],
  },
  {
    id: "prod-2",
    name: "Producto 2",
    campaigns: [],
    objections: [],
    faqs: [],
  },
  {
    id: "prod-3",
    name: "Producto 3",
    campaigns: [],
    objections: [],
    faqs: [],
  },
];

// Líneas médicas para Director Médico
export const medicalLines: MedicalLine[] = [
  {
    id: "line-resp",
    name: "Línea Respiratoria",
    diagnoses: [
      {
        id: "diag-rhinitis",
        name: "Rinitis Alérgica",
        documents: [
          {
            id: "doc-rhinitis-1",
            title: "Manual de rinitis alérgica.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-2",
            title: "Farmacología Molécula 1 en rinitis alérgica.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-3",
            title:
              "Estudio clínico Producto 1 en rinitis alérgica estacional.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-4",
            title: "Estudio clínico Producto 1 en rinitis alérgica perenne.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
        ],
      },
      {
        id: "diag-asthma",
        name: "Asma",
        documents: [],
      },
      {
        id: "diag-copd",
        name: "EPOC",
        documents: [],
      },
    ],
  },
  {
    id: "line-cv",
    name: "Línea Cardiovascular",
    diagnoses: [],
  },
  {
    id: "line-derm",
    name: "Línea Dermatológica",
    diagnoses: [],
  },
];

// Documentos y cursos de Compliance
export const complianceDocuments: AcademyDocument[] = [
  {
    id: "comp-1",
    title: "Código de conducta.pdf",
    type: "pdf",
    uploadedAt: "2026-01-01",
  },
  {
    id: "comp-2",
    title: "Política de conflictos de interés.pdf",
    type: "pdf",
    uploadedAt: "2026-01-01",
  },
];

export const complianceCourses: Course[] = [
  {
    id: "comp-course-1",
    title: "Curso de Ética y Cumplimiento",
    date: "2026-09-15",
    instructor: "Compliance Team",
    objective: "Reforzar conocimientos en ética profesional.",
    instructions: "Completar los módulos y aprobar la evaluación.",
    documents: [],
  },
];

/** Áreas de negocio de la Academia con sus subsecciones navegables. */
export const academyAreas: AcademyArea[] = [
  {
    id: "training",
    label: "Gerente de Entrenamiento",
    icon: Users,
    subsections: [
      {
        id: "trainers",
        label: "Formadores",
        type: "trainers",
        data: trainers,
      },
      {
        id: "courses",
        label: "Cursos",
        type: "courses",
        data: courses,
      },
    ],
  },
  {
    id: "hr",
    label: "Gerente de Recursos Humanos",
    icon: Building2,
    subsections: [
      {
        id: "company",
        label: "Descripción de la compañía",
        type: "company",
        data: hrDocuments.company,
      },
      {
        id: "policies",
        label: "Políticas",
        type: "policies",
        data: hrDocuments.policies,
      },
      {
        id: "hr-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: hrDocuments.faqs,
      },
      {
        id: "hr-custom",
        label: "Crear otra área",
        type: "custom",
        data: null,
      },
    ],
  },
  {
    id: "commercial",
    label: "Gerente Comercial",
    icon: FolderOpen,
    subsections: [
      {
        id: "price-lists",
        label: "Listas de precios",
        type: "documents",
        data: commercialDocuments.priceLists,
      },
      {
        id: "commercial-policies",
        label: "Políticas comerciales",
        type: "policies",
        data: commercialDocuments.policies,
      },
      {
        id: "promotions",
        label: "Promociones vigentes",
        type: "promotions",
        data: commercialDocuments.promotions,
      },
      {
        id: "commercial-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: commercialDocuments.faqs,
      },
    ],
  },
  {
    id: "marketing",
    label: "Gerente de Marketing",
    icon: Sparkles,
    subsections: [
      {
        id: "brand-identity",
        label: "Documentos de identidad de marca",
        type: "documents",
        data: marketingDocuments.brandIdentity,
      },
      {
        id: "marketing-policies",
        label: "Políticas de marketing",
        type: "policies",
        data: marketingDocuments.policies,
      },
      {
        id: "marketing-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: marketingDocuments.faqs,
      },
      {
        id: "mkt-custom",
        label: "Crear otra área",
        type: "custom",
        data: null,
      },
    ],
  },
  {
    id: "brand",
    label: "Gerente de Marca",
    icon: FolderTree,
    subsections: [
      {
        id: "product-list",
        label: "Productos",
        type: "products",
        data: brandProducts,
      },
    ],
  },
  {
    id: "medical",
    label: "Director Médico",
    icon: Stethoscope,
    subsections: [
      {
        id: "medical-lines",
        label: "Líneas médicas",
        type: "medical",
        data: medicalLines,
      },
    ],
  },
  {
    id: "compliance",
    label: "Gerente de Compliance",
    icon: ShieldCheck,
    subsections: [
      {
        id: "compliance-docs",
        label: "Políticas y documentos",
        type: "documents",
        data: complianceDocuments,
      },
      {
        id: "compliance-training",
        label: "Entrenamiento en compliance",
        type: "courses",
        data: complianceCourses,
      },
    ],
  },
  {
    id: "custom",
    label: "Crear otra área",
    icon: MoreHorizontal,
    subsections: [
      {
        id: "custom-area",
        label: "Nueva área personalizada",
        type: "custom",
        data: null,
      },
    ],
  },
];

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
