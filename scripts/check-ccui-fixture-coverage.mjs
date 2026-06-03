import fs from "node:fs";

const exportsPath = ".scratch/ccui-public-exports.json";

if (!fs.existsSync(exportsPath)) {
  console.error("Missing .scratch/ccui-public-exports.json. Run node scripts/audit-ccui-exports.mjs first.");
  process.exit(1);
}

const publicExports = JSON.parse(fs.readFileSync(exportsPath, "utf8"));

const fixtureSource = fs.readFileSync("scripts/fixtures/ccui-fixture-registry.tsx", "utf8");

const fixtureNames = new Set(
  Array.from(fixtureSource.matchAll(/name:\s*["']([^"']+)["']/g)).map((match) => match[1])
);

const ignore = new Set([
  "cx",
  "CCUIIconProps",
  "CCUISignalBellProps",
  "DocSearchProps",
]);

let failed = false;

for (const [pkg, names] of Object.entries(publicExports)) {
  const missing = names.filter((name) => !fixtureNames.has(name) && !ignore.has(name));

  console.log(`\n${pkg}`);
  console.log(`Exports: ${names.length}`);
  console.log(`Covered fixtures: ${names.filter((name) => fixtureNames.has(name)).length}`);

  if (missing.length) {
    failed = true;
    console.log("Missing fixtures:");
    for (const name of missing) console.log(`- ${name}`);
  } else {
    console.log("All visual exports covered.");
  }
}

if (failed) {
  process.exit(1);
}
