import { useState } from "react";
import { PageHeader } from "../components/ui";
import { Regiones } from "./equipo/Regiones";
import { Reps } from "./equipo/Reps";
import { Equipo } from "./equipo/Equipo";

export function Teams() {
  const [activeTab, setActiveTab] = useState<"regiones" | "reps" | "equipo">(
    "regiones",
  );

  return (
    <div className="animate-fade-up space-y-6 bg-sky-200 min-h-screen p-6">
      <PageHeader
        title="Creación del Equipo"
        subtitle={
          activeTab === "regiones"
            ? "Aquí de crean y se dan estructura a las regiones"
            : activeTab === "reps"
              ? "Aquí de crean los representantes virtuales y se les asigna a las regiones"
              : "Visualización general de representantes agrupados por región"
        }
      />

      {/* Barra de navegación de pestañas (Estilo idéntico a tus capturas) */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setActiveTab("regiones")}
          className={`rounded-2xl px-6 py-4 text-sm font-bold transition-all shadow-sm ${
            activeTab === "regiones"
              ? "bg-brand-900 text-white shadow-md"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80"
          }`}
        >
          Estructura Regional
        </button>
        <button
          onClick={() => setActiveTab("reps")}
          className={`rounded-2xl px-6 py-4 text-sm font-bold transition-all shadow-sm ${
            activeTab === "reps"
              ? "bg-brand-900 text-white shadow-md"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80"
          }`}
        >
          Creación de Reps
        </button>
        <button
          onClick={() => setActiveTab("equipo")}
          className={`rounded-2xl px-6 py-4 text-sm font-bold transition-all shadow-sm ${
            activeTab === "equipo"
              ? "bg-brand-900 text-white shadow-md"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80"
          }`}
        >
          Equipo
        </button>
      </div>

      {/* Renderizado condicional de la subpágina activa */}
      <div className="pt-2">
        {activeTab === "regiones" && <Regiones />}
        {activeTab === "reps" && <Reps />}
        {activeTab === "equipo" && <Equipo />}
      </div>
    </div>
  );
}
