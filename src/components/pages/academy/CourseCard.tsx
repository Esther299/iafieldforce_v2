import { Calendar, Plus, Upload, User } from "lucide-react";
import type { Course } from "../../../types/academia";
import { Badge, Button, Card, SectionLabel } from "../../ui";

export function CourseCard({
  course,
  onUpload,
}: {
  course: Course;
  onUpload: () => void;
}) {
  return (
    <Card className="p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-black text-navy">{course.title}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <span>
              <Calendar size={12} className="mr-1 inline" />
              {course.date}
            </span>
            <span>
              <User size={12} className="mr-1 inline" />
              {course.instructor}
            </span>
          </div>
        </div>
        <Badge tone="brand">Curso</Badge>
      </div>
      <div className="mt-3">
        <p className="text-sm font-semibold text-ink-700">Objetivo:</p>
        <p className="text-sm text-ink-600">{course.objective}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold text-ink-700">Instrucciones:</p>
        <p className="text-sm text-ink-600">{course.instructions}</p>
      </div>
      <div className="mt-3 rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-3">
        <div className="flex items-center justify-between">
          <SectionLabel icon={<Upload size={14} />}>
            Materiales del curso
          </SectionLabel>
          <Button
            variant="ghost"
            size="sm"
            onClick={onUpload}
            aria-label={`Cargar material para ${course.title}`}
          >
            <Plus size={14} />
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {course.documents.length === 0 ? (
            <p className="text-xs text-ink-400">No hay materiales cargados.</p>
          ) : (
            course.documents.map((doc) => (
              <Badge key={doc.name}>{doc.name}</Badge>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}
