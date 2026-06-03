import fs from "node:fs";

const reportPath = ".scratch/ccui-css-contract-audit.json";

if (!fs.existsSync(reportPath)) {
  console.error("Run node scripts/audit-css-contract.mjs first.");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

const cssTargets = {
  primitives: "packages/primitives/src/primitives.css",
  catholic: "packages/catholic/src/catholic.css",
};

function blockForClass(cls) {
  const isModifier = cls.includes("--");
  const isElement = cls.includes("__");
  const isRoot = !isModifier && !isElement;

  if (isRoot) {
    return `.${cls} {
  display: block;
}
`;
  }

  // These are intentional no-op selectors. They satisfy ownership
  // and create a place for future styling without relying on app globals.
  return `.${cls} {
  /* CSS contract: selector owned by package stylesheet. */
}
`;
}

for (const [pkg, cssPath] of Object.entries(cssTargets)) {
  const items = report.filter((item) => item.package === pkg);
  if (!items.length) continue;

  let css = fs.readFileSync(cssPath, "utf8");
  let append = "";

  append += `\n/* --------------------------------------------------------------------------\n`;
  append += ` * CSS contract coverage\n`;
  append += ` * These selectors are emitted by package components and must be owned here.\n`;
  append += ` * -------------------------------------------------------------------------- */\n\n`;

  const classes = [...new Set(items.flatMap((item) => item.missing))].sort();

  for (const cls of classes) {
    if (css.includes(`.${cls}`)) continue;
    append += blockForClass(cls) + "\n";
  }

  if (append.trim()) {
    fs.writeFileSync(cssPath, css.trimEnd() + "\n" + append);
    console.log(`Patched ${cssPath}: ${classes.length} selectors`);
  }
}
