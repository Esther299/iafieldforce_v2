import type { FormEvent } from "react";
import { useState } from "react";
import { Input, Label, Modal, ModalActions, Textarea } from "@/shared/ui";
import type { Trainer } from "@/features/academy/types";

const EMPTY_FORM = {
  name: "",
  role: "",
  description: "",
  region: "",
  videos: "",
  origin: "",
  accent: "",
  modismos: "",
  personality: "",
  education: "",
};

/** Convierte una lista separada por comas en un array sin espacios sobrantes. */
function toList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function CreateTrainerModal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (trainer: Omit<Trainer, "id">) => void;
}) {
  const [form, setForm] = useState(EMPTY_FORM);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreate({
      name: form.name,
      role: form.role,
      description: form.description,
      region: form.region,
      videos: toList(form.videos),
      traits: {
        origin: form.origin,
        accent: form.accent,
        modismos: form.modismos,
      },
      personality: toList(form.personality),
      education: toList(form.education),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nuevo Formador">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Nombre completo</Label>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ej. Laura Gómez"
            required
          />
        </div>
        <div>
          <Label>Rol</Label>
          <Input
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            placeholder="Ej. Formadora para visita a médicos Cd Mx"
          />
        </div>
        <div>
          <Label>Descripción</Label>
          <Textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Breve descripción de su estilo y enfoque"
          />
        </div>
        <div>
          <Label>Región</Label>
          <Input
            value={form.region}
            onChange={(e) => setForm({ ...form, region: e.target.value })}
            placeholder="Ej. CDMX"
          />
        </div>
        <div>
          <Label>Videos (separados por coma)</Label>
          <Input
            value={form.videos}
            onChange={(e) => setForm({ ...form, videos: e.target.value })}
            placeholder="Video 1, Video 2"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label>Origen</Label>
            <Input
              value={form.origin}
              onChange={(e) => setForm({ ...form, origin: e.target.value })}
              placeholder="Ej. CDMX"
            />
          </div>
          <div>
            <Label>Acento</Label>
            <Input
              value={form.accent}
              onChange={(e) => setForm({ ...form, accent: e.target.value })}
              placeholder="Ej. Neutro"
            />
          </div>
        </div>
        <div>
          <Label>Modismos</Label>
          <Input
            value={form.modismos}
            onChange={(e) => setForm({ ...form, modismos: e.target.value })}
            placeholder="Expresiones coloquiales"
          />
        </div>
        <div>
          <Label>Rasgos de personalidad (separados por coma)</Label>
          <Input
            value={form.personality}
            onChange={(e) => setForm({ ...form, personality: e.target.value })}
            placeholder="Empática, Clara, Persuasiva"
          />
        </div>
        <div>
          <Label>Educación (separados por coma)</Label>
          <Input
            value={form.education}
            onChange={(e) => setForm({ ...form, education: e.target.value })}
            placeholder="Médico, Maestría en Comunicación"
          />
        </div>
        <ModalActions onCancel={onClose} submitLabel="Crear Formador" />
      </form>
    </Modal>
  );
}
