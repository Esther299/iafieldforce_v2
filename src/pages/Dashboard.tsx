import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  MousePointerClick,
  PackageOpen,
  Send,
  ShieldCheck,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  Wallet,
  Building2,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  X,
} from "lucide-react";
import { Badge, Button, Card, Modal, PageHeader } from "../components/ui";
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

  // Estado para la regla de gobernanza seleccionada (burbuja flotante individual)
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(null);

  // Estado para controlar la apertura del modal "Estado rápido"
  const [isQuickStatusOpen, setIsQuickStatusOpen] = useState(false);

  // Configuración visual para cada una de las 6 reglas de gobernanza adaptadas a la paleta institucional
  const ruleStyles = [
    {
      bg: "bg-emerald-50/80 border-emerald-200 hover:border-emerald-300 text-emerald-900",
      icon: "text-emerald-600",
    },
    {
      bg: "bg-blue-50/80 border-blue-200 hover:border-blue-300 text-blue-900",
      icon: "text-blue-600",
    },
    {
      bg: "bg-indigo-50/80 border-indigo-200 hover:border-indigo-300 text-indigo-900",
      icon: "text-indigo-600",
    },
    {
      bg: "bg-violet-50/80 border-violet-200 hover:border-violet-300 text-violet-900",
      icon: "text-violet-600",
    },
    {
      bg: "bg-amber-50/80 border-amber-200 hover:border-amber-300 text-amber-900",
      icon: "text-amber-600",
    },
    {
      bg: "bg-rose-50/80 border-rose-200 hover:border-rose-300 text-rose-900",
      icon: "text-rose-600",
    },
  ];

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

      {/* 1. SECCIÓN DE MÉTRICAS / KPI */}
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
            {analytics.sent}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
            <TrendingUp size={14} />
            <span>Reach {analytics.reachRate}%</span>
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
            {analytics.opened}
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
            {analytics.ctaClicks}
          </p>
          <p className="mt-2 text-xs font-semibold text-violet-600">
            {analytics.engagementRate}% engagement
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
            {analytics.samplesRequested}
          </p>
          <p className="mt-2 text-xs font-semibold text-amber-600">
            Despacho automático MM
          </p>
        </div>
      </div>

      {/* 2. PILARES OPERATIVOS & GOBERNANZA */}
      <Card className="overflow-visible border-slate-200/80 shadow-sm w-full bg-white rounded-2xl">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-6 py-4 rounded-t-2xl">
          <Sparkles size={18} className="text-brand-600" />
          <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
            Pilares operativos & Gobernanza
          </h3>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "Gobernanza",
              d: "Compliance y límites antes de cada respuesta.",
              color: "bg-slate-50/60 border-slate-200",
            },
            {
              n: "02",
              t: "Campaña",
              d: "Script del gerente de producto, sin desviaciones.",
              color: "bg-slate-50/60 border-slate-200",
            },
            {
              n: "03",
              t: "Corpus interno",
              d: "Solo docs de la compañía. Cero terceros. Anti-alucinación.",
              color: "bg-slate-50/60 border-slate-200",
            },
          ].map((p) => (
            <div
              key={p.n}
              className={`relative rounded-xl border ${p.color} p-4 transition-all duration-200 hover:shadow-sm`}
            >
              <span className="font-display text-2xl font-black text-brand-700/40">
                {p.n}
              </span>
              <p className="mt-1 text-sm font-bold text-slate-900">{p.t}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {p.d}
              </p>
            </div>
          ))}
        </div>

        {/* 6 REGLAS DE GOBERNANZA INTERACTIVAS */}
        <div className="border-t border-slate-100 bg-slate-50/40 p-6 rounded-b-2xl overflow-visible">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Reglas de Gobernanza Activas
            </p>
            <span className="text-[11px] text-slate-400 italic">
              Haz clic en una regla para ver su detalle
            </span>
          </div>

          {governanceRules.filter((r) => r.enforced).length === 0 ? (
            <p className="text-xs text-slate-400 italic">
              No hay reglas de gobernanza activas actualmente.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 relative overflow-visible">
              {governanceRules
                .filter((r) => r.enforced)
                .slice(0, 6)
                .map((r, index) => {
                  const style = ruleStyles[index % ruleStyles.length];
                  const isSelected = selectedRuleId === r.id;

                  return (
                    <div key={r.id} className="relative overflow-visible">
                      <div
                        onClick={() =>
                          setSelectedRuleId(isSelected ? null : r.id)
                        }
                        className={`group flex items-center justify-between gap-2.5 rounded-xl border p-3.5 shadow-sm transition-all duration-200 cursor-pointer bg-white relative z-10 ${style.bg} ${
                          isSelected
                            ? "ring-2 ring-brand-600 border-brand-600 shadow-md"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <ShieldCheck
                            size={18}
                            className={`shrink-0 ${style.icon}`}
                          />
                          <p className="text-xs font-semibold line-clamp-2 leading-snug">
                            {r.title}
                          </p>
                        </div>
                        <ChevronRight
                          size={14}
                          className={`shrink-0 transition-opacity ${
                            isSelected
                              ? "opacity-0"
                              : "opacity-40 group-hover:opacity-100"
                          }`}
                        />
                      </div>

                      {/* BURBUJA FLOTANTE A LA DERECHA */}
                      {isSelected && (
                        <div className="absolute left-[calc(100%+8px)] top-0 z-50 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl animate-fade-up">
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <p className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
                              Detalle de regla
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedRuleId(null);
                              }}
                              className="rounded-lg p-1 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                            {r.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </Card>

      {/* 3. BOTÓN/TARJETA DE ESTADO RÁPIDO */}
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
                ${credits.balance.toLocaleString()}
              </p>
            </div>
          )}
          <div className="rounded-xl bg-slate-900 p-2.5 text-white shadow-sm transition-transform group-hover:translate-x-0.5">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Card>

      {/* 4. BLOQUE INFERIOR: ÚLTIMOS DESPACHOS Y AUDIENCIAS */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* ÚLTIMOS DESPACHOS */}
        <Card className="overflow-hidden border-slate-200/80 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-4">
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Últimos despachos
              </h3>
            </div>
            <Badge tone="brand">En vivo</Badge>
          </div>
          <div className="divide-y divide-slate-100">
            {dispatches.map((d) => {
              const camp = campaigns.find((c) => c.id === d.campaignId);
              return (
                <div
                  key={d.id}
                  className="flex items-center justify-between gap-3 px-6 py-3.5 transition-colors duration-150 hover:bg-slate-50/60 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-50 p-1.5 text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {camp?.name ?? d.campaignId}
                      </p>
                      <p className="text-xs text-slate-500">
                        {d.recipientCount} dest. ·{" "}
                        <span className="font-medium text-slate-700">
                          {d.channel}
                        </span>{" "}
                        · -{d.costCredits} cr
                      </p>
                    </div>
                  </div>
                  <Badge tone="success">{d.status}</Badge>
                </div>
              );
            })}
          </div>
        </Card>

        {/* AUDIENCIAS / TARGETS */}
        <Card className="overflow-hidden border-slate-200/80 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-6 py-4">
            <Target size={18} className="text-rose-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Audiencias / Targets
            </h3>
          </div>
          <div className="space-y-3 p-6">
            {[
              {
                t: "Médicos que ya vemos",
                d: "Refuerzo del visitador real. El VM siempre aclara que no lo reemplaza.",
                tag: "Refuerzo",
                border: "border-l-4 border-l-blue-500 bg-slate-50/40",
              },
              {
                t: "Médicos no alcanzados",
                d: "Visita multiproducto con CTA de muestra por producto.",
                tag: "Expansion",
                border: "border-l-4 border-l-amber-500 bg-slate-50/40",
              },
              {
                t: "Dependientes de farmacia",
                d: "Entrenamiento, recordación de marca y certificado.",
                tag: "Training",
                border: "border-l-4 border-l-purple-500 bg-slate-50/40",
              },
            ].map((x) => (
              <div
                key={x.t}
                className={`rounded-xl border border-slate-200/80 ${x.border} p-4 transition-all duration-200 hover:shadow-sm cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900">{x.t}</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {x.tag}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* MODAL PARA EL ESTADO RÁPIDO */}
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
            <Row k="Campañas activas / aprobadas" v={String(live)} highlight />
            <Row k="Médicos cubiertos" v={String(covered)} />
            <Row k="Médicos no alcanzados" v={String(uncovered)} />
            <div className="my-2 border-t border-dashed border-slate-200" />
            <Row
              k="Saldo créditos"
              v={`$${credits.balance.toLocaleString()}`}
              isCurrency
            />
            <Row k="Costo por VM" v={`$${credits.costPerVisit}`} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-900">
              <Building2 size={16} />
              <p className="text-xs font-bold uppercase tracking-wider">
                Promesa económica
              </p>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Vehículo masivo y barato: el laboratorio recarga saldo y escala
              envíos sin fricción.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function Row({
  k,
  v,
  highlight = false,
  isCurrency = false,
}: {
  k: string;
  v: string;
  highlight?: boolean;
  isCurrency?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-xs font-medium text-slate-500">{k}</span>
      <span
        className={`font-bold ${
          isCurrency
            ? "text-emerald-600 text-base"
            : highlight
              ? "text-brand-700"
              : "text-slate-950"
        }`}
      >
        {v}
      </span>
    </div>
  );
}
