export function DashboardPillars() {
  const pillars = [
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
  ];

  return (
    <div className="grid gap-4 p-6 sm:grid-cols-3">
      {pillars.map((p) => (
        <div
          key={p.n}
          className={`relative rounded-xl border ${p.color} p-4 transition-all duration-200 hover:shadow-sm`}
        >
          <span className="font-display text-2xl font-black text-brand-700/40">
            {p.n}
          </span>
          <p className="mt-1 text-sm font-bold text-slate-900">{p.t}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{p.d}</p>
        </div>
      ))}
    </div>
  );
}
