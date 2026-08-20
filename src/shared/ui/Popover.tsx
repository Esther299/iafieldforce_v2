import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function Popover({
  trigger,
  content,
  side = "top",
}: {
  trigger: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}) {
  const positions = {
    top: "bottom-full mb-2",
    right: "left-full ml-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
  };

  return (
    <div className="group relative inline-block">
      {trigger}
      <div
        className={cn(
          "pointer-events-none absolute z-50 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100",
          positions[side],
        )}
      >
        <div className="whitespace-nowrap rounded-xl bg-navy px-3 py-2 text-xs text-white shadow-lg">
          {content}
        </div>
      </div>
    </div>
  );
}
