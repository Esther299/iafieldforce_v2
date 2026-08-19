import { useState } from 'react';
import {
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  Plus,
  Sparkles,
  Upload,
  Users,
} from 'lucide-react';
import { Badge, Button, Card, PageHeader } from '../components/ui';
import { useAppStore } from '../store/useAppStore';

const roles = [
  'Gerente de Entrenamiento',
  'Gerente de Recursos Humanos',
  'Gerente Comercial',
  'Gerente de Marketing',
  'Gerente de Marca',
  'Director Médico',
  'Gerente de Compliance',
];

const areaTabs = {
  HR: ['Descripción de la compañía', 'Políticas', 'Preguntas frecuentes'],
  Commercial: ['Listas de precios', 'Políticas comerciales', 'Promociones vigentes', 'Preguntas frecuentes'],
  Marketing: ['Documentos de identidad de marca', 'Políticas de marketing', 'Preguntas frecuentes'],
};

const trainerCards = [
  { name: 'Trainer 1', role: 'Médicos', description: 'Estilo técnico, claro y orientado a evidencia.', accent: 'Acento neutro', video: 'Video 1' },
  { name: 'Trainer 2', role: 'Comercial', description: 'Estilo de cierre y relación con la cuenta.', accent: 'Acento regional', video: 'Video 2' },
  { name: 'Trainer 3', role: 'Compliance', description: 'Estilo cauteloso y preciso para temas regulatorios.', accent: 'Acento formal', video: 'Video 1' },
  { name: 'Trainer 4', role: 'Farmacias', description: 'Estilo cercano, amable y de apoyo comercial.', accent: 'Acento local', video: 'Video 2' },
];

const courseCards = [
  { title: 'Curso de Manejo de Objeciones', date: '12 Sep 2026', instructor: 'Trainer 1', accent: 'Médicos', docs: ['PDF', 'PPT', 'Video', 'Audio'] },
  { title: 'Cómo lograr el compromiso del médico', date: '18 Sep 2026', instructor: 'Trainer 2', accent: 'Comercial', docs: ['PDF', 'PPT', 'Video', 'Audio'] },
  { title: 'Compliance en atención farmacéutica', date: '24 Sep 2026', instructor: 'Trainer 3', accent: 'Farmacias', docs: ['PDF', 'PPT', 'Video', 'Audio'] },
];

export function Academy() {
  const { academyModules } = useAppStore();
  const [activeArea, setActiveArea] = useState<'HR' | 'Commercial' | 'Marketing'>('HR');
  const [activeSubtab, setActiveSubtab] = useState(areaTabs.HR[0]);

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Academia"
        subtitle="Estructura jerárquica, entrenadores, cursos formativos y materiales específicos por área de negocio."
        actions={
          <Button className="shadow-md shadow-brand-700/20">
            <Plus size={18} />
            Crear Nuevo Formador
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roles.map((role) => (
          <Card key={role} className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4">
            <div className="flex items-center gap-2 text-brand-700">
              <Users size={15} />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Rol</p>
            </div>
            <p className="mt-3 text-sm font-black text-ink-900">{role}</p>
          </Card>
        ))}
      </div>

      <Card className="border-ink-200/80 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-brand-700">
            <GraduationCap size={18} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Trainers</p>
          </div>
          <Badge tone="brand">{trainerCards.length} formadores</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trainerCards.map((trainer) => (
            <Card key={trainer.name} className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-sm font-black text-brand-700">
                  {trainer.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-black text-ink-900">{trainer.name}</p>
                  <p className="text-xs text-ink-500">{trainer.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-ink-600">{trainer.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <Badge tone="success">{trainer.accent}</Badge>
                <Badge tone="neutral">{trainer.video}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="border-ink-200/80 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-brand-700">
            <BookOpen size={18} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Cursos</p>
          </div>
          <Badge tone="neutral">{academyModules.length} módulos</Badge>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {courseCards.map((course) => (
            <Card key={course.title} className="border-ink-200/80 bg-gradient-to-br from-white to-brand-50/20 p-4">
              <div className="flex items-center justify-between gap-2">
                <Badge tone="brand">{course.accent}</Badge>
                <Badge tone="neutral">{course.date}</Badge>
              </div>
              <p className="mt-3 text-lg font-black text-ink-900">{course.title}</p>
              <p className="mt-1 text-xs text-ink-500">Instructor: {course.instructor}</p>
              <div className="mt-4 rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-3">
                <div className="mb-2 flex items-center gap-2 text-brand-700">
                  <Upload size={14} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Subir materiales</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.docs.map((doc) => (
                    <Badge key={doc} tone="neutral">{doc}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="border-ink-200/80 bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-brand-700">
          <Building2 size={18} />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Áreas específicas</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {(['HR', 'Commercial', 'Marketing'] as const).map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => {
                setActiveArea(area);
                setActiveSubtab(areaTabs[area][0]);
              }}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                activeArea === area ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 border-b border-ink-100 pb-3">
          {areaTabs[activeArea].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSubtab(tab)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                activeSubtab === tab ? 'bg-brand-100 text-brand-800' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-ink-200 bg-ink-50/40 p-4">
          <div className="mb-3 flex items-center gap-2 text-brand-700">
            <FileText size={15} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">{activeSubtab}</p>
          </div>

          {activeArea === 'HR' && activeSubtab === 'Descripción de la compañía' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Historia corporativa: expansión regional, evolución del negocio y apuesta por la excelencia comercial.</p>
              <p>Equipo ejecutivo: liderazgo, dirección comercial, medicina, marketing y compliance.</p>
            </div>
          )}

          {activeArea === 'HR' && activeSubtab === 'Políticas' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Políticas de empleo, contratación, vacaciones, puntualidad y desarrollo profesional del equipo.</p>
            </div>
          )}

          {activeArea === 'HR' && activeSubtab === 'Preguntas frecuentes' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Preguntas frecuentes sobre médicos, farmacias y primeros pasos del personal comercial.</p>
            </div>
          )}

          {activeArea === 'Commercial' && activeSubtab === 'Listas de precios' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Listado actualizado por línea, canal y región con vigencia mensual.</p>
            </div>
          )}

          {activeArea === 'Commercial' && activeSubtab === 'Políticas comerciales' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Reglas de descuento, manejo de cuentas clave, activación regional y cumplimiento de políticas.</p>
            </div>
          )}

          {activeArea === 'Commercial' && activeSubtab === 'Promociones vigentes' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Promociones activas con recordatorio automático al final del mes para el gerente y alertas por email al equipo de gobernanza.</p>
            </div>
          )}

          {activeArea === 'Commercial' && activeSubtab === 'Preguntas frecuentes' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Consultas sobre entregas, cartera, escalamiento y validación del flujo comercial.</p>
            </div>
          )}

          {activeArea === 'Marketing' && activeSubtab === 'Documentos de identidad de marca' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Manifesto, propósito, visión y lenguaje de marca para la comunicación consistente en todas las capas.</p>
            </div>
          )}

          {activeArea === 'Marketing' && activeSubtab === 'Políticas de marketing' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Uso de mensajes, validación de campañas, aprobación de piezas y lineamientos de promoción.</p>
            </div>
          )}

          {activeArea === 'Marketing' && activeSubtab === 'Preguntas frecuentes' && (
            <div className="space-y-2 text-sm text-ink-700">
              <p>Consultas sobre identidad, segmentación, activación y soporte creativo de campañas.</p>
            </div>
          )}
        </div>
      </Card>

      <Card className="border-ink-200/80 bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-brand-700">
          <Sparkles size={18} />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Documentos compartidos</p>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {['PDF', 'Presentación', 'Video', 'Audio'].map((doc) => (
            <div key={doc} className="rounded-2xl border border-ink-200 bg-ink-50 p-3 text-center text-sm font-medium text-ink-700">
              {doc}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
