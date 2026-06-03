import fs from "node:fs";
import path from "node:path";

const scriptPath = "scripts/create-ccui-external-gallery.sh";
const text = fs.readFileSync(scriptPath, "utf8");

const forbidden = [
  /\.ccui-/,
  /#root\s+\.ccui-/,
  /body\s+\.ccui-/,
  /main\s+\.ccui-/,
];

let failed = false;

for (const pattern of forbidden) {
  if (pattern.test(text)) {
    console.error(`Forbidden external gallery CSS selector found: ${pattern}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("OK: external gallery CSS does not style ccui-* package classes.");
