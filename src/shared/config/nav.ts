import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  Package,
  Megaphone,
  Contact,
  BarChart3,
  Wallet,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { routes } from "@/shared/config/routes";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

export const mainNav: NavItem[] = [
  { to: routes.dashboard, label: "Centro de Mando", icon: LayoutDashboard },
  { to: routes.governance, label: "Gobernanza", icon: ShieldCheck },
  { to: routes.team, label: "Creación del Equipo", icon: Users },
  { to: routes.academy, label: "Academia", icon: GraduationCap },
  { to: routes.compliance, label: "Compliance", icon: CheckCircle2 },
  { to: routes.products, label: "Productos", icon: Package },
  { to: routes.campaigns, label: "Campañas", icon: Megaphone },
  { to: routes.crm, label: "CRM", icon: Contact },
  { to: routes.analytics, label: "Analítica", icon: BarChart3 },
  { to: routes.credits, label: "Créditos", icon: Wallet },
];

export const quickLinks: Array<{ to: string; label: string }> = [
  { to: routes.academy, label: "Academia IA" },
  { to: routes.territory, label: "Territorio VM" },
  { to: routes.visit, label: "Visita demo" },
  { to: routes.campaignTest, label: "Test de campaña" },
];
