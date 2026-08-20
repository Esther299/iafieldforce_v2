import type { AcademyDocument } from "../../types/academia";

export const marketingDocuments: Record<
  "brandIdentity" | "policies" | "faqs",
  AcademyDocument[]
> = {
  brandIdentity: [
    {
      id: "mkt-brand-1",
      title: "Posicionamiento clave de la marca de compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-2",
      title: "Por que hacemos lo que hacemos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-3",
      title: "Manifiesto de la marca compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-brand-4",
      title: "Propósito Vision y Valores de la compañía.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
  policies: [
    {
      id: "mkt-pol-1",
      title: "Política de branding.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-2",
      title: "Política de presencia en congresos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-3",
      title: "Política de apoyos a medicos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
  faqs: [
    {
      id: "mkt-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
    {
      id: "mkt-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-07-01",
    },
  ],
};
