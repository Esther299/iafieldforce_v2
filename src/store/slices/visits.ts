import type { VisitSession, Channel, CtaType } from "../../types";
import { generateGovernedReply, startVisitOpening } from "../../lib/governance";
import { uid, msg } from "../utils";

export interface VisitsSlice {
  activeVisit: VisitSession | null;
  startDoctorVisit: (
    campaignId: string,
    doctorId: string,
    channel?: Channel,
    avatarId?: string,
  ) => void;
  startPharmacyVisit: (
    campaignId: string,
    pharmacyId: string,
    avatarId?: string,
  ) => void;
  sendVisitMessage: (text: string) => void;
  clickCta: (type: CtaType, productId?: string) => void;
  endVisit: () => void;
}

export const createVisitsSlice = (set: any, get: any): VisitsSlice => ({
  activeVisit: null,

  startDoctorVisit: (campaignId, doctorId, channel = "whatsapp", avatarId) => {
    const state = get();
    const campaign = state.campaigns.find((c: any) => c.id === campaignId);
    const doctor = state.doctors.find((d: any) => d.id === doctorId);
    if (!campaign || !doctor) return;
    const avatar = avatarId
      ? (state.avatars.find((a: any) => a.id === avatarId) ?? state.avatars[0])
      : (state.avatars.find((a: any) => a.id === campaign.avatarId) ??
        state.avatars[0]);

    const realRep =
      state.realReps.find((r: any) => r.id === doctor.realRepId) ?? null;

    const session: VisitSession = {
      id: uid("visit"),
      campaignId,
      targetType: doctor.covered ? "covered_doctors" : "uncovered_doctors",
      targetId: doctor.id,
      avatarId: avatar.id,
      channel,
      opened: true,
      startedAt: new Date().toISOString(),
      messages: [],
      ctaClicks: [],
      materialsRequested: [],
      contextNotes:
        doctor.birthday === "08-12"
          ? ["Cumpleaños hoy"]
          : ["Tráfico moderado en sector"],
    };

    const opening = startVisitOpening({
      campaign,
      avatar,
      products: state.products.filter((p: any) =>
        campaign.productIds.includes(p.id),
      ),
      documents: state.documents,
      doctor,
      realRep,
      history: [],
      audience: session.targetType,
      contextNotes: session.contextNotes,
    });

    session.messages = [
      msg("avatar", opening.content, {
        sources: opening.sources,
        ctaShown: opening.ctaShown,
      }),
    ];

    set((state: any) => ({
      activeVisit: session,
      analytics: {
        ...state.analytics,
        opened: state.analytics.opened + 1,
      },
    }));
  },

  startPharmacyVisit: (campaignId, pharmacyId, avatarId) => {
    const state = get();
    const campaign = state.campaigns.find((c: any) => c.id === campaignId);
    const pharmacy = state.pharmacyStaff.find((p: any) => p.id === pharmacyId);
    if (!campaign || !pharmacy) return;
    const avatar = avatarId
      ? (state.avatars.find((a: any) => a.id === avatarId) ?? state.avatars[0])
      : (state.avatars.find((a: any) => a.id === campaign.avatarId) ??
        state.avatars[0]);
    const session: VisitSession = {
      id: uid("visit"),
      campaignId,
      targetType: "pharmacy_staff",
      targetId: pharmacy.id,
      avatarId: avatar.id,
      channel: "whatsapp",
      opened: true,
      startedAt: new Date().toISOString(),
      messages: [],
      ctaClicks: [],
      materialsRequested: [],
      contextNotes: [],
    };

    const opening = startVisitOpening({
      campaign,
      avatar,
      products: state.products.filter((p: any) =>
        campaign.productIds.includes(p.id),
      ),
      documents: state.documents,
      pharmacy,
      history: [],
      audience: "pharmacy_staff",
    });

    session.messages = [
      msg("avatar", opening.content, { sources: opening.sources }),
    ];
    set({ activeVisit: session });
  },

  sendVisitMessage: (text) => {
    const state = get();
    const session = state.activeVisit;
    if (!session || !text.trim()) return;
    const campaign = state.campaigns.find(
      (c: any) => c.id === session.campaignId,
    )!;
    const avatar = state.avatars.find((a: any) => a.id === session.avatarId)!;
    const doctor =
      state.doctors.find((d: any) => d.id === session.targetId) ?? null;
    const pharmacy =
      state.pharmacyStaff.find((p: any) => p.id === session.targetId) ?? null;
    const realRep = doctor
      ? (state.realReps.find((r: any) => r.id === doctor.realRepId) ?? null)
      : null;

    const userMessage = msg("user", text.trim());
    const history = [...session.messages, userMessage];
    const reply = generateGovernedReply(text, {
      campaign,
      avatar,
      products: state.products.filter((p: any) =>
        campaign.productIds.includes(p.id),
      ),
      documents: state.documents,
      doctor,
      pharmacy,
      realRep,
      history,
      audience: session.targetType,
      contextNotes: session.contextNotes,
    });

    set((state: any) => ({
      activeVisit: {
        ...session,
        messages: [
          ...history,
          msg("avatar", reply.content, {
            sources: reply.sources,
            escalated: reply.escalated,
            escalationDept: reply.escalationDept,
            ctaShown: reply.ctaShown,
          }),
        ],
      },
      analytics: {
        ...state.analytics,
        engaged: state.analytics.engaged + 1,
      },
    }));
  },

  clickCta: (type, productId) => {
    const state = get();
    const session = state.activeVisit ?? state.testSession;
    if (!session) return;
    const key = state.activeVisit ? "activeVisit" : "testSession";
    const product = state.products.find((p: any) => p.id === productId);
    const label =
      type === "sample_request"
        ? `Solicitud de muestra${product ? ` de ${product.name}` : ""} registrada. Se despachará con mensaje personalizado.`
        : type === "event_rsvp"
          ? "Asistencia al evento confirmada. ¡Gracias!"
          : type === "certificate"
            ? "Certificado generado. Puede descargarlo desde Academia."
            : "Solicitud registrada.";

    const updated: VisitSession = {
      ...session,
      ctaClicks: [
        ...session.ctaClicks,
        { type, at: new Date().toISOString(), productId },
      ],
      materialsRequested:
        type === "sample_request" && productId
          ? [...session.materialsRequested, productId]
          : session.materialsRequested,
      messages: [...session.messages, msg("system", label)],
    };

    set((state: any) => ({
      [key]: updated,
      analytics: {
        ...state.analytics,
        ctaClicks: state.analytics.ctaClicks + 1,
        samplesRequested:
          state.analytics.samplesRequested +
          (type === "sample_request" ? 1 : 0),
      },
    }));
  },

  endVisit: () => set({ activeVisit: null }),
});
