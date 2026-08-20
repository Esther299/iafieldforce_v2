import type { ProductMarca } from "../../types/academia";

export const brandProducts: ProductMarca[] = [
  {
    id: "prod-1",
    name: "Producto 1",
    campaigns: [
      {
        id: "camp-1-1",
        name: "Campaña producto 1 trimestre 1 2024",
        documents: [
          {
            id: "doc-camp-1-1",
            title: "Manual de Manejo de Objecciones Producto 1 2026.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-camp-1-2",
            title: "Campaña producto 1 trimestre 2 2024",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-camp-1-3",
            title: "Campaña producto 1 trimestre 3 2024",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
        ],
      },
      {
        id: "camp-1-2",
        name: "Campaña producto 1 trimestre 2 2024",
        documents: [],
      },
    ],
    objections: [
      {
        id: "obj-1-1",
        title: "Manual de manejo de objeciones 2026.pdf",
        type: "pdf",
        uploadedAt: "2026-08-01",
      },
    ],
    faqs: [
      {
        id: "faq-1-1",
        title: "Manual de preguntas frecuentes Producto 1 2026.pdf",
        type: "pdf",
        uploadedAt: "2026-08-01",
      },
    ],
  },
  {
    id: "prod-2",
    name: "Producto 2",
    campaigns: [],
    objections: [],
    faqs: [],
  },
  {
    id: "prod-3",
    name: "Producto 3",
    campaigns: [],
    objections: [],
    faqs: [],
  },
];
