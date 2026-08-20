import type { UserRole } from "@/shared/types";

export const roleOptions: Array<{ value: UserRole; label: string }> = [
  { value: "sales-force-creator", label: "Sales Force Creator" },
  { value: "marketing", label: "Marketing" },
  { value: "commercial", label: "Commercial" },
  { value: "operations", label: "Operations" },
  { value: "compliance", label: "Compliance" },
];
