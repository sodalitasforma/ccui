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
    .filter((importPath) => importPath.startsWith("./") || importPath.startsWith("../"))
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

function emittedClassesFromPackage(packageDir) {
  return run(
    `grep -Rho 'className="[^"]*"' ${packageDir}/src --include="*.tsx" | sed -E 's/className="//; s/"$//' | tr ' ' '\\n' | grep '^ccui-' | sort -u`
  );
}

function cssClassesFromEntry(cssEntry) {
  const cssText = readCssWithImports(cssEntry);

  return Array.from(
    new Set((cssText.match(/\.ccui-[a-zA-Z0-9_-]+/g) || []).map((item) => item.slice(1)))
  ).sort();
}

function auditPackage({ name, packageDir, cssEntry }) {
  const emitted = emittedClassesFromPackage(packageDir);
  const cssClasses = cssClassesFromEntry(cssEntry);
  const cssClassSet = new Set(cssClasses);
  const missing = emitted.filter((className) => !cssClassSet.has(className));

  if (missing.length) {
    console.error(`${name} CSS contract missing classes:`);
    for (const className of missing) console.error(`- ${className}`);
    return false;
  }

  console.log(`${name} CSS contract OK: ${emitted.length} emitted classes covered.`);
  return true;
}

const results = [
  auditPackage({
    name: "Primitive",
    packageDir: "packages/primitives",
    cssEntry: "packages/primitives/src/primitives.css",
  }),
  auditPackage({
    name: "Catholic",
    packageDir: "packages/catholic",
    cssEntry: "packages/catholic/src/catholic.css",
  }),
];

if (results.some((result) => !result)) {
  process.exit(1);
}
