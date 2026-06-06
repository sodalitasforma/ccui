"use client";

import { useMemo, useState } from "react";
import { iconCategories, iconRegistry } from "@catholiccommons/icons";
import {
  Badge,
  Button,
  Card,
  Cluster,
  Heading,
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
        <Stack gap="md">
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

          <Cluster gap="sm">
            <Badge variant="gold" size="xs">
              {filteredIcons.length} shown
            </Badge>
            <Badge variant="neutral" size="xs">
              {iconRegistry.length} total
            </Badge>
          </Cluster>
        </Stack>
      </Card>

      <div className="docs-icon-gallery-grid">
        {filteredIcons.map(({ name, exportName, category: iconCategory, description, tags, Icon }) => (
          <Card key={exportName} padding="md" border="subtle" surface="raised">
            <Stack gap="md">
              <Cluster gap="md" align="center" justify="between">
                <div className="docs-icon-gallery-preview">
                  <Icon size="lg" title={name} />
                </div>
                <Badge variant={iconCategory === "Catholic" ? "gold" : "neutral"} size="xs">
                  {iconCategory}
                </Badge>
              </Cluster>

              <Stack gap="xs">
                <Heading level={3} size="sm">
                  {name}
                </Heading>
                <Text size="xs" tone="muted" family="mono">
                  {exportName}
                </Text>
                <Text size="sm" tone="secondary">
                  {description}
                </Text>
              </Stack>

              <Cluster gap="xs">
                {tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="neutral" size="xs">
                    {tag}
                  </Badge>
                ))}
              </Cluster>

              <div className="docs-icon-import-row">
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
