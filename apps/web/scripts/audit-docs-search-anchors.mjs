import { existsSync, readFileSync } from "node:fs";

const routes = [
  ["/docs", "apps/web/src/app/docs/page.tsx"],
  ["/components-gallery", "apps/web/src/app/components-gallery/page.tsx"],
  ["/colors", "apps/web/src/app/colors/page.tsx"],
  ["/typography", "apps/web/src/app/typography/page.tsx"],
  ["/templates", "apps/web/src/app/templates/page.tsx"],
  ["/icons", "apps/web/src/app/icons/page.tsx"],
];

const validTargets = new Set();

for (const [route, filePath] of routes) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing route file for ${route}: ${filePath}`);
  }

  const text = readFileSync(filePath, "utf8");

  validTargets.add(route);

  for (const match of text.matchAll(/<Section\s+id="([^"]+)"/g)) {
    validTargets.add(`${route}#${match[1]}`);
  }
}

const searchIndex = readFileSync("apps/web/src/app/docs/search-index.ts", "utf8");
const hrefs = Array.from(searchIndex.matchAll(/href:\s*"([^"]+)"/g)).map(
  (match) => match[1]
);

const missing = hrefs.filter((href) => {
  if (!href.startsWith("/")) return false;
  return !validTargets.has(href);
});

if (missing.length) {
  console.error("Docs search index has missing targets:");
  for (const href of missing) console.error(`- ${href}`);
  process.exit(1);
}

console.log(`Docs search anchors OK: ${hrefs.length} indexed hrefs checked.`);
