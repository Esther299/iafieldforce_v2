import { DocumentList } from "../";
import type { AcademyDocument } from "../../../../types/academia";

/**
 * Pantalla genérica de documentos: descripción de compañía, políticas,
 * preguntas frecuentes, listas de precios e identidad de marca.
 */
export function DocumentsView({
  documents,
  title,
  onUpload,
}: {
  documents: AcademyDocument[];
  title?: string;
  onUpload: () => void;
}) {
  return (
    <div className="space-y-4">
      <DocumentList documents={documents} title={title} onUpload={onUpload} />
    </div>
  );
}
