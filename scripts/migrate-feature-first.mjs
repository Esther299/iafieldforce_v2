/**
 * One-shot migration: type-based src → feature-first layout.
 * Run from repo root: node scripts/migrate-feature-first.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function move(fromRel, toRel) {
  const from = path.join(src, fromRel);
  const to = path.join(src, toRel);
  if (!fs.existsSync(from)) {
    console.warn("SKIP missing:", fromRel);
    return;
  }
  ensureDir(path.dirname(to));
  if (fs.existsSync(to)) {
    console.warn("SKIP exists:", toRel);
    return;
  }
  fs.renameSync(from, to);
  console.log("MOVE", fromRel, "→", toRel);
}

function copyDirContents(fromRel, toRel) {
  const from = path.join(src, fromRel);
  if (!fs.existsSync(from)) {
    console.warn("SKIP missing dir:", fromRel);
    return;
  }
  ensureDir(path.join(src, toRel));
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const f = path.join(fromRel, entry.name);
    const t = path.join(toRel, entry.name);
    if (entry.isDirectory()) {
      copyDirContents(f, t);
    } else {
      move(f, t);
    }
  }
}

// --- Moves ---

// App shell
move("main.tsx", "app/main.tsx");
move("App.tsx", "app/App.tsx");
move("index.css", "app/styles/index.css");

// Shared
copyDirContents("components/ui", "shared/ui");
copyDirContents("components/layout", "shared/layout");
copyDirContents("components/common", "shared/components");
move("lib/cn.ts", "shared/lib/cn.ts");
move("types/index.ts", "shared/types/index.ts");
move("store/slices/user.ts", "shared/store/userSlice.ts");
move("store/utils.ts", "shared/lib/store-utils.ts");

// Dashboard
move("pages/Dashboard.tsx", "features/dashboard/pages/DashboardPage.tsx");
copyDirContents("components/pages/dashboard", "features/dashboard/components");
move("hooks/useDashboard.ts", "features/dashboard/hooks/useDashboard.ts");

// Governance
move("pages/Governance.tsx", "features/governance/pages/GovernancePage.tsx");
move("hooks/useGovernance.ts", "features/governance/hooks/useGovernance.ts");
move("data/governance.ts", "features/governance/data/governance.ts");
move("data/contextualTips.ts", "features/governance/data/contextualTips.ts");
move("lib/governance.ts", "features/governance/lib/governance.ts");
move("store/slices/governance.ts", "features/governance/store/governanceSlice.ts");

// Team
move("pages/Teams.tsx", "features/team/pages/TeamPage.tsx");
copyDirContents("pages/team", "features/team/components");
move("data/avatars.ts", "features/team/data/avatars.ts");
move("data/regions.ts", "features/team/data/regions.ts");
move("data/realReps.ts", "features/team/data/realReps.ts");
move("store/slices/avatars.ts", "features/team/store/avatarsSlice.ts");
move("store/slices/realReps.ts", "features/team/store/realRepsSlice.ts");

// Academy
move("pages/Academy.tsx", "features/academy/pages/AcademyPage.tsx");
copyDirContents("components/pages/academy", "features/academy/components");
copyDirContents("data/academy", "features/academy/data");
move("types/academia.ts", "features/academy/types.ts");
move("hooks/useAcademy.ts", "features/academy/hooks/useAcademy.ts");

// Compliance
move("pages/Compliance.tsx", "features/compliance/pages/CompliancePage.tsx");

// Products
move("pages/Products.tsx", "features/products/pages/ProductsPage.tsx");
move("hooks/useProducts.ts", "features/products/hooks/useProducts.ts");
move("data/products.ts", "features/products/data/products.ts");
move("data/documents.ts", "features/products/data/documents.ts");
move("store/slices/products.ts", "features/products/store/productsSlice.ts");

// Campaigns
move("pages/Campaigns.tsx", "features/campaigns/pages/CampaignsPage.tsx");
move("pages/CampaignTest.tsx", "features/campaigns/pages/CampaignTestPage.tsx");
copyDirContents("components/pages/campaigns", "features/campaigns/components");
move("hooks/useCampaigns.ts", "features/campaigns/hooks/useCampaigns.ts");
move("data/campaigns.ts", "features/campaigns/data/campaigns.ts");
move("data/dispatches.ts", "features/campaigns/data/dispatches.ts");
move("lib/audience.ts", "features/campaigns/lib/audience.ts");
move("store/slices/campaigns.ts", "features/campaigns/store/campaignsSlice.ts");
move("store/slices/dispatches.ts", "features/campaigns/store/dispatchesSlice.ts");
move("store/slices/test.ts", "features/campaigns/store/testSlice.ts");

// CRM
move("pages/Crm.tsx", "features/crm/pages/CrmPage.tsx");
move("hooks/useCrm.ts", "features/crm/hooks/useCrm.ts");
move("data/doctors.ts", "features/crm/data/doctors.ts");
move("data/pharmacyStaff.ts", "features/crm/data/pharmacyStaff.ts");
move("store/slices/doctors.ts", "features/crm/store/doctorsSlice.ts");
move("store/slices/pharmacy.ts", "features/crm/store/pharmacySlice.ts");

// Analytics
move("pages/Analytics.tsx", "features/analytics/pages/AnalyticsPage.tsx");
move("data/analytics.ts", "features/analytics/data/analytics.ts");
move("store/slices/analytics.ts", "features/analytics/store/analyticsSlice.ts");

// Credits
move("pages/Credits.tsx", "features/credits/pages/CreditsPage.tsx");
move("hooks/useCredits.ts", "features/credits/hooks/useCredits.ts");
move("data/credits.ts", "features/credits/data/credits.ts");
move("store/slices/credits.ts", "features/credits/store/creditsSlice.ts");

// Territory
move("pages/Territory.tsx", "features/territory/pages/TerritoryPage.tsx");
move("hooks/useTerritory.ts", "features/territory/hooks/useTerritory.ts");
move("data/territory.ts", "features/territory/data/territory.ts");

// Visit
move("pages/Visit.tsx", "features/visit/pages/VisitPage.tsx");
move("hooks/useVisit.ts", "features/visit/hooks/useVisit.ts");
move("store/slices/visits.ts", "features/visit/store/visitsSlice.ts");

// Delete dead seedVisit (only self-referenced via data/index)
const seed = path.join(src, "data/seedVisit.ts");
if (fs.existsSync(seed)) {
  fs.unlinkSync(seed);
  console.log("DELETE data/seedVisit.ts");
}

console.log("\nDone moving. Clean empty dirs manually if needed.");
