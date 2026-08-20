import { useState, useMemo } from "react";
import { useAppStore } from "@/store";

export function useCrm() {
  const store = useAppStore();
  const [activeDoctorId, setActiveDoctorId] = useState<string | null>(null);
  const [activePharmacyId, setActivePharmacyId] = useState<string | null>(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [coverageFilter, setCoverageFilter] = useState<
    "all" | "covered" | "uncovered"
  >("all");

  const filteredDoctors = useMemo(() => {
    return store.doctors.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.zone.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCoverage =
        coverageFilter === "all" ||
        (coverageFilter === "covered" && doc.covered) ||
        (coverageFilter === "uncovered" && !doc.covered);
      return matchesSearch && matchesCoverage;
    });
  }, [store.doctors, searchTerm, coverageFilter]);

  // Obtener el rep real de un doctor
  const getRealRep = (doctorId: string) => {
    const doctor = store.doctors.find((d) => d.id === doctorId);
    if (!doctor?.realRepId) return null;
    return store.realReps.find((r) => r.id === doctor.realRepId) ?? null;
  };

  return {
    // Store data
    doctors: store.doctors,
    pharmacyStaff: store.pharmacyStaff,
    realReps: store.realReps,
    campaigns: store.campaigns,
    // UI state
    activeDoctorId,
    activePharmacyId,
    selectedCampaignId,
    searchTerm,
    coverageFilter,
    filteredDoctors,
    // Setters
    setActiveDoctorId,
    setActivePharmacyId,
    setSelectedCampaignId,
    setSearchTerm,
    setCoverageFilter,
    // Helpers
    getRealRep,
  };
}
