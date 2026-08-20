import { useState, useMemo } from "react";
import { useAppStore } from "../store";
import type {
  Campaign,
  CampaignStatus,
  Channel,
  TargetAudience,
} from "../types";
import { estimateAudienceSize } from "../lib/audience";

const DRAFT_TEMPLATES = [
  {
    title: "Lanzamiento CardioFlex",
    audience: "covered_doctors" as TargetAudience,
    cycle: "2026-Q3",
    opening:
      "Buenos días, {title} {lastName}. Soy {avatarName}, en apoyo a {realRepName}.",
    productPresentation:
      "Presentamos CardioFlex XR para el control de la hipertensión con toma única diaria.",
    probingQuestion:
      "¿Qué porcentaje de sus pacientes hipertensos no logran la meta con monoterapia?",
    closing: "Solicite una muestra médica para su próximo paciente candidato.",
  },
  {
    title: "Campaña Pediatría Respirax",
    audience: "uncovered_doctors" as TargetAudience,
    cycle: "2026-Q3",
    opening:
      "Estimado/a {title} {lastName}, un saludo de parte de {avatarName}.",
    productPresentation:
      "Respirax Kids ofrece alivio sintomático pediátrico de acción rápida con perfil de seguridad comprobado.",
    probingQuestion:
      "¿Con qué frecuencia recibe casos de tos persistente en temporada fría?",
    closing: "Haga clic abajo si desea recibir el dossier médico digital.",
  },
  {
    title: "Capacitación Farmacias",
    audience: "pharmacy_staff" as TargetAudience,
    cycle: "2026-Q3",
    opening:
      "Hola, {firstName}. Te escribe {avatarName} del equipo de capacitación médica.",
    productPresentation:
      "Queremos recordarte la posología recomendada de la línea GastroPro.",
    probingQuestion:
      "¿Tus clientes te preguntan seguido por la toma en ayunas?",
    closing:
      "Completa el test rápido para recibir tu certificado de entrenamiento.",
  },
];

export function useCampaigns() {
  const store = useAppStore();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null,
  );
  const [dispatchChannel, setDispatchChannel] = useState<Channel>("whatsapp");
  const [msg, setMsg] = useState("");
  const [showStatusConfirm, setShowStatusConfirm] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<CampaignStatus | null>(
    null,
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [formData, setFormData] = useState<Partial<Campaign>>(() => ({
    name: "",
    productIds: [store.products[0]?.id || ""],
    avatarId: store.avatars[0]?.id || "",
    audience: "covered_doctors",
    status: "draft",
    cycle: "2026-Q3",
    multiProduct: false,
    channels: ["whatsapp"],
    filters: { coveredOnly: true },
    script: {
      opening:
        "Buenos días, {title} {lastName}. Soy {avatarName}, en apoyo a {realRepName}.",
      productPresentation:
        "Le presento el mensaje aprobado del producto en este ciclo.",
      clinicalEvidence:
        "La evidencia clínica aprobada se comparte solo desde documentación interna.",
      expectedResults:
        "Buscamos reforzar el mensaje de campaña de forma precisa.",
      probingQuestion: "¿Se le viene a la mente algún paciente candidato?",
      closing: "Puede usar el CTA inferior si desea muestra o material.",
      supportRepMention: true,
    },
    ctas: [
      {
        type: "sample_request",
        label: "Solicitar muestra",
        productId: store.products[0]?.id || "",
      },
    ],
  }));

  const audienceCount = useMemo(() => {
    if (!selectedCampaign) return 0;
    return estimateAudienceSize(
      selectedCampaign,
      store.doctors,
      store.pharmacyStaff,
    );
  }, [selectedCampaign, store.doctors, store.pharmacyStaff]);

  const handleOpenCreate = () => {
    setFormData({
      name: "",
      productIds: [store.products[0]?.id || ""],
      avatarId: store.avatars[0]?.id || "",
      audience: "covered_doctors",
      status: "draft",
      cycle: "2026-Q3",
      multiProduct: false,
      channels: ["whatsapp"],
      filters: { coveredOnly: true },
      script: {
        opening:
          "Buenos días, {title} {lastName}. Soy {avatarName}, en apoyo a {realRepName}.",
        productPresentation:
          "Le presento el mensaje aprobado del producto en este ciclo.",
        clinicalEvidence:
          "La evidencia clínica aprobada se comparte solo desde documentación interna.",
        expectedResults:
          "Buscamos reforzar el mensaje de campaña de forma precisa.",
        probingQuestion: "¿Se le viene a la mente algún paciente candidato?",
        closing: "Puede usar el CTA inferior si desea muestra o material.",
        supportRepMention: true,
      },
      ctas: [
        {
          type: "sample_request",
          label: "Solicitar muestra",
          productId: store.products[0]?.id || "",
        },
      ],
    });
    setIsCreateModalOpen(true);
  };

  const applyDraft = (draft: (typeof DRAFT_TEMPLATES)[0]) => {
    setFormData((prev) => ({
      ...prev,
      name: draft.title,
      audience: draft.audience,
      cycle: draft.cycle,
      script: {
        opening: draft.opening,
        productPresentation: draft.productPresentation,
        clinicalEvidence:
          prev.script?.clinicalEvidence ||
          "Evidencia clínica aprobada por el departamento médico.",
        expectedResults:
          prev.script?.expectedResults ||
          "Mejoría en parámetros clínicos evaluados.",
        probingQuestion: draft.probingQuestion,
        closing: draft.closing,
        supportRepMention: true,
      },
    }));
  };

  const handleSaveCampaign = () => {
    if (!formData.name?.trim()) return;
    const newCampaign: Campaign = {
      id: `camp-${Date.now()}`,
      name: formData.name || "Nueva Campaña",
      productIds: formData.productIds || [store.products[0]?.id || ""],
      avatarId: formData.avatarId || store.avatars[0]?.id || "",
      audience: formData.audience || "covered_doctors",
      status: formData.status || "draft",
      cycle: formData.cycle || "2026-Q3",
      multiProduct: formData.multiProduct || false,
      channels: formData.channels || ["whatsapp"],
      filters: formData.filters || { coveredOnly: true },
      script: formData.script || {
        opening: "",
        productPresentation: "",
        clinicalEvidence: "",
        expectedResults: "",
        probingQuestion: "",
        closing: "",
        supportRepMention: true,
      },
      ctas: formData.ctas || [
        {
          type: "sample_request",
          label: "Solicitar muestra",
          productId: store.products[0]?.id || "",
        },
      ],
      createdAt: new Date().toISOString().slice(0, 10),
    };
    store.upsertCampaign(newCampaign);
    setIsCreateModalOpen(false);
  };

  const handleDispatch = () => {
    if (!selectedCampaign) return;
    const res = store.dispatchCampaign(selectedCampaign.id, dispatchChannel);
    setMsg(res.message);
  };

  const handleDeleteCampaign = () => {
    if (!selectedCampaign) return;
    store.deleteCampaign(selectedCampaign.id);
    setSelectedCampaign(null);
    setShowDeleteConfirm(false);
    setMsg("Campaña eliminada exitosamente.");
  };

  const changeStatus = (status: CampaignStatus) => {
    if (selectedCampaign) {
      store.setCampaignStatus(selectedCampaign.id, status);
      setSelectedCampaign({ ...selectedCampaign, status });
    }
  };

  return {
    // Estado del store
    campaigns: store.campaigns,
    products: store.products,
    avatars: store.avatars,
    doctors: store.doctors,
    pharmacyStaff: store.pharmacyStaff,
    credits: store.credits,
    // Estado de UI
    isCreateModalOpen,
    selectedCampaign,
    dispatchChannel,
    msg,
    showStatusConfirm,
    pendingStatus,
    showDeleteConfirm,
    formData,
    audienceCount,
    // Setters
    setIsCreateModalOpen,
    setSelectedCampaign,
    setDispatchChannel,
    setMsg,
    setShowStatusConfirm,
    setPendingStatus,
    setShowDeleteConfirm,
    setFormData,
    // Acciones
    handleOpenCreate,
    applyDraft,
    handleSaveCampaign,
    handleDispatch,
    handleDeleteCampaign,
    changeStatus,
    // Utilidades
    DRAFT_TEMPLATES,
  };
}
