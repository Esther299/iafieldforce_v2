import type { Campaign, CampaignStatus, Channel } from "@/shared/types";
import { campaigns as initialCampaigns } from "@/shared/data";
import { estimateAudienceSize } from "@/features/campaigns/lib/audience";
import { uid } from "@/shared/lib/store-utils";

export interface CampaignsSlice {
  campaigns: Campaign[];
  upsertCampaign: (campaign: Campaign) => void;
  setCampaignStatus: (id: string, status: CampaignStatus) => void;
  deleteCampaign: (id: string) => void;
  dispatchCampaign: (
    campaignId: string,
    channel: Channel,
  ) => { ok: boolean; message: string };
}

export const createCampaignsSlice = (set: any, get: any): CampaignsSlice => ({
  campaigns: initialCampaigns,

  upsertCampaign: (campaign) => {
    set((state: any) => {
      const exists = state.campaigns.some(
        (c: Campaign) => c.id === campaign.id,
      );
      return {
        campaigns: exists
          ? state.campaigns.map((c: Campaign) =>
              c.id === campaign.id ? campaign : c,
            )
          : [campaign, ...state.campaigns],
      };
    });
  },

  setCampaignStatus: (id, status) =>
    set((state: any) => ({
      campaigns: state.campaigns.map((c: Campaign) =>
        c.id === id
          ? {
              ...c,
              status,
              testedAt:
                status === "testing" || status === "approved"
                  ? (c.testedAt ?? new Date().toISOString())
                  : c.testedAt,
              approvedAt:
                status === "approved" || status === "live"
                  ? new Date().toISOString()
                  : c.approvedAt,
            }
          : c,
      ),
    })),

  deleteCampaign: (id) =>
    set((state: any) => ({
      campaigns: state.campaigns.filter((c: Campaign) => c.id !== id),
    })),

  dispatchCampaign: (campaignId, channel) => {
    const state = get();
    const campaign = state.campaigns.find((c: Campaign) => c.id === campaignId);
    if (!campaign) return { ok: false, message: "Campaña no encontrada" };
    if (campaign.status !== "approved" && campaign.status !== "live") {
      return {
        ok: false,
        message: "La campaña debe estar aprobada (go final) antes del envío",
      };
    }
    const recipients = estimateAudienceSize(
      campaign,
      state.doctors,
      state.pharmacyStaff,
    );
    if (!recipients)
      return { ok: false, message: "La audiencia filtrada está vacía" };
    const cost = recipients * state.credits.costPerVisit;
    if (state.credits.balance < cost) {
      return {
        ok: false,
        message: `Saldo insuficiente. Necesita ${cost} créditos`,
      };
    }

    const job = {
      id: uid("disp"),
      campaignId,
      channel,
      recipientCount: recipients,
      sentAt: new Date().toISOString(),
      costCredits: cost,
      status: "sent" as const,
    };

    set((state: any) => ({
      dispatches: [job, ...state.dispatches],
      credits: {
        ...state.credits,
        balance: state.credits.balance - cost,
        transactions: [
          {
            id: uid("tx"),
            type: "visit",
            amount: -cost,
            label: `Envío ${campaign.name} (${recipients} visitas · ${channel})`,
            at: new Date().toISOString().slice(0, 10),
          },
          ...state.credits.transactions,
        ],
      },
      campaigns: state.campaigns.map((c: Campaign) =>
        c.id === campaignId ? { ...c, status: "live" as const } : c,
      ),
      analytics: {
        ...state.analytics,
        sent: state.analytics.sent + recipients,
      },
    }));

    return {
      ok: true,
      message: `Enviado a ${recipients} destinatarios por ${channel}. Costo: ${cost} créditos.`,
    };
  },
});
