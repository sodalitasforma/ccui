import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Container, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { LanguageItem, NavItem } from "./types";
import { LanguageNav } from "./language-nav";
import { PrimaryNav } from "./primary-nav";
import { SearchTool } from "./search-tool";
import { UtilityNav } from "./utility-nav";

type InstitutionalHeaderProps = {
  title: string;
  subtitle?: string;
  href?: string;
  utilityItems?: NavItem[];
  primaryItems?: NavItem[];
  languages?: LanguageItem[];
  searchAction?: string;
} & ComponentPropsWithoutRef<"header">;

export function InstitutionalHeader({
  title,
  subtitle,
  href = "/",
  utilityItems = [],
  primaryItems = [],
  languages = [],
  searchAction,
  className,
  ...props
}: InstitutionalHeaderProps) {
  return (
    <header className={cx("forma-institutional-header", className)} {...props}>
      <Container size="xl">
        <Stack gap="md">
          <Cluster justify="between" align="start" gap="md">
            <a className="forma-institutional-header__brand" href={href}>
              <span className="forma-institutional-header__mark" aria-hidden="true">
                ✦
              </span>
              <span>
                <Text as="span" size="md">
                  {title}
                </Text>
                {subtitle ? (
                  <Text as="span" size="xs" tone="muted">
                    {subtitle}
                  </Text>
                ) : null}
              </span>
            </a>

            <Cluster gap="sm" align="center">
              {languages.length > 0 ? <LanguageNav items={languages} /> : null}
              {utilityItems.length > 0 ? <UtilityNav items={utilityItems} /> : null}
              {searchAction ? <SearchTool action={searchAction} /> : null}
            </Cluster>
          </Cluster>

          {primaryItems.length > 0 ? <PrimaryNav items={primaryItems} /> : null}
        </Stack>
      </Container>
    </header>
  );
}
