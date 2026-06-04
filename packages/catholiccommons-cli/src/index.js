#!/usr/bin/env node
import { Command } from "commander";
import fs from "node:fs";
import path from "node:path";

const program = new Command();

const componentRegistry = {
  button: {
    name: "Button",
    packageName: "@catholiccommons/primitives",
    importName: "Button",
    styleImport: "@catholiccommons/primitives/primitives.css",
  },
  card: {
    name: "Card",
    packageName: "@catholiccommons/primitives",
    importName: "Card",
    styleImport: "@catholiccommons/primitives/primitives.css",
  },
  badge: {
    name: "Badge",
    packageName: "@catholiccommons/primitives",
    importName: "Badge",
    styleImport: "@catholiccommons/primitives/primitives.css",
  },
  "mass-schedule-block": {
    name: "MassScheduleBlock",
    packageName: "@catholiccommons/catholic",
    importName: "MassScheduleBlock",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "confession-schedule-block": {
    name: "ConfessionScheduleBlock",
    packageName: "@catholiccommons/catholic",
    importName: "ConfessionScheduleBlock",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "adoration-schedule-block": {
    name: "AdorationScheduleBlock",
    packageName: "@catholiccommons/catholic",
    importName: "AdorationScheduleBlock",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "holy-day-schedule-block": {
    name: "HolyDayScheduleBlock",
    packageName: "@catholiccommons/catholic",
    importName: "HolyDayScheduleBlock",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "liturgical-day-card": {
    name: "LiturgicalDayCard",
    packageName: "@catholiccommons/catholic",
    importName: "LiturgicalDayCard",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "liturgical-season-badge": {
    name: "LiturgicalSeasonBadge",
    packageName: "@catholiccommons/catholic",
    importName: "LiturgicalSeasonBadge",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "parish-announcement-card": {
    name: "ParishAnnouncementCard",
    packageName: "@catholiccommons/catholic",
    importName: "ParishAnnouncementCard",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "church-document-card": {
    name: "ChurchDocumentCard",
    packageName: "@catholiccommons/catholic",
    importName: "ChurchDocumentCard",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "church-document-header": {
    name: "ChurchDocumentHeader",
    packageName: "@catholiccommons/catholic",
    importName: "ChurchDocumentHeader",
    styleImport: "@catholiccommons/catholic/catholic.css",
  },
  "document-citation": {
    name: "DocumentCitation",
    packageName: "@catholiccommons/catholic",
    importName: "DocumentCitation",
    styleImport: "@catholiccommons/catholic/catholic.css",
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
    console.log("  pnpm add @catholiccommons/tokens @catholiccommons/primitives @catholiccommons/catholic");
    console.log("");
    console.log("Import styles once:");
    console.log('  import "@catholiccommons/tokens/css-vars.css";');
    console.log('  import "@catholiccommons/primitives/primitives.css";');
    console.log('  import "@catholiccommons/catholic/catholic.css";');
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
