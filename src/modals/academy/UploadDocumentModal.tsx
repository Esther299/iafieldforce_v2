import type { FormEvent } from "react";
import { useState } from "react";
import { Upload } from "lucide-react";
import {
  Input,
  Label,
  Modal,
  ModalActions,
  Select,
} from "../../components/ui";
import type {
  AcademyDocument,
  AcademyDocumentType,
} from "../../types/academia";

const DOCUMENT_TYPES: { value: AcademyDocumentType; label: string }[] = [
  { value: "pdf", label: "PDF" },
  { value: "doc", label: "Documento Word" },
  { value: "ppt", label: "Presentación" },
  { value: "video", label: "Video" },
  { value: "audio", label: "Audio" },
  { value: "link", label: "Enlace" },
];

export function UploadDocumentModal({
  isOpen,
  onClose,
  onUpload,
  title = "Cargar Documento",
}: {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (doc: Omit<AcademyDocument, "id">) => void;
  title?: string;
}) {
  const [form, setForm] = useState<{
    title: string;
    type: AcademyDocumentType;
    url: string;
  }>({ title: "", type: "pdf", url: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onUpload({
      title: form.title,
      type: form.type,
      url: form.url || undefined,
      uploadedAt: new Date().toISOString().slice(0, 10),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Título del documento</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Ej. Manual de políticas.pdf"
            required
          />
        </div>
        <div>
          <Label>Tipo</Label>
          <Select
            value={form.type}
            onChange={(e) =>
              setForm({
                ...form,
                type: e.target.value as AcademyDocumentType,
              })
            }
          >
            {DOCUMENT_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
        {form.type === "link" ? (
          <div>
            <Label>URL</Label>
            <Input
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://ejemplo.com"
            />
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-ink-200 p-6 text-center">
            <Upload size={24} className="mx-auto text-ink-400" />
            <p className="mt-2 text-sm text-ink-600">
              Arrastra un archivo o haz clic para seleccionar
            </p>
            <input type="file" className="hidden" />
          </div>
        )}
        <ModalActions onCancel={onClose} submitLabel="Subir" />
      </form>
    </Modal>
  );
}
