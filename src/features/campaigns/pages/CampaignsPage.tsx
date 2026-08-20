import { useMemo, useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button, PageHeader } from "@/shared/ui";
import {
  CampaignCard,
  CampaignDetailModal,
  CampaignCreateModal,
  CampaignStatusConfirmDialog,
  CampaignDeleteConfirmDialog,
} from "@/features/campaigns/components";
import { estimateAudienceSize } from "@/features/campaigns/lib/audience";
import { useAppStore } from "@/store";
import type {
  Campaign,
  CampaignStatus,
  Channel,
  TargetAudience,
} from "@/shared/types";

// Estado inicial del formulario de creación
function initialFormState(
  productId: string,
  avatarId: string,
): Partial<Campaign> {
  return {
    name: "",
    productIds: [productId],
    avatarId: avatarId,
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
    ctas: [{ type: "sample_request", label: "Solicitar muestra", productId }],
  };
}

export function Campaigns() {
  const store = useAppStore();

  // Modales
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCampaignModal, setSelectedCampaignModal] =
    useState<Campaign | null>(null);

  // Mensaje de despacho o acción
  const [msg, setMsg] = useState("");
  const [dispatchChannel, setDispatchChannel] = useState<Channel>("whatsapp");

  // Estado del formulario de creación
  const [formData, setFormData] = useState<Partial<Campaign>>(() =>
    initialFormState(store.products[0]?.id || "", store.avatars[0]?.id || ""),
  );

  // Confirmaciones de diálogo
  const [showStatusConfirm, setShowStatusConfirm] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<CampaignStatus | null>(
    null,
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Audiencia estimada para la campaña seleccionada en el modal
  const audienceCount = useMemo(() => {
    if (!selectedCampaignModal) return 0;
    return estimateAudienceSize(
      selectedCampaignModal,
      store.doctors,
      store.pharmacyStaff,
    );
  }, [selectedCampaignModal, store.doctors, store.pharmacyStaff]);

  // Abrir modal de creación reseteando formulario
  function handleOpenCreate() {
    setFormData(
      initialFormState(store.products[0]?.id || "", store.avatars[0]?.id || ""),
    );
    setIsCreateModalOpen(true);
  }

  // Guardar la nueva campaña
  function handleSaveCampaign() {
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
    setMsg(`Campaña "${newCampaign.name}" creada exitosamente.`);
  }

  // Despachar campaña desde el modal
  function handleDispatch() {
    if (!selectedCampaignModal) return;
    const res = store.dispatchCampaign(
      selectedCampaignModal.id,
      dispatchChannel,
    );
    setMsg(res.message);
  }

  // Eliminar campaña
  function handleDeleteCampaign() {
    if (!selectedCampaignModal) return;
    store.deleteCampaign(selectedCampaignModal.id);
    setSelectedCampaignModal(null);
    setShowDeleteConfirm(false);
    setMsg("Campaña eliminada exitosamente.");
  }

  // Cambiar estado (desde el modal)
  function handleStatusChange(status: CampaignStatus) {
    if (!selectedCampaignModal) return;
    setPendingStatus(status);
    setShowStatusConfirm(true);
  }

  // Cambiar audiencia (desde el modal)
  function handleAudienceChange(audience: TargetAudience) {
    if (!selectedCampaignModal) return;
    const updated = { ...selectedCampaignModal, audience };
    store.upsertCampaign(updated);
    setSelectedCampaignModal(updated);
  }

  // Confirmar cambio de estado
  function confirmStatusChange() {
    if (pendingStatus && selectedCampaignModal) {
      store.setCampaignStatus(selectedCampaignModal.id, pendingStatus);
      setSelectedCampaignModal({
        ...selectedCampaignModal,
        status: pendingStatus,
      });
      setShowStatusConfirm(false);
      setPendingStatus(null);
      setMsg(`Estado actualizado a "${pendingStatus}".`);
    }
  }

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Campañas"
        subtitle="Script exacto del gerente de producto · prueba interna · go final · envío WhatsApp / email / SMS."
        actions={
          <Button
            onClick={handleOpenCreate}
            className="shadow-md shadow-brand-700/20"
          >
            <Plus size={18} />
            Crear campaña
          </Button>
        }
      />

      {/* Banner de mensajes de estado */}
      {msg && (
        <div className="flex items-center justify-between rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-brand-600" />
            <span>{msg}</span>
          </div>
          <button
            onClick={() => setMsg("")}
            className="text-xs font-bold text-brand-700 hover:underline"
          >
            Desestimar
          </button>
        </div>
      )}

      {/* GRILLA DE TARJETAS DE CAMPAÑA */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {store.campaigns.map((c, index) => {
          const avatar = store.avatars.find((a) => a.id === c.avatarId);
          const product = store.products.find((p) => p.id === c.productIds[0]);

          return (
            <CampaignCard
              key={c.id}
              campaign={c}
              index={index}
              onClick={() => setSelectedCampaignModal(c)}
              avatarName={avatar?.name}
              productName={product?.name}
            />
          );
        })}
      </div>

      {/* MODAL DE DETALLE DE CAMPAÑA */}
      <CampaignDetailModal
        campaign={selectedCampaignModal! || undefined}
        isOpen={selectedCampaignModal !== null}
        onClose={() => setSelectedCampaignModal(null)}
        audienceCount={audienceCount}
        costPerVisit={store.credits.costPerVisit}
        dispatchChannel={dispatchChannel}
        setDispatchChannel={setDispatchChannel}
        onDispatch={handleDispatch}
        onStartTest={() => {
          if (selectedCampaignModal) {
            store.startTestSession(selectedCampaignModal.id);
          }
        }}
        onStatusChange={(value) => {
          if (typeof value === "string") {
            handleStatusChange(value as CampaignStatus);
          } else if (
            value &&
            typeof value === "object" &&
            "audience" in value
          ) {
            handleAudienceChange(value.audience as TargetAudience);
          }
        }}
        onDelete={() => setShowDeleteConfirm(true)}
        avatarName={
          store.avatars.find((a) => a.id === selectedCampaignModal?.avatarId)
            ?.name || "N/A"
        }
        productName={
          store.products.find(
            (p) => p.id === selectedCampaignModal?.productIds[0],
          )?.name || "N/A"
        }
      />

      {/* MODAL DE CREACIÓN DE CAMPAÑA */}
      <CampaignCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveCampaign}
        products={store.products}
        avatars={store.avatars}
      />

      {/* CONFIRMACIÓN DE CAMBIO DE ESTADO */}
      <CampaignStatusConfirmDialog
        isOpen={showStatusConfirm}
        onClose={() => {
          setShowStatusConfirm(false);
          setPendingStatus(null);
        }}
        pendingStatus={pendingStatus}
        onConfirm={confirmStatusChange}
      />

      {/* CONFIRMACIÓN DE ELIMINAR CAMPAÑA */}
      <CampaignDeleteConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        campaignName={selectedCampaignModal?.name}
        onConfirm={handleDeleteCampaign}
      />
    </div>
  );
}
