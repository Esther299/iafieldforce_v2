/**
 * Second-pass import fixes for trailing-slash store imports and leftover legacy paths.
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

const replacements = [
  [/from\s+(['"])\.\.\/store\/?\1/g, "from $1@/store$1"],
  [/from\s+(['"])\.\.\/\.\.\/store\/?\1/g, "from $1@/store$1"],
  [/from\s+(['"])\.\.\/types\/academia\1/g, "from $1@/features/academy/types$1"],
  [
    /from\s+(['"])\.\.\/\.\.\/\.\.\/types\/academia\1/g,
    "from $1@/features/academy/types$1",
  ],
  [
    /from\s+(['"])\.\.\/\.\.\/\.\.\/\.\.\/types\/academia\1/g,
    "from $1@/features/academy/types$1",
  ],
  [/from\s+(['"])\.\.\/types\1/g, "from $1@/shared/types$1"],
  [/from\s+(['"])\.\.\/\.\.\/types\1/g, "from $1@/shared/types$1"],
  [/from\s+(['"])\.\.\/\.\.\/\.\.\/types\1/g, "from $1@/shared/types$1"],
  [/from\s+(['"])\.\.\/components\/ui\1/g, "from $1@/shared/ui$1"],
  [
    /from\s+(['"])\.\.\/components\/pages\/campaigns\1/g,
    "from $1@/features/campaigns/components$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/pages\/dashboard\1/g,
    "from $1@/features/dashboard/components$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/pages\/academy\/modals\1/g,
    "from $1@/features/academy/components/modals$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/pages\/academy\/views\1/g,
    "from $1@/features/academy/components/views$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/pages\/academy\1/g,
    "from $1@/features/academy/components$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/common\/AvatarFace\1/g,
    "from $1@/shared/components/AvatarFace$1",
  ],
  [
    /from\s+(['"])\.\.\/components\/common\/ChatPanel\1/g,
    "from $1@/shared/components/ChatPanel$1",
  ],
  [/from\s+(['"])\.\.\/data\1/g, "from $1@/shared/data$1"],
  [/from\s+(['"])\.\.\/\.\.\/data\1/g, "from $1@/shared/data$1"],
  [/from\s+(['"])\.\/academia\1/g, "from $1@/features/academy/types$1"],
  [/export type \* from (['"])\.\/academia\1/g, "export type * from $1@/features/academy/types$1"],
];

let n = 0;
for (const file of walk(src)) {
  // skip leftover dead barrels under old paths if any
  let t = fs.readFileSync(file, "utf8");
  const orig = t;
  for (const [re, rep] of replacements) t = t.replace(re, rep);
  if (t !== orig) {
    fs.writeFileSync(file, t);
    n++;
    console.log("patched", path.relative(src, file));
  }
}
console.log("files", n);
