#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="${TMPDIR:-/tmp}/ccui-docs-smoke-$$"

cleanup() {
  rm -rf "$TMP"
}
trap cleanup EXIT

echo "== CCUI docs install smoke test =="
echo "Repo: $ROOT"
echo "Temp: $TMP"

command -v pnpm >/dev/null || {
  echo "Missing pnpm"
  exit 1
}

mkdir -p "$TMP/tarballs"

echo "== Use local unpublished packages =="
TOKENS_DIR="$ROOT/packages/tokens"
ICONS_DIR="$ROOT/packages/icons"
PRIMITIVES_DIR="$ROOT/packages/primitives"
CATHOLIC_DIR="$ROOT/packages/catholic"
UI_DIR="$ROOT/packages/ui"

echo "== Create consumer Vite React app =="
cd "$TMP"
CI=1 pnpm create vite consumer --template react-ts --no-interactive
cd consumer

node -e '
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.scripts.build = "vite build";
pkg.scripts.typecheck = "tsc -b";
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
'

echo "== Install local dependency packages because npm is not published yet =="
pnpm add "$TOKENS_DIR" "$ICONS_DIR" "$PRIMITIVES_DIR" "$CATHOLIC_DIR" >/dev/null

echo "== Install umbrella package =="
pnpm add "$UI_DIR"

echo "== Add docs-promised imports and components =="
cat > src/App.tsx <<'TSX'
import "@catholiccommons/ui/styles.css";

import {
  Button,
  Card,
  Stack,
  MassScheduleBlock,
  ParishHero,
  SearchIcon,
} from "@catholiccommons/ui";

export default function App() {
  return (
    <Stack gap="lg">
      <ParishHero
        title="St. Example Parish"
        subtitle="A Catholic parish website built with Catholic Commons UI."
        primaryAction={{ label: "Mass times", href: "#mass" }}
      />

      <Card>
        <Stack gap="md">
          <Button>
            <SearchIcon size="sm" aria-hidden="true" />
            Search
          </Button>

          <MassScheduleBlock
            title="Mass Schedule"
            subtitle="Regular parish Mass times."
            days={[
              {
                day: "Sunday",
                times: [
                  { time: "8:00 AM", label: "Low Mass" },
                  { time: "10:30 AM", label: "Sung Mass" },
                ],
              },
            ]}
          />
        </Stack>
      </Card>
    </Stack>
  );
}
TSX

echo "== Production build =="
pnpm build

echo "== Verify CSS made it into output =="
if ! grep -R --quiet -- "--ccui-" dist/assets; then
  echo "Expected CCUI CSS variables in built assets, but did not find --ccui-"
  exit 1
fi

echo "✅ Docs install smoke test passed"
