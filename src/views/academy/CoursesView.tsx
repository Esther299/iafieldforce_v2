import { BookOpen, Plus } from "lucide-react";
import { CourseCard } from "../../components/academy";
import { Badge, Button, SectionLabel } from "../../components/ui";
import type { Course } from "../../types/academia";

/** Pantalla de cursos formativos. */
export function CoursesView({
  courses,
  onCreateCourse,
  onUploadDocument,
}: {
  courses: Course[];
  onCreateCourse: () => void;
  onUploadDocument: (courseId: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionLabel icon={<BookOpen size={18} />}>Cursos</SectionLabel>
        <Badge>{courses.length} cursos</Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onUpload={() => onUploadDocument(course.id)}
          />
        ))}
      </div>
      <Button onClick={onCreateCourse}>
        <Plus size={18} className="mr-2" />
        Crear Nuevo Curso
      </Button>
    </div>
  );
}
