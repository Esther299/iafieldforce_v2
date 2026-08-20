import { Plus, Users } from "lucide-react";
import { TrainerCard } from "../../components/pages/academy";
import { Badge, Button, SectionLabel } from "../../components/ui";
import type { Trainer } from "../../types/academia";

/** Pantalla del Gerente de Entrenamiento: formadores. */
export function TrainersView({
  trainers,
  onCreateTrainer,
}: {
  trainers: Trainer[];
  onCreateTrainer: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionLabel icon={<Users size={18} />}>Formadores</SectionLabel>
        <Badge tone="brand">{trainers.length} formadores</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
      <Button onClick={onCreateTrainer}>
        <Plus size={18} className="mr-2" />
        Crear Nuevo Formador
      </Button>
    </div>
  );
}
