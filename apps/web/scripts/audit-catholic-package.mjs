import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, relative } from "node:path";

const packageRoot = "packages/catholic";
const srcRoot = join(packageRoot, "src");
const stylesRoot = join(srcRoot, "styles");
const cssEntry = join(srcRoot, "catholic.css");
const indexEntry = join(srcRoot, "index.ts");

if (!existsSync(cssEntry)) {
  throw new Error(`Missing Catholic CSS entry: ${cssEntry}`);
}

if (!existsSync(indexEntry)) {
  throw new Error(`Missing Catholic package entry: ${indexEntry}`);
}

const cssEntryText = readFileSync(cssEntry, "utf8");
const indexText = readFileSync(indexEntry, "utf8");

const styleFiles = readdirSync(stylesRoot)
  .filter((file) => file.endsWith(".css"))
  .sort();

const importedStyleFiles = Array.from(
  cssEntryText.matchAll(/@import\s+["']\.\/styles\/([^"']+\.css)["'];/g)
).map((match) => match[1]);

const duplicateCssImports = importedStyleFiles.filter(
  (file, index) => importedStyleFiles.indexOf(file) !== index
);

if (duplicateCssImports.length) {
  throw new Error(
    `Duplicate Catholic CSS imports:\n${duplicateCssImports.join("\n")}`
  );
}

const missingCssImports = styleFiles.filter(
  (file) => !importedStyleFiles.includes(file)
);

if (missingCssImports.length) {
  throw new Error(
    `Catholic CSS files missing from catholic.css:\n${missingCssImports
      .map((file) => `- ${join(stylesRoot, file)}`)
      .join("\n")}`
  );
}

const missingImportedFiles = importedStyleFiles.filter(
  (file) => !styleFiles.includes(file)
);

if (missingImportedFiles.length) {
  throw new Error(
    `catholic.css imports missing files:\n${missingImportedFiles
      .map((file) => `- ${join(stylesRoot, file)}`)
      .join("\n")}`
  );
}

const componentFiles = readdirSync(srcRoot)
  .filter((file) => file.endsWith(".tsx"))
  .sort();

const componentExports = Array.from(
  indexText.matchAll(/export \{ ([A-Z][A-Za-z0-9]+) \} from "\.\/([^"]+)";/g)
).map((match) => ({
  exportName: match[1],
  sourceFile: `${match[2]}.tsx`,
}));

const missingComponentFiles = componentExports
  .filter((item) => !componentFiles.includes(item.sourceFile))
  .map((item) => `${item.exportName} -> ${item.sourceFile}`);

if (missingComponentFiles.length) {
  throw new Error(
    `Catholic exports missing component files:\n${missingComponentFiles
      .map((item) => `- ${item}`)
      .join("\n")}`
  );
}

const unexportedComponentFiles = componentFiles.filter((file) => {
  return !componentExports.some((item) => item.sourceFile === file);
});

if (unexportedComponentFiles.length) {
  throw new Error(
    `Catholic component files missing from index.ts exports:\n${unexportedComponentFiles
      .map((file) => `- ${join(srcRoot, file)}`)
      .join("\n")}`
  );
}

console.log(`Catholic package OK: ${componentExports.length} component exports audited.`);
console.log(`Catholic CSS OK: ${styleFiles.length} style files imported by ${relative(process.cwd(), cssEntry)}.`);
