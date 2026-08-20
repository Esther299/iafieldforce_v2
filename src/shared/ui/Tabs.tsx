import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type TabSize = "sm" | "md" | "lg";

const sizes: Record<TabSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-4 text-sm",
};

/**
 * Pastilla de navegación común: azul corporativo cuando está activa,
 * tarjeta blanca con hover limpio cuando está inactiva.
 */
export function TabPill({
  active,
  onClick,
  size = "md",
  icon,
  children,
}: PropsWithChildren<{
  active: boolean;
  onClick: () => void;
  size?: TabSize;
  icon?: ReactNode;
}>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200",
        sizes[size],
        active
          ? "bg-navy text-white shadow-md shadow-brand-900/20"
          : "border border-ink-200 bg-white text-ink-700 hover:bg-brand-50 hover:text-navy",
      )}
    >
      {icon}
      {children}
    </button>
  );
}

/** Fila de pastillas de navegación. */
export function TabBar({
  children,
  bordered = false,
}: PropsWithChildren<{ bordered?: boolean }>) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        bordered && "border-b border-ink-200 pb-3",
      )}
    >
      {children}
    </div>
  );
}
