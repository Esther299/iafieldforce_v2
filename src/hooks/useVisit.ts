import { useState, useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import type { Channel } from "../types";

export function useVisit() {
  const store = useAppStore();
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [showEndConfirm, setShowEndConfirm] = useState(false);

  // Configuración de la visita
  const liveCampaigns = store.campaigns.filter((c) =>
    ["approved", "live", "testing"].includes(c.status),
  );
  const [campaignId, setCampaignId] = useState(
    liveCampaigns[0]?.id ?? store.campaigns[0]?.id,
  );
  const [doctorId, setDoctorId] = useState(store.doctors[0]?.id);
  const [pharmacyId, setPharmacyId] = useState(store.pharmacyStaff[0]?.id);
  const [channel, setChannel] = useState<Channel>("whatsapp");
  const [mode, setMode] = useState<"doctor" | "pharmacy">("doctor");
  const [selectedAvatarId, setSelectedAvatarId] = useState(
    store.avatars[0]?.id,
  );

  const campaign =
    store.campaigns.find((c) => c.id === campaignId) ?? store.campaigns[0];
  const avatar =
    store.avatars.find(
      (a) => a.id === (store.activeVisit?.avatarId ?? selectedAvatarId),
    ) ?? store.avatars[0];
  const doctor = store.doctors.find(
    (d) => d.id === (store.activeVisit?.targetId ?? doctorId),
  );
  const pharmacy = store.pharmacyStaff.find(
    (p) => p.id === (store.activeVisit?.targetId ?? pharmacyId),
  );
  const realRep = doctor
    ? store.realReps.find((r) => r.id === doctor.realRepId)
    : null;

  const title = useMemo(() => {
    if (store.activeVisit?.targetType === "pharmacy_staff") {
      return `${pharmacy?.name ?? ""} · ${pharmacy?.pharmacy ?? ""}`;
    }
    return doctor
      ? `${doctor.title} ${doctor.name} · ${doctor.specialty}`
      : "Visita";
  }, [store.activeVisit, doctor, pharmacy]);

  const start = () => {
    if (!campaign) return;
    if (mode === "pharmacy" || campaign.audience === "pharmacy_staff") {
      store.startPharmacyVisit(campaign.id, pharmacyId, selectedAvatarId);
    } else {
      store.startDoctorVisit(campaign.id, doctorId, channel, selectedAvatarId);
    }
    setIsConfigModalOpen(false);
  };

  const endVisit = () => {
    store.endVisit();
    setShowEndConfirm(false);
  };

  return {
    // Store
    activeVisit: store.activeVisit,
    campaigns: store.campaigns,
    avatars: store.avatars,
    doctors: store.doctors,
    pharmacyStaff: store.pharmacyStaff,
    realReps: store.realReps,
    // UI state
    isConfigModalOpen,
    showEndConfirm,
    campaignId,
    doctorId,
    pharmacyId,
    channel,
    mode,
    selectedAvatarId,
    // Derived
    campaign,
    avatar,
    doctor,
    pharmacy,
    realRep,
    title,
    liveCampaigns,
    // Setters
    setIsConfigModalOpen,
    setShowEndConfirm,
    setCampaignId,
    setDoctorId,
    setPharmacyId,
    setChannel,
    setMode,
    setSelectedAvatarId,
    // Actions
    start,
    endVisit,
    // Store actions (passthrough)
    sendVisitMessage: store.sendVisitMessage,
    clickCta: store.clickCta,
  };
}
