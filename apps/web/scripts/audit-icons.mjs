import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const iconsRoot = "packages/icons/src";
const iconDirs = ["interface", "catholic"];

function walk(dir) {
  return readdirSync(dir)
    .flatMap((entry) => {
      const path = join(dir, entry);
      return statSync(path).isDirectory() ? walk(path) : [path];
    });
}

const iconFiles = iconDirs
  .flatMap((dir) => walk(join(iconsRoot, dir)))
  .filter((file) => file.endsWith("-icon.tsx"))
  .sort();

const iconFileExports = iconFiles.map((file) => {
  const text = readFileSync(file, "utf8");
  const match = text.match(/export function ([A-Z][A-Za-z0-9]+Icon)\(/);

  if (!match) {
    throw new Error(`Icon file does not export a named Icon function: ${file}`);
  }

  if (!text.includes("<IconSvg")) {
    throw new Error(`Icon file does not use shared IconSvg: ${file}`);
  }

  return {
    file,
    exportName: match[1],
  };
});

const indexText = readFileSync(join(iconsRoot, "index.ts"), "utf8");
const metadataText = readFileSync(join(iconsRoot, "metadata.ts"), "utf8");

const registryExportNames = Array.from(
  metadataText.matchAll(/exportName:\s*"([^"]+)"/g)
).map((match) => match[1]);

const duplicateRegistryNames = registryExportNames.filter(
  (name, index) => registryExportNames.indexOf(name) !== index
);

if (duplicateRegistryNames.length) {
  throw new Error(
    `Duplicate icon registry exportName values:\n${duplicateRegistryNames.join("\n")}`
  );
}

const fileExportNames = iconFileExports.map((item) => item.exportName);

const missingFromRegistry = fileExportNames.filter(
  (name) => !registryExportNames.includes(name)
);

const missingFiles = registryExportNames.filter(
  (name) => !fileExportNames.includes(name)
);

const missingRootExports = fileExportNames.filter(
  (name) => !indexText.includes(name) && !indexText.includes("export *")
);

if (missingFromRegistry.length) {
  throw new Error(
    `Icon files missing from iconRegistry:\n${missingFromRegistry.join("\n")}`
  );
}

if (missingFiles.length) {
  throw new Error(
    `iconRegistry entries missing icon files:\n${missingFiles.join("\n")}`
  );
}

if (missingRootExports.length) {
  throw new Error(
    `Icon files missing root exports:\n${missingRootExports.join("\n")}`
  );
}

console.log(`Icons OK: ${iconFileExports.length} icon files audited.`);
for (const item of iconFileExports) {
  console.log(`- ${item.exportName} (${relative(iconsRoot, item.file)})`);
}
