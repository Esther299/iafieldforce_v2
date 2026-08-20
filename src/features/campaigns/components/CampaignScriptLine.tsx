export function CampaignScriptLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mt-1.5">
      <p className="text-[11px] font-bold text-brand-800 uppercase tracking-wide">
        {label}
      </p>
      <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100 leading-relaxed mt-0.5">
        {value}
      </p>
    </div>
  );
}
