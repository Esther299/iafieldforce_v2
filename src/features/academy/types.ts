import type { LucideIcon } from "lucide-react";
import type { AccentRegion, TargetAudience } from "@/shared/types";

export type AcademyAreaId =
  | "training"
  | "hr"
  | "commercial"
  | "marketing"
  | "brand"
  | "medical"
  | "compliance"
  | "custom";

/** Alias histórico del identificador de área. */
export type AcademyRoleId = AcademyAreaId;

export type AcademyDocumentType =
  | "pdf"
  | "doc"
  | "ppt"
  | "video"
  | "audio"
  | "link";

export interface AcademyDocument {
  id: string;
  title: string;
  type: AcademyDocumentType;
  url?: string;
  uploadedAt: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  description: string;
  region: string;
  videos: string[];
  traits: {
    origin: string;
    accent: string;
    modismos: string;
  };
  personality: string[];
  education: string[];
  photo?: string;
}

export interface CourseMaterial {
  name: string;
  type: string;
}

export interface Course {
  id: string;
  title: string;
  date: string;
  instructor: string;
  objective: string;
  instructions: string;
  documents: CourseMaterial[];
}

export interface ProductCampaign {
  id: string;
  name: string;
  documents: AcademyDocument[];
}

/** Producto gestionado por el Gerente de Marca. */
export interface ProductMarca {
  id: string;
  name: string;
  campaigns: ProductCampaign[];
  objections: AcademyDocument[];
  faqs: AcademyDocument[];
}

export interface Diagnosis {
  id: string;
  name: string;
  documents: AcademyDocument[];
}

/** Línea médica gestionada por el Director Médico. */
export interface MedicalLine {
  id: string;
  name: string;
  diagnoses: Diagnosis[];
}

export interface CustomArea {
  id: string;
  name: string;
}

/** Subsección tipada: el tipo determina la forma de `data`. */
export type AcademySubsection =
  | { id: string; label: string; icon?: LucideIcon; type: "trainers"; data: Trainer[] }
  | { id: string; label: string; icon?: LucideIcon; type: "courses"; data: Course[] }
  | {
      id: string;
      label: string;
      icon?: LucideIcon;
      type: "documents" | "company" | "policies" | "faq" | "promotions";
      data: AcademyDocument[];
    }
  | { id: string; label: string; icon?: LucideIcon; type: "products"; data: ProductMarca[] }
  | { id: string; label: string; icon?: LucideIcon; type: "medical"; data: MedicalLine[] }
  | { id: string; label: string; icon?: LucideIcon; type: "custom"; data?: null };

export type AcademySubsectionType = AcademySubsection["type"];

/** Área de negocio de la Academia (Entrenamiento, RRHH, Comercial…). */
export interface AcademyArea {
  id: AcademyAreaId;
  label: string;
  icon: LucideIcon;
  subsections: AcademySubsection[];
}

/** Alias histórico del área de negocio. */
export type AcademyRole = AcademyArea;

export interface AcademyLesson {
  id: string;
  title: string;
  content: string;
  durationMin: number;
  completed?: boolean;
}

export interface AcademyModule {
  id: string;
  title: string;
  description: string;
  audience: TargetAudience | "avatar_trainer";
  lessons: AcademyLesson[];
  certificateTitle?: string;
}

export interface TrainerStyle {
  id: string;
  trainerName: string;
  accent: AccentRegion;
  speakingStyle: string;
  samplePhrases: string[];
  notes: string;
}
