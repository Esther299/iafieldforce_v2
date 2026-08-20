import type { ReactNode } from "react";
import { Card } from "./Card";

/**
 * Tarjeta métrica única para toda la aplicación: fondo blanco, esquinas
 * redondeadas, acento azul corporativo y hover limpio.
 */
export function Stat({
  label,
  value,
  hint,
  icon,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon?: ReactNode;
}) {
  return (
    <Card className="group p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
          {label}
        </span>
        {icon ? (
          <div className="rounded-xl bg-brand-50 p-2.5 text-navy transition-transform group-hover:scale-110">
            {icon}
          </div>
        ) : null}
      </div>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
        {value}
      </p>
      {hint ? (
        <p className="mt-2 text-xs font-medium text-ink-500">{hint}</p>
      ) : null}
    </Card>
  );
}
