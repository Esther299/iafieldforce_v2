import {
  BadgeCheck,
  Ban,
  BookLock,
  ClipboardCheck,
  Database,
  MessageSquareQuote,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { Badge, Card, PageHeader } from '../components/ui';
import { useAppStore } from '../store/useAppStore';

const governanceBlocks = [
  {
    title: 'Gobernanza del Sistema',
    icon: Scale,
    description: 'Definición de estructura organizativa, regiones y aprobaciones.',
    rules: ['Estructura corporativa aprobada', 'Regiones definidas por responsable', 'Criterios de aprobación escalados'],
  },
  {
    title: 'Gobernanza de los Productos',
    icon: BadgeCheck,
    description: 'Construcción del portafolio y asignación de responsabilidades.',
    rules: ['Portfolio validado por brand manager', 'Responsables por línea', 'Indicaciones y etiquetado claros'],
  },
  {
    title: 'Gobernanza de las Campañas',
    icon: ClipboardCheck,
    description: 'Creación y aprobación de campañas conforme a la estrategia.',
    rules: ['Scripts aprobados', 'CTAs definidos', 'Aprobación final antes de lanzamiento'],
  },
  {
    title: 'Gobernanza de la Información',
    icon: Database,
    description: 'Definición de fuentes de IA y control de contenido externo.',
    rules: ['Sin terceros', 'Solo corpus interno', 'No alucinación ni información no aprobada'],
  },
];

export function Governance() {
  const { governanceRules } = useAppStore();

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Gobernanza"
        subtitle="Alineación de organización, productos, campañas e información para asegurar un sistema corporativo seguro y consistente."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {governanceBlocks.map((block) => {
          const Icon = block.icon;
          const activeRules = governanceRules.filter((rule) => rule.enforced).slice(0, 3);

          return (
            <Card key={block.title} className="overflow-hidden border-ink-200/80 bg-gradient-to-br from-white via-brand-50/20 to-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-100 p-2.5 text-brand-700">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-lg font-black text-ink-900">{block.title}</h2>
                </div>
                <Badge tone="brand">{activeRules.length} reglas</Badge>
              </div>

              <p className="mt-3 text-sm text-ink-600">{block.description}</p>

              <ul className="mt-4 space-y-2">
                {block.rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2 rounded-xl border border-ink-100 bg-white/70 px-3 py-2 text-sm text-ink-700">
                    <ShieldCheck size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <Card className="overflow-hidden border-ink-200/80 bg-gradient-to-br from-slate-50 via-white to-brand-50/20 p-6">
        <div className="flex items-center gap-2 text-ink-900">
          <MessageSquareQuote size={18} className="text-brand-600" />
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-700">
            Respuesta canónica fuera de límites
          </h3>
        </div>
        <blockquote className="mt-3 rounded-2xl border border-ink-200 bg-white/80 p-4 text-sm italic leading-relaxed text-ink-700 shadow-sm">
          “No dispongo de esa información en este momento, pero haré la pregunta al departamento médico, legal u otro correspondiente y le traeré la respuesta en su próxima visita.”
        </blockquote>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-ink-200/80 bg-white p-5">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <Ban size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Sin terceros</p>
          </div>
          <p className="text-sm text-ink-700">La IA utiliza solo documentación interna y aprobada; cualquier dato externo queda bloqueado.</p>
        </Card>
        <Card className="border-ink-200/80 bg-white p-5">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <BookLock size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Campañas</p>
          </div>
          <p className="text-sm text-ink-700">Toda respuesta debe mantener el mensaje del gerente de producto y evitar desviaciones no autorizadas.</p>
        </Card>
        <Card className="border-ink-200/80 bg-white p-5">
          <div className="mb-2 flex items-center gap-2 text-brand-700">
            <ShieldCheck size={16} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Cumplimiento</p>
          </div>
          <p className="text-sm text-ink-700">Se valida el tono, la evidencia y el proceso de escalamiento antes de enviar la visita o la campaña.</p>
        </Card>
      </div>
    </div>
  );
}
