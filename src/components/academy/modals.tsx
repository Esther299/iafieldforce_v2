import { useState } from "react";
import { Button, Input, Label, Modal, Textarea } from "../ui";
import { Upload } from "lucide-react";
import type { AcademyDocument, Course, Trainer } from "../../types";

interface CreateTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (trainer: Omit<Trainer, "id">) => void;
}

export function CreateTrainerModal({
  isOpen,
  onClose,
  onCreate,
}: CreateTrainerModalProps) {
  const [form, setForm] = useState({
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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      name: form.name,
      role: form.role,
      description: form.description,
      region: form.region,
      videos: form.videos.split(",").map((s) => s.trim()),
      traits: {
        origin: form.origin,
        accent: form.accent,
        modismos: form.modismos,
      },
      personality: form.personality.split(",").map((s) => s.trim()),
      education: form.education.split(",").map((s) => s.trim()),
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
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Crear Formador</Button>
        </div>
      </form>
    </Modal>
  );
}

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (course: Omit<Course, "id">) => void;
}

export function CreateCourseModal({
  isOpen,
  onClose,
  onCreate,
}: CreateCourseModalProps) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    instructor: "",
    objective: "",
    instructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      title: form.title,
      date: form.date,
      instructor: form.instructor,
      objective: form.objective,
      instructions: form.instructions,
      documents: [],
    });
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
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Crear Curso</Button>
        </div>
      </form>
    </Modal>
  );
}

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (doc: Omit<AcademyDocument, "id">) => void;
  title?: string;
}

export function UploadDocumentModal({
  isOpen,
  onClose,
  onUpload,
  title = "Cargar Documento",
}: UploadDocumentModalProps) {
  const [form, setForm] = useState({
    title: "",
    type: "pdf" as AcademyDocument["type"],
    url: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <select
            value={form.type}
            onChange={(e) =>
              setForm({
                ...form,
                type: e.target.value as AcademyDocument["type"],
              })
            }
            className="h-10 w-full rounded-xl border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="pdf">PDF</option>
            <option value="doc">Documento Word</option>
            <option value="ppt">Presentación</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="link">Enlace</option>
          </select>
        </div>
        {form.type === "link" && (
          <div>
            <Label>URL</Label>
            <Input
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://ejemplo.com"
            />
          </div>
        )}
        {form.type !== "link" && (
          <div className="rounded-xl border-2 border-dashed border-ink-200 p-6 text-center">
            <Upload size={24} className="mx-auto text-ink-400" />
            <p className="mt-2 text-sm text-ink-600">
              Arrastra un archivo o haz clic para seleccionar
            </p>
            <input type="file" className="hidden" />
          </div>
        )}
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Subir</Button>
        </div>
      </form>
    </Modal>
  );
}

interface CreateAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export function CreateAreaModal({ isOpen, onClose, onCreate }: CreateAreaModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim());
      onClose();
    }
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
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Crear Área</Button>
        </div>
      </form>
    </Modal>
  );
}

interface CreateDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (diagnosisName: string) => void;
  lineName: string;
}

export function CreateDiagnosisModal({
  isOpen,
  onClose,
  onCreate,
  lineName,
}: CreateDiagnosisModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim());
      onClose();
    }
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
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Crear Diagnóstico</Button>
        </div>
      </form>
    </Modal>
  );
}
