#!/usr/bin/env node
import { Command } from "commander";
import fs from "node:fs";
import path from "node:path";

const program = new Command();

const componentRegistry = {
  button: {
    name: "Button",
    packageName: "@ccui/primitives",
    importName: "Button",
    styleImport: "@ccui/primitives/primitives.css",
  },
  card: {
    name: "Card",
    packageName: "@ccui/primitives",
    importName: "Card",
    styleImport: "@ccui/primitives/primitives.css",
  },
  badge: {
    name: "Badge",
    packageName: "@ccui/primitives",
    importName: "Badge",
    styleImport: "@ccui/primitives/primitives.css",
  },
  "mass-schedule-block": {
    name: "MassScheduleBlock",
    packageName: "@ccui/catholic",
    importName: "MassScheduleBlock",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "confession-schedule-block": {
    name: "ConfessionScheduleBlock",
    packageName: "@ccui/catholic",
    importName: "ConfessionScheduleBlock",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "adoration-schedule-block": {
    name: "AdorationScheduleBlock",
    packageName: "@ccui/catholic",
    importName: "AdorationScheduleBlock",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "holy-day-schedule-block": {
    name: "HolyDayScheduleBlock",
    packageName: "@ccui/catholic",
    importName: "HolyDayScheduleBlock",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "liturgical-day-card": {
    name: "LiturgicalDayCard",
    packageName: "@ccui/catholic",
    importName: "LiturgicalDayCard",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "liturgical-season-badge": {
    name: "LiturgicalSeasonBadge",
    packageName: "@ccui/catholic",
    importName: "LiturgicalSeasonBadge",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "parish-announcement-card": {
    name: "ParishAnnouncementCard",
    packageName: "@ccui/catholic",
    importName: "ParishAnnouncementCard",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "church-document-card": {
    name: "ChurchDocumentCard",
    packageName: "@ccui/catholic",
    importName: "ChurchDocumentCard",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "church-document-header": {
    name: "ChurchDocumentHeader",
    packageName: "@ccui/catholic",
    importName: "ChurchDocumentHeader",
    styleImport: "@ccui/catholic/catholic.css",
  },
  "document-citation": {
    name: "DocumentCitation",
    packageName: "@ccui/catholic",
    importName: "DocumentCitation",
    styleImport: "@ccui/catholic/catholic.css",
  },
};

const components = Object.keys(componentRegistry).sort();

const configTemplate = {
  "$schema": "https://catholiccommonsui.org/schema.json",
  "style": "default",
  "typescript": true,
  "tsx": true,
  "css": "app/globals.css",
  "aliases": {
    "components": "@/components",
    "lib": "@/lib"
  }
};

program
  .name("ccui")
  .description("Catholic Commons UI command line tools")
  .version("0.0.1");

program
  .command("init")
  .description("Initialize Catholic Commons UI config in this project")
  .option("-y, --yes", "Skip prompts and write the default config")
  .action(() => {
    const target = path.join(process.cwd(), "components.json");

    if (fs.existsSync(target)) {
      console.log("components.json already exists.");
    } else {
      fs.writeFileSync(target, JSON.stringify(configTemplate, null, 2) + "\n");
      console.log("Created components.json");
    }

    console.log("");
    console.log("Install packages:");
    console.log("  pnpm add @ccui/tokens @ccui/primitives @ccui/catholic");
    console.log("");
    console.log("Import styles once:");
    console.log('  import "@ccui/tokens/css-vars.css";');
    console.log('  import "@ccui/primitives/primitives.css";');
    console.log('  import "@ccui/catholic/catholic.css";');
  });

program
  .command("list")
  .description("List available Catholic Commons UI components")
  .action(() => {
    for (const slug of components) {
      const component = componentRegistry[slug];
      console.log(slug + " — " + component.importName + " from " + component.packageName);
    }
  });

program
  .command("add")
  .argument("<component>")
  .description("Add a Catholic Commons UI component wrapper to this project")
  .option("--dry-run", "Show what would be written without creating files")
  .action((component, options) => {
    const entry = componentRegistry[component];

    if (!entry) {
      console.error("Unknown component: " + component);
      console.error("Run ccui list to see available components.");
      process.exit(1);
    }

    const dir = path.join(process.cwd(), "components", "ccui");
    const target = path.join(dir, component + ".tsx");
    const source =
      'export { ' + entry.importName + ' } from "' + entry.packageName + '";\n';

    console.log("Component: " + entry.name);
    console.log("");

    if (options.dryRun) {
      console.log("Would write:");
      console.log("  " + target);
    } else {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(target, source);
      console.log("Created:");
      console.log("  " + target);
    }

    console.log("");
    console.log("Install package:");
    console.log("  pnpm add " + entry.packageName);
    console.log("");
    console.log("Import styles once:");
    console.log('  import "' + entry.styleImport + '";');
  });

program.parse();
