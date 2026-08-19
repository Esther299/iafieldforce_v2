import { useState } from "react";
import {
  Ban,
  BookLock,
  ChevronDown,
  ChevronUp,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "../components/ui";
import { useAppStore } from "../store/useAppStore";

export function Governance() {
  const { governanceRules, setRuleEnforcement, governanceBlocks } =
    useAppStore();
  const [showRules, setShowRules] = useState(false);

  const activeRulesCount = governanceRules.filter((r) => r.enforced).length;
  const totalRulesCount = governanceRules.length;

  // Estilos adaptados al diseño institucional del Dashboard
  const ruleStyles = [
    {
      activeBg:
        "bg-emerald-50/80 border-emerald-200 text-emerald-900 shadow-sm",
      activeIconBg: "bg-emerald-500/10 text-emerald-600",
      accent: "text-emerald-700",
    },
    {
      activeBg: "bg-blue-50/80 border-blue-200 text-blue-900 shadow-sm",
      activeIconBg: "bg-blue-500/10 text-blue-600",
      accent: "text-blue-700",
    },
    {
      activeBg: "bg-indigo-50/80 border-indigo-200 text-indigo-900 shadow-sm",
      activeIconBg: "bg-indigo-500/10 text-indigo-600",
      accent: "text-indigo-700",
    },
    {
      activeBg: "bg-violet-50/80 border-violet-200 text-violet-900 shadow-sm",
      activeIconBg: "bg-violet-500/10 text-violet-600",
      accent: "text-violet-700",
    },
    {
      activeBg: "bg-amber-50/80 border-amber-200 text-amber-900 shadow-sm",
      activeIconBg: "bg-amber-500/10 text-amber-600",
      accent: "text-amber-700",
    },
    {
      activeBg: "bg-rose-50/80 border-rose-200 text-rose-900 shadow-sm",
      activeIconBg: "bg-rose-500/10 text-rose-600",
      accent: "text-rose-700",
    },
  ];

  return (
    <div className="animate-fade-up space-y-6 bg-sky-200 min-h-screen p-6">
      <PageHeader
        title="Gobernanza"
        subtitle="Prioridad 1 del sistema. Alineación de organización, productos, campañas e información para asegurar un sistema corporativo seguro y consistente."
      />

      {/* 2. BLOQUES TEMÁTICOS DE GOBERNANZA */}
      <div className="grid gap-4 md:grid-cols-2">
        {governanceBlocks.map((block) => {
          const Icon = block.icon;
          const activeRules = governanceRules
            .filter((rule) => rule.enforced)
            .slice(0, 3);

          return (
            <Card
              key={block.title}
              className="overflow-hidden border-slate-200/80 bg-white p-5 shadow-sm rounded-2xl transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-brand-50 p-2.5 text-brand-600">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-base font-extrabold tracking-tight text-slate-900">
                    {block.title}
                  </h2>
                </div>
                <Badge tone="brand">{activeRules.length} reglas</Badge>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {block.description}
              </p>

              <ul className="mt-4 space-y-2">
                {block.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2.5 text-xs text-slate-700 font-medium"
                  >
                    <ShieldCheck
                      size={15}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {/* 3. TARJETA ACORDEÓN SÓLIDA PARA REGLAS DEL SISTEMA */}
      <div className="space-y-3">
        <Card
          onClick={() => setShowRules(!showRules)}
          className="group flex cursor-pointer items-center justify-between border-slate-200/80 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md shadow-sm w-full rounded-2xl"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="rounded-xl bg-brand-50 p-3 text-brand-600 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                  Sistema central
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Reglas del Sistema
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeRulesCount} Activas / {totalRulesCount} Total (Haz clic
                para ver u ocultar)
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 shadow-sm transition-transform group-hover:translate-x-0.5">
            {showRules ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </Card>

        {/* CONTENEDOR SÓLIDO DESPLEGABLE */}
        {showRules && (
          <div className="space-y-3 pt-1 animate-fade-up">
            {governanceRules.map((r, index) => {
              const style = ruleStyles[index % ruleStyles.length];
              const isEnforced = r.enforced;

              return (
                <Card
                  key={r.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 transition-all duration-200 border rounded-2xl shadow-sm bg-white ${
                    isEnforced
                      ? style.activeBg
                      : "bg-slate-50/60 border-slate-200/80 opacity-75"
                  }`}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div
                      className={`rounded-xl p-3 shrink-0 transition-transform ${
                        isEnforced
                          ? style.activeIconBg
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <ShieldCheck size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-bold text-slate-900">
                          {r.title}
                        </p>
                        <Badge tone={isEnforced ? "brand" : "neutral"}>
                          Prioridad {r.priority}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {r.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto justify-between sm:justify-end">
                    {isEnforced ? (
                      <Badge tone="success">Activo</Badge>
                    ) : (
                      <Badge tone="neutral">Desactivado</Badge>
                    )}

                    <Button
                      size="sm"
                      variant={isEnforced ? "outline" : "primary"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setRuleEnforcement(r.id, !isEnforced);
                      }}
                      className="whitespace-nowrap shadow-sm text-xs"
                    >
                      {isEnforced ? "Desactivar" : "Activar regla"}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. BLOQUE DE RESPUESTA CANÓNICA */}
      <Card className="overflow-hidden border-slate-200/80 bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-slate-900">
          <MessageSquareQuote size={18} className="text-brand-600" />
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
            Respuesta canónica fuera de límites
          </h3>
        </div>
        <blockquote className="mt-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 text-xs sm:text-sm italic leading-relaxed text-slate-700 shadow-sm">
          “No dispongo de esa información en este momento, pero haré la pregunta
          al departamento médico, legal u otro correspondiente y le traeré la
          respuesta en su próxima visita.”
        </blockquote>
      </Card>

      {/* 5. TARJETAS INFERIORES DE SOPORTE */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-slate-200/80 bg-white p-5 rounded-2xl shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <Ban size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Sin terceros
            </p>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            La IA utiliza solo documentación interna y aprobada; cualquier dato
            externo queda bloqueado.
          </p>
        </Card>
        <Card className="border-slate-200/80 bg-white p-5 rounded-2xl shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <BookLock size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Campañas
            </p>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Toda respuesta debe mantener el mensaje del gerente de producto y
            evitar desviaciones no autorizadas.
          </p>
        </Card>
        <Card className="border-slate-200/80 bg-white p-5 rounded-2xl shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <ShieldCheck size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
              Cumplimiento
            </p>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Se valida el tono, la evidencia y el proceso de escalamiento antes
            de enviar la visita o la campaña.
          </p>
        </Card>
      </div>
    </div>
  );
}
