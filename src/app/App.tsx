import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/app/routes";
import "leaflet/dist/leaflet.css";

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-500">
      Cargando…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
