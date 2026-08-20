import { Scale, BadgeCheck, ClipboardCheck, Database, MoreHorizontal, FolderTree, Sparkles, FolderOpen, Building2, Users, Stethoscope, ShieldCheck } from "lucide-react";
import type {
  AnalyticsSnapshot,
  AvatarConfig,
  Campaign,
  CompanyDocument,
  ContextualTip,
  CreditAccount,
  Doctor,
  GovernanceBlocks,
  GovernanceRule,
  PharmacyStaff,
  Product,
  RealRep,
  RegionDetail,
  TerritoryInsight,
  TrainerStyle,
  AcademyModule,
  DispatchJob,
  VisitSession,
  AcademyRole,
  MedicalLine,
  Trainer,
  Course,
  ProductMarca,
} from "../types";

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

export const avatars: AvatarConfig[] = [
  {
    id: "av-pedro",
    name: "Pedro",
    gender: "masculino",
    skinTone: "media",
    traits: "Enfoque clínico y analítico",
    accent: "norte",
    attire: "Traje formal",
    region: "América del Norte",
    personality: "Directo y profesional",
    photoGradient: "from-sky-400 to-indigo-700",
    active: true,
    formador: "Médicos",
    images: {
      torso: "",
      cuerpo: "",
      prueba: "",
    },
  },
  {
    id: "av-maria",
    name: "María",
    gender: "femenino",
    skinTone: "clara",
    traits: "Empática y comercial",
    accent: "cdmx",
    attire: "Blazer ejecutivo",
    region: "América del Norte",
    personality: "Cercana y amigable",
    photoGradient: "from-rose-400 to-fuchsia-800",
    active: true,
    formador: "Especialistas",
    images: {
      torso: "",
      cuerpo: "",
      prueba: "",
    },
  },
  {
    id: "av-carlos",
    name: "Carlos",
    gender: "masculino",
    skinTone: "oscura",
    traits: "Especialista en farmacias",
    accent: "bajio",
    attire: "Casual formal",
    region: "América del Sur",
    personality: "Dinámico",
    photoGradient: "from-teal-400 to-cyan-700",
    active: true,
    formador: "Hospitales",
    images: {
      torso: "",
      cuerpo: "",
      prueba: "",
    },
  },
  {
    id: "av-sofia",
    name: "Sofía",
    gender: "femenino",
    skinTone: "media",
    traits: "Experta en presentaciones",
    accent: "sur",
    attire: "Saco formal",
    region: "Europa Occidental",
    personality: "Persuasiva",
    photoGradient: "from-amber-400 to-orange-700",
    active: true,
    formador: "Farmacias",
    images: {
      torso: "",
      cuerpo: "",
      prueba: "",
    },
  },
];

export const regions: Record<string, RegionDetail> = {
  // ÁFRICA
  "África Septentrional (Norte)": {
    name: "África Septentrional (Norte)",
    coverage: "Egipto, Marruecos, Argelia, etc.",
    reps: 3,
    color: "#f97316",
    countries: [
      "Egypt",
      "Morocco",
      "Algeria",
      "Sudan",
      "Libya",
      "Tunisia",
      "Western Sahara",
    ],
  },
  "África Subsahariana": {
    name: "África Subsahariana",
    coverage: "Central, Occidental, Oriental y Austral",
    reps: 5,
    color: "#ea580c",
    countries: [
      "South Africa",
      "Nigeria",
      "Kenya",
      "Ghana",
      "Ethiopia",
      "Tanzania",
      "Angola",
      "Mozambique",
      "Madagascar",
      "Cameroon",
      "Ivory Coast",
      "Uganda",
      "Democratic Republic of the Congo",
      "Congo",
      "Zambia",
      "Zimbabwe",
      "Somalia",
      "Senegal",
      "Mali",
      "Burkina Faso",
      "Niger",
      "Chad",
      "Rwanda",
      "Malawi",
    ],
  },
  // AMÉRICA
  "América del Norte": {
    name: "América del Norte",
    coverage: "EE. UU., Canadá y México",
    reps: 8,
    color: "#3b82f6",
    countries: [
      "United States of America",
      "Canada",
      "Mexico",
      "United States",
      "Greenland",
    ],
  },
  "América Central y el Caribe": {
    name: "América Central y el Caribe",
    coverage: "Centroamérica y Antillas",
    reps: 4,
    color: "#0284c7",
    countries: [
      "Panama",
      "Costa Rica",
      "Guatemala",
      "Honduras",
      "Nicaragua",
      "El Salvador",
      "Belize",
      "Cuba",
      "Dominican Rep.",
      "Dominican Republic",
      "Haiti",
      "Jamaica",
      "Puerto Rico",
      "Bahamas",
    ],
  },
  "América del Sur": {
    name: "América del Sur",
    coverage: "Sudamérica",
    reps: 6,
    color: "#0ea5e9",
    countries: [
      "Brazil",
      "Argentina",
      "Colombia",
      "Chile",
      "Peru",
      "Venezuela",
      "Ecuador",
      "Bolivia",
      "Paraguay",
      "Uruguay",
      "Guyana",
      "Suriname",
    ],
  },
  // ASIA
  "Asia Occidental (Oriente Medio)": {
    name: "Asia Occidental (Oriente Medio)",
    coverage: "GCC y Levante",
    reps: 5,
    color: "#f59e0b",
    countries: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Qatar",
      "Kuwait",
      "Oman",
      "Bahrain",
      "Israel",
      "Jordan",
      "Turkey",
      "Iraq",
      "Syria",
      "Lebanon",
      "Yemen",
      "Iran",
    ],
  },
  "Asia Central": {
    name: "Asia Central",
    coverage: "Repúblicas Céntricas",
    reps: 2,
    color: "#d97706",
    countries: [
      "Kazakhstan",
      "Uzbekistan",
      "Turkmenistan",
      "Kyrgyzstan",
      "Tajikistan",
    ],
  },
  "Asia Meridional (Sur de Asia)": {
    name: "Asia Meridional (Sur de Asia)",
    coverage: "India y alrededores",
    reps: 6,
    color: "#b45309",
    countries: [
      "India",
      "Pakistan",
      "Bangladesh",
      "Nepal",
      "Sri Lanka",
      "Bhutan",
    ],
  },
  "Asia Oriental (Este de Asia)": {
    name: "Asia Oriental (Este de Asia)",
    coverage: "China, Japón y Corea",
    reps: 9,
    color: "#f5820b",
    countries: [
      "China",
      "Japan",
      "South Korea",
      "North Korea",
      "Taiwan",
      "Mongolia",
    ],
  },
  "Sudeste Asiático": {
    name: "Sudeste Asiático",
    coverage: "Indochina y Archipiélagos",
    reps: 5,
    color: "#fbbf24",
    countries: [
      "Vietnam",
      "Thailand",
      "Indonesia",
      "Malaysia",
      "Philippines",
      "Singapore",
      "Myanmar",
      "Cambodia",
      "Laos",
      "Brunei",
      "East Timor",
    ],
  },
  // EUROPA
  "Europa Occidental": {
    name: "Europa Occidental",
    coverage: "EU-5 y Países Bajos/Bélgica",
    reps: 10,
    color: "#6366f1",
    countries: [
      "Germany",
      "France",
      "United Kingdom",
      "Netherlands",
      "Belgium",
      "Switzerland",
      "Ireland",
      "Luxembourg",
    ],
  },
  "Europa Oriental (Este)": {
    name: "Europa Oriental (Este)",
    coverage: "Polonia, Ucrania y Rusia Europea",
    reps: 6,
    color: "#8b5cf6",
    countries: [
      "Poland",
      "Ukraine",
      "Romania",
      "Czechia",
      "Czech Republic",
      "Hungary",
      "Slovakia",
      "Bulgaria",
      "Belarus",
      "Moldova",
      "Russia",
    ],
  },
  "Europa Septentrional (Norte)": {
    name: "Europa Septentrional (Norte)",
    coverage: "Países Nórdicos y Bálticos",
    reps: 5,
    color: "#4f46e5",
    countries: [
      "Sweden",
      "Norway",
      "Denmark",
      "Finland",
      "Iceland",
      "Lithuania",
      "Latvia",
      "Estonia",
    ],
  },
  "Europa Meridional (Sur)": {
    name: "Europa Meridional (Sur)",
    coverage: "Península Ibérica, Itálica y Balcanes",
    reps: 7,
    color: "#7c3aed",
    countries: [
      "Italy",
      "Spain",
      "Greece",
      "Portugal",
      "Serbia",
      "Croatia",
      "Bosnia and Herz.",
      "Albania",
      "Slovenia",
      "North Macedonia",
      "Montenegro",
    ],
  },
  // OCEANÍA
  "Australia y Nueva Zelanda": {
    name: "Australia y Nueva Zelanda",
    coverage: "Australasia",
    reps: 4,
    color: "#14b8a6",
    countries: ["Australia", "New Zealand"],
  },
  Melanesia: {
    name: "Melanesia",
    coverage: "Papúa Nueva Guinea, Fiyi, etc.",
    reps: 2,
    color: "#0d9488",
    countries: ["Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu"],
  },
  Micronesia: {
    name: "Micronesia",
    coverage: "Islas del Norte de Oceanía",
    reps: 1,
    color: "#0f766e",
    countries: ["Micronesia", "Palau", "Kiribati", "Nauru", "Marshall Islands"],
  },
  Polinesia: {
    name: "Polinesia",
    coverage: "Samoa, Tonga, etc.",
    reps: 1,
    color: "#115e59",
    countries: ["Samoa", "Tonga", "Tuvalu"],
  },
};

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

export const documents: CompanyDocument[] = [
  {
    id: "doc-profile-cf",
    title: "Perfil de producto CardioFlex XR",
    type: "product_profile",
    productId: "prod-cardioflex",
    content:
      "CardioFlex XR combina atenolol e indapamida en liberación prolongada para el manejo de hipertensión arterial esencial en adultos. Dosis habitual según ficha técnica aprobada. No exceder posología indicada en IPP.",
    tags: ["hipertensión", "cardiología", "perfil"],
    version: "3.1",
    approved: true,
    updatedAt: "2026-07-01",
  },
  {
    id: "doc-ipp-cf",
    title: "Información para prescribir CardioFlex XR",
    type: "prescribing_info",
    productId: "prod-cardioflex",
    content:
      "Indicaciones: hipertensión arterial esencial. Contraindicaciones: bradicardia sinusal, bloqueo AV de 2.º/3.er grado, insuficiencia cardiaca no controlada, hipersensibilidad a componentes. Advertencias: monitorear frecuencia cardiaca y electrolitos. Embarazo: consultar IPP completa.",
    tags: ["ipp", "contraindicaciones", "posología"],
    version: "3.1",
    approved: true,
    updatedAt: "2026-07-01",
  },
  {
    id: "doc-study-cf-01",
    title: "Estudio CLIN-CF-2024: reducción de PA sistólica",
    type: "clinical_study",
    productId: "prod-cardioflex",
    content:
      "Estudio multicéntrico aleatorizado n=842. CardioFlex XR logró reducción media de PAS de 18.4 mmHg a 12 semanas vs baseline (p<0.01). Perfil de eventos adversos comparable a control activo. Resultados limitados a población adulta con HTA esencial según criterios de inclusión del protocolo.",
    tags: ["estudio", "eficacia", "seguridad"],
    version: "1.0",
    approved: true,
    updatedAt: "2026-06-15",
  },
  {
    id: "doc-va-cf",
    title: "Visual Aid ciclo Q3 CardioFlex",
    type: "visual_aid",
    productId: "prod-cardioflex",
    campaignId: "camp-cf-q3",
    content:
      "Pieza visual: control 24h, gráfica de reducción PAS, mención de estudio CLIN-CF-2024, llamada a solicitud de muestra. No incluir comparaciones no aprobadas.",
    tags: ["visual aid", "q3"],
    version: "1.2",
    approved: true,
    updatedAt: "2026-08-01",
  },
  {
    id: "doc-script-cf",
    title: "Script campaña Q3 CardioFlex",
    type: "campaign_script",
    productId: "prod-cardioflex",
    campaignId: "camp-cf-q3",
    content:
      "Apertura cortés + tip contextual. Presentar CardioFlex XR como apoyo al control sostenido. Mencionar CLIN-CF-2024 (reducción PAS 18.4 mmHg). Pregunta de sondeo sobre pacientes candidatos. CTA muestra. En cubiertos: apoyar a visitador real.",
    tags: ["script", "campaña"],
    version: "2.0",
    approved: true,
    updatedAt: "2026-08-02",
  },
  {
    id: "doc-profile-rx",
    title: "Perfil Respirax Kids",
    type: "product_profile",
    productId: "prod-respirax",
    content:
      "Respirax Kids (montelukast) indicado en asma y rinitis alérgica pediátrica según IPP. Presentación pediátrica. Mensajes centrados en adherencia y control de síntomas.",
    tags: ["pediatría", "asma"],
    version: "2.0",
    approved: true,
    updatedAt: "2026-05-20",
  },
  {
    id: "doc-study-rx-01",
    title: "Estudio PED-RX-15 control sintomático",
    type: "clinical_study",
    productId: "prod-respirax",
    content:
      "Estudio pediátrico n=320. Mejora significativa en score de síntomas nocturnos a 8 semanas. No extrapolar a poblaciones fuera de etiqueta.",
    tags: ["pediatría", "estudio"],
    version: "1.0",
    approved: true,
    updatedAt: "2026-04-10",
  },
  {
    id: "doc-profile-gp",
    title: "Perfil GastroPro",
    type: "product_profile",
    productId: "prod-gastropro",
    content:
      "GastroPro (pantoprazol) para ERGE y úlcera péptica. Mensaje: alivio y protección mucosa según ficha aprobada.",
    tags: ["gastro", "erge"],
    version: "1.5",
    approved: true,
    updatedAt: "2026-03-01",
  },
  {
    id: "doc-study-gp-01",
    title: "Estudio GP-ERGE-09",
    type: "clinical_study",
    productId: "prod-gastropro",
    content:
      "Remisión sintomática en mayoría de pacientes con ERGE a 4 semanas en cohorte observada. Datos según protocolo interno aprobado.",
    tags: ["erge", "estudio"],
    version: "1.0",
    approved: true,
    updatedAt: "2026-02-12",
  },
  {
    id: "doc-train-pharma",
    title: "Módulo dependientes: recomendación responsable",
    type: "training",
    content:
      "Capacitación para dependientes de farmacia: identificación de necesidad, recordación de marca, derivación al médico cuando corresponda, sin diagnóstico. Enfoque en profesionalización y servicio al paciente.",
    tags: ["farmacia", "entrenamiento"],
    version: "1.0",
    approved: true,
    updatedAt: "2026-07-20",
  },
];

export const realReps: RealRep[] = [
  {
    id: "rep-ana",
    name: "Ana Torres",
    territory: "CDMX Sur",
    specialtyFocus: ["Pediatría", "Cardiología"],
  },
  {
    id: "rep-luis",
    name: "Luis Herrera",
    territory: "Monterrey",
    specialtyFocus: ["Cardiología", "Medicina Interna"],
  },
  {
    id: "rep-maria",
    name: "María Peña",
    territory: "CDMX Norte",
    specialtyFocus: ["Gastroenterología"],
  },
];

export const doctors: Doctor[] = [
  {
    id: "doc-abad",
    name: "Carlos Abad",
    title: "Dr.",
    specialty: "Cardiología",
    city: "Ciudad de México",
    zone: "CDMX Sur",
    covered: true,
    realRepId: "rep-ana",
    birthday: "08-12",
    phone: "+52 55 1000 1001",
    email: "dr.abad@clinica.mx",
    lastVisitSummary:
      "Interesado en control de PA en adultos mayores; solicitó visual aid.",
    tags: ["productivo", "evento-q3"],
  },
  {
    id: "doc-ruiz",
    name: "Elena Ruiz",
    title: "Dra.",
    specialty: "Pediatría",
    city: "Ciudad de México",
    zone: "CDMX Sur",
    covered: true,
    realRepId: "rep-ana",
    phone: "+52 55 1000 1002",
    email: "dra.ruiz@pediatria.mx",
    lastVisitSummary: "Alta prescripción en asma pediátrica.",
    tags: ["pediatría", "evento-q3"],
  },
  {
    id: "doc-mora",
    name: "Jorge Mora",
    title: "Dr.",
    specialty: "Pediatría",
    city: "Ciudad de México",
    zone: "CDMX Sur",
    covered: true,
    realRepId: "rep-ana",
    phone: "+52 55 1000 1003",
    email: "dr.mora@salud.mx",
    tags: ["pediatría"],
  },
  {
    id: "doc-salinas",
    name: "Patricia Salinas",
    title: "Dra.",
    specialty: "Cardiología",
    city: "Monterrey",
    zone: "Norte",
    covered: true,
    realRepId: "rep-luis",
    phone: "+52 81 2000 2001",
    email: "dra.salinas@cardio.mx",
    tags: ["productivo"],
  },
  {
    id: "doc-vega",
    name: "Andrés Vega",
    title: "Dr.",
    specialty: "Medicina Interna",
    city: "Guadalajara",
    zone: "Bajío",
    covered: false,
    phone: "+52 33 3000 3001",
    email: "dr.vega@interno.mx",
    tags: ["alto-potencial", "no-cubierto"],
  },
  {
    id: "doc-nunez",
    name: "Lucía Núñez",
    title: "Dra.",
    specialty: "Gastroenterología",
    city: "Puebla",
    zone: "Centro",
    covered: false,
    phone: "+52 22 4000 4001",
    email: "dra.nunez@gastro.mx",
    tags: ["alto-potencial", "no-cubierto"],
  },
  {
    id: "doc-perez",
    name: "Miguel Pérez",
    title: "Dr.",
    specialty: "Pediatría",
    city: "Ciudad de México",
    zone: "CDMX Oriente",
    covered: false,
    tags: ["no-cubierto", "lejanía"],
  },
];

export const pharmacyStaff: PharmacyStaff[] = [
  {
    id: "ph-rosa",
    name: "Rosa Delgado",
    pharmacy: "Farmacia del Pueblo Centro",
    city: "Ciudad de México",
    role: "Dependiente senior",
    phone: "+52 55 5000 5001",
    email: "rosa@farmaciadelpueblo.mx",
  },
  {
    id: "ph-ivan",
    name: "Iván Soto",
    pharmacy: "Botica Norte 12",
    city: "Monterrey",
    role: "Dependiente",
    phone: "+52 81 5000 5002",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "camp-cf-q3",
    name: "CardioFlex Q3 — Control 24h",
    productIds: ["prod-cardioflex"],
    avatarId: "av-sofia-cdmx",
    audience: "covered_doctors",
    status: "approved",
    cycle: "2026-Q3",
    multiProduct: false,
    channels: ["whatsapp", "email"],
    filters: {
      specialties: ["Cardiología", "Medicina Interna"],
      zones: ["CDMX Sur", "Norte"],
      coveredOnly: true,
    },
    script: {
      opening:
        "Buenos días, {title} {lastName}. Soy {avatarName}, visitador médico virtual de apoyo a {realRepName}. Es un gusto saludarle nuevamente.",
      productPresentation:
        "En este ciclo quiero reforzar CardioFlex XR, diseñado para el control sostenido de la presión arterial durante 24 horas, con un perfil de tolerabilidad documentado en adultos con hipertensión esencial.",
      clinicalEvidence:
        "El estudio CLIN-CF-2024, multicéntrico con 842 pacientes, reportó una reducción media de la PAS de 18.4 mmHg a 12 semanas (p<0.01), con un perfil de eventos adversos comparable al control activo.",
      expectedResults:
        "El objetivo es apoyar un control más predecible de la PA en sus pacientes candidatos, siempre de acuerdo con la información para prescribir vigente.",
      probingQuestion:
        "Después de lo expuesto, {title} {lastName}, ¿se le viene a la mente algún paciente al cual podría considerar CardioFlex XR?",
      closing:
        "Quedo a su orden. Si desea probar el producto, puede solicitar una muestra médica con el botón inferior. En la próxima visita de {realRepName} podremos profundizar cualquier duda.",
      supportRepMention: true,
    },
    ctas: [
      {
        type: "sample_request",
        label: "Solicitar muestra médica",
        productId: "prod-cardioflex",
      },
    ],
    testedAt: "2026-08-08",
    approvedAt: "2026-08-09",
    createdAt: "2026-08-01",
  },
  {
    id: "camp-rx-ped",
    name: "Respirax Kids — Pediatría Sur CDMX + Evento",
    productIds: ["prod-respirax"],
    avatarId: "av-sofia-cdmx",
    audience: "covered_doctors",
    status: "testing",
    cycle: "2026-Q3",
    multiProduct: false,
    channels: ["whatsapp", "sms"],
    filters: {
      specialties: ["Pediatría"],
      zones: ["CDMX Sur"],
      tags: ["evento-q3"],
    },
    script: {
      opening:
        "Hola {title} {lastName}, soy {avatarName}. Le saludo en apoyo a {realRepName} y le recuerdo la invitación al evento de Respirax Kids.",
      productPresentation:
        "Respirax Kids está orientado al control de síntomas en asma y rinitis alérgica pediátrica, con una presentación pensada para facilitar la adherencia.",
      clinicalEvidence:
        "Según el estudio PED-RX-15, se observó mejora en el score de síntomas nocturnos a 8 semanas en población pediátrica del protocolo.",
      expectedResults:
        "Buscamos reforzar recordación y criterio de uso en sus pacientes pediátricos candidatos, conforme a la IPP.",
      probingQuestion:
        "¿Tiene en mente algún paciente pediátrico en quien Respirax Kids podría ser de utilidad?",
      closing:
        "Puede confirmar asistencia al evento o solicitar muestra con los botones. {realRepName} sigue siendo su contacto principal de territorio.",
      supportRepMention: true,
    },
    ctas: [
      { type: "event_rsvp", label: "Confirmar asistencia al evento" },
      {
        type: "sample_request",
        label: "Solicitar muestra",
        productId: "prod-respirax",
      },
    ],
    createdAt: "2026-08-05",
  },
  {
    id: "camp-uncovered-multi",
    name: "Visita multiproducto — médicos no cubiertos",
    productIds: ["prod-cardioflex", "prod-gastropro", "prod-respirax"],
    avatarId: "av-diego-norte",
    audience: "uncovered_doctors",
    status: "draft",
    cycle: "2026-Q3",
    multiProduct: true,
    channels: ["whatsapp", "email"],
    filters: { uncoveredOnly: true, tags: ["alto-potencial"] },
    script: {
      opening:
        "Estimado/a {title} {lastName}, soy {avatarName}, su visitador médico virtual. Gracias por recibirme; quiero presentarle el portafolio prioritario de este ciclo.",
      productPresentation:
        "Le comparto de forma breve CardioFlex XR (cardiología), GastroPro (ERGE) y Respirax Kids (pediatría), cada uno con su evidencia y mensajes aprobados.",
      clinicalEvidence:
        "Puedo ampliar el estudio clínico aprobado de cada producto que sea de su interés, exclusivamente con documentación interna del laboratorio.",
      expectedResults:
        "El propósito es acercarle opciones terapéuticas respaldadas y facilitarle muestras o materiales si lo requiere.",
      probingQuestion:
        "¿Sobre cuál producto le gustaría que profundice primero?",
      closing:
        "Debajo encontrará un botón de muestra por cada producto presentado. Quedo atento/a a su próxima visita virtual.",
      supportRepMention: false,
    },
    ctas: [
      {
        type: "sample_request",
        label: "Muestra CardioFlex",
        productId: "prod-cardioflex",
      },
      {
        type: "sample_request",
        label: "Muestra GastroPro",
        productId: "prod-gastropro",
      },
      {
        type: "sample_request",
        label: "Muestra Respirax",
        productId: "prod-respirax",
      },
    ],
    createdAt: "2026-08-10",
  },
  {
    id: "camp-pharmacy-edu",
    name: "Academia farmacia — recordación de marca",
    productIds: ["prod-cardioflex", "prod-gastropro"],
    avatarId: "av-valentina-andina",
    audience: "pharmacy_staff",
    status: "live",
    cycle: "2026-Q3",
    multiProduct: true,
    channels: ["whatsapp"],
    filters: {},
    script: {
      opening:
        "Hola {firstName}, soy {avatarName}. Gracias por tu tiempo; hoy tenemos un entrenamiento breve para profesionalizar la recomendación en mostrador.",
      productPresentation:
        "Repasaremos recordación de CardioFlex y GastroPro, cuándo derivar al médico y cómo orientar al paciente sin diagnosticar.",
      clinicalEvidence:
        "Usaremos únicamente los puntos de entrenamiento aprobados por el laboratorio para dependientes.",
      expectedResults:
        "Al finalizar podrás reforzar la recomendación responsable y obtener tu certificado del módulo.",
      probingQuestion:
        "¿Qué dudas te surgen con más frecuencia en el mostrador sobre estos productos?",
      closing:
        "Completa el módulo y descarga tu certificado. ¡Excelente trabajo!",
      supportRepMention: false,
    },
    ctas: [{ type: "certificate", label: "Obtener certificado del módulo" }],
    approvedAt: "2026-07-28",
    createdAt: "2026-07-20",
  },
];

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

export const analytics: AnalyticsSnapshot = {
  sent: 1264,
  opened: 812,
  engaged: 498,
  ctaClicks: 186,
  samplesRequested: 142,
  reachRate: 64.2,
  engagementRate: 39.4,
  byChannel: [
    { channel: "whatsapp", sent: 820, opened: 610 },
    { channel: "email", sent: 340, opened: 160 },
    { channel: "sms", sent: 104, opened: 42 },
  ],
  bySpecialty: [
    { specialty: "Cardiología", opened: 290 },
    { specialty: "Pediatría", opened: 240 },
    { specialty: "Medicina Interna", opened: 150 },
    { specialty: "Gastroenterología", opened: 90 },
    { specialty: "Farmacia", opened: 42 },
  ],
  daily: [
    { date: "08-05", opens: 42, ctas: 8 },
    { date: "08-06", opens: 55, ctas: 12 },
    { date: "08-07", opens: 61, ctas: 15 },
    { date: "08-08", opens: 70, ctas: 18 },
    { date: "08-09", opens: 88, ctas: 24 },
    { date: "08-10", opens: 95, ctas: 28 },
    { date: "08-11", opens: 102, ctas: 31 },
    { date: "08-12", opens: 74, ctas: 20 },
  ],
};

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

export const contextualTips: ContextualTip[] = [
  {
    id: "tip-weather",
    type: "weather",
    template:
      "{title} {lastName}, parece que hoy va a bajar la temperatura al final de la tarde. Le recomiendo abrigarse.",
  },
  {
    id: "tip-traffic",
    type: "traffic",
    template:
      "{title} {lastName}, parece que hay tráfico complicado en su sector. Le recomiendo tomar precauciones al salir.",
  },
  {
    id: "tip-event",
    type: "event",
    template:
      "{title} {lastName}, le recuerdo que hoy hay un evento astronómico destacado; puede ser una buena oportunidad para un plan en familia.",
  },
  {
    id: "tip-bday",
    type: "birthday",
    template:
      "{title} {lastName}, el equipo y yo le deseamos un muy feliz cumpleaños. Que tenga un excelente día.",
  },
];

export const dispatches: DispatchJob[] = [
  {
    id: "disp-1",
    campaignId: "camp-cf-q3",
    channel: "whatsapp",
    recipientCount: 250,
    sentAt: "2026-08-09T10:00:00",
    costCredits: 625,
    status: "sent",
  },
  {
    id: "disp-2",
    campaignId: "camp-pharmacy-edu",
    channel: "whatsapp",
    recipientCount: 14,
    sentAt: "2026-08-10T09:30:00",
    costCredits: 35,
    status: "sent",
  },
];

export const seedVisit: VisitSession = {
  id: "visit-demo-abad",
  campaignId: "camp-cf-q3",
  targetType: "covered_doctors",
  targetId: "doc-abad",
  avatarId: "av-sofia-cdmx",
  channel: "whatsapp",
  opened: true,
  startedAt: new Date().toISOString(),
  messages: [],
  ctaClicks: [],
  materialsRequested: [],
  contextNotes: ["Tráfico moderado CDMX Sur", "Cumpleaños hoy"],
};

export const mockTrainers: Trainer[] = [
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

export const mockCourses: Course[] = [
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
export const mockHRDocuments = {
  company: [
    {
      id: "hr-doc-1",
      title: "Historia Compañía Ejemplo.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-01-10",
      url: "#",
    },
    {
      id: "hr-doc-2",
      title: "Reporte Anual 2025.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-02-15",
      url: "#",
    },
    {
      id: "hr-doc-3",
      title: "Reportaje El País Sep 2023",
      type: "link" as const,
      uploadedAt: "2023-09-20",
      url: "https://elpais.com",
    },
  ],
  policies: [
    {
      id: "hr-pol-1",
      title: "Política sobre empleo discapacitados",
      type: "pdf" as const,
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-2",
      title: "Política de contratación de empleados",
      type: "pdf" as const,
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-3",
      title: "Política de vacaciones",
      type: "pdf" as const,
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-4",
      title: "Política xyz",
      type: "pdf" as const,
      uploadedAt: "2026-03-01",
    },
  ],
  faqs: [
    {
      id: "hr-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-04-01",
    },
  ],
};

// Documentos Comerciales
export const mockCommercialDocuments = {
  priceLists: [
    {
      id: "comm-pricelist-1",
      title: "Lista de precios sugeridos al público.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pricelist-2",
      title: "https://www.farmatodo.com",
      type: "link" as const,
      uploadedAt: "2026-08-01",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-pricelist-3",
      title: "https://www.farmaciaseconomicas.com",
      type: "link" as const,
      uploadedAt: "2026-08-01",
      url: "https://www.farmaciaseconomicas.com",
    },
    {
      id: "comm-pricelist-4",
      title: "https://www.farmasanpablo.com",
      type: "link" as const,
      uploadedAt: "2026-08-01",
      url: "https://www.farmasanpablo.com",
    },
  ],
  policies: [
    {
      id: "comm-pol-1",
      title: "Política de fijación de precios.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-2",
      title: "Política de descuentos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-3",
      title: "Política de devoluciones.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
  ],
  promotions: [
    {
      id: "comm-prom-1",
      title: "Promociones Vigentes Mes de Septiembre 2026.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-2",
      title: "Promociones Canal Especial Septiembre 2026.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-3",
      title: "https://www.farmatodo.com",
      type: "link" as const,
      uploadedAt: "2026-08-20",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-prom-4",
      title: "https://www.farmaciaeseconomicas.com",
      type: "link" as const,
      uploadedAt: "2026-08-20",
      url: "https://www.farmaciaeseconomicas.com",
    },
  ],
  faqs: [
    {
      id: "comm-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-08-01",
    },
  ],
};

// Documentos Marketing
export const mockMarketingDocuments = {
  brandIdentity: [
    {
      id: "mkt-brand-1",
      title: "Posicionamiento clave de la marca de compañía.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-2",
      title: "Por que hacemos lo que hacemos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-3",
      title: "Manifiesto de la marca compañía.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-4",
      title: "Propósito Vision y Valores de la compañía.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
  ],
  policies: [
    {
      id: "mkt-pol-1",
      title: "Política de branding.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-2",
      title: "Política de presencia en congresos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-3",
      title: "Política de apoyos a medicos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
  ],
  faqs: [
    {
      id: "mkt-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf" as const,
      uploadedAt: "2026-07-01",
    },
  ],
};

// Productos para Gerente de Marca
export const mockProducts: ProductMarca[] = [
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
export const mockMedicalLines: MedicalLine[] = [
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

// Roles con sus subsecciones
export const ACADEMY_ROLES: AcademyRole[] = [
  {
    id: "training",
    label: "Gerente de Entrenamiento",
    icon: Users,
    subsections: [
      {
        id: "trainers",
        label: "Formadores",
        type: "trainers",
        data: mockTrainers,
      },
      {
        id: "courses",
        label: "Cursos",
        type: "courses",
        data: mockCourses,
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
        data: mockHRDocuments.company,
      },
      {
        id: "policies",
        label: "Políticas",
        type: "policies",
        data: mockHRDocuments.policies,
      },
      {
        id: "hr-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: mockHRDocuments.faqs,
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
        data: mockCommercialDocuments.priceLists,
      },
      {
        id: "commercial-policies",
        label: "Políticas comerciales",
        type: "policies",
        data: mockCommercialDocuments.policies,
      },
      {
        id: "promotions",
        label: "Promociones vigentes",
        type: "promotions",
        data: mockCommercialDocuments.promotions,
      },
      {
        id: "commercial-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: mockCommercialDocuments.faqs,
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
        data: mockMarketingDocuments.brandIdentity,
      },
      {
        id: "marketing-policies",
        label: "Políticas de marketing",
        type: "policies",
        data: mockMarketingDocuments.policies,
      },
      {
        id: "marketing-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: mockMarketingDocuments.faqs,
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
        data: mockProducts,
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
        data: mockMedicalLines,
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
        data: [
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
        ],
      },
      {
        id: "compliance-training",
        label: "Entrenamiento en compliance",
        type: "courses",
        data: [
          {
            id: "comp-course-1",
            title: "Curso de Ética y Cumplimiento",
            date: "2026-09-15",
            instructor: "Compliance Team",
            objective: "Reforzar conocimientos en ética profesional.",
            instructions: "Completar los módulos y aprobar la evaluación.",
            documents: [],
          },
        ],
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
