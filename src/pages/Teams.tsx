import { useState } from "react";
import { PageContainer, PageHeader, TabBar, TabPill } from "../components/ui";
import { RegionsView } from "./team/RegionsView";
import { RepsView } from "./team/RepsView";
import { TeamOverviewView } from "./team/TeamOverviewView";

type TeamTab = "regiones" | "reps" | "equipo";

const TABS: { id: TeamTab; label: string; subtitle: string }[] = [
  {
    id: "regiones",
    label: "Estructura Regional",
    subtitle: "Aquí de crean y se dan estructura a las regiones",
  },
  {
    id: "reps",
    label: "Creación de Reps",
    subtitle:
      "Aquí de crean los representantes virtuales y se les asigna a las regiones",
  },
  {
    id: "equipo",
    label: "Equipo",
    subtitle: "Visualización general de representantes agrupados por región",
  },
];

export function Teams() {
  const [activeTab, setActiveTab] = useState<TeamTab>("regiones");

  return (
    <PageContainer>
      <PageHeader
        title="Creación del Equipo"
        subtitle={TABS.find((tab) => tab.id === activeTab)?.subtitle}
      />

      <TabBar>
        {TABS.map((tab) => (
          <TabPill
            key={tab.id}
            size="lg"
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabPill>
        ))}
      </TabBar>

      <div className="pt-2">
        {activeTab === "regiones" && <RegionsView />}
        {activeTab === "reps" && <RepsView />}
        {activeTab === "equipo" && <TeamOverviewView />}
      </div>
    </PageContainer>
  );
}
