import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Button,
  Card,
  Cluster,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { LanguageItem, NavItem } from "./types";

export type InstitutionalHeaderNavGroup = {
  label: string;
  href?: string;
  description?: string;
  items?: readonly NavItem[];
};

export type InstitutionalHeaderSocialItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type InstitutionalHeaderSearchAction = string | NavItem | ReactNode;

type InstitutionalHeaderProps = {
  title: string;
  subtitle?: string;
  notice?: string;
  logo?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
  primaryItems?: readonly NavItem[];
  utilityItems?: readonly NavItem[];
  languages?: readonly LanguageItem[];
  socialItems?: readonly InstitutionalHeaderSocialItem[];
  searchAction?: InstitutionalHeaderSearchAction;
  contactAction?: string | NavItem;
  navGroups?: readonly InstitutionalHeaderNavGroup[];
} & ComponentPropsWithoutRef<"header">;

function isNavItem(value: unknown): value is NavItem {
  return Boolean(
    value &&
      typeof value === "object" &&
      "label" in value &&
      "href" in value
  );
}

function isSearchHref(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

function HeaderLink({
  item,
  className,
}: {
  item: NavItem | LanguageItem;
  className: string;
}) {
  return (
    <Link
      href={item.href}
      className={className}
      aria-current={"current" in item && item.current ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}

function SearchAction({ action }: { action: InstitutionalHeaderSearchAction }) {
  if (isSearchHref(action)) {
    return (
      <Button
        href={action}
        size="xs"
        variant="secondary"
        className="ccui-institutional-header__search"
      >
        Search
      </Button>
    );
  }

  if (isNavItem(action)) {
    return (
      <Button
        href={action.href}
        size="xs"
        variant="secondary"
        className="ccui-institutional-header__search"
      >
        {action.label}
      </Button>
    );
  }

  return <>{action}</>;
}

export function InstitutionalHeader({
  title,
  subtitle,
  notice,
  logo,
  logoSrc,
  logoAlt,
  primaryItems = [],
  utilityItems = [],
  languages = [],
  socialItems = [],
  searchAction,
  contactAction,
  navGroups = [],
  className,
  ...props
}: InstitutionalHeaderProps) {
  const hasUtilityRail = Boolean(utilityItems.length || languages.length || searchAction);
  const hasPrimaryRail = Boolean(primaryItems.length || navGroups.length || contactAction);
  const resolvedContactAction =
    typeof contactAction === "string"
      ? { label: "Contact", href: contactAction }
      : contactAction;

  return (
    <header className={cx("ccui-institutional-header", className)} {...props}>
      {notice ? (
        <div className="ccui-institutional-header__notice">
          <Container size="xl">
            <Text as="p" size="sm">
              {notice}
            </Text>
          </Container>
        </div>
      ) : null}

      <Container size="xl">
        <div className="ccui-institutional-header__inner">
          <div className="ccui-institutional-header__masthead">
            <Cluster gap="md" align="center" className="ccui-institutional-header__identity">
              <div className="ccui-institutional-header__logo" aria-hidden={logo || logoSrc ? undefined : true}>
                {logoSrc ? (
                  <img
                    className="ccui-institutional-header__logo-image"
                    src={logoSrc}
                    alt={logoAlt ?? ""}
                  />
                ) : (
                  logo ?? <span className="ccui-institutional-header__mark">PX</span>
                )}
              </div>

              <Stack gap="xs" className="ccui-institutional-header__identity-copy">
                <Heading level={1} size="lg" className="ccui-institutional-header__title">
                  {title}
                </Heading>

                {subtitle ? (
                  <Text as="p" size="sm" tone="secondary">
                    {subtitle}
                  </Text>
                ) : null}
              </Stack>
            </Cluster>

            <div className="ccui-institutional-header__nav-area">
              {hasUtilityRail ? (
                <Cluster
                  justify="end"
                  align="center"
                  gap="sm"
                  className="ccui-institutional-header__utility-inline"
                >
                  {utilityItems.map((item) => (
                    <HeaderLink
                      key={`utility-${item.label}-${item.href}`}
                      item={item}
                      className="ccui-institutional-header__utility-link"
                    />
                  ))}

                  {languages.length ? (
                    <span className="ccui-institutional-header__utility-divider" aria-hidden="true" />
                  ) : null}

                  {languages.map((language) => (
                    <HeaderLink
                      key={`language-${language.label}-${language.href}`}
                      item={language}
                      className="ccui-institutional-header__language-link"
                    />
                  ))}

                  {searchAction ? <SearchAction action={searchAction} /> : null}
                </Cluster>
              ) : null}

              {hasPrimaryRail ? (
                <nav className="ccui-institutional-header__primary" aria-label="Primary navigation">
                  {primaryItems.map((item) => (
                    <HeaderLink
                      key={`primary-${item.label}-${item.href}`}
                      item={item}
                      className="ccui-institutional-header__primary-link"
                    />
                  ))}

                  {navGroups.map((group) => (
                    <details
                      key={`${group.label}-${group.href ?? ""}`}
                      className="ccui-institutional-header__nav-group"
                    >
                      <summary>
                        {group.href ? (
                          <Link href={group.href}>{group.label}</Link>
                        ) : (
                          <span>{group.label}</span>
                        )}
                      </summary>

                      <Card padding="md" border="gold" className="ccui-institutional-header__mega">
                        <Stack gap="md">
                          <Stack gap="xs">
                            <Heading level={2} size="md">
                              {group.label}
                            </Heading>

                            {group.description ? (
                              <Text as="p" size="sm" tone="secondary">
                                {group.description}
                              </Text>
                            ) : null}
                          </Stack>

                          {group.items?.length ? (
                            <div className="ccui-institutional-header__mega-links">
                              {group.items.map((item) => (
                                <Link key={`${group.label}-${item.label}-${item.href}`} href={item.href}>
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </Stack>
                      </Card>
                    </details>
                  ))}

                  {resolvedContactAction ? (
                    <Button
                      href={resolvedContactAction.href}
                      size="xs"
                      variant="secondary"
                      className="ccui-institutional-header__contact"
                    >
                      {resolvedContactAction.label}
                    </Button>
                  ) : null}
                </nav>
              ) : null}

              {socialItems.length ? (
                <Cluster gap="xs" align="center" className="ccui-institutional-header__social">
                  {socialItems.map((item) => (
                    <Link key={`${item.label}-${item.href}`} href={item.href} aria-label={item.label}>
                      {item.icon ?? item.label}
                    </Link>
                  ))}
                </Cluster>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
