import type { Course } from "@/features/academy/types";

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Manejo de Objecciones",
    date: "18 agosto 2026",
    instructor: "Pedro Pérez",
    objective:
      "Capacitar a los visitadores médicos en técnicas efectivas para manejar objeciones comunes durante la visita.",
    instructions:
      "Revisar el material de apoyo, practicar role-playing y completar el cuestionario final.",
    documents: [
      { name: "Guía de objeciones.pdf", type: "pdf" },
      { name: "Ejercicios prácticos.pptx", type: "ppt" },
      { name: "Video demostración.mp4", type: "video" },
    ],
  },
  {
    id: "course-2",
    title: "Cómo lograr el compromiso del médico",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective:
      "Desarrollar habilidades para generar compromiso y fidelización del médico con la marca.",
    instructions:
      "Leer el caso de estudio, participar en el foro de discusión y presentar un plan de acción.",
    documents: [
      { name: "Casos de éxito.pdf", type: "pdf" },
      { name: "Plan de acción.docx", type: "doc" },
    ],
  },
  {
    id: "course-3",
    title: "POASDAS paos dpasoa",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective: "Curso de ejemplo para demostrar la funcionalidad.",
    instructions: "Completar los módulos y realizar la evaluación.",
    documents: [],
  },
  {
    id: "course-4",
    title: "impor asi iajs daosd a d",
    date: "1 Septiembre 2026",
    instructor: "Pedro Pérez",
    objective: "Curso de ejemplo para demostrar la funcionalidad.",
    instructions: "Completar los módulos y realizar la evaluación.",
    documents: [],
  },
];
