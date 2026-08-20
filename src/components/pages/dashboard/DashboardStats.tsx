import {
  Send,
  Users,
  MousePointerClick,
  PackageOpen,
  TrendingUp,
} from "lucide-react";

interface DashboardStatsProps {
  sent: number;
  opened: number;
  ctaClicks: number;
  samplesRequested: number;
  reachRate: number;
  engagementRate: number;
}

export function DashboardStats({
  sent,
  opened,
  ctaClicks,
  samplesRequested,
  reachRate,
  engagementRate,
}: DashboardStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* Visitas enviadas */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Visitas enviadas
          </span>
          <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
            <Send size={20} />
          </div>
        </div>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {sent}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
          <TrendingUp size={14} />
          <span>Reach {reachRate}%</span>
        </div>
      </div>

      {/* Aperturas reales */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Aperturas reales
          </span>
          <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
            <Users size={20} />
          </div>
        </div>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {opened}
        </p>
        <p className="mt-2 text-xs font-semibold text-emerald-600">
          Click en el link del VM
        </p>
      </div>

      {/* CTA / Engagement */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            CTA / Engagement
          </span>
          <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
            <MousePointerClick size={20} />
          </div>
        </div>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {ctaClicks}
        </p>
        <p className="mt-2 text-xs font-semibold text-violet-600">
          {engagementRate}% engagement
        </p>
      </div>

      {/* Muestras solicitadas */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Muestras solicitadas
          </span>
          <div className="rounded-xl bg-amber-50 p-2.5 text-amber-600">
            <PackageOpen size={20} />
          </div>
        </div>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {samplesRequested}
        </p>
        <p className="mt-2 text-xs font-semibold text-amber-600">
          Despacho automático MM
        </p>
      </div>
    </div>
  );
}
