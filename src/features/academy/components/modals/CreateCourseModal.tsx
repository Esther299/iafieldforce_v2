import type { FormEvent } from "react";
import { useState } from "react";
import { Input, Label, Modal, ModalActions, Textarea } from "@/shared/ui";
import type { Course } from "@/features/academy/types";

const EMPTY_FORM = {
  title: "",
  date: "",
  instructor: "",
  objective: "",
  instructions: "",
};

export function CreateCourseModal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (course: Omit<Course, "id">) => void;
}) {
  const [form, setForm] = useState(EMPTY_FORM);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreate({ ...form, documents: [] });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Nuevo Curso">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Título del curso</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Ej. Manejo de Objecciones"
            required
          />
        </div>
        <div>
          <Label>Fecha</Label>
          <Input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div>
          <Label>Instructor</Label>
          <Input
            value={form.instructor}
            onChange={(e) => setForm({ ...form, instructor: e.target.value })}
            placeholder="Ej. Pedro Pérez"
          />
        </div>
        <div>
          <Label>Objetivo</Label>
          <Textarea
            value={form.objective}
            onChange={(e) => setForm({ ...form, objective: e.target.value })}
            placeholder="Describir el objetivo del curso"
          />
        </div>
        <div>
          <Label>Instrucciones</Label>
          <Textarea
            value={form.instructions}
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
            placeholder="Instrucciones para los participantes"
          />
        </div>
        <ModalActions onCancel={onClose} submitLabel="Crear Curso" />
      </form>
    </Modal>
  );
}
