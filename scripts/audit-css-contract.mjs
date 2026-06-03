import fs from "node:fs";
import path from "node:path";

const roots = [
  "packages/primitives/src",
  "packages/catholic/src",
];

const cssFiles = [
  "packages/primitives/src/primitives.css",
  "packages/catholic/src/catholic.css",
];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && full.endsWith(".tsx")) out.push(full);
  }
  return out;
}

function staticClasses(source) {
  const found = new Set();

  // Captures strings/templates containing ccui-*.
  for (const match of source.matchAll(/["`]([^"`]*ccui-[^"`]*)["`]/g)) {
    const raw = match[1];

    for (const part of raw.split(/\s+/)) {
      if (
        part.startsWith("ccui-") &&
        !part.includes("${") &&
        !part.includes("[") &&
        !part.includes(":") &&
        !part.includes("'") &&
        !part.includes('"')
      ) {
        found.add(part);
      }
    }
  }

  return [...found].sort();
}

const css = cssFiles
  .filter((file) => fs.existsSync(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const report = [];

for (const root of roots) {
  for (const file of walk(root)) {
    const source = fs.readFileSync(file, "utf8");
    const emittedClasses = staticClasses(source);

    const missing = emittedClasses.filter((cls) => !css.includes(`.${cls}`));

    if (missing.length) {
      report.push({
        file,
        package: file.includes("/primitives/") ? "primitives" : "catholic",
        missingCount: missing.length,
        missing,
      });
    }
  }
}

report.sort((a, b) => b.missingCount - a.missingCount || a.file.localeCompare(b.file));

fs.mkdirSync(".scratch", { recursive: true });

fs.writeFileSync(
  ".scratch/ccui-css-contract-audit.json",
  JSON.stringify(report, null, 2)
);

let md = "# CCUI CSS Contract Audit\n\n";
md += "Every static `ccui-*` class emitted by package components should have package CSS.\n\n";
md += `Files with missing selectors: ${report.length}\n\n`;

for (const item of report) {
  md += `## ${item.file}\n\n`;
  md += `Package: ${item.package}\n\n`;
  md += `Missing selectors: ${item.missingCount}\n\n`;
  for (const cls of item.missing) md += `- .${cls}\n`;
  md += "\n";
}

fs.writeFileSync(".scratch/ccui-css-contract-audit.md", md);

console.log(`Files with missing selectors: ${report.length}`);
console.log("Saved:");
console.log("- .scratch/ccui-css-contract-audit.json");
console.log("- .scratch/ccui-css-contract-audit.md");
