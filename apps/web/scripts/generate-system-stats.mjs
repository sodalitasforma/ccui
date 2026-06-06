import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const root = process.cwd();

function listFiles(dir, filter) {
  return readdirSync(join(root, dir)).filter(filter);
}


function readCssWithImports(filePath, seen = new Set()) {
  const normalizedPath = normalize(join(root, filePath));

  if (seen.has(normalizedPath)) return "";
  seen.add(normalizedPath);

  const text = readFileSync(normalizedPath, "utf8");
  const baseDir = dirname(normalizedPath);

  const imports = Array.from(text.matchAll(/@import\s+["']([^"']+)["'];/g)).map(
    (match) => match[1]
  );

  const importedText = imports
    .filter((importPath) => importPath.startsWith("./") || importPath.startsWith("../"))
    .map((importPath) => {
      const resolved = normalize(join(baseDir, importPath));

      if (!existsSync(resolved)) {
        throw new Error(`Missing CSS import: ${importPath} from ${filePath}`);
      }

      const relativeToRoot = resolved.replace(`${root}/`, "");
      return readCssWithImports(relativeToRoot, seen);
    })
    .join("\n");

  return `${text}\n${importedText}`;
}

function countCssVariableDefinitions(filePath) {
  const text = readCssWithImports(filePath);
  const matches = text.match(/--ccui-[a-zA-Z0-9-_]+:/g) || [];
  return new Set(matches.map((item) => item.replace(":", ""))).size;
}

function countCssTokenReferences(filePath) {
  const text = readCssWithImports(filePath);
  return (text.match(/var\(--ccui-[a-zA-Z0-9-_]+\)/g) || []).length;
}

function countExports(filePath, pattern) {
  const text = readFileSync(join(root, filePath), "utf8");
  const matches = text.match(pattern) || [];
  return matches.length;
}

const primitiveFiles = listFiles("packages/primitives/src", (file) =>
  file.endsWith(".tsx")
);

const catholicFiles = listFiles("packages/catholic/src", (file) =>
  file.endsWith(".tsx")
);

const primitiveComponents = primitiveFiles.length;
const catholicComponents = catholicFiles.length;
const totalComponents = primitiveComponents + catholicComponents;

const cssTokenDefinitions =
  countCssVariableDefinitions("packages/primitives/src/primitives.css") +
  countCssVariableDefinitions("packages/catholic/src/catholic.css") +
  countCssVariableDefinitions("apps/web/src/app/globals.css");

const cssTokenReferences =
  countCssTokenReferences("packages/primitives/src/primitives.css") +
  countCssTokenReferences("packages/catholic/src/catholic.css") +
  countCssTokenReferences("apps/web/src/app/globals.css");

const tokenJsonFiles = listFiles("packages/tokens/src", (file) =>
  file.endsWith(".json")
);

let tokenJsonTopLevelKeys = 0;
for (const file of tokenJsonFiles) {
  const json = JSON.parse(readFileSync(join(root, "packages/tokens/src", file), "utf8"));
  tokenJsonTopLevelKeys += Object.keys(json).length;
}

const docsExampleCount = countExports(
  "apps/web/src/app/docs/examples.ts",
  /export const [a-zA-Z0-9_]+/g
);

const stats = {
  components: totalComponents,
  primitiveComponents,
  catholicComponents,
  cssTokenDefinitions,
  cssTokenReferences,
  tokenFiles: tokenJsonFiles.length,
  tokenGroups: tokenJsonTopLevelKeys,
  docsExamples: docsExampleCount,
};

writeFileSync(
  join(root, "apps/web/src/app/system-stats.json"),
  `${JSON.stringify(stats, null, 2)}\n`
);

console.log("Generated system stats:");
console.log(stats);
