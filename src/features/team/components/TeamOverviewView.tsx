import { useState } from "react";
import { AvatarFace } from "@/shared/components/AvatarFace";
import { Badge, Card, Button } from "@/shared/ui";
import { useAppStore } from "@/store";
import type { AvatarConfig } from "@/shared/types";

export function TeamOverviewView() {
  const { avatars } = useAppStore();
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarConfig | null>(
    null,
  );

  // Obtenemos solo las regiones que tienen al menos un avatar
  const activeRegions = Array.from(new Set(avatars.map((a) => a.region)));

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-4">
        {activeRegions.map((reg) => {
          const regionAvatars = avatars.filter((a) => a.region === reg);

          return (
            <Card
              key={reg}
              className="border-slate-200/80 bg-white p-4 rounded-2xl shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-extrabold text-slate-900 truncate max-w-[140px]">
                  {reg}
                </h3>
                <Badge tone="brand">{regionAvatars.length} reps</Badge>
              </div>

              <div className="space-y-3">
                {regionAvatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar)}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-3 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <AvatarFace avatar={avatar} size="sm" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {avatar.name}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {avatar.traits || "Rasgos clave"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Modal de información */}
      {selectedAvatar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-black text-slate-900">
                {selectedAvatar.name}
              </h2>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedAvatar(null)}
              >
                Cerrar
              </Button>
            </div>

            <div className="flex gap-4 items-center">
              <AvatarFace avatar={selectedAvatar} size="lg" />
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-bold">Región:</span>{" "}
                  {selectedAvatar.region}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Formador:</span>{" "}
                  {selectedAvatar.formador}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Género:</span>{" "}
                  {selectedAvatar.gender}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <p className="text-sm">
                <span className="font-bold">Rasgos:</span>{" "}
                {selectedAvatar.traits}
              </p>
              <p className="text-sm">
                <span className="font-bold">Personalidad:</span>{" "}
                {selectedAvatar.personality}
              </p>
              <p className="text-sm">
                <span className="font-bold">Vestimenta:</span>{" "}
                {selectedAvatar.attire}
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
