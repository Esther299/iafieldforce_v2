import { useState } from "react";
import { Wallet, ArrowUpRight } from "lucide-react";
import { Card, Modal, Button } from "@/shared/ui";
import { DashboardRow } from "@/features/dashboard/components/DashboardRow";

interface DashboardQuickStatusProps {
  isSalesForceCreator: boolean;
  balance: number;
  live: number;
  covered: number;
  uncovered: number;
  costPerVisit: number;
}

export function DashboardQuickStatus({
  isSalesForceCreator,
  balance,
  live,
  covered,
  uncovered,
  costPerVisit,
}: DashboardQuickStatusProps) {
  const [isQuickStatusOpen, setIsQuickStatusOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsQuickStatusOpen(true)}
        className="group relative flex items-center justify-between overflow-hidden border-slate-200/80 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md cursor-pointer w-full rounded-2xl"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 shrink-0">
            <Wallet size={24} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {isSalesForceCreator
                  ? "Resumen operativo"
                  : "Resumen Financiero"}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                ·{" "}
                {isSalesForceCreator
                  ? "Cobertura y fuerza de ventas"
                  : "Clic para abrir métricas de cobertura y saldo"}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              {isSalesForceCreator
                ? "Estado rápido, Cobertura & Fuerza de ventas"
                : "Estado rápido, Cobertura & Saldo"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {!isSalesForceCreator && (
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400">Saldo disponible</p>
              <p className="text-lg font-black text-emerald-600">
                ${balance.toLocaleString()}
              </p>
            </div>
          )}
          <div className="rounded-xl bg-slate-900 p-2.5 text-white shadow-sm transition-transform group-hover:translate-x-0.5">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Card>

      <Modal
        isOpen={isQuickStatusOpen}
        onClose={() => setIsQuickStatusOpen(false)}
        title="Estado rápido del sistema"
        actions={
          <Button variant="outline" onClick={() => setIsQuickStatusOpen(false)}>
            Cerrar
          </Button>
        }
      >
        <div className="space-y-5">
          <div className="space-y-3">
            <DashboardRow
              label="Campañas activas / aprobadas"
              value={String(live)}
              highlight
            />
            <DashboardRow label="Médicos cubiertos" value={String(covered)} />
            <DashboardRow
              label="Médicos no alcanzados"
              value={String(uncovered)}
            />
            <div className="my-2 border-t border-dashed border-slate-200" />
            <DashboardRow
              label="Saldo créditos"
              value={`$${balance.toLocaleString()}`}
              isCurrency
            />
            <DashboardRow label="Costo por VM" value={`$${costPerVisit}`} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-900">
              <span className="text-xs font-bold uppercase tracking-wider">
                Promesa económica
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Vehículo masivo y barato: el laboratorio recarga saldo y escala
              envíos sin fricción.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
