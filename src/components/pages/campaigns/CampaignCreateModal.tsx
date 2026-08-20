import { Bookmark, FileText, CheckCircle2 } from "lucide-react";
import { Button, Input, Label, Modal, Select, Textarea } from "../../ui";
import type { Campaign, TargetAudience } from "../../../types";
import { DRAFT_TEMPLATES } from "../../../pages/Campaigns";

interface CampaignCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: Partial<Campaign>;
  setFormData: (data: Partial<Campaign>) => void;
  onSave: () => void;
  products: { id: string; name: string }[];
  avatars: { id: string; name: string }[];
}

export function CampaignCreateModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSave,
  products,
  avatars,
}: CampaignCreateModalProps) {
  const applyDraft = (draft: (typeof DRAFT_TEMPLATES)[0]) => {
    setFormData({
      ...formData,
      name: draft.title,
      audience: draft.audience,
      cycle: draft.cycle,
      script: {
        opening: draft.opening,
        productPresentation: draft.productPresentation,
        clinicalEvidence:
          formData.script?.clinicalEvidence ||
          "Evidencia clínica aprobada por el departamento médico.",
        expectedResults:
          formData.script?.expectedResults ||
          "Mejoría en parámetros clínicos evaluados.",
        probingQuestion: draft.probingQuestion,
        closing: draft.closing,
        supportRepMention: true,
      },
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Crear Nueva Campaña"
      className="!max-w-5xl max-h-[85vh] overflow-y-auto"
    >
      <div className="space-y-6 pt-2">
        {/* Plantillas */}
        <div className="rounded-2xl border border-brand-200/80 bg-brand-50/40 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-800 flex items-center gap-1.5 mb-2">
            <Bookmark size={14} /> Seleccionar plantilla / Draft de ejemplo
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {DRAFT_TEMPLATES.map((draft) => (
              <button
                key={draft.title}
                type="button"
                onClick={() => applyDraft(draft)}
                className="rounded-xl border border-brand-200 bg-white p-3 text-left text-xs transition-all hover:border-brand-500 hover:shadow-sm"
              >
                <p className="font-bold text-slate-900 line-clamp-1">
                  {draft.title}
                </p>
                <p className="text-[10px] text-slate-500 capitalize mt-0.5">
                  {draft.audience.replaceAll("_", " ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Formulario 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Nombre de la campaña</Label>
              <Input
                placeholder="Ej. Lanzamiento CardioFlex Q3..."
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Producto Principal</Label>
                <Select
                  value={formData.productIds?.[0] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, productIds: [e.target.value] })
                  }
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <Label>Avatar Asignado</Label>
                <Select
                  value={formData.avatarId || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, avatarId: e.target.value })
                  }
                >
                  {avatars.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Audiencia Objetivo</Label>
                <Select
                  value={formData.audience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience: e.target.value as TargetAudience,
                    })
                  }
                >
                  <option value="covered_doctors">Médicos cubiertos</option>
                  <option value="uncovered_doctors">
                    Médicos no alcanzados
                  </option>
                  <option value="pharmacy_staff">Dependientes farmacia</option>
                </Select>
              </div>

              <div>
                <Label>Ciclo Promocional</Label>
                <Input
                  placeholder="Ej. 2026-Q3"
                  value={formData.cycle || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, cycle: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <FileText size={14} /> Script (Gerente de Producto)
            </p>

            <div>
              <Label>Apertura</Label>
              <Textarea
                rows={2}
                value={formData.script?.opening || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    script: { ...formData.script!, opening: e.target.value },
                  })
                }
              />
            </div>

            <div>
              <Label>Presentación de Producto</Label>
              <Textarea
                rows={2}
                value={formData.script?.productPresentation || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    script: {
                      ...formData.script!,
                      productPresentation: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div>
              <Label>Pregunta de Sondeo</Label>
              <Input
                value={formData.script?.probingQuestion || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    script: {
                      ...formData.script!,
                      probingQuestion: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div>
              <Label>Cierre</Label>
              <Input
                value={formData.script?.closing || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    script: { ...formData.script!, closing: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-2 justify-end border-t border-slate-100">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button className="shadow-sm" onClick={onSave}>
            <CheckCircle2 size={16} /> Guardar campaña
          </Button>
        </div>
      </div>
    </Modal>
  );
}
