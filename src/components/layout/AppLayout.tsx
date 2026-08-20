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
  Bell,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/cn";
import { useAppStore } from "../../store/";
import { type UserRole } from "../../types";
import { Badge, Button } from "../ui";

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

const quickLinks = [
  { to: "/academia", label: "Academia IA" },
  { to: "/territorio", label: "Territorio VM" },
  { to: "/visita", label: "Visita demo" },
  { to: "/prueba", label: "Test de campaña" },
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

export function AppLayout() {
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
    <div className="min-h-screen bg-surface">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-72 border-r border-ink-200/60 bg-white/95 p-5 backdrop-blur-xl transition-all duration-300 ease-in-out md:static md:translate-x-0",
            open ? "translate-x-0 shadow-2xl" : "-translate-x-full",
          )}
        >
          <div className="mb-6 flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-navy text-3xl font-black text-navy">
                ia
              </div>
              <span className="text-4xl font-black tracking-tight text-navy">
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
                      ? "bg-navy text-white shadow-md shadow-brand-900/20 ring-1"
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
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 border-t border-ink-100 pt-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400">
              Quick links
            </p>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1.5 text-[11px] font-medium text-ink-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Footer del Sidebar con rol activo */}
          <div className="absolute bottom-4 left-4 right-4 hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 p-3 text-white shadow-lg md:block">
            <p className="text-xs font-semibold">🔬 IA Fieldforce</p>
            <p className="mt-0.5 text-[11px] text-ink-300">
              Operador:{" "}
              {roleOptions.find((r) => r.value === activeUserRole)?.label}
            </p>
            <div className="mt-2 flex gap-2">
              <Badge tone="brand">v2.0</Badge>
              <Badge tone="neutral">Sandbox</Badge>
            </div>
          </div>
        </aside>

        {open && (
          <div
            className="fixed inset-0 z-30 bg-ink-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink-200/60 bg-white/80 px-4 py-3 backdrop-blur-xl shadow-sm md:px-8">
            <div className="flex items-center gap-3">
              <button
                className="rounded-xl border border-ink-200 bg-white p-2 text-ink-600 shadow-sm hover:bg-ink-50 md:hidden"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
              >
                <Menu size={18} />
              </button>
              <div className="hidden items-center gap-2 md:flex">
                <span className="text-sm font-medium text-ink-700">
                  Panel de control
                </span>
                <Badge tone="success">Operativo</Badge>
              </div>
            </div>
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

              <div className="hidden items-center gap-1.5 md:flex">
                <Badge tone="brand">RAG interno</Badge>
                <Badge tone="success">Compliance ON</Badge>
              </div>

              <label className="hidden items-center gap-2 rounded-xl border border-ink-200 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-700 md:flex">
                <span>Usuario</span>
                <select
                  value={activeUserRole}
                  onChange={(e) =>
                    setActiveUserRole(e.target.value as UserRole)
                  }
                  className="rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 outline-none focus:border-brand-400"
                >
                  {roleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-full p-0 text-ink-600 hover:bg-ink-100"
                aria-label="Notificaciones"
              >
                <Bell size={18} />
              </Button>

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
