#!/usr/bin/env bash
set -euo pipefail

WORKDIR="/tmp/ccui-visual-consumer-test"
REPO_DIR="$WORKDIR/repo"
PACK_DIR="$WORKDIR/packs"
APP_DIR="$WORKDIR/consumer"
SCREENSHOT_DIR="$WORKDIR/screenshots"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR" "$PACK_DIR" "$APP_DIR" "$SCREENSHOT_DIR"

echo "== Clone fresh repo from GitHub =="
git clone https://github.com/sodalitasforma/forma.git "$REPO_DIR"

cd "$REPO_DIR"

echo "== Install and build repo =="
pnpm install
pnpm typecheck
pnpm build

echo "== Pack CCUI packages =="
for pkg in tokens primitives catholic; do
  (cd "packages/$pkg" && pnpm pack --pack-destination "$PACK_DIR")
done

TOKENS_TGZ="$(ls "$PACK_DIR"/ccui-tokens-*.tgz | head -1)"
PRIMITIVES_TGZ="$(ls "$PACK_DIR"/ccui-primitives-*.tgz | head -1)"
CATHOLIC_TGZ="$(ls "$PACK_DIR"/ccui-catholic-*.tgz | head -1)"

echo "== Create clean consumer app =="
cd "$APP_DIR"

cat > package.json <<JSON
{
  "name": "ccui-visual-consumer-test",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "vite build",
    "dev": "vite --host 127.0.0.1",
    "screenshot": "playwright test"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "react": "latest",
    "react-dom": "latest",
    "@playwright/test": "latest",
    "@ccui/tokens": "file:$TOKENS_TGZ",
    "@ccui/primitives": "file:$PRIMITIVES_TGZ",
    "@ccui/catholic": "file:$CATHOLIC_TGZ"
  },
  "pnpm": {
    "overrides": {
      "@ccui/tokens": "file:$TOKENS_TGZ",
      "@ccui/primitives": "file:$PRIMITIVES_TGZ",
      "@ccui/catholic": "file:$CATHOLIC_TGZ"
    }
  }
}
JSON

cat > index.html <<'HTML'
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCUI Visual Consumer Test</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
HTML

mkdir -p src tests

cat > src/main.tsx <<'TSX'
import React from "react";
import { createRoot } from "react-dom/client";

import "@ccui/tokens/css-vars.css";
import "@ccui/primitives/primitives.css";
import "@ccui/catholic/catholic.css";

import {
  Button,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
} from "@ccui/primitives";

import {
  LiturgicalDayCard,
  MassScheduleBlock,
  ProjectDonationCallout,
} from "@ccui/catholic";

function App() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "var(--ccui-color-surface-page)" }}>
      <Stack gap="lg">
        <Card padding="lg" border="gold">
          <Stack gap="md">
            <Heading level={1} size="2xl">
              CCUI external render test
            </Heading>

            <Text tone="secondary">
              This page is rendered from packages pulled from GitHub, packed, and installed into a clean app.
            </Text>

            <Cluster gap="sm">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="subtle" size="xs">Read CDCF Manifesto</Button>
              <Button variant="ghost">Ghost</Button>
            </Cluster>
          </Stack>
        </Card>

        <Card padding="lg" border="subtle">
          <Stack gap="md">
            <Heading level={2} size="xl">Timeline</Heading>

            <Timeline>
              <TimelineItem status="complete">
                <TimelineMarker>1</TimelineMarker>
                <TimelineContent>
                  <Heading level={3} size="md">Tokens loaded</Heading>
                  <Text tone="secondary">CSS variables are available in the consumer app.</Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem status="current">
                <TimelineMarker>2</TimelineMarker>
                <TimelineContent>
                  <Heading level={3} size="md">Primitives rendered</Heading>
                  <Text tone="secondary">Timeline, Button, Card, Stack, and Text render from @ccui/primitives.</Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem status="upcoming">
                <TimelineMarker>3</TimelineMarker>
                <TimelineContent>
                  <Heading level={3} size="md">Catholic components rendered</Heading>
                  <Text tone="secondary">Mass schedules and giving components render from @ccui/catholic.</Text>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
        </Card>

        <MassScheduleBlock
          title="Mass Schedule"
          subtitle="Regular parish Mass times."
          days={[
            {
              day: "Sunday",
              times: [
                {
                  time: "9:00 AM",
                  label: "Sunday Mass",
                  language: "English",
                  location: "Main church"
                }
              ]
            }
          ]}
          exceptions={[]}
          source={{ label: "Parish schedule", href: "#" }}
        />

        <LiturgicalDayCard
          title="Second Sunday of Advent"
          date="December 7"
          season="Advent"
          color="Violet"
          rank="Sunday"
          readings={[
            { label: "First Reading", citation: "Isaiah 11:1-10" },
            { label: "Gospel", citation: "Matthew 3:1-12" }
          ]}
        />

        <ProjectDonationCallout
          title="Support the parish restoration fund"
          description="Help preserve the church, chapel, sacred art, and parish facilities for future generations."
          amounts={["$25", "$50", "$100"]}
          selectedAmount="$50"
          impact="$50 funds one restoration hour."
          primaryAction={{ label: "Give now", href: "#" }}
          secondaryActions={[{ label: "Learn about the project", href: "#" }]}
        />
      </Stack>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
TSX

cat > tests/visual.spec.ts <<TEST
import { test, expect } from "@playwright/test";

test("CCUI components render from installed packages", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");

  await expect(page.getByRole("heading", { name: "CCUI external render test" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Timeline" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Mass Schedule" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Support the parish restoration fund" })).toBeVisible();

  await page.screenshot({
    path: "$SCREENSHOT_DIR/ccui-consumer-render.png",
    fullPage: true
  });
});
TEST

cat > playwright.config.ts <<'TS'
import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "pnpm dev",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: false,
  },
  use: {
    viewport: { width: 1440, height: 1200 },
  },
});
TS

echo "== Install consumer deps =="
pnpm install

echo "== Install Playwright browser =="
pnpm exec playwright install chromium

echo "== Build consumer app =="
pnpm build

echo "== Render screenshot =="
pnpm screenshot

echo "== SUCCESS: visual consumer smoke test passed =="
echo "Screenshot: $SCREENSHOT_DIR/ccui-consumer-render.png"
