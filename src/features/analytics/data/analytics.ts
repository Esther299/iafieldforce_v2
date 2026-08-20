import type { AnalyticsSnapshot } from "@/shared/types";

export const analytics: AnalyticsSnapshot = {
  sent: 1264,
  opened: 812,
  engaged: 498,
  ctaClicks: 186,
  samplesRequested: 142,
  reachRate: 64.2,
  engagementRate: 39.4,
  byChannel: [
    { channel: "whatsapp", sent: 820, opened: 610 },
    { channel: "email", sent: 340, opened: 160 },
    { channel: "sms", sent: 104, opened: 42 },
  ],
  bySpecialty: [
    { specialty: "Cardiología", opened: 290 },
    { specialty: "Pediatría", opened: 240 },
    { specialty: "Medicina Interna", opened: 150 },
    { specialty: "Gastroenterología", opened: 90 },
    { specialty: "Farmacia", opened: 42 },
  ],
  daily: [
    { date: "08-05", opens: 42, ctas: 8 },
    { date: "08-06", opens: 55, ctas: 12 },
    { date: "08-07", opens: 61, ctas: 15 },
    { date: "08-08", opens: 70, ctas: 18 },
    { date: "08-09", opens: 88, ctas: 24 },
    { date: "08-10", opens: 95, ctas: 28 },
    { date: "08-11", opens: 102, ctas: 31 },
    { date: "08-12", opens: 74, ctas: 20 },
  ],
};
