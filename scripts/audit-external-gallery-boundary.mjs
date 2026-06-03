import fs from "node:fs";
import path from "node:path";

const galleryDir = process.argv[2] || "/tmp/ccui-external-gallery/gallery";

const filesToRead = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (["node_modules", "dist", ".vite"].includes(entry.name)) continue;
      walk(full);
      continue;
    }

    if (/\.(css|ts|tsx|js|jsx|json|html)$/.test(entry.name)) {
      filesToRead.push(full);
    }
  }
}

walk(path.join(galleryDir, "src"));

const packageJsonPath = path.join(galleryDir, "package.json");
if (fs.existsSync(packageJsonPath)) filesToRead.push(packageJsonPath);

let failed = false;

for (const file of filesToRead) {
  const rel = path.relative(galleryDir, file);
  const text = fs.readFileSync(file, "utf8");

  if (rel.endsWith(".css") && /\.ccui-/.test(text)) {
    console.error(`FAIL: external gallery CSS styles package class in ${rel}`);
    failed = true;
  }

  if (/from\s+["'][^"']*(apps\/web|packages\/[^"']*\/src|\.\.\/\.\.\/packages|\.\.\/packages)/.test(text)) {
    console.error(`FAIL: external gallery imports repo-private files in ${rel}`);
    failed = true;
  }

  if (/import\s+["'][^"']*(apps\/web|packages\/[^"']*\/src|\.\.\/\.\.\/packages|\.\.\/packages)/.test(text)) {
    console.error(`FAIL: external gallery imports repo-private stylesheet/module in ${rel}`);
    failed = true;
  }
}

if (!fs.existsSync(path.join(galleryDir, "src", "main.tsx"))) {
  console.error(`FAIL: ${galleryDir}/src/main.tsx does not exist`);
  failed = true;
}

if (!fs.existsSync(path.join(galleryDir, "src", "style.css"))) {
  console.error(`FAIL: ${galleryDir}/src/style.css does not exist`);
  failed = true;
}

if (failed) process.exit(1);

console.log(`OK: external gallery boundary is clean at ${galleryDir}`);
console.log("- no .ccui-* selectors in external gallery CSS");
console.log("- no repo-private imports");
