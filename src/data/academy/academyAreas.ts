import {
  Building2,
  FolderOpen,
  FolderTree,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import type { AcademyArea } from "../../types/academia";
import { trainers } from "./trainers";
import { courses } from "./courses";
import { hrDocuments } from "./hrDocuments";
import { commercialDocuments } from "./commercialDocuments";
import { marketingDocuments } from "./marketingDocuments";
import { brandProducts } from "./brandProducts";
import { medicalLines } from "./medicalLines";
import { complianceDocuments, complianceCourses } from "./compliance";

/** Áreas de negocio de la Academia con sus subsecciones navegables. */
export const academyAreas: AcademyArea[] = [
  {
    id: "training",
    label: "Gerente de Entrenamiento",
    icon: Users,
    subsections: [
      {
        id: "trainers",
        label: "Formadores",
        type: "trainers",
        data: trainers,
      },
      {
        id: "courses",
        label: "Cursos",
        type: "courses",
        data: courses,
      },
    ],
  },
  {
    id: "hr",
    label: "Gerente de Recursos Humanos",
    icon: Building2,
    subsections: [
      {
        id: "company",
        label: "Descripción de la compañía",
        type: "company",
        data: hrDocuments.company,
      },
      {
        id: "policies",
        label: "Políticas",
        type: "policies",
        data: hrDocuments.policies,
      },
      {
        id: "hr-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: hrDocuments.faqs,
      },
      {
        id: "hr-custom",
        label: "Crear otra área",
        type: "custom",
        data: null,
      },
    ],
  },
  {
    id: "commercial",
    label: "Gerente Comercial",
    icon: FolderOpen,
    subsections: [
      {
        id: "price-lists",
        label: "Listas de precios",
        type: "documents",
        data: commercialDocuments.priceLists,
      },
      {
        id: "commercial-policies",
        label: "Políticas comerciales",
        type: "policies",
        data: commercialDocuments.policies,
      },
      {
        id: "promotions",
        label: "Promociones vigentes",
        type: "promotions",
        data: commercialDocuments.promotions,
      },
      {
        id: "commercial-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: commercialDocuments.faqs,
      },
    ],
  },
  {
    id: "marketing",
    label: "Gerente de Marketing",
    icon: Sparkles,
    subsections: [
      {
        id: "brand-identity",
        label: "Documentos de identidad de marca",
        type: "documents",
        data: marketingDocuments.brandIdentity,
      },
      {
        id: "marketing-policies",
        label: "Políticas de marketing",
        type: "policies",
        data: marketingDocuments.policies,
      },
      {
        id: "marketing-faq",
        label: "Preguntas frecuentes",
        type: "faq",
        data: marketingDocuments.faqs,
      },
      {
        id: "mkt-custom",
        label: "Crear otra área",
        type: "custom",
        data: null,
      },
    ],
  },
  {
    id: "brand",
    label: "Gerente de Marca",
    icon: FolderTree,
    subsections: [
      {
        id: "product-list",
        label: "Productos",
        type: "products",
        data: brandProducts,
      },
    ],
  },
  {
    id: "medical",
    label: "Director Médico",
    icon: Stethoscope,
    subsections: [
      {
        id: "medical-lines",
        label: "Líneas médicas",
        type: "medical",
        data: medicalLines,
      },
    ],
  },
  {
    id: "compliance",
    label: "Gerente de Compliance",
    icon: ShieldCheck,
    subsections: [
      {
        id: "compliance-docs",
        label: "Políticas y documentos",
        type: "documents",
        data: complianceDocuments,
      },
      {
        id: "compliance-training",
        label: "Entrenamiento en compliance",
        type: "courses",
        data: complianceCourses,
      },
    ],
  },
  {
    id: "custom",
    label: "Crear otra área",
    icon: MoreHorizontal,
    subsections: [
      {
        id: "custom-area",
        label: "Nueva área personalizada",
        type: "custom",
        data: null,
      },
    ],
  },
];
