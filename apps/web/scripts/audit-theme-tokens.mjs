import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = [
  "packages/primitives/src/styles",
  "packages/catholic/src/styles",
  "apps/web/src/app/globals.css",
];

const allowedFiles = new Set([
  // Token source and color docs are allowed to display or define colors directly.
  "apps/web/src/app/colors/page.tsx",
]);

const allowedLineFragments = [
  "white-space",
  "liturgical-white",
  "liturgical-black",
  "liturgicalWhite",
  "liturgicalBlack",
  "cdcf-colors",
  "--ccui-app-white-wash",
  "--ccui-app-surface-white",
];

const riskyPatterns = [
  {
    label: "hex color",
    pattern: /#[0-9a-fA-F]{3,8}\b/g,
  },
  {
    label: "raw rgba",
    pattern: /rgba?\(/gi,
  },
  {
    label: "literal white color value",
    pattern: /:\s*white\s*[;}]/gi,
  },
  {
    label: "literal black color value",
    pattern: /:\s*black\s*[;}]/gi,
  },
  {
    label: "direct raw white token",
    pattern: /var\(--ccui-color-white\)/g,
  },
  {
    label: "direct raw black token",
    pattern: /var\(--ccui-color-black\)/g,
  },
];

function walk(path) {
  const stat = statSync(path);

  if (stat.isFile()) {
    return [path];
  }

  const files = [];

  for (const entry of readdirSync(path)) {
    const child = join(path, entry);
    const childStat = statSync(child);

    if (childStat.isDirectory()) {
      files.push(...walk(child));
    } else if (/\.(css|tsx|ts)$/.test(child)) {
      files.push(child);
    }
  }

  return files;
}

const findings = [];

for (const root of roots) {
  for (const file of walk(root)) {
    const rel = relative(process.cwd(), file);

    if (allowedFiles.has(rel)) continue;

    const text = readFileSync(file, "utf8");
    const lines = text.split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (allowedLineFragments.some((fragment) => line.includes(fragment))) {
        continue;
      }

      for (const { label, pattern } of riskyPatterns) {
        pattern.lastIndex = 0;

        if (pattern.test(line)) {
          findings.push({
            file: rel,
            line: i + 1,
            label,
            text: line.trim(),
          });
        }
      }
    }
  }
}

if (findings.length) {
  console.error("Theme token audit found risky hardcoded color usage:");

  for (const finding of findings) {
    console.error(
      `- ${finding.file}:${finding.line} [${finding.label}] ${finding.text}`
    );
  }

  console.error(
    "\nUse semantic tokens, or add a narrow allowlist entry for intentional visual demos."
  );
  process.exit(1);
}

console.log("Theme tokens OK: no risky hardcoded color usage found.");
