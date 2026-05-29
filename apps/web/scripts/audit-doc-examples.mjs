import fs from "node:fs";
import path from "node:path";

const pagePath = path.resolve("apps/web/src/app/components-gallery/page.tsx");
const source = fs.readFileSync(pagePath, "utf8");

const componentBlockRegex =
  /<ComponentBlock\s+title="([^"]+)"[\s\S]*?\scode=\{([\s\S]*?)\}\s*>\s*([\s\S]*?)\s*<\/ComponentBlock>/g;

const results = [];
let match;

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function classifyCodeExpression(expr) {
  const trimmed = expr.trim();

  if (trimmed.startsWith("`")) {
    return {
      mode: "hard-coded-template",
      shared: false,
      reason: "Code is an inline template literal. Preview may drift from code.",
    };
  }

  if (/Code$/.test(trimmed) || /ExamplesCode$/.test(trimmed) || /ExampleCode$/.test(trimmed) || /Code\s*\}/.test(trimmed)) {
    return {
      mode: "shared-code-variable",
      shared: true,
      reason: "Code comes from a variable and can be generated from shared example data.",
    };
  }

  return {
    mode: "unknown-expression",
    shared: false,
    reason: "Code expression is not clearly generated from shared example data.",
  };
}

function extractLikelyPreviewComponents(preview) {
  const tags = [...preview.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)].map((m) => m[1]);
  return [...new Set(tags)].filter((tag) => tag !== "ComponentBlock");
}

while ((match = componentBlockRegex.exec(source)) !== null) {
  const [, title, codeExpression, preview] = match;
  const classification = classifyCodeExpression(codeExpression);
  const previewComponents = extractLikelyPreviewComponents(preview);

  results.push({
    title,
    mode: classification.mode,
    shared: classification.shared,
    reason: classification.reason,
    codeExpression: normalize(codeExpression).slice(0, 120),
    previewComponents,
  });
}

const lines = [];

lines.push("# Docs Example Audit");
lines.push("");
lines.push(`Source: \`${path.relative(process.cwd(), pagePath)}\``);
lines.push("");
lines.push("This audit checks whether each visible docs example uses a shared code source or a separately hard-coded code block.");
lines.push("");
lines.push("## Summary");
lines.push("");

const passing = results.filter((result) => result.shared);
const failing = results.filter((result) => !result.shared);

lines.push(`- Total ComponentBlock examples: ${results.length}`);
lines.push(`- Shared/generated examples: ${passing.length}`);
lines.push(`- Hard-coded or unclear examples: ${failing.length}`);
lines.push("");

lines.push("## Results");
lines.push("");
lines.push("| ComponentBlock | Status | Mode | Preview components | Reason |");
lines.push("|---|---:|---|---|---|");

for (const result of results) {
  lines.push(
    `| ${result.title} | ${result.shared ? "✅ PASS" : "❌ REVIEW"} | \`${result.mode}\` | ${result.previewComponents.map((item) => `\`${item}\``).join(", ")} | ${result.reason} |`
  );
}

lines.push("");
lines.push("## Items needing cleanup");
lines.push("");

if (failing.length === 0) {
  lines.push("- None.");
} else {
  for (const result of failing) {
    lines.push(`- ${result.title}: ${result.reason}`);
  }
}

lines.push("");
lines.push("## Rule");
lines.push("");
lines.push("Every docs example should eventually use one of these patterns:");
lines.push("");
lines.push("```tsx");
lines.push("const example = { ... };");
lines.push("const exampleCode = toCode(example);");
lines.push("");
lines.push("<ComponentBlock code={exampleCode}>");
lines.push("  <SomeComponent {...example} />");
lines.push("</ComponentBlock>");
lines.push("```");
lines.push("");
lines.push("or:");
lines.push("");
lines.push("```tsx");
lines.push("const examples = [ ... ] as const;");
lines.push("const examplesCode = examples.map(toCode).join(\"\\n\");");
lines.push("");
lines.push("<ComponentBlock code={examplesCode}>");
lines.push("  {examples.map((example) => <SomeComponent key={example.id} {...example} />)}");
lines.push("</ComponentBlock>");
lines.push("```");

const outPath = path.resolve(".scratch/docs-example-audit.md");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n") + "\n");

console.log(`Audited ${results.length} ComponentBlock examples.`);
console.log(`Shared/generated: ${passing.length}`);
console.log(`Review needed: ${failing.length}`);
console.log(`Saved ${path.relative(process.cwd(), outPath)}`);

if (failing.length > 0) {
  console.log("");
  console.log("Review needed:");
  for (const result of failing) {
    console.log(`- ${result.title}: ${result.mode}`);
  }
}
