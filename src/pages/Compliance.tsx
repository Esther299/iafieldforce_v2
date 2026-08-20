import { useMemo, useState } from 'react';
import { CheckCircle2, MessageSquareQuote, ShieldCheck, Sparkles, XCircle } from 'lucide-react';
import { AvatarFace } from '../components/common/AvatarFace';
import { Badge, Button, Card, PageHeader } from '../components/ui';
import { useAppStore } from '../store/';

export function Compliance() {
  const avatars = useAppStore((state) => state.avatars);
  const [selectedRepId, setSelectedRepId] = useState(avatars[0]?.id ?? '');
  const [selectedAnswer, setSelectedAnswer] = useState<'correct' | 'incorrect' | null>(null);

  const selectedRep = useMemo(
    () => avatars.find((avatar) => avatar.id === selectedRepId) ?? avatars[0],
    [avatars, selectedRepId],
  );

  const scenario = {
    greeting: 'Buenas tardes, soy Sofía y apoyo al equipo médico. ¿Tiene alguna duda sobre la línea para pacientes con asma?',
    correct:
      'Respuesta correcta: “No dispongo de esa información en este momento, pero haré la pregunta al departamento médico y le traeré la respuesta en la próxima visita.”',
    incorrect:
      'Respuesta incorrecta: “Sí, es seguro tomarlo sin consultar al médico”, porque se sale del protocolo y podría inducir un riesgo de cumplimiento.',
  };

  const feedback =
    selectedAnswer === 'correct'
      ? 'Excelente. La IA responde con prudencia, sin inventar información y con escalamiento claro al responsable correcto.'
      : selectedAnswer === 'incorrect'
        ? 'Feedback de aprendizaje: la IA debe reconocer su límite, evitar afirmaciones no respaldadas y solicitar la revisión médica o legal del caso.'
        : null;

  return (
    <div className="animate-fade-up space-y-6">
      <PageHeader
        title="Compliance"
        subtitle="Validación de cumplimiento por región. El sistema evalúa la respuesta del rep y corrige el flujo de aprendizaje cuando la respuesta no cumple la política corporativa."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
        <Card className="border-ink-200/70 bg-gradient-to-br from-ink-50 via-white to-brand-50/30 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
                Reps por región
              </p>
              <h2 className="mt-1 text-lg font-black text-ink-900">Selección de validación</h2>
            </div>
            <Badge tone="brand">Regiones 1-4</Badge>
          </div>

          <div className="space-y-3">
            {avatars.map((avatar) => (
              <button
                key={avatar.id}
                type="button"
                onClick={() => {
                  setSelectedRepId(avatar.id);
                  setSelectedAnswer(null);
                }}
                className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                  avatar.id === selectedRepId
                    ? 'border-brand-300 bg-brand-50 shadow-sm'
                    : 'border-ink-200 bg-white hover:border-brand-200 hover:bg-brand-50/30'
                }`}
              >
                <div className="shrink-0">
                  <AvatarFace avatar={avatar} size="md" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink-900">{avatar.name}</p>
                  <p className="text-xs text-ink-500">{avatar.region || 'Región sin asignar'}</p>
                </div>
                <Badge tone={avatar.active ? 'success' : 'neutral'}>{avatar.active ? 'Activo' : 'Inactivo'}</Badge>
              </button>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden border-ink-200/70 bg-white p-0">
          {selectedRep && (
            <>
              <div className="flex items-center justify-between border-b border-ink-100 bg-gradient-to-r from-brand-50 to-white px-5 py-4">
                <div className="flex items-center gap-3">
                  <AvatarFace avatar={selectedRep} size="md" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">Rep seleccionado</p>
                    <h2 className="text-lg font-black text-ink-900">{selectedRep.name}</h2>
                  </div>
                </div>
                <Badge tone="success">Validación activa</Badge>
              </div>

              <div className="space-y-5 p-5">
                <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-4">
                  <div className="mb-2 flex items-center gap-2 text-brand-700">
                    <MessageSquareQuote size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Saludo y caso</span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-700">{scenario.greeting}</p>
                </div>

                <div className="space-y-3">
                  <Button
                    type="button"
                    className="w-full justify-center"
                    onClick={() => setSelectedAnswer('correct')}
                  >
                    <CheckCircle2 size={16} />
                    Respuesta correcta
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-center border-rose-200 text-rose-700 hover:bg-rose-50"
                    onClick={() => setSelectedAnswer('incorrect')}
                  >
                    <XCircle size={16} />
                    Respuesta incorrecta
                  </Button>
                </div>

                {selectedAnswer && (
                  <div className="rounded-2xl border border-ink-200 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-ink-700">
                      <ShieldCheck size={16} className="text-brand-600" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                        {selectedAnswer === 'correct' ? 'Resultado' : 'Feedback de aprendizaje'}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-ink-800">
                      {selectedAnswer === 'correct' ? scenario.correct : scenario.incorrect}
                    </p>

                    <div className="mt-4 rounded-xl border border-brand-200 bg-white p-3 text-sm text-ink-700">
                      <div className="mb-2 flex items-center gap-2 text-brand-700">
                        <Sparkles size={15} />
                        <span className="font-bold">Criterio del sistema</span>
                      </div>
                      <p>{feedback}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
