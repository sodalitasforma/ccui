import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = join(__dirname, "..");
const outputRoot = join(appRoot, "mobile-audit");
const screenshotRoot = join(outputRoot, "screenshots");

const baseUrl = process.env.MOBILE_AUDIT_URL || "http://localhost:3000";

const routes = [
  "/",
  "/docs",
  "/colors",
  "/typography",
  "/icons",
  "/components-gallery",
  "/templates",
];

const widths = [320, 375, 430, 768];

const height = 900;

function routeSlug(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/[^\w-]+/g, "-");
}

function severityForIssues(issues) {
  if (issues.some((issue) => issue.severity === "error")) return "error";
  if (issues.some((issue) => issue.severity === "warning")) return "warning";
  return "pass";
}

async function auditPage(page, route, width) {
  await page.setViewportSize({ width, height });
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts?.ready);
  await page.waitForTimeout(250);

  const screenshotPath = join(
    screenshotRoot,
    `${routeSlug(route)}-${width}.png`
  );

  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  const data = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const documentWidth = document.documentElement.scrollWidth;

    const textLikeSelector = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "span",
      "a",
      "button",
      "code",
      "pre",
      "td",
      "th",
      "label",
      "summary",
      "figcaption",
    ].join(",");

    const tapTargetSelector = [
      "button",
      "input",
      "select",
      "textarea",
      '[role="button"]',
      '[role="link"]',
      ".ccui-button",
      ".ccui-dropdown__trigger",
      ".docs-nav a",
      ".home-nav a",
      ".home-nav .ccui-link",
      ".docs-sidebar-manifesto",
    ].join(",");

    function visibleElement(el) {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) !== 0 &&
        rect.width > 0 &&
        rect.height > 0
      );
    }

    function selectorFor(el) {
      if (el.id) return `#${CSS.escape(el.id)}`;

      const className =
        typeof el.className === "string"
          ? el.className.trim().split(/\s+/).slice(0, 4).join(".")
          : "";

      const tag = el.tagName.toLowerCase();

      if (className) return `${tag}.${className}`;

      const parent = el.parentElement;
      if (!parent) return tag;

      const index = Array.from(parent.children).indexOf(el) + 1;
      return `${tag}:nth-child(${index})`;
    }

    function textFor(el) {
      return (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120);
    }

    function hasScrollableAncestor(el) {
      let current = el.parentElement;

      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        const overflowX = style.overflowX;
        const overflowY = style.overflowY;

        const scrollsX =
          (overflowX === "auto" || overflowX === "scroll") &&
          current.scrollWidth > current.clientWidth + 1;

        const scrollsY =
          (overflowY === "auto" || overflowY === "scroll") &&
          current.scrollHeight > current.clientHeight + 1;

        if (scrollsX || scrollsY) {
          return {
            selector: selectorFor(current),
            overflowX,
            overflowY,
          };
        }

        current = current.parentElement;
      }

      return null;
    }

    function isLayoutContainer(el) {
      const tag = el.tagName.toLowerCase();
      const className = typeof el.className === "string" ? el.className : "";

      if (["main", "section", "article", "aside", "nav", "header", "footer"].includes(tag)) {
        return true;
      }

      return (
        className.includes("docs-shell") ||
        className.includes("docs-main") ||
        className.includes("ccui-container") ||
        className.includes("ccui-stack") ||
        className.includes("ccui-grid") ||
        className.includes("docs-component-list")
      );
    }

    function isInlineTextLink(el) {
      if (el.tagName.toLowerCase() !== "a") return false;

      const className = typeof el.className === "string" ? el.className : "";
      const parent = el.parentElement;
      const parentTag = parent?.tagName.toLowerCase();

      if (className.includes("ccui-button")) return false;
      if (className.includes("docs-nav")) return false;
      if (className.includes("home-nav")) return false;
      if (parent?.className && String(parent.className).includes("docs-nav")) return false;
      if (parent?.className && String(parent.className).includes("home-nav")) return false;

      return ["p", "li", "td", "th", "span"].includes(parentTag || "");
    }

    const allElements = Array.from(document.querySelectorAll("body *"))
      .filter((el) => el instanceof HTMLElement)
      .filter(visibleElement);

    const overflowElements = allElements
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        const scrollableAncestor = hasScrollableAncestor(el);

        return {
          selector: selectorFor(el),
          text: textFor(el),
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === "string" ? el.className : "",
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100,
          left: Math.round(rect.left * 100) / 100,
          right: Math.round(rect.right * 100) / 100,
          overflowRight: Math.round(Math.max(0, rect.right - viewportWidth) * 100) / 100,
          overflowLeft: Math.round(Math.max(0, -rect.left) * 100) / 100,
          position: style.position,
          display: style.display,
          whiteSpace: style.whiteSpace,
          scrollableAncestor,
        };
      })
      .filter((item) => item.overflowRight > 1 || item.overflowLeft > 1)
      .filter((item) => !item.scrollableAncestor)
      .sort((a, b) => (b.overflowRight + b.overflowLeft) - (a.overflowRight + a.overflowLeft))
      .slice(0, 40);

    const tapTargets = Array.from(document.querySelectorAll(tapTargetSelector))
      .filter((el) => el instanceof HTMLElement)
      .filter(visibleElement)
      .filter((el) => !el.classList.contains("ccui-doc-search__input"))
      .filter((el) => !isInlineTextLink(el))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);

        return {
          selector: selectorFor(el),
          text: textFor(el),
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === "string" ? el.className : "",
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100,
          left: Math.round(rect.left * 100) / 100,
          top: Math.round(rect.top * 100) / 100,
          position: style.position,
        };
      })
      .filter((item) => item.width < 36 || item.height < 36)
      .sort((a, b) => Math.min(a.width, a.height) - Math.min(b.width, b.height))
      .slice(0, 60);

    const fixedLayers = allElements
      .map((el) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();

        return {
          selector: selectorFor(el),
          text: textFor(el),
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === "string" ? el.className : "",
          position: style.position,
          zIndex: style.zIndex,
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100,
          top: Math.round(rect.top * 100) / 100,
          left: Math.round(rect.left * 100) / 100,
          right: Math.round(rect.right * 100) / 100,
          bottom: Math.round(rect.bottom * 100) / 100,
          coversViewportWidth: rect.width >= viewportWidth * 0.95,
          coversViewportHeight: rect.height >= viewportHeight * 0.4,
        };
      })
      .filter((item) => item.position === "fixed" || item.position === "sticky")
      .sort((a, b) => {
        const aZ = a.zIndex === "auto" ? 0 : Number(a.zIndex);
        const bZ = b.zIndex === "auto" ? 0 : Number(b.zIndex);
        return bZ - aZ;
      });

    const clippedText = allElements
      .filter((el) => el.matches(textLikeSelector))
      .filter((el) => !isLayoutContainer(el))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);

        return {
          selector: selectorFor(el),
          text: textFor(el),
          tag: el.tagName.toLowerCase(),
          className: typeof el.className === "string" ? el.className : "",
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight,
          overflowX: style.overflowX,
          overflowY: style.overflowY,
          textOverflow: style.textOverflow,
          whiteSpace: style.whiteSpace,
          scrollableAncestor: hasScrollableAncestor(el),
        };
      })
      .filter((item) => {
        if (!item.text) return false;
        if (item.scrollableAncestor) return false;

        const clippedX = item.scrollWidth > item.clientWidth + 1;
        const clippedY = item.scrollHeight > item.clientHeight + 1;
        const intentionallyScrollable =
          item.overflowX === "auto" ||
          item.overflowX === "scroll" ||
          item.overflowY === "auto" ||
          item.overflowY === "scroll";

        return (clippedX || clippedY) && !intentionallyScrollable;
      })
      .slice(0, 40);

    return {
      viewportWidth,
      viewportHeight,
      documentWidth,
      hasHorizontalOverflow: documentWidth > viewportWidth + 1,
      overflowAmount: Math.max(0, documentWidth - viewportWidth),
      overflowElements,
      tapTargets,
      fixedLayers,
      clippedText,
    };
  });

  const issues = [];

  if (data.hasHorizontalOverflow) {
    issues.push({
      severity: "error",
      type: "horizontal-overflow",
      message: `Document is ${data.overflowAmount}px wider than viewport.`,
      details: data.overflowElements.slice(0, 10),
    });
  }

  if (data.overflowElements.length) {
    issues.push({
      severity: "error",
      type: "element-overflow",
      message: `${data.overflowElements.length} visible elements overflow the viewport.`,
      details: data.overflowElements.slice(0, 20),
    });
  }

  if (data.tapTargets.length) {
    issues.push({
      severity: "warning",
      type: "small-tap-targets",
      message: `${data.tapTargets.length} visible interactive elements are below 36×36px.`,
      details: data.tapTargets.slice(0, 30),
    });
  }

  if (data.clippedText.length) {
    issues.push({
      severity: "warning",
      type: "clipped-text",
      message: `${data.clippedText.length} visible text elements appear clipped.`,
      details: data.clippedText.slice(0, 20),
    });
  }

  const suspiciousFixedLayers = data.fixedLayers.filter(
    (layer) =>
      layer.position === "fixed" &&
      layer.coversViewportWidth &&
      layer.coversViewportHeight &&
      layer.selector !== "body"
  );

  if (suspiciousFixedLayers.length) {
    issues.push({
      severity: "warning",
      type: "large-fixed-layers",
      message: `${suspiciousFixedLayers.length} fixed layers cover a large part of the viewport.`,
      details: suspiciousFixedLayers,
    });
  }

  return {
    route,
    width,
    height,
    status: severityForIssues(issues),
    screenshot: screenshotPath.replace(`${process.cwd()}/`, ""),
    metrics: {
      viewportWidth: data.viewportWidth,
      viewportHeight: data.viewportHeight,
      documentWidth: data.documentWidth,
      overflowAmount: data.overflowAmount,
      overflowElementCount: data.overflowElements.length,
      smallTapTargetCount: data.tapTargets.length,
      fixedLayerCount: data.fixedLayers.length,
      clippedTextCount: data.clippedText.length,
    },
    fixedLayers: data.fixedLayers,
    issues,
  };
}

async function main() {
  await mkdir(screenshotRoot, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });

  const results = [];

  for (const route of routes) {
    for (const width of widths) {
      process.stdout.write(`Auditing ${route} at ${width}px... `);

      try {
        const result = await auditPage(page, route, width);
        results.push(result);

        const issueSummary = result.issues.length
          ? `${result.status.toUpperCase()} (${result.issues.map((issue) => issue.type).join(", ")})`
          : "PASS";

        console.log(issueSummary);
      } catch (error) {
        results.push({
          route,
          width,
          height,
          status: "error",
          screenshot: null,
          issues: [
            {
              severity: "error",
              type: "audit-failure",
              message: error instanceof Error ? error.message : String(error),
            },
          ],
        });

        console.log("AUDIT FAILED");
      }
    }
  }

  await browser.close();

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    routes,
    widths,
    totals: {
      checks: results.length,
      pass: results.filter((result) => result.status === "pass").length,
      warning: results.filter((result) => result.status === "warning").length,
      error: results.filter((result) => result.status === "error").length,
    },
    results,
  };

  await writeFile(
    join(outputRoot, "report.json"),
    JSON.stringify(summary, null, 2)
  );

  console.log("");
  console.log("Mobile audit complete.");
  console.log(`Report: ${join(outputRoot, "report.json")}`);
  console.log(`Screenshots: ${screenshotRoot}`);

  if (summary.totals.error > 0) {
    process.exitCode = 1;
  }
}

main();
