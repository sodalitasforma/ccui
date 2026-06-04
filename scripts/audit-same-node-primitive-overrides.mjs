import fs from "node:fs";
import path from "node:path";

const catholicDir = "packages/catholic/src";
const catholicCssPath = "packages/catholic/src/catholic.css";

const primitiveImports = new Set([
  "Accordion",
  "Badge",
  "Button",
  "Card",
  "Cluster",
  "Container",
  "Divider",
  "EmptyState",
  "FilterBar",
  "Grid",
  "Heading",
  "IconFrame",
  "Link",
  "MediaFrame",
  "Notice",
  "Panel",
  "SearchInput",
  "Section",
  "Select",
  "Stack",
  "Table",
  "TableWrapper",
  "Tabs",
  "TabList",
  "Tag",
  "Text",
  "Timeline",
]);

const primitiveCoreProps = [
  "display",
  "position",
  "width",
  "height",
  "inline-size",
  "block-size",
  "overflow",
  "padding",
  "margin",
  "gap",
  "grid-template",
  "flex",
  "align-items",
  "justify-content",
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && full.endsWith(".tsx")) return [full];
    return [];
  });
}

function cssBlockFor(css, cls) {
  const escaped = cls.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`\\.${escaped}\\s*\\{[^}]*\\}`, "m"));
  return match?.[0] ?? null;
}

function hasCoreLayoutOverride(block) {
  return primitiveCoreProps.some((prop) => new RegExp(`\\b${prop}\\s*:`).test(block));
}

const css = fs.readFileSync(catholicCssPath, "utf8");
const findings = [];

for (const file of walk(catholicDir)) {
  const text = fs.readFileSync(file, "utf8");

  for (const primitive of primitiveImports) {
    const tagPattern = new RegExp(`<${primitive}\\b[\\s\\S]*?className=\\{cx\$begin:math:text$\(\[\^\)\]\*\)\\$end:math:text$\\}[\\s\\S]*?>`, "g");

    for (const match of text.matchAll(tagPattern)) {
      const classArgs = match[1];
      const classes = [...classArgs.matchAll(/["'`](ccui-[A-Za-z0-9_-]+)["'`]/g)].map((m) => m[1]);

      for (const cls of classes) {
        const block = cssBlockFor(css, cls);
        if (!block) continue;
        if (!hasCoreLayoutOverride(block)) continue;

        findings.push({
          file,
          primitive,
          cls,
          block,
        });
      }
    }
  }
}

console.log(`Same-node primitive override findings: ${findings.length}`);

for (const item of findings) {
  console.log(`\n${item.file}`);
  console.log(`Primitive: ${item.primitive}`);
  console.log(`Class on same node: .${item.cls}`);
  console.log(item.block);
}
