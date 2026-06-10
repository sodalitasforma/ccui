"use client";

import { DocSearch } from "@catholiccommons/primitives";
import { docsSearchItems } from "../docs/search-index";
import { ThemeTestToggle } from "./theme-test-toggle";

export function DocsFloatingSearch() {
  return (
    <div className="docs-floating-search">
      <ThemeTestToggle />
      <DocSearch
        id="docs-floating-search"
        label="Search documentation..."
        shortcut="⌘ K"
        items={docsSearchItems}
        maxResults={8}
      />
    </div>
  );
}
