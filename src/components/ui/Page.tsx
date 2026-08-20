import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../lib/cn";

/** Contenedor común de todas las pantallas: mismo espaciado y animación. */
export function PageContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("animate-fade-up space-y-6", className)}>{children}</div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl tracking-tight text-navy md:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-sm text-ink-500">{subtitle}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}

/** Rótulo de sección con icono, reutilizado en todas las vistas. */
export function SectionLabel({
  icon,
  children,
}: PropsWithChildren<{ icon?: ReactNode }>) {
  return (
    <div className="flex items-center gap-2 text-navy">
      {icon}
      <span className="text-xs font-bold uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}

export function Empty({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-ink-200 bg-white/60 px-6 py-12 text-center">
      <p className="font-medium text-ink-700">{title}</p>
      {subtitle ? (
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
      ) : null}
    </div>
  );
}
