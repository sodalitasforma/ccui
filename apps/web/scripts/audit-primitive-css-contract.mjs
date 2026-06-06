import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { execSync } from "node:child_process";

function run(command) {
  return execSync(command, { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
}

function readCssWithImports(filePath, seen = new Set()) {
  const normalizedPath = normalize(filePath);

  if (seen.has(normalizedPath)) return "";
  seen.add(normalizedPath);

  const css = readFileSync(normalizedPath, "utf8");
  const baseDir = dirname(normalizedPath);

  const imports = Array.from(css.matchAll(/@import\s+["']([^"']+)["'];/g)).map(
    (match) => match[1]
  );

  const importedCss = imports
    .map((importPath) => {
      const resolved = normalize(join(baseDir, importPath));

      if (!existsSync(resolved)) {
        throw new Error(`Missing CSS import: ${importPath} from ${filePath}`);
      }

      return readCssWithImports(resolved, seen);
    })
    .join("\n");

  return `${css}\n${importedCss}`;
}

const tsxClasses = run(
  `grep -Rho 'className="[^"]*"' packages/primitives/src --include="*.tsx" | sed -E 's/className="//; s/"$//' | tr ' ' '\\n' | grep '^ccui-' | sort -u`
);

const cssText = readCssWithImports("packages/primitives/src/primitives.css");

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
