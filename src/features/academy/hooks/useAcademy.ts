import { useState } from "react";
import type {
  AcademyAreaId,
  Course,
  CustomArea,
  MedicalLine,
  ProductMarca,
  Trainer,
  AcademyDocument,
} from "@/features/academy/types";
import {
  academyAreas as initialAreas,
  trainers as initialTrainers,
  courses as initialCourses,
  brandProducts as initialBrandProducts,
  medicalLines as initialMedicalLines,
} from "@/shared/data";

export function useAcademy() {
  // Datos estáticos (se pueden mover a un store global más adelante)
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [products, setProducts] =
    useState<ProductMarca[]>(initialBrandProducts);
  const [medicalLines, setMedicalLines] =
    useState<MedicalLine[]>(initialMedicalLines);
  const [customAreas, setCustomAreas] = useState<CustomArea[]>([]);

  // Navegación
  const [activeAreaId, setActiveAreaId] = useState<AcademyAreaId>(
    initialAreas[0].id,
  );
  const [activeSubsectionId, setActiveSubsectionId] = useState<string | null>(
    initialAreas[0].subsections[0]?.id ?? null,
  );

  // Modales
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

  const activeArea = initialAreas.find((area) => area.id === activeAreaId);
  const subsections = activeArea?.subsections ?? [];
  const activeSubsection =
    subsections.find((subsection) => subsection.id === activeSubsectionId) ??
    subsections[0] ??
    null;

  const handleAreaChange = (areaId: AcademyAreaId) => {
    setActiveAreaId(areaId);
    const area = initialAreas.find((item) => item.id === areaId);
    setActiveSubsectionId(area?.subsections[0]?.id ?? null);
  };

  const openDocumentUpload = (subsectionId: string) => {
    setUploadContext({ targetType: "document", targetId: subsectionId });
    setShowUploadModal(true);
  };

  const handleCreateTrainer = (trainer: Omit<Trainer, "id">) => {
    setTrainers((prev) => [
      ...prev,
      { id: `trainer-${Date.now()}`, ...trainer },
    ]);
  };

  const handleCreateCourse = (course: Omit<Course, "id">) => {
    setCourses((prev) => [...prev, { id: `course-${Date.now()}`, ...course }]);
  };

  const handleUploadDocument = (doc: Omit<AcademyDocument, "id">) => {
    const newDoc: AcademyDocument = { id: `doc-${Date.now()}`, ...doc };
    if (!uploadContext) return;

    if (uploadContext.targetType === "course") {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === uploadContext.targetId
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
    } else if (uploadContext.targetType === "product") {
      setProducts((prev) =>
        prev.map((product) => {
          if (product.id !== uploadContext.targetId) return product;
          if (uploadContext.subTargetId) {
            return {
              ...product,
              campaigns: product.campaigns.map((campaign) =>
                campaign.id === uploadContext.subTargetId
                  ? { ...campaign, documents: [...campaign.documents, newDoc] }
                  : campaign,
              ),
            };
          }
          return { ...product, objections: [...product.objections, newDoc] };
        }),
      );
    } else if (uploadContext.targetType === "diagnosis") {
      setMedicalLines((prev) =>
        prev.map((line) =>
          line.id === uploadContext.targetId
            ? {
                ...line,
                diagnoses: line.diagnoses.map((diagnosis) =>
                  diagnosis.id === uploadContext.subTargetId
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
    setShowUploadModal(false);
    setUploadContext(null);
  };

  const handleCreateArea = (name: string) => {
    setCustomAreas((prev) => [...prev, { id: `custom-${Date.now()}`, name }]);
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

  const handleAddProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: `prod-${Date.now()}`,
        name: `Producto ${prev.length + 1}`,
        campaigns: [],
        objections: [],
        faqs: [],
      },
    ]);
  };

  const handleAddMedicalLine = () => {
    setMedicalLines((prev) => [
      ...prev,
      {
        id: `line-${Date.now()}`,
        name: `Línea ${prev.length + 1}`,
        diagnoses: [],
      },
    ]);
  };

  return {
    // Datos
    trainers,
    courses,
    products,
    medicalLines,
    customAreas,
    // Navegación
    activeAreaId,
    activeSubsectionId,
    activeArea,
    subsections,
    activeSubsection,
    handleAreaChange,
    setActiveSubsectionId,
    // Modales
    showTrainerModal,
    showCourseModal,
    showUploadModal,
    showAreaModal,
    showDiagnosisModal,
    uploadContext,
    diagnosisContext,
    setShowTrainerModal,
    setShowCourseModal,
    setShowUploadModal,
    setShowAreaModal,
    setShowDiagnosisModal,
    setDiagnosisContext,
    // Acciones
    openDocumentUpload,
    handleCreateTrainer,
    handleCreateCourse,
    handleUploadDocument,
    handleCreateArea,
    handleCreateDiagnosis,
    handleAddProduct,
    handleAddMedicalLine,
    // Utilidades
    academyAreas: initialAreas,
  };
}
