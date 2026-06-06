import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

function run(command) {
  return execSync(command, { encoding: "utf8" }).trim().split("\n").filter(Boolean);
}

const tsxClasses = run(
  `grep -Rho 'className="[^"]*"' packages/primitives/src --include="*.tsx" | sed -E 's/className="//; s/"$//' | tr ' ' '\\n' | grep '^ccui-' | sort -u`
);

const cssText = readFileSync("packages/primitives/src/primitives.css", "utf8");
const cssClasses = Array.from(
  new Set((cssText.match(/\.ccui-[a-zA-Z0-9_-]+/g) || []).map((item) => item.slice(1)))
).sort();

const cssClassSet = new Set(cssClasses);
const missing = tsxClasses.filter((className) => !cssClassSet.has(className));

if (missing.length) {
  console.error("Primitive CSS contract missing classes:");
  for (const className of missing) console.error(`- ${className}`);
  process.exit(1);
}

console.log(`Primitive CSS contract OK: ${tsxClasses.length} emitted classes covered.`);
