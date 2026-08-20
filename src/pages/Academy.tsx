import { useState } from "react";
import { AreaNav, SubsectionTabs } from "../components/pages/academy";
import { Empty, PageContainer, PageHeader } from "../components/ui";
import {
  academyAreas,
  brandProducts,
  courses as initialCourses,
  medicalLines as initialMedicalLines,
  trainers as initialTrainers,
} from "../data";
import {
  CreateAreaModal,
  CreateCourseModal,
  CreateDiagnosisModal,
  CreateTrainerModal,
  UploadDocumentModal,
} from "../components/pages/academy/modals";
import type {
  AcademyAreaId,
  AcademyDocument,
  Course,
  CustomArea,
  MedicalLine,
  ProductMarca,
  Trainer,
} from "../types/academia";
import {
  CoursesView,
  CustomAreaView,
  DocumentsView,
  MedicalLinesView,
  ProductsView,
  PromotionsView,
  TrainersView,
} from "../components/pages/academy/views";

interface UploadContext {
  targetType: "course" | "product" | "document" | "diagnosis";
  targetId: string;
  subTargetId?: string;
}

export function Academy() {
  // Estado de navegación (dirigido por los datos maestros de la Academia)
  const [activeAreaId, setActiveAreaId] = useState<AcademyAreaId>(
    academyAreas[0].id,
  );
  const [activeSubsectionId, setActiveSubsectionId] = useState<string | null>(
    academyAreas[0].subsections[0]?.id ?? null,
  );

  // Estado de modales
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);
  const [uploadContext, setUploadContext] = useState<UploadContext | null>(
    null,
  );
  const [diagnosisContext, setDiagnosisContext] = useState<{
    lineId: string;
  } | null>(null);

  // Datos editables en sesión (se pueden mover a un store global)
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [products, setProducts] = useState<ProductMarca[]>(brandProducts);
  const [medicalLines, setMedicalLines] =
    useState<MedicalLine[]>(initialMedicalLines);
  const [customAreas, setCustomAreas] = useState<CustomArea[]>([]);

  const activeArea = academyAreas.find((area) => area.id === activeAreaId);
  const subsections = activeArea?.subsections ?? [];
  const activeSubsection =
    subsections.find((subsection) => subsection.id === activeSubsectionId) ??
    subsections[0] ??
    null;

  const handleAreaChange = (areaId: AcademyAreaId) => {
    setActiveAreaId(areaId);
    const area = academyAreas.find((item) => item.id === areaId);
    setActiveSubsectionId(area?.subsections[0]?.id ?? null);
  };

  const openDocumentUpload = (subsectionId: string) => {
    setUploadContext({ targetType: "document", targetId: subsectionId });
    setShowUploadModal(true);
  };

  const handleCreateTrainer = (trainer: Omit<Trainer, "id">) => {
    setTrainers([...trainers, { id: `trainer-${Date.now()}`, ...trainer }]);
  };

  const handleCreateCourse = (course: Omit<Course, "id">) => {
    setCourses([...courses, { id: `course-${Date.now()}`, ...course }]);
  };

  const handleUploadDocument = (
    doc: Omit<AcademyDocument, "id">,
    context: UploadContext | null,
  ) => {
    const newDoc: AcademyDocument = { id: `doc-${Date.now()}`, ...doc };
    if (!context) return;

    if (context.targetType === "course") {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === context.targetId
            ? {
                ...course,
                documents: [
                  ...course.documents,
                  { name: newDoc.title, type: newDoc.type },
                ],
              }
            : course,
        ),
      );
    } else if (context.targetType === "product") {
      setProducts((prev) =>
        prev.map((product) => {
          if (product.id !== context.targetId) return product;
          if (context.subTargetId) {
            // Documento asociado a una campaña concreta
            return {
              ...product,
              campaigns: product.campaigns.map((campaign) =>
                campaign.id === context.subTargetId
                  ? { ...campaign, documents: [...campaign.documents, newDoc] }
                  : campaign,
              ),
            };
          }
          // Sin campaña, el documento se añade al manejo de objeciones
          return { ...product, objections: [...product.objections, newDoc] };
        }),
      );
    } else if (context.targetType === "diagnosis") {
      setMedicalLines((prev) =>
        prev.map((line) =>
          line.id === context.targetId
            ? {
                ...line,
                diagnoses: line.diagnoses.map((diagnosis) =>
                  diagnosis.id === context.subTargetId
                    ? {
                        ...diagnosis,
                        documents: [...diagnosis.documents, newDoc],
                      }
                    : diagnosis,
                ),
              }
            : line,
        ),
      );
    }
  };

  const handleCreateArea = (name: string) => {
    setCustomAreas([...customAreas, { id: `custom-${Date.now()}`, name }]);
  };

  const handleCreateDiagnosis = (lineId: string, diagnosisName: string) => {
    setMedicalLines((prev) =>
      prev.map((line) =>
        line.id === lineId
          ? {
              ...line,
              diagnoses: [
                ...line.diagnoses,
                {
                  id: `diag-${Date.now()}`,
                  name: diagnosisName,
                  documents: [],
                },
              ],
            }
          : line,
      ),
    );
  };

  const handleCloseUpload = () => {
    setShowUploadModal(false);
    setUploadContext(null);
  };

  const renderContent = () => {
    if (!activeSubsection) {
      return <Empty title="Selecciona una subsección" />;
    }

    switch (activeSubsection.type) {
      case "trainers":
        return (
          <TrainersView
            trainers={trainers}
            onCreateTrainer={() => setShowTrainerModal(true)}
          />
        );
      case "courses":
        return (
          <CoursesView
            courses={courses}
            onCreateCourse={() => setShowCourseModal(true)}
            onUploadDocument={(courseId) => {
              setUploadContext({ targetType: "course", targetId: courseId });
              setShowUploadModal(true);
            }}
          />
        );
      case "documents":
      case "company":
      case "policies":
      case "faq":
        return (
          <DocumentsView
            documents={activeSubsection.data}
            title={activeSubsection.label}
            onUpload={() => openDocumentUpload(activeSubsection.id)}
          />
        );
      case "promotions":
        return (
          <PromotionsView
            documents={activeSubsection.data}
            onUpload={() => openDocumentUpload(activeSubsection.id)}
          />
        );
      case "products":
        return (
          <ProductsView
            products={products}
            onAddProduct={() =>
              setProducts([
                ...products,
                {
                  id: `prod-${Date.now()}`,
                  name: `Producto ${products.length + 1}`,
                  campaigns: [],
                  objections: [],
                  faqs: [],
                },
              ])
            }
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
          <MedicalLinesView
            lines={medicalLines}
            onAddLine={() =>
              setMedicalLines([
                ...medicalLines,
                {
                  id: `line-${Date.now()}`,
                  name: `Línea ${medicalLines.length + 1}`,
                  diagnoses: [],
                },
              ])
            }
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
          <CustomAreaView
            customAreas={customAreas}
            onCreateArea={() => setShowAreaModal(true)}
          />
        );
    }
  };

  return (
    <PageContainer>
      <PageHeader
        title="Academia"
        subtitle="Estructura jerárquica, entrenadores, cursos formativos y materiales específicos por área de negocio."
      />

      <AreaNav
        areas={academyAreas}
        activeAreaId={activeAreaId}
        onSelect={handleAreaChange}
      />

      <SubsectionTabs
        subsections={subsections}
        activeSubsectionId={activeSubsection?.id ?? null}
        onSelect={setActiveSubsectionId}
      />

      <div className="min-h-[400px]">{renderContent()}</div>

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
        onUpload={(doc) => handleUploadDocument(doc, uploadContext)}
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
          onCreate={(name) =>
            handleCreateDiagnosis(diagnosisContext.lineId, name)
          }
          lineName={
            medicalLines.find((line) => line.id === diagnosisContext.lineId)
              ?.name ?? ""
          }
        />
      )}
    </PageContainer>
  );
}
