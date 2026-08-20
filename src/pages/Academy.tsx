import { useState } from "react";
import type { AcademyDocument, AcademyRoleId, Course, MedicalLine, ProductMarca, Trainer } from "../types";
import { ACADEMY_ROLES, mockCourses, mockMedicalLines, mockProducts, mockTrainers } from "../data/mock";
import { CoursesContent, DocumentsContent, FaqContent, MedicalContent, PoliciesContent, ProductsContent, PromotionsContent, TrainersContent } from "./academia/Entrenamiento";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button, PageHeader } from "../components/ui";
import { CreateAreaModal, CreateCourseModal, CreateDiagnosisModal, CreateTrainerModal, UploadDocumentModal } from "../components/academy/modals";
import { cn } from "../lib/cn";

export function Academy() {
  // Estado de navegación
  const [activeRoleId, setActiveRoleId] = useState<AcademyRoleId>("training");
  const [activeSubsectionId, setActiveSubsectionId] = useState<string | null>(
    null,
  );

  // Estado de modales
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const [uploadContext, setUploadContext] = useState<{
    targetType: "course" | "product" | "document" | "diagnosis";
    targetId: string;
    subTargetId?: string;
  } | null>(null);
  const [diagnosisContext, setDiagnosisContext] = useState<{
    lineId: string;
  } | null>(null);

  // Datos mock (se pueden mover a un store global)
  const [trainers, setTrainers] = useState<Trainer[]>(mockTrainers);
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [products, setProducts] = useState<ProductMarca[]>(mockProducts);
  const [medicalLines, setMedicalLines] =
    useState<MedicalLine[]>(mockMedicalLines);
  const [customAreas, setCustomAreas] = useState<
    { id: string; name: string }[]
  >([]);

  // Obtener el rol activo
  const activeRole = ACADEMY_ROLES.find((r) => r.id === activeRoleId);
  const subsections = activeRole?.subsections || [];

  // Si no hay subsección activa, seleccionar la primera
  const activeSubsection =
    subsections.find((s) => s.id === activeSubsectionId) ||
    subsections[0] ||
    null;

  // Manejar cambio de rol
  const handleRoleChange = (roleId: AcademyRoleId) => {
    setActiveRoleId(roleId);
    const role = ACADEMY_ROLES.find((r) => r.id === roleId);
    if (role && role.subsections.length > 0) {
      setActiveSubsectionId(role.subsections[0].id);
    } else {
      setActiveSubsectionId(null);
    }
  };

  // Inicializar subsección activa al montar
  useState(() => {
    if (activeRole && activeRole.subsections.length > 0) {
      setActiveSubsectionId(activeRole.subsections[0].id);
    }
  });

  // Handlers de creación
  const handleCreateTrainer = (trainer: Omit<Trainer, "id">) => {
    const newTrainer: Trainer = {
      id: `trainer-${Date.now()}`,
      ...trainer,
    };
    setTrainers([...trainers, newTrainer]);
    // También podríamos sincronizar con el store global
  };

  const handleCreateCourse = (course: Omit<Course, "id">) => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      ...course,
    };
    setCourses([...courses, newCourse]);
  };

  const handleUploadDocument = (
    doc: Omit<AcademyDocument, "id">,
    context?: typeof uploadContext,
  ) => {
    const newDoc: AcademyDocument = {
      id: `doc-${Date.now()}`,
      ...doc,
    };
    // Actualizar según contexto
    if (context) {
      if (context.targetType === "course") {
        setCourses((prev) =>
          prev.map((c) =>
            c.id === context.targetId
              ? {
                  ...c,
                  documents: [
                    ...c.documents,
                    { name: newDoc.title, type: newDoc.type },
                  ],
                }
              : c,
          ),
        );
      } else if (context.targetType === "product") {
        setProducts((prev) =>
          prev.map((p) => {
            if (p.id === context.targetId) {
              if (context.subTargetId) {
                // Añadir a campaña específica
                return {
                  ...p,
                  campaigns: p.campaigns.map((camp) =>
                    camp.id === context.subTargetId
                      ? { ...camp, documents: [...camp.documents, newDoc] }
                      : camp,
                  ),
                };
              } else {
                // Añadir a objeciones o FAQs (según contexto adicional)
                // Por simplicidad, lo añadimos a objeciones
                return { ...p, objections: [...p.objections, newDoc] };
              }
            }
            return p;
          }),
        );
      } else if (context.targetType === "diagnosis") {
        setMedicalLines((prev) =>
          prev.map((line) => {
            if (line.id === context.targetId) {
              return {
                ...line,
                diagnoses: line.diagnoses.map((d) =>
                  d.id === context.subTargetId
                    ? { ...d, documents: [...d.documents, newDoc] }
                    : d,
                ),
              };
            }
            return line;
          }),
        );
      }
    }
  };

  const handleCreateArea = (name: string) => {
    const newArea = { id: `custom-${Date.now()}`, name };
    setCustomAreas([...customAreas, newArea]);
  };

  const handleCreateDiagnosis = (lineId: string, diagnosisName: string) => {
    setMedicalLines((prev) =>
      prev.map((line) => {
        if (line.id === lineId) {
          return {
            ...line,
            diagnoses: [
              ...line.diagnoses,
              {
                id: `diag-${Date.now()}`,
                name: diagnosisName,
                documents: [],
              },
            ],
          };
        }
        return line;
      }),
    );
  };

  // Renderizar contenido según el tipo de subsección
  const renderContent = () => {
    if (!activeSubsection) {
      return (
        <div className="flex h-40 items-center justify-center">
          <p className="text-ink-500">Selecciona una subsección</p>
        </div>
      );
    }

    switch (activeSubsection.type) {
      case "trainers":
        return (
          <TrainersContent
            trainers={trainers}
            onCreateTrainer={() => setShowTrainerModal(true)}
          />
        );
      case "courses":
        return (
          <CoursesContent
            courses={courses}
            onCreateCourse={() => setShowCourseModal(true)}
            onUploadDocument={(courseId) => {
              setUploadContext({ targetType: "course", targetId: courseId });
              setShowUploadModal(true);
            }}
          />
        );
      case "documents":
        return (
          <DocumentsContent
            documents={activeSubsection.data || []}
            title={activeSubsection.label}
            onUpload={() => {
              setUploadContext({
                targetType: "document",
                targetId: activeSubsection.id,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "policies":
        return (
          <PoliciesContent
            documents={activeSubsection.data || []}
            onUpload={() => {
              setUploadContext({
                targetType: "document",
                targetId: activeSubsection.id,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "faq":
        return (
          <FaqContent
            documents={activeSubsection.data || []}
            onUpload={() => {
              setUploadContext({
                targetType: "document",
                targetId: activeSubsection.id,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "promotions":
        return (
          <PromotionsContent
            documents={activeSubsection.data || []}
            onUpload={() => {
              setUploadContext({
                targetType: "document",
                targetId: activeSubsection.id,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "products":
        return (
          <ProductsContent
            products={products}
            onAddProduct={() => {
              // Simular añadir producto
              const newProduct: ProductMarca = {
                id: `prod-${Date.now()}`,
                name: `Producto ${products.length + 1}`,
                campaigns: [],
                objections: [],
                faqs: [],
              };
              setProducts([...products, newProduct]);
            }}
            onUploadDocument={(productId, campaignId) => {
              setUploadContext({
                targetType: "product",
                targetId: productId,
                subTargetId: campaignId,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "medical":
        return (
          <MedicalContent
            lines={medicalLines}
            onAddLine={() => {
              // Simular añadir línea
              const newLine: MedicalLine = {
                id: `line-${Date.now()}`,
                name: `Línea ${medicalLines.length + 1}`,
                diagnoses: [],
              };
              setMedicalLines([...medicalLines, newLine]);
            }}
            onAddDiagnosis={(lineId) => {
              setDiagnosisContext({ lineId });
              setShowDiagnosisModal(true);
            }}
            onUploadDocument={(lineId, diagnosisId) => {
              setUploadContext({
                targetType: "diagnosis",
                targetId: lineId,
                subTargetId: diagnosisId,
              });
              setShowUploadModal(true);
            }}
          />
        );
      case "custom":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-700">
              <MoreHorizontal size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Área personalizada
              </span>
            </div>
            <p className="text-sm text-ink-600">
              Aquí deberías poder darle a la compañía la flexibilidad y libertad
              de crear cualquier otra área sin que tenga que llamarnos.
            </p>
            <Button onClick={() => setShowAreaModal(true)}>
              <Plus size={18} className="mr-2" />
              Crear otra área
            </Button>
            {customAreas.length > 0 && (
              <div className="mt-4 grid gap-2">
                {customAreas.map((area) => (
                  <div
                    key={area.id}
                    className="rounded-xl border border-ink-200 bg-white p-3"
                  >
                    <p className="font-medium text-ink-900">{area.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="rounded-xl bg-ink-50 p-6 text-center text-ink-500">
            Contenido no disponible para esta subsección.
          </div>
        );
    }
  };

  // Handler para cerrar upload modal y resetear contexto
  const handleCloseUpload = () => {
    setShowUploadModal(false);
    setUploadContext(null);
  };

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Academia"
        subtitle="Estructura jerárquica, entrenadores, cursos formativos y materiales específicos por área de negocio."
      />

      {/* Sidebar de roles */}
      <div className="flex flex-wrap gap-2">
        {ACADEMY_ROLES.map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleChange(role.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
              activeRoleId === role.id
                ? "bg-[#1e3579] text-white shadow-md shadow-brand-900/20"
                : "bg-white text-ink-700 hover:bg-ink-100 border border-ink-200",
            )}
          >
            <role.icon size={16} />
            {role.label}
          </button>
        ))}
      </div>

      {/* Subsecciones (tabs) */}
      {subsections.length > 0 && (
        <div className="flex flex-wrap gap-2 border-b border-ink-200 pb-3">
          {subsections.map((sub:any) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubsectionId(sub.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                activeSubsectionId === sub.id
                  ? "bg-brand-100 text-brand-800"
                  : "text-ink-600 hover:bg-ink-100",
              )}
            >
              {sub.icon && <sub.icon size={14} className="mr-1 inline" />}
              {sub.label}
            </button>
          ))}
        </div>
      )}

      {/* Contenido */}
      <div className="min-h-[400px]">{renderContent()}</div>

      {/* Modales */}
      <CreateTrainerModal
        isOpen={showTrainerModal}
        onClose={() => setShowTrainerModal(false)}
        onCreate={handleCreateTrainer}
      />

      <CreateCourseModal
        isOpen={showCourseModal}
        onClose={() => setShowCourseModal(false)}
        onCreate={handleCreateCourse}
      />

      <UploadDocumentModal
        isOpen={showUploadModal}
        onClose={handleCloseUpload}
        onUpload={(doc) =>
          handleUploadDocument(doc, uploadContext || undefined)
        }
        title="Cargar Documento"
      />

      <CreateAreaModal
        isOpen={showAreaModal}
        onClose={() => setShowAreaModal(false)}
        onCreate={handleCreateArea}
      />

      {diagnosisContext && (
        <CreateDiagnosisModal
          isOpen={showDiagnosisModal}
          onClose={() => {
            setShowDiagnosisModal(false);
            setDiagnosisContext(null);
          }}
          onCreate={(name) => {
            if (diagnosisContext) {
              handleCreateDiagnosis(diagnosisContext.lineId, name);
            }
          }}
          lineName={
            medicalLines.find((l) => l.id === diagnosisContext?.lineId)?.name ||
            ""
          }
        />
      )}
    </div>
  );
}
