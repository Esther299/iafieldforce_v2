import { useState } from 'react';
import {
  Palette,
  Plus,
  Shirt,
  Sparkles,
  User,
  Users,
} from 'lucide-react';
import { AvatarFace } from '../components/AvatarFace';
import {
  Badge,
  Button,
  Card,
  ConfirmDialog,
  Input,
  Label,
  Modal,
  PageHeader,
  Select,
  Textarea,
} from '../components/ui';
import { useAppStore } from '../store/useAppStore';
import type { AccentRegion, AvatarConfig, Gender } from '../types';

const accents: AccentRegion[] = ['cdmx', 'norte', 'bajio', 'sur', 'caribe', 'andino', 'rioplatense', 'neutro'];
const gradients = ['from-teal-400 to-cyan-700', 'from-sky-400 to-indigo-700', 'from-rose-400 to-fuchsia-800', 'from-amber-400 to-orange-700', 'from-emerald-400 to-green-800'];

const initialFormState: AvatarConfig = {
  id: '',
  name: '',
  gender: 'femenino',
  skinTone: 'media',
  traits: '',
  accent: 'cdmx',
  attire: '',
  region: 'Region 1',
  personality: 'amigable y cortés',
  photoGradient: gradients[0],
  active: true,
};

const regions = [
  { name: 'Region 1', coverage: 'Norte / Centro', reps: 5 },
  { name: 'Region 2', coverage: 'Occidente / Bajío', reps: 4 },
  { name: 'Region 3', coverage: 'Sur / Sureste', reps: 6 },
  { name: 'Region 4', coverage: 'Metropolitano', reps: 3 },
];

const audienceStyles = [
  { audience: 'Médicos', trainer: 'Trainer 1', description: 'Estilo directivo, cercano y clínico para consultas médicas.', style: 'Visita técnica', tone: 'brand' },
  { audience: 'Farmacias', trainer: 'Trainer 4', description: 'Estilo más amable y comercial para dependientes y boticarios.', style: 'Visita comercial', tone: 'success' },
];

export function Avatars() {
  const { avatars, upsertAvatar } = useAppStore();
  const [selectedRegion, setSelectedRegion] = useState('Region 1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<AvatarConfig>(initialFormState);
  const [avatarToDelete, setAvatarToDelete] = useState<AvatarConfig | null>(null);

  function handleOpenCreate() {
    setForm({
      ...initialFormState,
      region: selectedRegion,
      photoGradient: gradients[Math.floor(Math.random() * gradients.length)],
    });
    setIsModalOpen(true);
  }

  function handleOpenEdit(avatar: AvatarConfig) {
    setForm(avatar);
    setIsModalOpen(true);
  }

  function save() {
    if (!form.name.trim()) return;
    upsertAvatar({
      ...form,
      id: form.id || `av-${form.name.toLowerCase().replace(/\s+/g, '-')}`,
      region: form.region || selectedRegion,
    });
    setIsModalOpen(false);
    setForm(initialFormState);
  }

  function handleDeleteConfirm() {
    if (!avatarToDelete) return;
    useAppStore.setState((state) => ({
      avatars: state.avatars.filter((a) => a.id !== avatarToDelete.id),
    }));
    setAvatarToDelete(null);
  }

  const regionMembers = avatars.filter((avatar) => (avatar.region || 'Region 1') === selectedRegion);
  const previewAvatar = { ...initialFormState, ...form };

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Creación del Equipo"
        subtitle="Estructura regional, edición de reps, estilos de visita y asignación de personal por región."
        actions={
          <Button onClick={handleOpenCreate} className="shadow-md shadow-brand-700/20">
            <Plus size={18} />
            Crear Rep
          </Button>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-ink-200/80 bg-gradient-to-br from-white via-brand-50/20 to-slate-50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">Estructura Regional</p>
              <h2 className="mt-1 text-xl font-black text-ink-900">Regiones 1 - 4</h2>
            </div>
            <Badge tone="brand">4 regiones</Badge>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {regions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region.name)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selectedRegion === region.name
                    ? 'border-brand-300 bg-brand-50 shadow-sm'
                    : 'border-ink-200 bg-white hover:border-brand-200 hover:bg-brand-50/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-black text-ink-900">{region.name}</p>
                  <Badge tone={selectedRegion === region.name ? 'success' : 'neutral'}>{region.reps} reps</Badge>
                </div>
                <p className="mt-2 text-xs text-ink-600">{region.coverage}</p>
              </button>
            ))}
          </div>
        </Card>

        <Card className="border-ink-200/80 bg-gradient-to-br from-brand-50/30 to-white p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Avatar preview</p>
          <div className="mt-4 flex flex-col items-center gap-4 rounded-2xl border border-brand-100 bg-white/80 p-4">
            <AvatarFace avatar={previewAvatar} size="lg" />
            <div className="text-center">
              <p className="text-lg font-black text-ink-900">{previewAvatar.name || 'Nuevo Rep'}</p>
              <p className="text-xs text-ink-500">{previewAvatar.region || selectedRegion}</p>
            </div>
            <Button variant="outline" size="sm">Test run</Button>
          </div>
        </Card>
      </div>

      <Card className="border-ink-200/80 bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-brand-700">
          <Users size={18} />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Creación de Reps (Avatars)</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Nombre</Label>
              <Input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ej. Sofia Mendez" />
            </div>
            <div>
              <Label>Región</Label>
              <Select value={form.region || selectedRegion} onChange={(event) => setForm({ ...form, region: event.target.value })}>
                {regions.map((region) => (
                  <option key={region.name} value={region.name}>{region.name}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label>Género</Label>
              <Select value={form.gender} onChange={(event) => setForm({ ...form, gender: event.target.value as Gender })}>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="neutro">Neutro</option>
              </Select>
            </div>
            <div>
              <Label>Acento</Label>
              <Select value={form.accent} onChange={(event) => setForm({ ...form, accent: event.target.value as AccentRegion })}>
                {accents.map((accent) => (
                  <option key={accent} value={accent}>{accent}</option>
                ))}
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label>Rasgos corporativos</Label>
              <Textarea value={form.traits} onChange={(event) => setForm({ ...form, traits: event.target.value })} placeholder="Ej. cercano, profesional, técnico y motivador." />
            </div>
            <div>
              <Label><span className="flex items-center gap-1"><Palette size={12} /> Tono de piel</span></Label>
              <Input value={form.skinTone} onChange={(event) => setForm({ ...form, skinTone: event.target.value })} />
            </div>
            <div>
              <Label><span className="flex items-center gap-1"><Shirt size={12} /> Vestimenta</span></Label>
              <Input value={form.attire} onChange={(event) => setForm({ ...form, attire: event.target.value })} placeholder="Ej. blazer corporativo" />
            </div>
            <div className="md:col-span-2">
              <Label><span className="flex items-center gap-1"><Sparkles size={12} /> Personalidad</span></Label>
              <Input value={form.personality} onChange={(event) => setForm({ ...form, personality: event.target.value })} />
            </div>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-brand-700">
              <User size={16} />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Vista previa</p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-4 text-center">
              <AvatarFace avatar={previewAvatar} size="lg" />
              <p className="mt-3 text-lg font-black text-ink-900">{previewAvatar.name || 'Sin nombre'}</p>
              <p className="text-xs text-ink-500">{previewAvatar.personality}</p>
            </div>
            <div className="mt-4 space-y-2">
              <Button onClick={save} className="w-full">Guardar rep</Button>
              <Button variant="outline" className="w-full">Test run</Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {audienceStyles.map((item) => (
          <Card key={item.audience} className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/30 p-5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">{item.audience}</p>
              <Badge tone={item.tone as 'brand' | 'success'}>{item.trainer}</Badge>
            </div>
            <p className="mt-3 text-lg font-black text-ink-900">{item.style}</p>
            <p className="mt-1 text-sm text-ink-600">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">Reps asignados por región</p>
          <Badge tone="neutral">{regionMembers.length} registros</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {regionMembers.length > 0 ? (
            regionMembers.map((avatar) => (
              <Card key={avatar.id} className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4">
                <div className="flex items-center gap-3">
                  <AvatarFace avatar={avatar} size="md" />
                  <div>
                    <p className="text-base font-black text-ink-900">{avatar.name}</p>
                    <p className="text-xs text-ink-500">{avatar.region}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-ink-600">{avatar.traits || 'Perfil de rep corporativo'}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Badge tone="success">{avatar.personality}</Badge>
                  <Button variant="ghost" size="sm" onClick={() => handleOpenEdit(avatar)}>Editar</Button>
                </div>
              </Card>
            ))
          ) : (
            <Card className="border-dashed border-ink-200 bg-ink-50/50 p-8 text-center text-sm text-ink-500 md:col-span-2 xl:col-span-4">
              No hay reps asignados a esta región aún. Crea el primer avatar para empezar.
            </Card>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={form.id ? 'Editar Rep' : 'Crear Rep'} className="max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="space-y-4 pt-2">
          <div>
            <Label>Nombre</Label>
            <Input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Género</Label>
              <Select value={form.gender} onChange={(event) => setForm({ ...form, gender: event.target.value as Gender })}>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="neutro">Neutro</option>
              </Select>
            </div>
            <div>
              <Label>Región</Label>
              <Select value={form.region || selectedRegion} onChange={(event) => setForm({ ...form, region: event.target.value })}>
                {regions.map((region) => (
                  <option key={region.name} value={region.name}>{region.name}</option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <Label>Acento</Label>
            <Select value={form.accent} onChange={(event) => setForm({ ...form, accent: event.target.value as AccentRegion })}>
              {accents.map((accent) => (
                <option key={accent} value={accent}>{accent}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label>Rasgos</Label>
            <Textarea value={form.traits} onChange={(event) => setForm({ ...form, traits: event.target.value })} />
          </div>
          <div className="flex items-center justify-between gap-3">
            <Button onClick={save}>Guardar cambios</Button>
            {form.id && (
              <Button variant="ghost" className="text-rose-600 hover:bg-rose-50" onClick={() => setAvatarToDelete(form)}>
                Eliminar
              </Button>
            )}
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        isOpen={avatarToDelete !== null}
        onClose={() => setAvatarToDelete(null)}
        title="¿Eliminar avatar?"
        description={`¿Estás seguro de que deseas eliminar el avatar de "${avatarToDelete?.name}"? Esta acción no se puede deshacer.`}
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        isDangerous
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
