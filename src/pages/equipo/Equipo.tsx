import { AvatarFace } from "../../components/AvatarFace";
import { Badge, Card } from "../../components/ui";
import { useAppStore } from "../../store/useAppStore";

export function Equipo() {
  const { avatars } = useAppStore();

  const regionsList = [
    "América del Norte",
    "América del Sur",
    "Europa Occidental",
    "Asia Oriental (Este de Asia)",
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {regionsList.map((reg) => {
        const regionAvatars = avatars.filter(
          (a) => (a.region || "América del Norte") === reg,
        );

        return (
          <Card
            key={reg}
            className="border-slate-200/80 bg-white p-4 rounded-2xl shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3
                className="text-sm font-extrabold text-slate-900 truncate max-w-[140px]"
                title={reg}
              >
                {reg}
              </h3>
              <Badge tone="brand">{regionAvatars.length} reps</Badge>
            </div>

            <div className="space-y-3">
              {regionAvatars.length > 0 ? (
                regionAvatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-3"
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
                ))
              ) : (
                <div className="p-3 text-center text-xs text-slate-400">
                  No hay reps en esta región
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
