import { useState } from "react";
import { AlertCircle, Bell, Clock, Mail } from "lucide-react";
import { DocumentList } from "@/features/academy/components";
import { Badge, Button, SectionLabel } from "@/shared/ui";
import type { AcademyDocument } from "@/features/academy/types";

/** Pantalla comercial de promociones vigentes con recordatorios. */
export function PromotionsView({
  documents,
  onUpload,
}: {
  documents: AcademyDocument[];
  onUpload: () => void;
}) {
  const [showReminder, setShowReminder] = useState(false);

  const handleSendEmail = () => {
    setShowReminder(true);
    setTimeout(() => setShowReminder(false), 3000);
    // Simular envío de email
    alert(
      "📧 Email enviado al equipo de gobernanza con las promociones vigentes.",
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SectionLabel icon={<Bell size={18} />}>
          Promociones vigentes
        </SectionLabel>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="warn">
            <Clock size={12} className="mr-1 inline" />
            Recordatorio automático al final del mes
          </Badge>
          <Button variant="outline" size="sm" onClick={handleSendEmail}>
            <Mail size={14} className="mr-1" />
            Enviar email a gobernanza
          </Button>
        </div>
      </div>
      {showReminder && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <AlertCircle size={16} className="mr-2 inline" />
          Recordatorio: Al finalizar el mes, el sistema lanza un recordatorio al
          gerente comercial para cargar las promociones del próximo mes y envía
          un email a todo el equipo de gobernanza con las acciones requeridas.
        </div>
      )}
      <DocumentList documents={documents} onUpload={onUpload} />
    </div>
  );
}
