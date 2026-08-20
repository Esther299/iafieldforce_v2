import type { VisitSession } from "../../types";
import { generateGovernedReply, startVisitOpening } from "../../lib/governance";
import { filterDoctors } from "../../lib/audience";
import { uid, msg } from "../utils";

export interface TestSlice {
  testSession: VisitSession | null;
  startTestSession: (campaignId: string) => void;
  sendTestMessage: (text: string) => void;
}

export const createTestSlice = (set: any, get: any): TestSlice => ({
  testSession: null,

  startTestSession: (campaignId) => {
    const state = get();
    const campaign = state.campaigns.find((c: any) => c.id === campaignId);
    if (!campaign) return;
    const avatar =
      state.avatars.find((a: any) => a.id === campaign.avatarId) ??
      state.avatars[0];
    const audienceDocs = filterDoctors(state.doctors, campaign);
    const doctor = audienceDocs[0] ?? state.doctors[0];
    const realRep =
      state.realReps.find((r: any) => r.id === doctor.realRepId) ?? null;

    const session: VisitSession = {
      id: uid("test"),
      campaignId,
      targetType: campaign.audience,
      targetId: doctor.id,
      avatarId: avatar.id,
      channel: campaign.channels[0] ?? "whatsapp",
      opened: true,
      startedAt: new Date().toISOString(),
      messages: [],
      ctaClicks: [],
      materialsRequested: [],
      contextNotes: ["Modo prueba de campaña"],
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
      audience: campaign.audience,
      contextNotes: session.contextNotes,
      isTest: true,
    });

    session.messages = [
      msg(
        "system",
        "Modo prueba — valide script, objeciones y límites de gobernanza",
      ),
      msg("avatar", opening.content, {
        sources: opening.sources,
        escalated: opening.escalated,
        escalationDept: opening.escalationDept,
        ctaShown: opening.ctaShown,
      }),
    ];

    set((state: any) => ({
      testSession: session,
      campaigns: state.campaigns.map((c: any) =>
        c.id === campaignId
          ? {
              ...c,
              status: c.status === "draft" ? "testing" : c.status,
              testedAt: new Date().toISOString(),
            }
          : c,
      ),
    }));
  },

  sendTestMessage: (text) => {
    const state = get();
    const session = state.testSession;
    if (!session || !text.trim()) return;
    const campaign = state.campaigns.find(
      (c: any) => c.id === session.campaignId,
    )!;
    const avatar = state.avatars.find((a: any) => a.id === session.avatarId)!;
    const doctor =
      state.doctors.find((d: any) => d.id === session.targetId) ?? null;
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
      realRep,
      history,
      audience: campaign.audience,
      contextNotes: session.contextNotes,
      isTest: true,
    });

    set({
      testSession: {
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
    });
  },
});
