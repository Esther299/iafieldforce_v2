import type { VisitSession } from "../types";

export const seedVisit: VisitSession = {
  id: "visit-demo-abad",
  campaignId: "camp-cf-q3",
  targetType: "covered_doctors",
  targetId: "doc-abad",
  avatarId: "av-sofia-cdmx",
  channel: "whatsapp",
  opened: true,
  startedAt: new Date().toISOString(),
  messages: [],
  ctaClicks: [],
  materialsRequested: [],
  contextNotes: ["Tráfico moderado CDMX Sur", "Cumpleaños hoy"],
};
