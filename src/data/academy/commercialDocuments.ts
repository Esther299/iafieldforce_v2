import type { AcademyDocument } from "../../types/academia";

export const commercialDocuments: Record<
  "priceLists" | "policies" | "promotions" | "faqs",
  AcademyDocument[]
> = {
  priceLists: [
    {
      id: "comm-pricelist-1",
      title: "Lista de precios sugeridos al público.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pricelist-2",
      title: "https://www.farmatodo.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-pricelist-3",
      title: "https://www.farmaciaseconomicas.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmaciaseconomicas.com",
    },
    {
      id: "comm-pricelist-4",
      title: "https://www.farmasanpablo.com",
      type: "link",
      uploadedAt: "2026-08-01",
      url: "https://www.farmasanpablo.com",
    },
  ],
  policies: [
    {
      id: "comm-pol-1",
      title: "Política de fijación de precios.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-2",
      title: "Política de descuentos.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-3",
      title: "Política de devoluciones.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-pol-4",
      title: "Política XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
  ],
  promotions: [
    {
      id: "comm-prom-1",
      title: "Promociones Vigentes Mes de Septiembre 2026.pdf",
      type: "pdf",
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-2",
      title: "Promociones Canal Especial Septiembre 2026.pdf",
      type: "pdf",
      uploadedAt: "2026-08-20",
    },
    {
      id: "comm-prom-3",
      title: "https://www.farmatodo.com",
      type: "link",
      uploadedAt: "2026-08-20",
      url: "https://www.farmatodo.com",
    },
    {
      id: "comm-prom-4",
      title: "https://www.farmaciaeseconomicas.com",
      type: "link",
      uploadedAt: "2026-08-20",
      url: "https://www.farmaciaeseconomicas.com",
    },
  ],
  faqs: [
    {
      id: "comm-faq-1",
      title: "Preguntas frecuentes Médicos.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-2",
      title: "Preguntas frecuentes Dependientes Farmacia.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-3",
      title: "Preguntas frecuentes Visitadores Medicos reales.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
    {
      id: "comm-faq-4",
      title: "Preguntas frecuentes XYZ.pdf",
      type: "pdf",
      uploadedAt: "2026-08-01",
    },
  ],
};
