import { Activity, CheckCircle2 } from "lucide-react";
import { Badge, Card } from "../../ui";
import type { DispatchJob, Campaign } from "../../../types";

interface DashboardDispatchesProps {
  dispatches: DispatchJob[];
  campaigns: Campaign[];
}

export function DashboardDispatches({
  dispatches,
  campaigns,
}: DashboardDispatchesProps) {
  return (
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
  );
}
