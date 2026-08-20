import { useState } from "react";
import { ShieldCheck, ChevronRight, X } from "lucide-react";
import type { GovernanceRule } from "@/shared/types";

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

interface DashboardRulesProps {
  rules: GovernanceRule[];
}

export function DashboardRules({ rules }: DashboardRulesProps) {
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(null);
  const activeRules = rules.filter((r) => r.enforced).slice(0, 6);

  if (activeRules.length === 0) {
    return (
      <p className="text-xs text-slate-400 italic">
        No hay reglas de gobernanza activas actualmente.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 relative overflow-visible">
      {activeRules.map((r, index) => {
        const style = ruleStyles[index % ruleStyles.length];
        const isSelected = selectedRuleId === r.id;

        return (
          <div key={r.id} className="relative overflow-visible">
            <div
              onClick={() => setSelectedRuleId(isSelected ? null : r.id)}
              className={`group flex items-center justify-between gap-2.5 rounded-xl border p-3.5 shadow-sm transition-all duration-200 cursor-pointer bg-white relative z-10 ${style.bg} ${
                isSelected
                  ? "ring-2 ring-brand-600 border-brand-600 shadow-md"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <ShieldCheck size={18} className={`shrink-0 ${style.icon}`} />
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
  );
}
