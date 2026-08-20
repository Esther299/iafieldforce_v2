import { Target } from "lucide-react";
import { Card } from "@/shared/ui";

export function DashboardAudiences() {
  const audiences = [
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
  ];

  return (
    <Card className="overflow-hidden border-slate-200/80 bg-white rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/70 px-6 py-4">
        <Target size={18} className="text-rose-600" />
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
          Audiencias / Targets
        </h3>
      </div>
      <div className="space-y-3 p-6">
        {audiences.map((x) => (
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
  );
}
