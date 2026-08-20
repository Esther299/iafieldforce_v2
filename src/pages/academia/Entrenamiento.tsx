import { AlertCircle, Bell, BookOpen, Clock, Mail, Plus, Upload, Users } from "lucide-react";
import { CourseCard, DocumentList, TrainerCard } from "../../components/academy/components";
import { Badge, Button } from "../../components/ui";
import { useState } from "react";
import type { AcademyDocument, Course, MedicalLine, ProductMarca, Trainer } from "../../types";
import { cn } from "../../lib/cn";

export function TrainersContent({
  trainers,
  onCreateTrainer,
}: {
  trainers: Trainer[];
  onCreateTrainer: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-700">
          <Users size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">
            Formadores
          </span>
        </div>
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

export function CoursesContent({
  courses,
  onCreateCourse,
  onUploadDocument,
}: {
  courses: Course[];
  onCreateCourse: () => void;
  onUploadDocument: (courseId: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-700">
          <BookOpen size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">
            Cursos
          </span>
        </div>
        <Badge tone="neutral">{courses.length} cursos</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onUpload={() => onUploadDocument(course.id)}
          />
        ))}
      </div>
      <Button onClick={onCreateCourse}>
        <Plus size={18} className="mr-2" />
        Crear Nuevo Curso
      </Button>
    </div>
  );
}

export function DocumentsContent({
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

export function PoliciesContent({
  documents,
  onUpload,
}: {
  documents: AcademyDocument[];
  onUpload: () => void;
}) {
  return (
    <div className="space-y-4">
      <DocumentList
        documents={documents}
        title="Políticas"
        onUpload={onUpload}
      />
    </div>
  );
}

export function FaqContent({
  documents,
  onUpload,
}: {
  documents: AcademyDocument[];
  onUpload: () => void;
}) {
  return (
    <div className="space-y-4">
      <DocumentList
        documents={documents}
        title="Preguntas frecuentes"
        onUpload={onUpload}
      />
    </div>
  );
}

export function PromotionsContent({
  documents,
  onUpload,
}: {
  documents: AcademyDocument[];
  onUpload: () => void;
}) {
  const [showReminder, setShowReminder] = useState(false);

  const handleSendEmail = () => {
    setShowReminder(true);
    setTimeout(() => setShowReminder(false), 3000);
    // Simular envío de email
    alert(
      "📧 Email enviado al equipo de gobernanza con las promociones vigentes.",
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-700">
          <Bell size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">
            Promociones vigentes
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge tone="warn">
            <Clock size={12} className="mr-1 inline" />
            Recordatorio automático al final del mes
          </Badge>
          <Button variant="outline" size="sm" onClick={handleSendEmail}>
            <Mail size={14} className="mr-1" />
            Enviar email a gobernanza
          </Button>
        </div>
      </div>
      {showReminder && (
        <div className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800 border border-amber-200">
          <AlertCircle size={16} className="mr-2 inline" />
          Recordatorio: Al finalizar el mes, el sistema lanza un recordatorio al
          gerente comercial para cargar las promociones del próximo mes y envía
          un email a todo el equipo de gobernanza con las acciones requeridas.
        </div>
      )}
      <DocumentList documents={documents} onUpload={onUpload} />
    </div>
  );
}

export function ProductsContent({
  products,
  onAddProduct,
  onUploadDocument,
}: {
  products: ProductMarca[];
  onAddProduct: () => void;
  onUploadDocument: (productId: string, campaignId?: string) => void;
}) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    products.length > 0 ? products[0].id : null,
  );
  const [selectedTab, setSelectedTab] = useState<
    "campaigns" | "objections" | "faqs"
  >("campaigns");

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProductId(p.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              selectedProductId === p.id
                ? "bg-brand-600 text-white"
                : "bg-ink-100 text-ink-700 hover:bg-ink-200",
            )}
          >
            {p.name}
          </button>
        ))}
        <Button variant="outline" size="sm" onClick={onAddProduct}>
          <Plus size={14} className="mr-1" />
          Crear más productos
        </Button>
      </div>

      {selectedProduct && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-ink-200 pb-2">
            <button
              onClick={() => setSelectedTab("campaigns")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold",
                selectedTab === "campaigns"
                  ? "bg-brand-100 text-brand-800"
                  : "text-ink-600 hover:bg-ink-100",
              )}
            >
              Campañas anteriores
            </button>
            <button
              onClick={() => setSelectedTab("objections")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold",
                selectedTab === "objections"
                  ? "bg-brand-100 text-brand-800"
                  : "text-ink-600 hover:bg-ink-100",
              )}
            >
              Manejo de Objecciones
            </button>
            <button
              onClick={() => setSelectedTab("faqs")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold",
                selectedTab === "faqs"
                  ? "bg-brand-100 text-brand-800"
                  : "text-ink-600 hover:bg-ink-100",
              )}
            >
              Preguntas frecuentes
            </button>
          </div>

          {selectedTab === "campaigns" && (
            <div className="space-y-4">
              {selectedProduct.campaigns.map((camp) => (
                <div
                  key={camp.id}
                  className="rounded-xl border border-ink-200 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-ink-900">{camp.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        onUploadDocument(selectedProduct.id, camp.id)
                      }
                    >
                      <Upload size={14} className="mr-1" />
                      Cargar Documento
                    </Button>
                  </div>
                  <DocumentList documents={camp.documents} />
                </div>
              ))}
            </div>
          )}

          {selectedTab === "objections" && (
            <div className="space-y-4">
              <DocumentList
                documents={selectedProduct.objections}
                title="Manejo de Objecciones"
                onUpload={() => onUploadDocument(selectedProduct.id)}
              />
            </div>
          )}

          {selectedTab === "faqs" && (
            <div className="space-y-4">
              <DocumentList
                documents={selectedProduct.faqs}
                title="Preguntas frecuentes"
                onUpload={() => onUploadDocument(selectedProduct.id)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function MedicalContent({
  lines,
  onAddLine,
  onAddDiagnosis,
  onUploadDocument,
}: {
  lines: MedicalLine[];
  onAddLine: () => void;
  onAddDiagnosis: (lineId: string) => void;
  onUploadDocument: (lineId: string, diagnosisId: string) => void;
}) {
  const [selectedLineId, setSelectedLineId] = useState<string | null>(
    lines.length > 0 ? lines[0].id : null,
  );
  const [selectedDiagnosisId, setSelectedDiagnosisId] = useState<string | null>(
    null,
  );

  const selectedLine = lines.find((l) => l.id === selectedLineId);

  // Auto-select first diagnosis when line changes
  const handleLineSelect = (lineId: string) => {
    setSelectedLineId(lineId);
    const line = lines.find((l) => l.id === lineId);
    setSelectedDiagnosisId(
      line && line.diagnoses.length > 0 ? line.diagnoses[0].id : null,
    );
  };

  const selectedDiagnosis = selectedLine?.diagnoses.find(
    (d) => d.id === selectedDiagnosisId,
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {lines.map((l) => (
          <button
            key={l.id}
            onClick={() => handleLineSelect(l.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              selectedLineId === l.id
                ? "bg-brand-600 text-white"
                : "bg-ink-100 text-ink-700 hover:bg-ink-200",
            )}
          >
            {l.name}
          </button>
        ))}
        <Button variant="outline" size="sm" onClick={onAddLine}>
          <Plus size={14} className="mr-1" />
          Crear más líneas
        </Button>
      </div>

      {selectedLine && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 border-b border-ink-200 pb-2">
            {selectedLine.diagnoses.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDiagnosisId(d.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold",
                  selectedDiagnosisId === d.id
                    ? "bg-brand-100 text-brand-800"
                    : "text-ink-600 hover:bg-ink-100",
                )}
              >
                {d.name}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAddDiagnosis(selectedLine.id)}
            >
              <Plus size={14} className="mr-1" />
              Crear otro diagnóstico
            </Button>
          </div>

          {selectedDiagnosis && (
            <div className="space-y-4">
              <DocumentList
                documents={selectedDiagnosis.documents}
                title={`Documentos clínicos para ${selectedDiagnosis.name}`}
                onUpload={() =>
                  onUploadDocument(selectedLine.id, selectedDiagnosis.id)
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
