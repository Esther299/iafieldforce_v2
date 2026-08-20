import { Badge, Calendar, Download, Eye, FileText, Link, Plus, Upload, User, Video } from "lucide-react";
import type { AcademyDocument, Course, Trainer } from "../../types";
import { Button, Card } from "../ui";


export function DocumentList({
  documents,
  title,
  onUpload,
  onAdd,
}: {
  documents: AcademyDocument[];
  title?: string;
  onUpload?: () => void;
  onAdd?: () => void;
}) {
  return (
    <div className="space-y-3">
      {title && (
        <div className="flex items-center gap-2 text-brand-700">
          <FileText size={16} />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {title}
          </h4>
        </div>
      )}
      <div className="space-y-2">
        {documents.length === 0 ? (
          <p className="text-sm text-ink-500">No hay documentos cargados.</p>
        ) : (
          documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-xl border border-ink-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                {doc.type === "link" ? (
                  <Link size={18} className="text-brand-500" />
                ) : (
                  <FileText size={18} className="text-ink-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-ink-900">
                    {doc.title}
                  </p>
                  <p className="text-xs text-ink-400">
                    {doc.type === "link"
                      ? "Enlace externo"
                      : `Subido el ${doc.uploadedAt}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge >{doc.type.toUpperCase()}</Badge>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Eye size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download size={16} />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      {(onUpload || onAdd) && (
        <div className="mt-3 flex gap-2">
          {onUpload && (
            <Button variant="outline" size="sm" onClick={onUpload}>
              <Upload size={14} className="mr-1" />
              Cargar Documento
            </Button>
          )}
          {onAdd && (
            <Button variant="outline" size="sm" onClick={onAdd}>
              <Plus size={14} className="mr-1" />
              Añadir
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

// Componente para tarjeta de formador
export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <Card className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4 hover:shadow-lg transition-all">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-black text-brand-700">
          {trainer.name.slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black text-ink-900">{trainer.name}</p>
          <p className="text-xs text-ink-500">{trainer.role}</p>
          <p className="mt-1 text-xs text-ink-600">{trainer.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge >{trainer.region}</Badge>
            {trainer.videos.map((v) => (
              <Badge key={v} >
                <Video size={12} className="mr-1 inline" />
                {v}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="font-semibold text-ink-500">Origen</p>
          <p className="text-ink-700">{trainer.traits.origin}</p>
        </div>
        <div>
          <p className="font-semibold text-ink-500">Acento</p>
          <p className="text-ink-700">{trainer.traits.accent}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold text-ink-500">Modismos</p>
          <p className="text-ink-700">{trainer.traits.modismos}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold text-ink-500">Rasgos de personalidad</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {trainer.personality.map((p) => (
              <Badge key={p} >
                {p}
              </Badge>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className="font-semibold text-ink-500">Educación</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {trainer.education.map((e) => (
              <Badge key={e} >
                {e}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

// Componente para tarjeta de curso
export function CourseCard({
  course,
  onUpload,
}: {
  course: Course;
  onUpload: () => void;
}) {
  return (
    <Card className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-black text-ink-900">{course.title}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <span>
              <Calendar size={12} className="mr-1 inline" />
              {course.date}
            </span>
            <span>
              <User size={12} className="mr-1 inline" />
              {course.instructor}
            </span>
          </div>
        </div>
        <Badge >Curso</Badge>
      </div>
      <div className="mt-3">
        <p className="text-sm font-semibold text-ink-700">Objetivo:</p>
        <p className="text-sm text-ink-600">{course.objective}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold text-ink-700">Instrucciones:</p>
        <p className="text-sm text-ink-600">{course.instructions}</p>
      </div>
      <div className="mt-3 rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-brand-700">
            <Upload size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Materiales del curso
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={onUpload}>
            <Plus size={14} />
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {course.documents.length === 0 ? (
            <p className="text-xs text-ink-400">No hay materiales cargados.</p>
          ) : (
            course.documents.map((doc, idx) => (
              <Badge key={idx} >
                {doc.name}
              </Badge>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}
