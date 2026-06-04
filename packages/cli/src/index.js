#!/usr/bin/env node
import { Command } from "commander";
import fs from "node:fs";
import path from "node:path";

const program = new Command();

const components = [
  "button",
  "card",
  "badge",
  "mass-schedule-block",
  "confession-schedule-block",
  "adoration-schedule-block",
  "holy-day-schedule-block",
  "liturgical-day-card",
  "liturgical-season-badge",
  "parish-announcement-card",
  "church-document-card",
  "church-document-header",
  "document-citation"
];

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
    for (const component of components) console.log(component);
  });

program
  .command("add")
  .argument("<component>")
  .description("Show import guidance for a Catholic Commons UI component")
  .action((component) => {
    if (!components.includes(component)) {
      console.error("Unknown component: " + component);
      console.error("Run ccui list to see available components.");
      process.exit(1);
    }

    console.log("Component: " + component);
    console.log("Use the matching export from @ccui/primitives or @ccui/catholic.");
  });

program.parse();
