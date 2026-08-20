import { useState } from "react";
import { Plus } from "lucide-react";
import { DocumentList } from "../../components/academy";
import { Button, TabBar, TabPill } from "../../components/ui";
import type { MedicalLine } from "../../types/academia";

/** Pantalla del Director Médico: líneas médicas y diagnósticos. */
export function MedicalLinesView({
  lines,
  onAddLine,
  onAddDiagnosis,
  onUploadDocument,
}: {
  lines: MedicalLine[];
  onAddLine: () => void;
  onAddDiagnosis: (lineId: string) => void;
  onUploadDocument: (lineId: string, diagnosisId: string) => void;
}) {
  const [selectedLineId, setSelectedLineId] = useState<string | null>(
    lines.length > 0 ? lines[0].id : null,
  );
  const [selectedDiagnosisId, setSelectedDiagnosisId] = useState<string | null>(
    null,
  );

  const selectedLine = lines.find((line) => line.id === selectedLineId);

  // Al cambiar de línea se selecciona automáticamente su primer diagnóstico
  const handleLineSelect = (lineId: string) => {
    setSelectedLineId(lineId);
    const line = lines.find((item) => item.id === lineId);
    setSelectedDiagnosisId(
      line && line.diagnoses.length > 0 ? line.diagnoses[0].id : null,
    );
  };

  const selectedDiagnosis = selectedLine?.diagnoses.find(
    (diagnosis) => diagnosis.id === selectedDiagnosisId,
  );

  return (
    <div className="space-y-4">
      <TabBar>
        {lines.map((line) => (
          <TabPill
            key={line.id}
            active={selectedLineId === line.id}
            onClick={() => handleLineSelect(line.id)}
          >
            {line.name}
          </TabPill>
        ))}
        <Button variant="outline" size="sm" onClick={onAddLine}>
          <Plus size={14} className="mr-1" />
          Crear más líneas
        </Button>
      </TabBar>

      {selectedLine && (
        <div className="space-y-4">
          <TabBar bordered>
            {selectedLine.diagnoses.map((diagnosis) => (
              <TabPill
                key={diagnosis.id}
                size="sm"
                active={selectedDiagnosisId === diagnosis.id}
                onClick={() => setSelectedDiagnosisId(diagnosis.id)}
              >
                {diagnosis.name}
              </TabPill>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAddDiagnosis(selectedLine.id)}
            >
              <Plus size={14} className="mr-1" />
              Crear otro diagnóstico
            </Button>
          </TabBar>

          {selectedDiagnosis && (
            <DocumentList
              documents={selectedDiagnosis.documents}
              title={`Documentos clínicos para ${selectedDiagnosis.name}`}
              onUpload={() =>
                onUploadDocument(selectedLine.id, selectedDiagnosis.id)
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
