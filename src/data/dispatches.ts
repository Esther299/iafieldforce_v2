import type { DispatchJob } from "../types";

export const dispatches: DispatchJob[] = [
  {
    id: "disp-1",
    campaignId: "camp-cf-q3",
    channel: "whatsapp",
    recipientCount: 250,
    sentAt: "2026-08-09T10:00:00",
    costCredits: 625,
    status: "sent",
  },
  {
    id: "disp-2",
    campaignId: "camp-pharmacy-edu",
    channel: "whatsapp",
    recipientCount: 14,
    sentAt: "2026-08-10T09:30:00",
    costCredits: 35,
    status: "sent",
  },
];
