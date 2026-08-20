import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Card({
  children,
  className,
  interactive = false,
  onClick,
}: PropsWithChildren<{
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-200/80 bg-white shadow-sm shadow-ink-900/5",
        interactive &&
          "cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink-100 px-5 py-4">
      <div>
        <h3 className="text-sm font-semibold text-navy">{title}</h3>
        {subtitle ? (
          <p className="mt-0.5 text-xs text-ink-500">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
