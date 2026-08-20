import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button, Card, PageHeader } from "../components/ui";
import {
  DashboardStats,
  DashboardPillars,
  DashboardRules,
  DashboardQuickStatus,
  DashboardDispatches,
  DashboardAudiences,
} from "../components/pages/dashboard";
import { useAppStore } from "../store/";

export function Dashboard() {
  const {
    analytics,
    campaigns,
    credits,
    governanceRules,
    dispatches,
    doctors,
    activeUserRole,
  } = useAppStore();

  const isSalesForceCreator = activeUserRole === "sales-force-creator";
  const live = campaigns.filter(
    (c) => c.status === "live" || c.status === "approved",
  ).length;
  const covered = doctors.filter((d) => d.covered).length;
  const uncovered = doctors.filter((d) => !d.covered).length;

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Centro de mando"
        subtitle="Defina avatares, alimente productos y campañas, pruebe el mensaje, dé el go final y mida reach y engagement."
        actions={
          <>
            <Link to="/campanas">
              <Button className="shadow-sm shadow-brand-700/20 bg-brand-700 hover:bg-brand-800 text-white font-medium">
                Nueva campaña
              </Button>
            </Link>
            <Link to="/visita">
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Ver visita demo
              </Button>
            </Link>
          </>
        }
      />

      {isSalesForceCreator && (
        <Card className="border-brand-200 bg-gradient-to-r from-brand-900 via-brand-800 to-blue-900 p-6 text-white shadow-lg rounded-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-300">
                Sales Force Creator
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                Estado de la fuerza de ventas
              </h2>
              <p className="mt-1 text-sm text-slate-200">
                Región 1-4 consolidada. 18 reps activos, 92% de cobertura
                logística y 6 campañas en validación.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  Reps activos
                </p>
                <p className="mt-1 text-2xl font-black text-white">18</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  Cobertura
                </p>
                <p className="mt-1 text-2xl font-black text-white">92%</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  Campañas
                </p>
                <p className="mt-1 text-2xl font-black text-white">6</p>
              </div>
            </div>
          </div>
        </Card>
      )}

      <DashboardStats
        sent={analytics.sent}
        opened={analytics.opened}
        ctaClicks={analytics.ctaClicks}
        samplesRequested={analytics.samplesRequested}
        reachRate={analytics.reachRate}
        engagementRate={analytics.engagementRate}
      />

      <Card className="overflow-visible border-slate-200/80 shadow-sm w-full bg-white rounded-2xl">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-6 py-4 rounded-t-2xl">
          <Sparkles size={18} className="text-brand-600" />
          <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
            Pilares operativos & Gobernanza
          </h3>
        </div>

        <DashboardPillars />

        <div className="border-t border-slate-100 bg-slate-50/40 p-6 rounded-b-2xl overflow-visible">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Reglas de Gobernanza Activas
            </p>
            <span className="text-[11px] text-slate-400 italic">
              Haz clic en una regla para ver su detalle
            </span>
          </div>
          <DashboardRules rules={governanceRules} />
        </div>
      </Card>

      <DashboardQuickStatus
        isSalesForceCreator={isSalesForceCreator}
        balance={credits.balance}
        live={live}
        covered={covered}
        uncovered={uncovered}
        costPerVisit={credits.costPerVisit}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardDispatches dispatches={dispatches} campaigns={campaigns} />
        <DashboardAudiences />
      </div>
    </div>
  );
}
