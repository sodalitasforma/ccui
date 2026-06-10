const fs = require("fs");

const files = ["dist/index.js", "dist/index.cjs"];
const directive = '"use client";\n';

for (const file of files) {
  if (!fs.existsSync(file)) continue;

  const source = fs.readFileSync(file, "utf8");

  if (!source.startsWith('"use client";')) {
    fs.writeFileSync(file, directive + source);
  }
}
