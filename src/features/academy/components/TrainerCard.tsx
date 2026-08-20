import type { ReactNode } from "react";
import { Video } from "lucide-react";
import type { Trainer } from "@/features/academy/types";
import { Badge, Card } from "@/shared/ui";

function TrainerTrait({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-semibold text-ink-500">{label}</p>
      {children}
    </div>
  );
}

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <Card className="p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-black text-navy">
          {trainer.name.slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black text-navy">{trainer.name}</p>
          <p className="text-xs text-ink-500">{trainer.role}</p>
          <p className="mt-1 text-xs text-ink-600">{trainer.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge>{trainer.region}</Badge>
            {trainer.videos.map((video) => (
              <Badge key={video} tone="brand">
                <Video size={12} className="mr-1 inline" />
                {video}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <TrainerTrait label="Origen">
          <p className="text-ink-700">{trainer.traits.origin}</p>
        </TrainerTrait>
        <TrainerTrait label="Acento">
          <p className="text-ink-700">{trainer.traits.accent}</p>
        </TrainerTrait>
        <div className="col-span-2">
          <TrainerTrait label="Modismos">
            <p className="text-ink-700">{trainer.traits.modismos}</p>
          </TrainerTrait>
        </div>
        <div className="col-span-2">
          <TrainerTrait label="Rasgos de personalidad">
            <div className="mt-1 flex flex-wrap gap-1">
              {trainer.personality.map((trait) => (
                <Badge key={trait}>{trait}</Badge>
              ))}
            </div>
          </TrainerTrait>
        </div>
        <div className="col-span-2">
          <TrainerTrait label="Educación">
            <div className="mt-1 flex flex-wrap gap-1">
              {trainer.education.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </TrainerTrait>
        </div>
      </div>
    </Card>
  );
}
