import { Badge, Card } from "@/shared/ui";
import type { Campaign, CampaignStatus } from "@/shared/types";

const statusTone: Record<
  CampaignStatus,
  "neutral" | "brand" | "success" | "warn" | "danger"
> = {
  draft: "neutral",
  testing: "warn",
  approved: "brand",
  live: "success",
  paused: "warn",
  completed: "neutral",
};

interface CampaignCardProps {
  campaign: Campaign;
  index: number;
  onClick: () => void;
  avatarName?: string;
  productName?: string;
}

const cardGradients = [
  "from-teal-50/60 via-white to-white border-teal-200/80 hover:border-teal-300",
  "from-sky-50/60 via-white to-white border-sky-200/80 hover:border-sky-300",
  "from-indigo-50/60 via-white to-white border-indigo-200/80 hover:border-indigo-300",
  "from-rose-50/60 via-white to-white border-rose-200/80 hover:border-rose-300",
  "from-amber-50/60 via-white to-white border-amber-200/80 hover:border-amber-300",
];

export function CampaignCard({
  campaign,
  index,
  onClick,
  avatarName,
  productName,
}: CampaignCardProps) {
  const cardStyle = cardGradients[index % cardGradients.length];

  return (
    <Card
      interactive
      onClick={onClick}
      className={`relative overflow-hidden border bg-gradient-to-br ${cardStyle} p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-2xl shadow-sm flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <Badge tone={statusTone[campaign.status]}>{campaign.status}</Badge>
          <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 bg-white/80 px-2 py-0.5 rounded-md border border-slate-100">
            {campaign.cycle}
          </span>
        </div>

        <div className="mt-3">
          <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
            {campaign.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 flex items-center gap-1">
            <span className="capitalize">
              {campaign.audience.replaceAll("_", " ")}
            </span>
          </p>
        </div>

        <div className="mt-3 rounded-xl bg-white/70 p-2.5 border border-slate-100/80 space-y-1 text-xs">
          <p className="flex justify-between text-slate-600">
            <span>Producto:</span>
            <strong className="text-slate-900">{productName || "N/A"}</strong>
          </p>
          <p className="flex justify-between text-slate-600">
            <span>Avatar asignado:</span>
            <strong className="text-brand-700">{avatarName || "N/A"}</strong>
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-bold text-brand-700">
        <span>Ver ficha & configuración</span>
        <span>→</span>
      </div>
    </Card>
  );
}
