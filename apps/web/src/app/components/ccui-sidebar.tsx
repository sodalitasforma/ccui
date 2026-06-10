"use client";

import "./ccui-sidebar.css";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CloseIcon, MenuIcon } from "@catholiccommons/icons";
import systemStats from "../system-stats.json";
import {
  Badge,
  Button,
  DrawerTrigger,
  DrawerPanel,
  DrawerOverlay,
  DrawerClose,
  Drawer,
  Divider,
  Stack,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

type CCUISidebarProps = {
  current?: "docs" | "components" | "icons" | "templates" | "typography" | "colors" | "changelog";
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
      { type: "heading", label: "Docs" },
      { type: "link", label: "Overview", href: "/docs#overview" },
      { type: "link", label: "Use the CLI", href: "/docs#use-the-cli" },
      { type: "link", label: "Existing project", href: "/docs#existing-project" },
      { type: "link", label: "Apply a theme", href: "/docs#theme-application" },
      { type: "link", label: "Next.js", href: "/docs#next-js" },
      { type: "link", label: "Vite", href: "/docs#vite" },
      { type: "link", label: "Astro", href: "/docs#astro" },
      { type: "link", label: "React Router", href: "/docs#react-router" },
      { type: "link", label: "TanStack Start", href: "/docs#tanstack-start" },
      { type: "link", label: "React manual", href: "/docs#react-manual" },
    ],
  },
    components: {
    label: "",
    items: [
      { type: "link", label: "Overview", href: "/components-gallery#introduction" },

      { type: "heading", label: "General UI" },
      { type: "link", label: "Layout", href: "/components-gallery#primitive-layout" },
      { type: "link", label: "Typography", href: "/typography#overview" },
      { type: "link", label: "Surfaces", href: "/components-gallery#primitive-surfaces" },
      { type: "link", label: "Actions & metadata", href: "/components-gallery#primitive-actions" },
      { type: "link", label: "Forms", href: "/components-gallery#primitive-forms" },
      { type: "link", label: "Data display", href: "/components-gallery#primitive-data-display" },
      { type: "link", label: "Media", href: "/components-gallery#primitive-media" },

      { type: "heading", label: "Catholic UI" },
      { type: "link", label: "Parish websites", href: "/components-gallery#parish-websites" },
      { type: "link", label: "Liturgy", href: "/components-gallery#liturgy" },
      { type: "link", label: "Documents & authority", href: "/components-gallery#documents-authority" },
      { type: "link", label: "Directories", href: "/components-gallery#directories" },
      { type: "link", label: "Catholic data infrastructure", href: "/components-gallery#catholic-data-infrastructure" },
    ],
  },
  icons: {
    label: "",
    items: [
      { type: "link", label: "Overview", href: "/icons#overview" },
      { type: "link", label: "Live icons", href: "/icons#live-icons" },
    ],
  },
  templates: {
    label: "Templates",
    items: [],
  },
  typography: {
    label: "",
    items: [
      { type: "link", label: "Overview", href: "/typography#overview" },
      { type: "link", label: "Type roles", href: "/typography#type-roles" },
      { type: "link", label: "Heading scale", href: "/typography#heading-scale" },
      { type: "link", label: "Text scale", href: "/typography#text-scale" },
      { type: "link", label: "Text rhythm", href: "/typography#text-rhythm" },
      { type: "link", label: "Typography API", href: "/typography#typography-api" },
      { type: "link", label: "Token inventory", href: "/typography#token-inventory" },
    ],
  },
  changelog: {
    label: "",
    items: [
      { type: "heading", label: "Changelog" },
      { type: "link", label: "Overview", href: "/changelog#overview" },
      { type: "link", label: "Unreleased", href: "/changelog#unreleased" },
      { type: "link", label: "0.0.1", href: "/changelog#v0-0-1" },
      { type: "link", label: "Release workflow", href: "/changelog#release-workflow" },
    ],
  },
  colors: {
    label: "",
    items: [
      { type: "link", label: "Overview", href: "/colors#overview" },
      { type: "link", label: "Semantic colors", href: "/colors#semantic-colors" },
      { type: "link", label: "Raw palette", href: "/colors#raw-palette" },
      { type: "link", label: "Liturgical colors", href: "/colors#liturgical-colors" },
      { type: "link", label: "CDCF colors", href: "/colors#cdcf-colors" },
      { type: "link", label: "Usage guidance", href: "/colors#usage-guidance" },
    ],
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
    <Drawer side="left">

        <DrawerTrigger className="docs-sidebar-mobile-toggle" aria-label="Open navigation">

          <MenuIcon size="sm" />

        </DrawerTrigger>

        <DrawerOverlay className="docs-sidebar-backdrop" />

        <DrawerPanel className="docs-sidebar" closeOnLinkClick>

          <div className="docs-sidebar-mobile-header">

            <span className="docs-sidebar-mobile-title">Navigation</span>

            <DrawerClose className="docs-sidebar-mobile-close" aria-label="Close navigation">

              <CloseIcon size="sm" />

            </DrawerClose>

          </div>
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
                <Badge variant="gold" size="xs">{systemStats.components}</Badge>
              </a>
              <a
                aria-current={current === "icons" ? "page" : undefined}
                href="/icons"
                className="docs-nav-link-with-badge"
              >
                <span>Icons</span>
              </a>
              <a
                aria-current={current === "colors" ? "page" : undefined}
                href="/colors"
              >
                Colors
              </a>
              <a
                aria-current={current === "typography" ? "page" : undefined}
                href="/typography"
              >
                Typography
              </a>
              <span className="docs-nav-disabled docs-nav-disabled--with-badge">
                <span>Templates</span>
                <Badge variant="neutral" size="xs">Coming soon</Badge>
              </span>
              <a
                aria-current={current === "changelog" ? "page" : undefined}
                href="/changelog"
              >
                Changelog
              </a>
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
                  {section.items.map((item, index) => {
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
                        key={`${item.href}-${item.label}-${index}`}
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

      </DrawerPanel>
    </Drawer>
  );
}
