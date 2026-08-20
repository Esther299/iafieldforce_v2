import type { FormEvent } from "react";
import { useState } from "react";
import { Input, Label, Modal, ModalActions } from "../../../ui";

export function CreateAreaModal({
  isOpen,
  onClose,
  onCreate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}) {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim());
    setName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear otra área">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Nombre del área</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Área de Operaciones"
            required
          />
        </div>
        <ModalActions onCancel={onClose} submitLabel="Crear Área" />
      </form>
    </Modal>
  );
}
