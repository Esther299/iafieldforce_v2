import type { Campaign } from "@/shared/types";

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
