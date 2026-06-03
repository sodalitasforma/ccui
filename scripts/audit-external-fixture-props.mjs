import fs from "node:fs";
import path from "node:path";

const galleryFile = "/tmp/ccui-external-gallery/gallery/src/main.tsx";

if (!fs.existsSync(galleryFile)) {
  console.error("Missing external gallery file. Run scripts/create-ccui-external-gallery.sh first.");
  process.exit(1);
}

const gallery = fs.readFileSync(galleryFile, "utf8");

const componentSources = new Map();

for (const root of ["packages/primitives/src", "packages/catholic/src"]) {
  for (const file of walk(root)) {
    const source = fs.readFileSync(file, "utf8");
    const matches = source.matchAll(/export function ([A-Z][A-Za-z0-9_]*)/g);
    for (const match of matches) {
      componentSources.set(match[1], { file, source });
    }
  }
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && full.endsWith(".tsx")) out.push(full);
  }
  return out;
}

function getFixtureProps(componentName) {
  const regex = new RegExp(`<${componentName}\\b([\\s\\S]*?)(?:/>|>)`, "g");
  const props = new Set();

  for (const match of gallery.matchAll(regex)) {
    const body = match[1];

    for (const prop of body.matchAll(/\s([A-Za-z_][A-Za-z0-9_]*)=/g)) {
      const name = prop[1];
      if (!["className", "children", "key"].includes(name)) props.add(name);
    }
  }

  return Array.from(props).sort();
}

function componentReadsProp(source, prop) {
  const patterns = [
    new RegExp(`\\b${prop}\\b`),
    new RegExp(`${prop}\\s*[,=]`),
    new RegExp(`props\\.${prop}\\b`),
  ];

  return patterns.some((pattern) => pattern.test(source));
}

const suspicious = [];

for (const [name, info] of componentSources.entries()) {
  const fixtureProps = getFixtureProps(name);
  if (!fixtureProps.length) continue;

  const unread = fixtureProps.filter((prop) => !componentReadsProp(info.source, prop));

  if (unread.length) {
    suspicious.push({
      name,
      file: info.file,
      fixtureProps,
      unread,
    });
  }
}

suspicious.sort((a, b) => b.unread.length - a.unread.length);

let md = "# CCUI External Fixture Prop Audit\n\n";
md += "These fixtures pass props that the component source does not appear to read. Some may be normal DOM props, but content props like `title`, `description`, `action`, `items`, `links`, `times`, etc. are suspicious.\n\n";

for (const item of suspicious) {
  md += `## ${item.name}\n\n`;
  md += `Source: \`${item.file}\`\n\n`;
  md += `Fixture props: ${item.fixtureProps.map((p) => `\`${p}\``).join(", ")}\n\n`;
  md += `Possibly unread: ${item.unread.map((p) => `\`${p}\``).join(", ")}\n\n`;
}

fs.mkdirSync(".scratch", { recursive: true });
fs.writeFileSync(".scratch/ccui-fixture-prop-audit.md", md);

console.log(`Components with suspicious fixture props: ${suspicious.length}`);
console.log("Saved .scratch/ccui-fixture-prop-audit.md");

for (const item of suspicious.slice(0, 30)) {
  console.log(`${item.name}: unread ${item.unread.join(", ")}`);
}
