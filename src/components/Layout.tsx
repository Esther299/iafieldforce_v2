import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  Package,
  Megaphone,
  Contact,
  BarChart3,
  Wallet,
  GraduationCap,
  Menu,
  X,
  UserCircle,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/cn";
import { useAppStore } from "../store/useAppStore";
import { type UserRole } from "../types";
import { Button } from "../components/ui";

const nav = [
  { to: "/", label: "Centro de Mando", icon: LayoutDashboard },
  { to: "/gobernanza", label: "Gobernanza", icon: ShieldCheck },
  { to: "/creacion-del-equipo", label: "Creación del Equipo", icon: Users },
  { to: "/academia", label: "Academia", icon: GraduationCap },
  { to: "/compliance", label: "Compliance", icon: CheckCircle2 },
  { to: "/productos", label: "Productos", icon: Package },
  { to: "/campanas", label: "Campañas", icon: Megaphone },
  { to: "/crm", label: "CRM", icon: Contact },
  { to: "/analitica", label: "Analítica", icon: BarChart3 },
  { to: "/creditos", label: "Créditos", icon: Wallet },
];

const roleOptions: Array<{ value: UserRole; label: string }> = [
  { value: "sales-force-creator", label: "Sales Force Creator" },
  { value: "marketing", label: "Marketing" },
  { value: "commercial", label: "Commercial" },
  { value: "operations", label: "Operations" },
  { value: "compliance", label: "Compliance" },
];

// Mapeo de información de usuario según el rol activo
const userInfoMap: Record<UserRole, { name: string; roleTitle: string }> = {
  "sales-force-creator": {
    name: "Esteban Abad",
    roleTitle: "Sales Force Creator",
  },
  marketing: { name: "Esteban Abad", roleTitle: "Gerente de Marketing" },
  commercial: { name: "Esteban Abad", roleTitle: "Gerente Comercial" },
  operations: { name: "Esteban Abad", roleTitle: "Gerente de Operaciones" },
  compliance: { name: "María José", roleTitle: "Gerente de Compliance" },
};

export function Layout() {
  const [open, setOpen] = useState(false);

  // Consumo desde el store actualizado
  const balance = useAppStore((s) => s.credits.balance);
  const activeUserRole = useAppStore((s) => s.activeUserRole);
  const setActiveUserRole = useAppStore((s) => s.setActiveUserRole);

  const showBalance =
    activeUserRole === "marketing" || activeUserRole === "commercial";

  const currentUserInfo = userInfoMap[activeUserRole] || {
    name: "Esteban Abad",
    roleTitle: "Gerente de Marketing",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/30 via-slate-50 to-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 border-r border-ink-200/60 bg-white/95 p-5 backdrop-blur-xl transition-all duration-300 ease-in-out md:static md:translate-x-0",
            open ? "translate-x-0 shadow-2xl" : "-translate-x-full",
          )}
        >
          <div className="mb-6 flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#1e3579] text-3xl font-black text-[#1e3579]">
                ia
              </div>
              <span className="text-4xl font-black tracking-tight text-[#1e3579]">
                fieldforce
              </span>
            </div>
            <button
              className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700 md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tarjeta de identificación del usuario con fondo gris azulado */}
          <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100 p-4 shadow-sm ring-1 ring-slate-200/60">
            <p className="text-base font-bold text-slate-900">
              {currentUserInfo.name}
            </p>
            <p className="mt-0.5 text-xs font-medium text-slate-600">
              {currentUserInfo.roleTitle}
            </p>
          </div>

          <nav className="scrollbar-thin flex max-h-[calc(100vh-250px)] flex-col gap-1 overflow-y-auto pr-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#1e3579] text-white shadow-md shadow-brand-900/20 ring-1"
                      : "text-ink-600 hover:bg-ink-100/80 hover:text-ink-900",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-ink-100/60 text-ink-500 group-hover:bg-ink-200/60",
                      )}
                    >
                      <item.icon size={16} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer del Sidebar con rol activo */}
          <div className="absolute bottom-4 left-4 right-4 hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 p-3 text-white shadow-lg md:block">
            <p className="text-xs font-semibold">🔬 IA Fieldforce</p>
            <p className="mt-0.5 text-[11px] text-ink-300">
              Operador:{" "}
              {roleOptions.find((r) => r.value === activeUserRole)?.label}
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink-200/60 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-sm md:px-8">
            <button
              className="rounded-xl border border-ink-200 bg-white p-2 text-ink-600 md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>

            <div className="flex items-center gap-3 ml-auto">
              {showBalance && (
                <div className="hidden items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800 md:flex">
                  <Wallet size={14} />
                  <span>${balance.toLocaleString()}</span>
                </div>
              )}

              <select
                value={activeUserRole}
                onChange={(e) => setActiveUserRole(e.target.value as UserRole)}
                className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 outline-none focus:border-brand-400"
              >
                {roleOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-full p-0"
              >
                <UserCircle size={20} />
              </Button>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
