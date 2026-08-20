import type { AcademyDocument, Course } from "@/features/academy/types";

export const complianceDocuments: AcademyDocument[] = [
  {
    id: "comp-1",
    title: "Código de conducta.pdf",
    type: "pdf",
    uploadedAt: "2026-01-01",
  },
  {
    id: "comp-2",
    title: "Política de conflictos de interés.pdf",
    type: "pdf",
    uploadedAt: "2026-01-01",
  },
];

export const complianceCourses: Course[] = [
  {
    id: "comp-course-1",
    title: "Curso de Ética y Cumplimiento",
    date: "2026-09-15",
    instructor: "Compliance Team",
    objective: "Reforzar conocimientos en ética profesional.",
    instructions: "Completar los módulos y aprobar la evaluación.",
    documents: [],
  },
];
