import type { MedicalLine } from "../../types/academia";

export const medicalLines: MedicalLine[] = [
  {
    id: "line-resp",
    name: "Línea Respiratoria",
    diagnoses: [
      {
        id: "diag-rhinitis",
        name: "Rinitis Alérgica",
        documents: [
          {
            id: "doc-rhinitis-1",
            title: "Manual de rinitis alérgica.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-2",
            title: "Farmacología Molécula 1 en rinitis alérgica.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-3",
            title:
              "Estudio clínico Producto 1 en rinitis alérgica estacional.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
          {
            id: "doc-rhinitis-4",
            title: "Estudio clínico Producto 1 en rinitis alérgica perenne.pdf",
            type: "pdf",
            uploadedAt: "2026-08-01",
          },
        ],
      },
      {
        id: "diag-asthma",
        name: "Asma",
        documents: [],
      },
      {
        id: "diag-copd",
        name: "EPOC",
        documents: [],
      },
    ],
  },
  {
    id: "line-cv",
    name: "Línea Cardiovascular",
    diagnoses: [],
  },
  {
    id: "line-derm",
    name: "Línea Dermatológica",
    diagnoses: [],
  },
];
