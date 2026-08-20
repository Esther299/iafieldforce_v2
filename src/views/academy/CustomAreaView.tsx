import { MoreHorizontal, Plus } from "lucide-react";
import { Button, Card, SectionLabel } from "../../components/ui";
import type { CustomArea } from "../../types/academia";

/** Pantalla de áreas personalizadas creadas por la compañía. */
export function CustomAreaView({
  customAreas,
  onCreateArea,
}: {
  customAreas: CustomArea[];
  onCreateArea: () => void;
}) {
  return (
    <div className="space-y-4">
      <SectionLabel icon={<MoreHorizontal size={18} />}>
        Área personalizada
      </SectionLabel>
      <p className="text-sm text-ink-600">
        Aquí deberías poder darle a la compañía la flexibilidad y libertad de
        crear cualquier otra área sin que tenga que llamarnos.
      </p>
      <Button onClick={onCreateArea}>
        <Plus size={18} className="mr-2" />
        Crear otra área
      </Button>
      {customAreas.length > 0 && (
        <div className="mt-4 grid gap-2">
          {customAreas.map((area) => (
            <Card key={area.id} className="p-3">
              <p className="font-medium text-navy">{area.name}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
