/** Canonical app route paths. */
export const routes = {
  dashboard: "/",
  governance: "/gobernanza",
  team: "/creacion-del-equipo",
  teamAlias: "/avatares",
  academy: "/academia",
  compliance: "/compliance",
  products: "/productos",
  campaigns: "/campanas",
  crm: "/crm",
  analytics: "/analitica",
  credits: "/creditos",
  territory: "/territorio",
  visit: "/visita",
  campaignTest: "/prueba",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
