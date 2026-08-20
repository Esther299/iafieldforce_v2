import type {
  AcademyArea,
  AcademyAreaId,
  AcademySubsection,
} from "../../../types/academia";
import { TabBar, TabPill } from "../../ui";

/** Barra de navegación de áreas de negocio de la Academia. */
export function AreaNav({
  areas,
  activeAreaId,
  onSelect,
}: {
  areas: AcademyArea[];
  activeAreaId: AcademyAreaId;
  onSelect: (areaId: AcademyAreaId) => void;
}) {
  return (
    <TabBar>
      {areas.map((area) => (
        <TabPill
          key={area.id}
          active={activeAreaId === area.id}
          onClick={() => onSelect(area.id)}
          icon={<area.icon size={16} />}
        >
          {area.label}
        </TabPill>
      ))}
    </TabBar>
  );
}

/** Submenú de subsecciones del área activa. */
export function SubsectionTabs({
  subsections,
  activeSubsectionId,
  onSelect,
}: {
  subsections: AcademySubsection[];
  activeSubsectionId: string | null;
  onSelect: (subsectionId: string) => void;
}) {
  if (subsections.length === 0) return null;

  return (
    <TabBar bordered>
      {subsections.map((subsection) => (
        <TabPill
          key={subsection.id}
          size="sm"
          active={activeSubsectionId === subsection.id}
          onClick={() => onSelect(subsection.id)}
          icon={subsection.icon ? <subsection.icon size={14} /> : undefined}
        >
          {subsection.label}
        </TabPill>
      ))}
    </TabBar>
  );
}
