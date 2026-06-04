import fs from "node:fs";
import path from "node:path";

const catholicDir = "packages/catholic/src";
const catholicCssPath = "packages/catholic/src/catholic.css";

const primitiveClassNames = [
  "ccui-filter-bar",
  "ccui-card",
  "ccui-panel",
  "ccui-stack",
  "ccui-cluster",
  "ccui-grid",
  "ccui-button",
  "ccui-badge",
  "ccui-tag",
  "ccui-table",
  "ccui-tabs",
  "ccui-tab-list",
  "ccui-timeline",
  "ccui-empty-state",
  "ccui-media-frame",
  "ccui-icon-frame",
  "ccui-notice",
  "ccui-search-input",
  "ccui-select",
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (entry.isFile() && full.endsWith(".tsx")) return [full];
    return [];
  });
}

function staticCcuiClasses(text) {
  return [...text.matchAll(/["'`]([^"'`]*ccui-[^"'`]*)["'`]/g)]
    .flatMap((m) => m[1].split(/\s+/))
    .filter((cls) => cls.startsWith("ccui-"));
}

const files = walk(catholicDir);
const css = fs.readFileSync(catholicCssPath, "utf8");

const suspicious = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const importsPrimitive =
    text.includes('from "@ccui/primitives"') ||
    text.includes("from '@ccui/primitives'");

  if (!importsPrimitive) continue;

  const classes = staticCcuiClasses(text).filter((cls) => !primitiveClassNames.includes(cls));

  for (const cls of classes) {
    const blockMatch = css.match(new RegExp(`\\.${cls.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}\\s*\\{[^}]*\\}`, "m"));
    if (!blockMatch) continue;

    const block = blockMatch[0];

    const dangerous =
      /\bdisplay\s*:/.test(block) ||
      /\bposition\s*:/.test(block) ||
      /\bwidth\s*:/.test(block) ||
      /\bheight\s*:/.test(block) ||
      /\boverflow\s*:/.test(block) ||
      /\bpadding\s*:/.test(block) ||
      /\bmargin\s*:/.test(block);

    if (dangerous) {
      suspicious.push({
        file,
        cls,
        block,
      });
    }
  }
}

console.log(`Suspicious Catholic CSS layout overrides: ${suspicious.length}`);

for (const item of suspicious) {
  console.log(`\n${item.file}`);
  console.log(`.${item.cls}`);
  console.log(item.block);
}
