import type { AcademyDocument } from "@/features/academy/types";

export const hrDocuments: Record<
  "company" | "policies" | "faqs",
  AcademyDocument[]
> = {
  company: [
    {
      id: "hr-doc-1",
      title: "Historia Compañía Ejemplo.pdf",
      type: "pdf",
      uploadedAt: "2026-01-10",
      url: "#",
    },
    {
      id: "hr-doc-2",
      title: "Reporte Anual 2025.pdf",
      type: "pdf",
      uploadedAt: "2026-02-15",
      url: "#",
    },
    {
      id: "hr-doc-3",
      title: "Reportaje El País Sep 2023",
      type: "link",
      uploadedAt: "2023-09-20",
      url: "https://elpais.com",
    },
  ],
  policies: [
    {
      id: "hr-pol-1",
      title: "Política sobre empleo discapacitados",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-2",
      title: "Política de contratación de empleados",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-3",
      title: "Política de vacaciones",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
    {
      id: "hr-pol-4",
      title: "Política xyz",
      type: "pdf",
      uploadedAt: "2026-03-01",
    },
  ],
  faqs: [
    {
      id: "hr-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
    {
      id: "hr-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-04-01",
    },
  ],
};
