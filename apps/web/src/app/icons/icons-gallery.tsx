"use client";

import { useMemo, useState } from "react";
import { iconCategories, iconRegistry } from "@catholiccommons/icons";
import {
  Button,
  Card,
  Cluster,
  Heading,
  IconFrame,
  SearchInput,
  Select,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";

const allCategory = "All";

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function importLine(exportName: string) {
  return `import { ${exportName} } from "@catholiccommons/icons";`;
}

export function IconsGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategory);
  const [copiedExportName, setCopiedExportName] = useState<string | null>(null);

  function copyImport(exportName: string) {
    navigator.clipboard.writeText(importLine(exportName));
    setCopiedExportName(exportName);
    window.setTimeout(() => setCopiedExportName(null), 1400);
  }

  const filteredIcons = useMemo(() => {
    const normalizedQuery = normalize(query);

    return iconRegistry.filter((icon) => {
      const matchesCategory = category === allCategory || icon.category === category;

      const searchable = normalize(
        [
          icon.name,
          icon.exportName,
          icon.category,
          icon.description,
          ...icon.tags,
        ].join(" ")
      );

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <Stack gap="lg">
      <Card padding="md" border="subtle" surface="raised">
        <Cluster gap="md" align="end" justify="between">
          <Stack gap="xs" className="docs-icon-gallery-filter">
            <Text as="label" size="xs" tone="muted" weight="semibold">
              Search icons
            </Text>
            <SearchInput
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder="Search by name, symbol, tag, or use case"
              aria-label="Search icons"
            />
          </Stack>

          <Stack gap="xs" className="docs-icon-gallery-filter">
            <Text as="label" size="xs" tone="muted" weight="semibold">
              Category
            </Text>
            <Select
              aria-label="Filter icons by category"
              value={category}
              onChange={(event) => setCategory(event.currentTarget.value)}
            >
              <option value={allCategory}>All categories</option>
              {iconCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Stack>
        </Cluster>
      </Card>

      <div className="docs-icon-only-grid">
        {filteredIcons.map(({ name, exportName, category: iconCategory, description, tags, Icon }) => (
          <div key={exportName} className="docs-icon-only-item">
            <button
              type="button"
              className="docs-icon-only-button"
              aria-label={`${name}: ${exportName}`}
            >
              <IconFrame>
                <Icon size="lg" title={name} />
              </IconFrame>
            </button>

            <Card padding="md" border="subtle" surface="raised" className="docs-icon-hover-card">
              <Stack gap="sm">
                <Cluster justify="between" align="start" gap="sm">
                  <Stack gap="xs">
                    <Heading level={3} size="sm">
                      {name}
                    </Heading>
                    <Text size="xs" tone="muted" family="mono">
                      {exportName}
                    </Text>
                  </Stack>
                  <Text size="xs" tone="muted" weight="semibold">
                    {iconCategory}
                  </Text>
                </Cluster>

                <Text size="sm" tone="secondary">
                  {description}
                </Text>

                <Text size="xs" tone="muted">
                  {tags.slice(0, 4).join(" · ")}
                </Text>

                <div className="docs-icon-hover-import">
                  <Text size="xs" family="mono" tone="muted">
                    {importLine(exportName)}
                  </Text>
                  <Button
                    size="xs"
                    variant="subtle"
                    type="button"
                    onClick={() => copyImport(exportName)}
                  >
                    {copiedExportName === exportName ? "Copied" : "Copy"}
                  </Button>
                </div>
              </Stack>
            </Card>
          </div>
        ))}
      </div>

      {!filteredIcons.length ? (
        <Card padding="lg" border="subtle" surface="raised">
          <Stack gap="sm">
            <Heading level={3} size="md">
              No icons found
            </Heading>
            <Text tone="secondary">
              Try another search term or switch back to all categories.
            </Text>
          </Stack>
        </Card>
      ) : null}
    </Stack>
  );
}
