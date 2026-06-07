import { readFile } from "node:fs/promises";

const report = JSON.parse(
  await readFile("apps/web/mobile-audit/report.json", "utf8")
);

const buckets = new Map();

function bucketForDetail(issue, detail) {
  const selector = detail.selector || "";
  const className = detail.className || "";
  const tag = detail.tag || "";

  if (issue.type === "element-overflow") {
    if (tag === "code" || selector.includes("code")) return "Code blocks overflow";
    if (tag === "table" || className.includes("ccui-table")) return "Tables overflow";
    if (className.includes("docs-preview") || className.includes("docs-specimen")) return "Component preview/specimen overflow";
    if (className.includes("ccui-grid")) return "Grid does not collapse";
    if (className.includes("docs-icon")) return "Icon gallery overflow";
    if (className.includes("docs-type")) return "Typography specimen overflow";
    return `Overflow: ${selector || tag}`;
  }

  if (issue.type === "small-tap-targets") {
    if (className.includes("docs-nav") || selector.includes("docs-nav")) return "Docs/sidebar nav tap target policy";
    if (className.includes("home-nav") || selector.includes("home-nav")) return "Home nav tap target policy";
    if (className.includes("docs-code-block__copy")) return "Code copy button tap target";
    if (className.includes("docs-sidebar-manifesto")) return "Sidebar manifesto button tap target";
    if (className.includes("ccui-button")) return "Button tap target";
    if (className.includes("ccui-link")) return "Link tap target policy";
    return `Small tap target: ${selector || tag}`;
  }

  if (issue.type === "clipped-text") {
    if (className.includes("docs-type-matrix")) return "Typography matrix clipping";
    if (className.includes("docs-icon")) return "Icon gallery clipping";
    if (className.includes("ccui-button__label")) return "Button label clipping";
    if (className.includes("ccui-heading")) return "Heading clipping";
    if (className.includes("ccui-badge")) return "Badge clipping";
    if (tag === "code" || className.includes("mono")) return "Monospace/code text clipping";
    return `Clipped text: ${selector || tag}`;
  }

  return issue.type;
}

for (const result of report.results) {
  for (const issue of result.issues || []) {
    const details = issue.details?.length ? issue.details : [{}];

    for (const detail of details) {
      const bucket = bucketForDetail(issue, detail);
      const current = buckets.get(bucket) || {
        bucket,
        count: 0,
        routes: new Set(),
        widths: new Set(),
        examples: [],
      };

      current.count += 1;
      current.routes.add(result.route);
      current.widths.add(result.width);

      if (current.examples.length < 5) {
        current.examples.push({
          route: result.route,
          width: result.width,
          issue: issue.type,
          selector: detail.selector,
          text: detail.text,
        });
      }

      buckets.set(bucket, current);
    }
  }
}

const ranked = [...buckets.values()]
  .sort((a, b) => b.count - a.count)
  .map((bucket, index) => ({
    rank: index + 1,
    bucket: bucket.bucket,
    count: bucket.count,
    routes: [...bucket.routes],
    widths: [...bucket.widths].sort((a, b) => a - b),
    examples: bucket.examples,
  }));

console.log("\nMobile audit punch list\n");

for (const item of ranked) {
  console.log(`${item.rank}. ${item.bucket}`);
  console.log(`   Count: ${item.count}`);
  console.log(`   Routes: ${item.routes.join(", ")}`);
  console.log(`   Widths: ${item.widths.join(", ")}`);
  for (const example of item.examples.slice(0, 2)) {
    console.log(`   Example: ${example.route} @ ${example.width}px — ${example.selector || ""}`);
    if (example.text) console.log(`            ${example.text.slice(0, 100)}`);
  }
  console.log("");
}

if (!ranked.length) {
  console.log("No mobile audit issues found.");
}
