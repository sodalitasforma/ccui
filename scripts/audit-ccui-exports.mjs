import fs from "node:fs";
import path from "node:path";

const packages = [
  {
    name: "@ccui/primitives",
    indexPath: "packages/primitives/src/index.ts",
  },
  {
    name: "@ccui/catholic",
    indexPath: "packages/catholic/src/index.ts",
  },
];

function extractExports(source) {
  const exports = new Set();

  const namedExportRegex = /export\s+\{([\s\S]*?)\}\s+from\s+["'][^"']+["']/g;
  for (const match of source.matchAll(namedExportRegex)) {
    const body = match[1];
    body
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((part) => {
        const aliasMatch = part.match(/\bas\s+([A-Za-z0-9_]+)/);
        if (aliasMatch) {
          exports.add(aliasMatch[1]);
          return;
        }

        const name = part.match(/^([A-Za-z0-9_]+)/)?.[1];
        if (name) exports.add(name);
      });
  }

  const directExportRegex = /export\s+(?:function|class|const|let|var|type|interface)\s+([A-Za-z0-9_]+)/g;
  for (const match of source.matchAll(directExportRegex)) {
    exports.add(match[1]);
  }

  return Array.from(exports).sort();
}

const report = {};

for (const pkg of packages) {
  const source = fs.readFileSync(pkg.indexPath, "utf8");
  report[pkg.name] = extractExports(source);
}

fs.mkdirSync(".scratch", { recursive: true });
fs.writeFileSync(
  ".scratch/ccui-public-exports.json",
  JSON.stringify(report, null, 2) + "\n"
);

for (const [pkg, exports] of Object.entries(report)) {
  console.log(`\n${pkg}`);
  console.log("-".repeat(pkg.length));
  for (const name of exports) {
    console.log(name);
  }
  console.log(`Total: ${exports.length}`);
}
