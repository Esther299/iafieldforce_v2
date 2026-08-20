/**
 * Rewrite broken relative imports to @/ after feature-first move.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "../src");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(p);
  }
  return files;
}

/** Map resolved absolute path under src → @/ import path (no extension) */
function toAlias(absFile) {
  let rel = path.relative(src, absFile).replace(/\\/g, "/");
  rel = rel.replace(/\.(tsx?)$/, "");
  rel = rel.replace(/\/index$/, "");
  return `@/${rel}`;
}

/**
 * Known legacy path fragments (as they appeared in OLD tree) → new src-relative path.
 * Used when relative resolve from new location fails.
 */
const LEGACY_TARGETS = [
  ["lib/cn", "shared/lib/cn.ts"],
  ["lib/governance", "features/governance/lib/governance.ts"],
  ["lib/audience", "features/campaigns/lib/audience.ts"],
  ["types/academia", "features/academy/types.ts"],
  ["types", "shared/types/index.ts"],
  ["store/utils", "shared/lib/store-utils.ts"],
  ["store/slices/user", "shared/store/userSlice.ts"],
  ["store/slices/avatars", "features/team/store/avatarsSlice.ts"],
  ["store/slices/products", "features/products/store/productsSlice.ts"],
  ["store/slices/doctors", "features/crm/store/doctorsSlice.ts"],
  ["store/slices/pharmacy", "features/crm/store/pharmacySlice.ts"],
  ["store/slices/realReps", "features/team/store/realRepsSlice.ts"],
  ["store/slices/campaigns", "features/campaigns/store/campaignsSlice.ts"],
  ["store/slices/credits", "features/credits/store/creditsSlice.ts"],
  ["store/slices/analytics", "features/analytics/store/analyticsSlice.ts"],
  ["store/slices/dispatches", "features/campaigns/store/dispatchesSlice.ts"],
  ["store/slices/visits", "features/visit/store/visitsSlice.ts"],
  ["store/slices/test", "features/campaigns/store/testSlice.ts"],
  ["store/slices/governance", "features/governance/store/governanceSlice.ts"],
  ["store", "store/index.ts"],
  ["components/ui", "shared/ui/index.ts"],
  ["components/layout/AppLayout", "shared/layout/AppLayout.tsx"],
  ["components/common/AvatarFace", "shared/components/AvatarFace.tsx"],
  ["components/common/ChatPanel", "shared/components/ChatPanel.tsx"],
  ["components/pages/dashboard", "features/dashboard/components/index.ts"],
  ["components/pages/academy/modals", "features/academy/components/modals/index.ts"],
  ["components/pages/academy/views", "features/academy/components/views/index.ts"],
  ["components/pages/academy", "features/academy/components/index.ts"],
  ["components/pages/campaigns", "features/campaigns/components/index.ts"],
  ["pages/Dashboard", "features/dashboard/pages/DashboardPage.tsx"],
  ["pages/Governance", "features/governance/pages/GovernancePage.tsx"],
  ["pages/Teams", "features/team/pages/TeamPage.tsx"],
  ["pages/Academy", "features/academy/pages/AcademyPage.tsx"],
  ["pages/Compliance", "features/compliance/pages/CompliancePage.tsx"],
  ["pages/Products", "features/products/pages/ProductsPage.tsx"],
  ["pages/Campaigns", "features/campaigns/pages/CampaignsPage.tsx"],
  ["pages/CampaignTest", "features/campaigns/pages/CampaignTestPage.tsx"],
  ["pages/Crm", "features/crm/pages/CrmPage.tsx"],
  ["pages/Analytics", "features/analytics/pages/AnalyticsPage.tsx"],
  ["pages/Credits", "features/credits/pages/CreditsPage.tsx"],
  ["pages/Territory", "features/territory/pages/TerritoryPage.tsx"],
  ["pages/Visit", "features/visit/pages/VisitPage.tsx"],
  ["pages/team/RegionsView", "features/team/components/RegionsView.tsx"],
  ["pages/team/RepsView", "features/team/components/RepsView.tsx"],
  ["pages/team/TeamOverviewView", "features/team/components/TeamOverviewView.tsx"],
  ["data", "shared/data/index.ts"],
  ["hooks/useAcademy", "features/academy/hooks/useAcademy.ts"],
  ["hooks/useCampaigns", "features/campaigns/hooks/useCampaigns.ts"],
  ["hooks/useProducts", "features/products/hooks/useProducts.ts"],
  ["hooks/useCrm", "features/crm/hooks/useCrm.ts"],
  ["hooks/useDashboard", "features/dashboard/hooks/useDashboard.ts"],
  ["hooks/useGovernance", "features/governance/hooks/useGovernance.ts"],
  ["hooks/useCredits", "features/credits/hooks/useCredits.ts"],
  ["hooks/useVisit", "features/visit/hooks/useVisit.ts"],
  ["hooks/useTerritory", "features/territory/hooks/useTerritory.ts"],
  ["hooks", "features/dashboard/hooks/useDashboard.ts"], // fallback unused
];

function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".")) return null; // package or already alias

  // First try: resolve relative from CURRENT file location (works for same-folder moves)
  const tryPaths = [
    path.resolve(path.dirname(fromFile), spec),
    path.resolve(path.dirname(fromFile), spec + ".ts"),
    path.resolve(path.dirname(fromFile), spec + ".tsx"),
    path.resolve(path.dirname(fromFile), spec, "index.ts"),
    path.resolve(path.dirname(fromFile), spec, "index.tsx"),
  ];
  for (const t of tryPaths) {
    if (fs.existsSync(t) && fs.statSync(t).isFile()) {
      return toAlias(t);
    }
  }

  // Second: match against legacy target suffixes
  const normalized = spec.replace(/\\/g, "/").replace(/^\.\//, "");
  // strip leading ../
  const stripped = normalized.replace(/^(\.\.\/)+/, "");

  for (const [legacy, neu] of LEGACY_TARGETS) {
    if (stripped === legacy || stripped === legacy + ".ts" || stripped === legacy + ".tsx") {
      return toAlias(path.join(src, neu));
    }
    // also match .../legacy endings
    if (stripped.endsWith("/" + legacy) || stripped.endsWith(legacy)) {
      // careful with short names like "types" or "data"
      if (stripped === legacy || stripped.endsWith("/" + legacy)) {
        return toAlias(path.join(src, neu));
      }
    }
  }

  // UI shorthand from feature components: ../ui, ../../ui, ../../../ui
  if (/^(\.\.\/)+ui$/.test(spec) || /^(\.\.\/)+ui\/index$/.test(spec)) {
    return "@/shared/ui";
  }

  // store utils from slices that now live in features: ../utils or ../utils.ts
  if (/utils(\.ts)?$/.test(stripped) && /store/.test(fromFile.replace(/\\/g, "/"))) {
    return "@/shared/lib/store-utils";
  }
  if (stripped === "utils" || stripped === "utils.ts") {
    const candidate = path.join(src, "shared/lib/store-utils.ts");
    if (fs.existsSync(candidate)) return "@/shared/lib/store-utils";
  }

  console.warn("UNRESOLVED", path.relative(src, fromFile), "→", spec);
  return null;
}

const importRe =
  /((?:import|export)\s+(?:type\s+)?(?:[^'"\n]+?\s+from\s+)?|import\s*\(\s*)(['"])(\.[^'"]+)\2/g;

let changedFiles = 0;
for (const file of walk(src)) {
  // skip leftover dead barrels we'll delete
  if (file.includes(`${path.sep}data${path.sep}index.ts`) && !file.includes("shared") && !file.includes("features") && !file.includes("academy")) {
    continue;
  }

  let text = fs.readFileSync(file, "utf8");
  let changed = false;

  const next = text.replace(importRe, (full, prefix, quote, spec) => {
    const alias = resolveImport(file, spec);
    if (!alias) return full;
    changed = true;
    return `${prefix}${quote}${alias}${quote}`;
  });

  // also fix import() dynamic in App if any left with relative
  if (changed) {
    fs.writeFileSync(file, next);
    changedFiles++;
    console.log("fixed", path.relative(src, file));
  }
}

console.log(`\nUpdated ${changedFiles} files`);
