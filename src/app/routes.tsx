import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/shared/layout/AppLayout";
import { routes } from "@/shared/config/routes";

const Dashboard = lazy(() =>
  import("@/features/dashboard/pages/DashboardPage").then((m) => ({
    default: m.Dashboard,
  })),
);
const Governance = lazy(() =>
  import("@/features/governance/pages/GovernancePage").then((m) => ({
    default: m.Governance,
  })),
);
const Team = lazy(() =>
  import("@/features/team/pages/TeamPage").then((m) => ({
    default: m.Teams,
  })),
);
const Products = lazy(() =>
  import("@/features/products/pages/ProductsPage").then((m) => ({
    default: m.Products,
  })),
);
const Campaigns = lazy(() =>
  import("@/features/campaigns/pages/CampaignsPage").then((m) => ({
    default: m.Campaigns,
  })),
);
const Crm = lazy(() =>
  import("@/features/crm/pages/CrmPage").then((m) => ({ default: m.Crm })),
);
const Analytics = lazy(() =>
  import("@/features/analytics/pages/AnalyticsPage").then((m) => ({
    default: m.Analytics,
  })),
);
const Credits = lazy(() =>
  import("@/features/credits/pages/CreditsPage").then((m) => ({
    default: m.Credits,
  })),
);
const Academy = lazy(() =>
  import("@/features/academy/pages/AcademyPage").then((m) => ({
    default: m.Academy,
  })),
);
const Compliance = lazy(() =>
  import("@/features/compliance/pages/CompliancePage").then((m) => ({
    default: m.Compliance,
  })),
);
const Territory = lazy(() =>
  import("@/features/territory/pages/TerritoryPage").then((m) => ({
    default: m.Territory,
  })),
);
const Visit = lazy(() =>
  import("@/features/visit/pages/VisitPage").then((m) => ({
    default: m.Visit,
  })),
);
const CampaignTest = lazy(() =>
  import("@/features/campaigns/pages/CampaignTestPage").then((m) => ({
    default: m.CampaignTest,
  })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={routes.governance.slice(1)} element={<Governance />} />
        <Route path={routes.team.slice(1)} element={<Team />} />
        <Route
          path={routes.teamAlias.slice(1)}
          element={<Navigate to={routes.team} replace />}
        />
        <Route path={routes.academy.slice(1)} element={<Academy />} />
        <Route path={routes.compliance.slice(1)} element={<Compliance />} />
        <Route path={routes.products.slice(1)} element={<Products />} />
        <Route path={routes.campaigns.slice(1)} element={<Campaigns />} />
        <Route path={routes.crm.slice(1)} element={<Crm />} />
        <Route path={routes.analytics.slice(1)} element={<Analytics />} />
        <Route path={routes.credits.slice(1)} element={<Credits />} />
        <Route path={routes.territory.slice(1)} element={<Territory />} />
        <Route path={routes.visit.slice(1)} element={<Visit />} />
        <Route path={routes.campaignTest.slice(1)} element={<CampaignTest />} />
        <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
      </Route>
    </Routes>
  );
}
