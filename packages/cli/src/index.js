#!/usr/bin/env node
import { Command } from "commander";

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

program.name("ccui").description("Catholic Commons UI command line tools").version("0.0.1");

program.command("init").description("Show setup instructions for Catholic Commons UI").action(() => {
  console.log("Install packages:");
  console.log("  pnpm add @ccui/tokens @ccui/primitives @ccui/catholic");
  console.log("");
  console.log("Import styles once:");
  console.log("  import \"@ccui/tokens/css-vars.css\";");
  console.log("  import \"@ccui/primitives/primitives.css\";");
  console.log("  import \"@ccui/catholic/catholic.css\";");
});

program.command("list").description("List available Catholic Commons UI components").action(() => {
  for (const component of components) console.log(component);
});

program.command("add").argument("<component>").description("Show import guidance for a Catholic Commons UI component").action((component) => {
  if (!components.includes(component)) {
    console.error("Unknown component: " + component);
    console.error("Run ccui list to see available components.");
    process.exit(1);
  }
  console.log("Component: " + component);
  console.log("Use the matching export from @ccui/primitives or @ccui/catholic.");
});

program.parse();
