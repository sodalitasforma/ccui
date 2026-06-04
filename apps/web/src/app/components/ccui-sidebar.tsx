"use client";

import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useMemo, useState } from "react";
import { docsSearchItems } from "../docs/search-index";
import {
  Badge,
  Button,
  Divider,
  DocSearch,
  Stack,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

type CCUISidebarProps = {
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
  NonNullable<CCUISidebarProps["current"]>,
  {
    label: string;
    items: readonly SidebarItem[];
  }
> = {
  docs: {
    label: "",
    items: [
      { type: "link", label: "Installation", href: "/docs#overview" },
      { type: "link", label: "Introduction", href: "/docs#overview" },
      { type: "link", label: "Quick Start", href: "/docs#quick-start" },
      { type: "link", label: "Use the CLI", href: "/docs#use-the-cli" },
      { type: "link", label: "Existing Projects", href: "/docs#existing-projects" },
      { type: "link", label: "Frameworks", href: "/docs#frameworks" },
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

export function CCUISidebar({ current = "components" }: CCUISidebarProps) {
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
        <NextLink href="/" className="docs-sidebar-brand-lockup" aria-label="Catholic Commons UI home">
          <Image
              src="/ccui-logo.png"
              alt=""
              width={48}
              height={48}
              className="docs-sidebar-brand-lockup__image"
              aria-hidden="true"
            />
          <span className="docs-sidebar-brand-lockup__copy">
            <span className="docs-sidebar-brand-lockup__wordmark">Catholic Commons UI</span>
            <span className="docs-sidebar-brand-lockup__version">v0.0.1</span>
          </span>
        </NextLink>

        <Stack gap="md">
          <Stack gap="xs">
            <nav className="docs-nav docs-nav--start" aria-label="Primary navigation">
              <NextLink href="/">Home</NextLink>
              <a
                aria-current={current === "docs" ? "page" : undefined}
                href="/docs"
              >
                Docs
              </a>
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

                    const isDocsPageTitle = current === "docs" && item.label === "Installation";

                    return (
                      <a
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        className={isDocsPageTitle ? "docs-nav-page-title" : undefined}
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
