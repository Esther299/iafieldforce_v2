import { Download, Eye, FileText, Link, Plus, Upload } from "lucide-react";
import type { AcademyDocument } from "@/features/academy/types";
import { Badge, Button, SectionLabel } from "@/shared/ui";

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
        <SectionLabel icon={<FileText size={16} />}>{title}</SectionLabel>
      )}
      <div className="space-y-2">
        {documents.length === 0 ? (
          <p className="text-sm text-ink-500">No hay documentos cargados.</p>
        ) : (
          documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-2xl border border-ink-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                {doc.type === "link" ? (
                  <Link size={18} className="text-brand-500" />
                ) : (
                  <FileText size={18} className="text-ink-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-navy">{doc.title}</p>
                  <p className="text-xs text-ink-400">
                    {doc.type === "link"
                      ? "Enlace externo"
                      : `Subido el ${doc.uploadedAt}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge>{doc.type.toUpperCase()}</Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  aria-label={`Ver ${doc.title}`}
                >
                  <Eye size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  aria-label={`Descargar ${doc.title}`}
                >
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
