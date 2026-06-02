#!/usr/bin/env bash
set -euo pipefail

WORKDIR="/tmp/ccui-github-install-test"
REPO_DIR="$WORKDIR/repo"
PACK_DIR="$WORKDIR/packs"
APP_DIR="$WORKDIR/consumer"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR" "$PACK_DIR" "$APP_DIR"

echo "== Clone fresh repo from GitHub =="
git clone https://github.com/sodalitasforma/forma.git "$REPO_DIR"

cd "$REPO_DIR"

echo "== Install and build repo =="
pnpm install
pnpm typecheck
pnpm build

echo "== Pack CCUI packages =="
mkdir -p "$PACK_DIR"

for pkg in tokens primitives catholic; do
  echo "-- packing packages/$pkg"
  (cd "packages/$pkg" && pnpm pack --pack-destination "$PACK_DIR")
done

echo "== Packed files =="
ls -lah "$PACK_DIR"

TOKENS_TGZ="$(ls "$PACK_DIR"/ccui-tokens-*.tgz | head -1)"
PRIMITIVES_TGZ="$(ls "$PACK_DIR"/ccui-primitives-*.tgz | head -1)"
CATHOLIC_TGZ="$(ls "$PACK_DIR"/ccui-catholic-*.tgz | head -1)"

echo "tokens: $TOKENS_TGZ"
echo "primitives: $PRIMITIVES_TGZ"
echo "catholic: $CATHOLIC_TGZ"

echo "== Create clean consumer app =="
cd "$APP_DIR"

cat > package.json <<JSON
{
  "name": "ccui-consumer-smoke-test",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "react": "latest",
    "react-dom": "latest",
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
  },
  "devDependencies": {}
}
JSON

cat > index.html <<'HTML'
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCUI Consumer Test</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
HTML

mkdir -p src

cat > src/main.tsx <<'TSX'
import React from "react";
import { createRoot } from "react-dom/client";

import "@ccui/tokens/css-vars.css";
import "@ccui/primitives/primitives.css";
import "@ccui/catholic/catholic.css";

import { Button, Card, Stack, Heading, Text } from "@ccui/primitives";
import { MassScheduleBlock, ProjectDonationCallout } from "@ccui/catholic";

function App() {
  return (
    <main style={{ padding: "48px" }}>
      <Stack gap="lg">
        <Card padding="lg" border="gold">
          <Stack gap="md">
            <Heading level={1} size="2xl">
              CCUI consumer smoke test
            </Heading>

            <Text tone="secondary">
              If this page builds, a clean app can install CCUI packages and import the documented styles/components.
            </Text>

            <Button href="https://github.com/sodalitasforma/forma">
              Open repository
            </Button>
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

echo "== Install consumer deps =="
pnpm install

echo "== Build consumer app =="
pnpm build

echo "== SUCCESS: CCUI installed and built from GitHub-packed packages =="
echo "Consumer app path: $APP_DIR"
