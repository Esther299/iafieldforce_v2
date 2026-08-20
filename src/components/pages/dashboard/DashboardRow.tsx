interface DashboardRowProps {
  label: string;
  value: string;
  highlight?: boolean;
  isCurrency?: boolean;
}

export function DashboardRow({
  label,
  value,
  highlight = false,
  isCurrency = false,
}: DashboardRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <span
        className={`font-bold ${
          isCurrency
            ? "text-emerald-600 text-base"
            : highlight
              ? "text-brand-700"
              : "text-slate-950"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
