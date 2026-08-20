import type { FormEvent } from "react";
import { useState } from "react";
import { Input, Label, Modal, ModalActions } from "../../components/ui";

export function CreateDiagnosisModal({
  isOpen,
  onClose,
  onCreate,
  lineName,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (diagnosisName: string) => void;
  lineName: string;
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Crear nuevo diagnóstico para ${lineName}`}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Nombre del diagnóstico</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Rinitis Alérgica"
            required
          />
        </div>
        <ModalActions onCancel={onClose} submitLabel="Crear Diagnóstico" />
      </form>
    </Modal>
  );
}
