import { useState, useRef } from "react";
import { Palette, Shirt, Sparkles, User, Users, Upload } from "lucide-react";
import { AvatarFace } from "../../components/common/AvatarFace";
import {
  Button,
  Card,
  Input,
  Label,
  Select,
  Textarea,
} from "../../components/ui";
import { useAppStore } from "../../store/useAppStore";
import type {
  AccentRegion,
  AvatarConfig,
  Gender,
  GlobalRegions,
} from "../../types";

const accents: AccentRegion[] = [
  "cdmx",
  "norte",
  "bajio",
  "sur",
  "caribe",
  "andino",
  "rioplatense",
  "neutro",
];

const gradients = [
  "from-teal-400 to-cyan-700",
  "from-sky-400 to-indigo-700",
  "from-rose-400 to-fuchsia-800",
  "from-amber-400 to-orange-700",
];

const globalRegions: GlobalRegions[] = [
  "África Septentrional (Norte)",
  "África Subsahariana",
  "América del Norte",
  "América Central y el Caribe",
  "América del Sur",
  "Asia Occidental (Oriente Medio)",
  "Asia Central",
  "Asia Meridional (Sur de Asia)",
  "Asia Oriental (Este de Asia)",
  "Sudeste Asiático",
  "Europa Occidental",
  "Europa Oriental (Este)",
  "Europa Septentrional (Norte)",
  "Europa Meridional (Sur)",
  "Australia y Nueva Zelanda",
  "Melanesia",
  "Micronesia",
  "Polinesia",
];

const formadorOptions = [
  "Médicos",
  "Farmacias",
  "Hospitales",
  "Especialistas",
  "General",
];

const initialFormState: AvatarConfig = {
  id: "",
  name: "",
  gender: "femenino",
  skinTone: "media",
  traits: "",
  accent: "cdmx",
  attire: "",
  region: "América del Norte",
  personality: "amigable y cortés",
  photoGradient: gradients[0],
  active: true,
  formador: "Médicos",
  images: {
    torso: "",
    cuerpo: "",
    prueba: "",
  },
};

export function RepsView() {
  const { upsertAvatar } = useAppStore();
  const [form, setForm] = useState<AvatarConfig>(initialFormState);
  const [viewMode, setViewMode] = useState<"torso" | "cuerpo" | "prueba">(
    "torso",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          images: {
            ...prev.images,
            [viewMode]: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function save() {
    const errors: string[] = [];

    // Validaciones de campos de texto
    if (!form.name.trim()) errors.push("Nombre");
    if (!form.skinTone.trim()) errors.push("Tono de piel");
    if (!form.traits.trim()) errors.push("Rasgos corporativos y de identidad");
    if (!form.attire.trim()) errors.push("Vestimenta");
    if (!form.personality.trim()) errors.push("Personalidad");

    // Validaciones opcionales para comprobar que se subieron las 3 imágenes
    if (!form.images.torso) errors.push("Imagen de Torso y Cara");
    if (!form.images.cuerpo) errors.push("Imagen de Cuerpo Entero");
    if (!form.images.prueba) errors.push("Imagen de Prueba");

    if (errors.length > 0) {
      alert(
        `Por favor completa los siguientes campos obligatorios:\n\n• ${errors.join("\n• ")}`,
      );
      return;
    }

    upsertAvatar({
      ...form,
      id: form.id || `av-${form.name.toLowerCase().replace(/\s+/g, "-")}`,
    });
    setForm(initialFormState);
    alert("Rep guardado correctamente");
  }

  const previewAvatar = { ...initialFormState, ...form };
  const currentImage = form.images[viewMode];

  return (
    <div className="space-y-6">
      <Card className="border-slate-200/80 bg-white p-6 rounded-2xl shadow-sm">
        <div className="mb-6 flex items-center gap-2 text-brand-700">
          <Users size={18} />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Creación de Reps (Avatars) y Estilos de Visita
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Nombre *</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ej. Sofia Mendez"
              />
            </div>
            <div>
              <Label>Región Global</Label>
              <Select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
              >
                {globalRegions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label>Género</Label>
              <Select
                value={form.gender}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value as Gender })
                }
              >
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="neutro">Neutro</option>
              </Select>
            </div>
            <div>
              <Label>Acento</Label>
              <Select
                value={form.accent}
                onChange={(e) =>
                  setForm({ ...form, accent: e.target.value as AccentRegion })
                }
              >
                {accents.map((acc) => (
                  <option key={acc} value={acc}>
                    {acc}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label>Formador</Label>
              <Select
                value={form.formador}
                onChange={(e) => setForm({ ...form, formador: e.target.value })}
              >
                {formadorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label>
                <span className="flex items-center gap-1">
                  <Palette size={12} /> Tono de piel *
                </span>
              </Label>
              <Input
                value={form.skinTone}
                onChange={(e) => setForm({ ...form, skinTone: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <Label>Rasgos corporativos y de identidad *</Label>
              <Textarea
                value={form.traits}
                onChange={(e) => setForm({ ...form, traits: e.target.value })}
                placeholder="Rasgos posibles que le darán identidad a cada Rep."
              />
            </div>
            <div>
              <Label>
                <span className="flex items-center gap-1">
                  <Shirt size={12} /> Vestimenta *
                </span>
              </Label>
              <Input
                value={form.attire}
                onChange={(e) => setForm({ ...form, attire: e.target.value })}
                placeholder="Ej. blazer corporativo"
              />
            </div>
            <div>
              <Label>
                <span className="flex items-center gap-1">
                  <Sparkles size={12} /> Personalidad *
                </span>
              </Label>
              <Input
                value={form.personality}
                onChange={(e) =>
                  setForm({ ...form, personality: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-700">
                  <User size={16} />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Vista previa del Avatar
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-white p-6 text-center min-h-[240px] flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={`Vista ${viewMode}`}
                    className="w-32 h-32 object-cover rounded-xl shadow-md mb-2"
                  />
                ) : (
                  <AvatarFace avatar={previewAvatar} size="lg" />
                )}
                <p className="mt-3 text-lg font-black text-slate-900">
                  {previewAvatar.name || "Sin nombre asignado"}
                </p>
                <p className="text-xs text-slate-500">
                  {viewMode.toUpperCase()} - Formador:{" "}
                  <span className="font-semibold">{form.formador}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={14} className="mr-2" /> Subir {viewMode}
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center gap-2">
                {(["torso", "cuerpo", "prueba"] as const).map((mode) => (
                  <Button
                    key={mode}
                    size="sm"
                    variant={viewMode === mode ? "primary" : "outline"}
                    onClick={() => setViewMode(mode)}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </Button>
                ))}
              </div>
              <Button
                onClick={save}
                className="w-full bg-brand-700 hover:bg-brand-800 text-white font-medium"
              >
                Guardar Rep
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
