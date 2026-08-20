import { Link } from "react-router-dom";
import {
  Users,
  DollarSign,
  Settings2,
  MessageSquare,
  Play,
  Send,
  Trash2,
} from "lucide-react";
import { Badge, Button, Label, Modal, Select } from "../../ui";
import { CampaignScriptLine } from "./CampaignScriptLine";
import type { Campaign, Channel, TargetAudience, CampaignStatus } from "../../../types";
import { statusTone } from "../../../pages/Campaigns";

interface CampaignDetailModalProps {
  campaign: Campaign;
  isOpen: boolean;
  onClose: () => void;
  audienceCount: number;
  costPerVisit: number;
  dispatchChannel: Channel;
  setDispatchChannel: (channel: Channel) => void;
  onDispatch: () => void;
  onStartTest: () => void;
  onStatusChange: (
    value: CampaignStatus | { audience: TargetAudience },
  ) => void;
  onDelete: () => void;
  avatarName: string;
  productName: string;
}

export function CampaignDetailModal({
  campaign,
  isOpen,
  onClose,
  audienceCount,
  costPerVisit,
  dispatchChannel,
  setDispatchChannel,
  onDispatch,
  onStartTest,
  onStatusChange,
  onDelete,
}: CampaignDetailModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={campaign.name}
      className="!max-w-5xl max-h-[85vh] overflow-y-auto"
    >
      <div className="space-y-6 pt-1">
        {/* Indicadores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-brand-50/60 p-3.5 border border-brand-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-800 flex items-center gap-1">
                <Users size={12} /> Audiencia Est.
              </span>
              <p className="text-2xl font-black text-brand-900 mt-0.5">
                {audienceCount}
              </p>
            </div>
            <div className="p-2 bg-brand-100/60 rounded-lg text-brand-700">
              <Users size={20} />
            </div>
          </div>

          <div className="rounded-xl bg-emerald-50/60 p-3.5 border border-emerald-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                <DollarSign size={12} /> Costo Est.
              </span>
              <p className="text-2xl font-black text-emerald-900 mt-0.5">
                ${(audienceCount * costPerVisit).toFixed(2)}
              </p>
            </div>
            <div className="p-2 bg-emerald-100/60 rounded-lg text-emerald-700">
              <DollarSign size={20} />
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
                <Settings2 size={12} /> Estado Actual
              </span>
              <div className="mt-1">
                <Badge tone={statusTone[campaign.status]}>
                  {campaign.status}
                </Badge>
              </div>
            </div>
            <div className="p-2 bg-slate-200/60 rounded-lg text-slate-700">
              <Settings2 size={20} />
            </div>
          </div>
        </div>

        {/* Cuerpo principal 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda: Ajustes y despacho */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Ajustes de Campaña
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Cambiar Estado</Label>
                  <Select
                    value={campaign.status}
                    onChange={(e) =>
                      onStatusChange(e.target.value as CampaignStatus)
                    }
                  >
                    {Object.keys(statusTone).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label>Audiencia Objetivo</Label>
                  <Select
                    value={campaign.audience}
                    onChange={(e) =>
                      onStatusChange({
                        audience: e.target.value as TargetAudience,
                      })
                    }
                  >
                    <option value="covered_doctors">Médicos cubiertos</option>
                    <option value="uncovered_doctors">
                      Médicos no alcanzados
                    </option>
                    <option value="pharmacy_staff">
                      Dependientes farmacia
                    </option>
                  </Select>
                </div>
              </div>
            </div>

            {/* Filtros */}
            <div className="rounded-2xl border border-slate-200/80 p-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Filtros CRM Aplicados
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {campaign.filters.specialties?.map((s) => (
                  <Badge key={s} tone="brand">
                    {s}
                  </Badge>
                ))}
                {campaign.filters.zones?.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                {campaign.filters.tags?.map((s) => (
                  <Badge key={s} tone="warn">
                    #{s}
                  </Badge>
                ))}
                {campaign.filters.coveredOnly && (
                  <Badge tone="success">solo cubiertos</Badge>
                )}
                {campaign.filters.uncoveredOnly && (
                  <Badge tone="warn">solo no cubiertos</Badge>
                )}
                {campaign.multiProduct && <Badge>multiproducto</Badge>}
              </div>
            </div>

            {/* Despacho */}
            <div className="rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50/50 to-white p-4 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-900">
                Probar & Ejecutar
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Canal de Envío</Label>
                  <Select
                    value={dispatchChannel}
                    onChange={(e) =>
                      setDispatchChannel(e.target.value as Channel)
                    }
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                  </Select>
                </div>
                <div className="flex items-end gap-2">
                  <Link to="/prueba" onClick={onStartTest} className="w-full">
                    <Button variant="outline" className="w-full" size="md">
                      <Play size={14} /> Probar
                    </Button>
                  </Link>
                  <Button onClick={onDispatch} className="w-full" size="md">
                    <Send size={14} /> Enviar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Script */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-800 border-b border-slate-100 pb-2">
              <MessageSquare size={14} /> Script Aprobado (Gerente de Producto)
            </div>
            <CampaignScriptLine
              label="Apertura"
              value={campaign.script.opening}
            />
            <CampaignScriptLine
              label="Presentación Producto"
              value={campaign.script.productPresentation}
            />
            <CampaignScriptLine
              label="Evidencia Clínica"
              value={campaign.script.clinicalEvidence}
            />
            <CampaignScriptLine
              label="Pregunta de Sondeo"
              value={campaign.script.probingQuestion}
            />
            <CampaignScriptLine
              label="Cierre"
              value={campaign.script.closing}
            />
          </div>
        </div>

        {/* Botón eliminar */}
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          <Button variant="danger" size="sm" onClick={onDelete}>
            <Trash2 size={14} /> Eliminar campaña
          </Button>
          <Button variant="outline" size="sm" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
