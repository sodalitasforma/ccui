"use client";

import { useEffect, useMemo, useState } from "react";
import { docsSearchItems } from "../docs/search-index";
import {
  Badge,
  Button,
  Cluster,
  Divider,
  DocSearch,
  Link,
  Stack,
  Tag,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

type FormaSidebarProps = {
  current?: "docs" | "components" | "templates" | "typography";
};

type SidebarItem =
  | {
      type: "heading";
      label: string;
    }
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "disabled";
      label: string;
      badge: string;
    };

const pageSections: Record<
  NonNullable<FormaSidebarProps["current"]>,
  {
    label: string;
    items: readonly SidebarItem[];
  }
> = {
  docs: {
    label: "Documentation",
    items: [
      { type: "link", label: "Overview", href: "/docs#overview" },
      { type: "link", label: "Getting started", href: "/docs#getting-started" },
      { type: "link", label: "Foundations", href: "/docs#foundations" },
      { type: "link", label: "Component usage", href: "/docs#component-usage" },
      { type: "link", label: "Catholic principles", href: "/docs#catholic-design-principles" },
      { type: "link", label: "Accessibility", href: "/docs#accessibility" },
      { type: "link", label: "Contributing", href: "/docs#contributing" },
    ],
  },
  components: {
    label: "",
    items: [
      { type: "link", label: "Overview", href: "/components-gallery#introduction" },

      { type: "heading", label: "Foundations" },
      { type: "link", label: "Colors", href: "/components-gallery#colors" },
      { type: "link", label: "Liturgical colors", href: "/components-gallery#liturgical" },

      { type: "heading", label: "General UI" },
      { type: "link", label: "Layout", href: "/components-gallery#primitive-layout" },
      { type: "link", label: "Typography", href: "/components-gallery#primitive-typography" },
      { type: "link", label: "Surfaces", href: "/components-gallery#primitive-surfaces" },
      { type: "link", label: "Actions & metadata", href: "/components-gallery#primitive-actions" },
      { type: "link", label: "Forms", href: "/components-gallery#primitive-forms" },
      { type: "link", label: "Data display", href: "/components-gallery#primitive-data-display" },
      { type: "link", label: "Media", href: "/components-gallery#primitive-media" },
      { type: "disabled", label: "Icons", badge: "Coming soon" },

      { type: "heading", label: "Catholic UI" },
      { type: "link", label: "Parish websites", href: "/components-gallery#parish-websites" },
      { type: "link", label: "Liturgy", href: "/components-gallery#liturgy" },
      { type: "link", label: "Documents & authority", href: "/components-gallery#documents-authority" },
      { type: "link", label: "Directories", href: "/components-gallery#directories" },
      { type: "link", label: "Catholic data infrastructure", href: "/components-gallery#catholic-data-infrastructure" },
    ],
  },
  templates: {
    label: "Templates",
    items: [],
  },
  typography: {
    label: "Typography",
    items: [],
  },
};

function hrefToHash(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
}

export function FormaSidebar({ current = "components" }: FormaSidebarProps) {
  const section = pageSections[current];

  const sectionIds = useMemo(() => {
    const ids = section.items
      .filter((item): item is Extract<SidebarItem, { type: "link" }> => item.type === "link")
      .map((item) => hrefToHash(item.href))
      .filter(Boolean);

    return Array.from(new Set(ids));
  }, [section.items]);

  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const onScroll = () => {
      const offset = 140;

      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: element.getBoundingClientRect().top } : null;
        })
        .filter((item): item is { id: string; top: number } => Boolean(item))
        .sort((a, b) => a.top - b.top);

      if (!sections.length) return;

      const passedSections = sections.filter((item) => item.top <= offset);
      const nextActiveId =
        passedSections.length > 0
          ? passedSections[passedSections.length - 1].id
          : sections[0].id;

      setActiveSectionId(nextActiveId);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, [sectionIds]);

  return (
    <aside className="docs-sidebar">
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="sm" className="docs-sidebar-brand-row">
          <Stack gap="xs">
            <Link href="/" className="docs-sidebar-brand">
              Catholic Commons UI
            </Link>
            <Text as="p" size="xs" tone="muted">
              Open-source Catholic interface system
            </Text>
          </Stack>

          <Tag variant="brown">v0.0.1</Tag>
        </Cluster>

        <Stack gap="md">
          <Stack gap="xs">
            <Text as="p" size="xs" tone="muted" className="docs-sidebar-label">
              Start
            </Text>

            <nav className="docs-nav docs-nav--start" aria-label="Primary navigation">
              <a href="/">Home</a>
              <span className="docs-nav-disabled docs-nav-disabled--with-badge">
                <span>Docs</span>
                <Badge variant="neutral" size="xs">Coming soon</Badge>
              </span>
              <a
                aria-current={current === "components" ? "page" : undefined}
                href="/components-gallery"
                className="docs-nav-link-with-badge"
              >
                <span>Components</span>
                <Badge variant="gold" size="xs">146</Badge>
              </a>
              <span className="docs-nav-disabled docs-nav-disabled--with-badge">
                <span>Typography</span>
                <Badge variant="neutral" size="xs">Coming soon</Badge>
              </span>
              <span className="docs-nav-disabled docs-nav-disabled--with-badge">
                <span>Templates</span>
                <Badge variant="neutral" size="xs">Coming soon</Badge>
              </span>
            </nav>
          </Stack>

          {section.items.length ? (
            <>
              <Divider />

              <Stack gap="xs">
                {section.label ? (
                  <Text as="p" size="xs" tone="muted" className="docs-sidebar-label">
                    {section.label}
                  </Text>
                ) : null}

                <nav className="docs-nav docs-nav--sections" aria-label={section.label || "Page sections"}>
                  {section.items.map((item) => {
                    if (item.type === "heading") {
                      return (
                        <span key={`heading-${item.label}`} className="docs-nav-group-heading">
                          {item.label}
                        </span>
                      );
                    }

                    if (item.type === "disabled") {
                      return (
                        <span
                          key={`disabled-${item.label}`}
                          className="docs-nav-disabled docs-nav-disabled--with-badge"
                        >
                          <span>{item.label}</span>
                          <Badge variant="neutral" size="xs">{item.badge}</Badge>
                        </span>
                      );
                    }

                    const id = hrefToHash(item.href);
                    const isActive = id && id === activeSectionId;

                    return (
                      <a
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </Stack>
            </>
          ) : null}
        </Stack>
      </Stack>

      <div className="docs-sidebar-footer">
        <Button
          href="https://catholicdigitalcommons.org/about/manifesto"
          size="xs"
          variant="subtle"
          iconAfter={<ArrowRightIcon size="xs" />}
          className="docs-sidebar-manifesto"
        >
          Read CDCF Manifesto
        </Button>
      </div>

      <div className="docs-floating-search">
        <DocSearch
          label="Search documentation..."
          items={docsSearchItems}
          maxResults={8}
        />
      </div>
    </aside>
  );
}
