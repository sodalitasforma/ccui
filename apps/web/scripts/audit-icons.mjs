import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";

const iconsRoot = "packages/icons/src";
const metadataPath = join(iconsRoot, "metadata.ts");
const rootIndexPath = join(iconsRoot, "index.ts");

function walk(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      files.push(...walk(path));
    } else if (path.endsWith(".tsx")) {
      files.push(path);
    }
  }

  return files;
}

function read(path) {
  return readFileSync(path, "utf8");
}

function iconNameFromFile(path) {
  const text = read(path);
  const match = text.match(/export function ([A-Z][A-Za-z0-9]+Icon)\(/);
  return match?.[1] ?? null;
}

const iconFiles = walk(iconsRoot).filter((file) => {
  const name = basename(file);
  return name !== "icon.tsx";
});

const iconNamesByFile = new Map();

for (const file of iconFiles) {
  const iconName = iconNameFromFile(file);

  if (!iconName) {
    throw new Error(`Icon file missing exported Icon function: ${relative(process.cwd(), file)}`);
  }

  iconNamesByFile.set(file, iconName);
}

const availableIcons = new Set(iconNamesByFile.values());
const metadataText = read(metadataPath);

const registryEntries = Array.from(
  metadataText.matchAll(/exportName:\s*"([A-Z][A-Za-z0-9]+Icon)"/g)
).map((match) => match[1]);

const missingMetadataIcons = registryEntries.filter((name) => !availableIcons.has(name));

if (missingMetadataIcons.length) {
  throw new Error(
    `iconRegistry entries missing icon files:\n${missingMetadataIcons.join("\n")}`
  );
}

const undocumentedIcons = Array.from(availableIcons)
  .filter((name) => !registryEntries.includes(name))
  .sort();

if (undocumentedIcons.length) {
  throw new Error(
    `Icon files missing iconRegistry entries:\n${undocumentedIcons.join("\n")}`
  );
}

const duplicateRegistryEntries = registryEntries.filter(
  (name, index) => registryEntries.indexOf(name) !== index
);

if (duplicateRegistryEntries.length) {
  throw new Error(
    `Duplicate iconRegistry entries:\n${Array.from(new Set(duplicateRegistryEntries)).join("\n")}`
  );
}

const categoryDirs = readdirSync(iconsRoot)
  .map((entry) => join(iconsRoot, entry))
  .filter((path) => statSync(path).isDirectory())
  .sort();

for (const categoryDir of categoryDirs) {
  const indexPath = join(categoryDir, "index.ts");

  if (!existsSync(indexPath)) {
    throw new Error(`Missing category index: ${relative(process.cwd(), indexPath)}`);
  }

  const indexText = read(indexPath);
  const categoryIconFiles = iconFiles.filter((file) => dirname(file) === categoryDir);

  for (const file of categoryIconFiles) {
    const iconName = iconNamesByFile.get(file);
    const exportPath = `./${basename(file, ".tsx")}`;

    if (!indexText.includes(`export { ${iconName} } from "${exportPath}";`)) {
      throw new Error(
        `Missing category export for ${iconName} in ${relative(process.cwd(), indexPath)}`
      );
    }
  }
}

const rootIndexText = read(rootIndexPath);

for (const categoryDir of categoryDirs) {
  const category = basename(categoryDir);

  if (!rootIndexText.includes(`export * from "./${category}";`)) {
    throw new Error(`Missing root icon export for category: ${category}`);
  }
}

console.log(`Icons OK: ${availableIcons.size} icon files audited.`);
for (const name of Array.from(availableIcons).sort()) {
  console.log(`- ${name}`);
}
