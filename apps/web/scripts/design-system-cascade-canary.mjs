import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const files = {
  globals: path.join(root, "apps/web/src/app/globals.css"),
  primitives: path.join(root, "packages/primitives/src/primitives.css"),
  catholic: path.join(root, "packages/catholic/src/catholic.css"),
  report: path.join(root, ".scratch/design-system-cascade-audit.md"),
};

const TOKEN_START = "/* ccui-cascade-canary:token-start */";
const TOKEN_END = "/* ccui-cascade-canary:token-end */";
const PRIMITIVE_START = "/* ccui-cascade-canary:primitive-start */";
const PRIMITIVE_END = "/* ccui-cascade-canary:primitive-end */";

const tokenBlock = `
${TOKEN_START}
:root {
  --ccui-radius-sm: 0.75rem !important;
  --ccui-radius-md: 1.15rem !important;
  --ccui-radius-lg: 1.75rem !important;
  --ccui-color-border-subtle: #9a5a12 !important;
  --ccui-color-border-gold: #7a3f00 !important;
  --ccui-shadow-hairline: 0 0 0 1px rgba(122, 63, 0, 0.34), 0 14px 34px rgba(74, 45, 20, 0.14) !important;
}
${TOKEN_END}
`;

const primitiveBlock = `
${PRIMITIVE_START}
.ccui-button {
  transform: translateY(-1px);
}

.ccui-card,
.ccui-panel {
  outline: 1px solid rgba(122, 63, 0, 0.16);
}

.ccui-badge,
.ccui-tag {
  letter-spacing: 0.08em;
}
${PRIMITIVE_END}
`;

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function write(file, text) {
  fs.writeFileSync(file, text);
}

function removeMarkedBlock(text, start, end) {
  const pattern = new RegExp(`\\n?${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, "g");
  return text.replace(pattern, "\n").replace(/\n{3,}/g, "\n\n");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function insertBlock(file, start, end, block) {
  let text = read(file);
  text = removeMarkedBlock(text, start, end).trimEnd() + "\n\n" + block.trim() + "\n";
  write(file, text);
}

function removeBlock(file, start, end) {
  const text = removeMarkedBlock(read(file), start, end);
  write(file, text.trimEnd() + "\n");
}

function hasBlock(file, start, end) {
  const text = read(file);
  return text.includes(start) && text.includes(end);
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function audit() {
  const primitiveCss = read(files.primitives);
  const catholicCss = read(files.catholic);
  const globalsCss = read(files.globals);

  const primitiveTokenRefs = countMatches(primitiveCss, /var\(--ccui-/g);
  const catholicTokenRefs = countMatches(catholicCss, /var\(--ccui-/g);
  const globalsTokenRefs = countMatches(globalsCss, /var\(--ccui-/g);

  const catholicHardHex = [...catholicCss.matchAll(/(?:#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))/g)].map((m) => m[0]);
  const primitiveHardHex = [...primitiveCss.matchAll(/(?:#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))/g)].map((m) => m[0]);
  const appHardHex = [...globalsCss.matchAll(/(?:#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))/g)].map((m) => m[0]);

  const catholicFiles = fs
    .readdirSync(path.join(root, "packages/catholic/src"))
    .filter((name) => name.endsWith(".tsx"))
    .map((name) => path.join(root, "packages/catholic/src", name));

  const primitiveImports = catholicFiles.filter((file) =>
    read(file).includes("../../primitives/src")
  );

  const report = [
    "# CCUI design-system cascade audit",
    "",
    "This report checks whether the design system is behaving like a cascade:",
    "",
    "`tokens → primitives → Catholic components → homepage/gallery`",
    "",
    "## CSS token references",
    "",
    `- Primitive CSS token references: ${primitiveTokenRefs}`,
    `- Catholic CSS token references: ${catholicTokenRefs}`,
    `- App/global CSS token references: ${globalsTokenRefs}`,
    "",
    "## Catholic component dependency check",
    "",
    `- Catholic TSX component files scanned: ${catholicFiles.length}`,
    `- Catholic TSX files importing primitives: ${primitiveImports.length}`,
    "",
    "## Hard-coded color check",
    "",
    `- Hard-coded hex/rgb colors in primitives.css: ${primitiveHardHex.length}`,
    `- Hard-coded hex/rgb colors in catholic.css: ${catholicHardHex.length}`,
    `- Hard-coded hex/rgb colors in globals.css: ${appHardHex.length}`,
    "",
    primitiveHardHex.length
      ? `Primitive hard-coded colors: ${[...new Set(primitiveHardHex)].join(", ")}`
      : "Primitive hard-coded colors: none found.",
    "",
    catholicHardHex.length
      ? `Catholic hard-coded colors: ${[...new Set(catholicHardHex)].join(", ")}`
      : "Catholic hard-coded colors: none found.",
    "",
    appHardHex.length
      ? `App/global hard-coded colors: ${[...new Set(appHardHex)].join(", ")}`
      : "App/global hard-coded colors: none found.",
    "",
    "## Canary status",
    "",
    `- Token canary active: ${hasBlock(files.globals, TOKEN_START, TOKEN_END) ? "yes" : "no"}`,
    `- Primitive canary active: ${hasBlock(files.primitives, PRIMITIVE_START, PRIMITIVE_END) ? "yes" : "no"}`,
    "",
  ].join("\n");

  fs.mkdirSync(path.dirname(files.report), { recursive: true });
  write(files.report, report + "\n");
  console.log(report);
  console.log(`Saved ${path.relative(root, files.report)}`);
}

const command = process.argv[2];

if (!["on", "off", "status", "audit"].includes(command)) {
  console.log(`Usage:
  node apps/web/scripts/design-system-cascade-canary.mjs on
  node apps/web/scripts/design-system-cascade-canary.mjs off
  node apps/web/scripts/design-system-cascade-canary.mjs status
  node apps/web/scripts/design-system-cascade-canary.mjs audit

Commands:
  on      Adds temporary token + primitive canary CSS.
  off     Removes temporary canary CSS.
  status  Shows whether the canary is active.
  audit   Writes .scratch/design-system-cascade-audit.md.
`);
  process.exit(1);
}

if (command === "on") {
  insertBlock(files.globals, TOKEN_START, TOKEN_END, tokenBlock);
  insertBlock(files.primitives, PRIMITIVE_START, PRIMITIVE_END, primitiveBlock);
  console.log("Cascade canary ON.");
  console.log("Changed global token variables and primitive CSS.");
  console.log("Run pnpm dev and inspect / plus /components-gallery.");
}

if (command === "off") {
  removeBlock(files.globals, TOKEN_START, TOKEN_END);
  removeBlock(files.primitives, PRIMITIVE_START, PRIMITIVE_END);
  console.log("Cascade canary OFF.");
}

if (command === "status") {
  console.log({
    tokenCanary: hasBlock(files.globals, TOKEN_START, TOKEN_END),
    primitiveCanary: hasBlock(files.primitives, PRIMITIVE_START, PRIMITIVE_END),
  });
}

if (command === "audit") {
  audit();
}
