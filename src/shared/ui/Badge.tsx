import type { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/cn";

export type BadgeTone = "neutral" | "brand" | "success" | "warn" | "danger";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-ink-100 text-ink-700",
  brand: "bg-brand-100 text-navy",
  success: "bg-emerald-100 text-emerald-800",
  warn: "bg-amber-100 text-amber-900",
  danger: "bg-rose-100 text-rose-800",
};

export function Badge({
  children,
  tone = "neutral",
}: PropsWithChildren<{ tone?: BadgeTone }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
