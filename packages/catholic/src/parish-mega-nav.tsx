import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Text,
} from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type ParishMegaNavItem = {
  label: string;
  href: string;
  description?: string;
};

export type ParishMegaNavGroup = {
  label: string;
  href?: string;
  description?: string;
  items: readonly ParishMegaNavItem[];
};

export type ParishMegaNavProps = {
  title?: string;
  description?: string;
  groups: readonly ParishMegaNavGroup[];
} & ComponentPropsWithoutRef<"nav">;

export function ParishMegaNav({
  title = "Parish navigation",
  description,
  groups,
  className,
  ...props
}: ParishMegaNavProps) {
  return (
    <nav
      aria-label={title}
      className={cx("ccui-parish-mega-nav", className)}
      {...props}
    >
      <Card padding="lg" border="gold" className="ccui-parish-mega-nav__surface">
        <Stack gap="lg">
          <Cluster justify="between" align="start" gap="md">
            <Stack gap="xs">
              <Text as="p" className="ccui-parish-mega-nav__eyebrow">
                Navigation
              </Text>
              <Heading level={2} size="lg">
                {title}
              </Heading>
              {description ? (
                <Text tone="secondary">{description}</Text>
              ) : null}
            </Stack>

            <Badge variant="gold">{groups.length} groups</Badge>
          </Cluster>

          <div className="ccui-parish-mega-nav__grid">
            {groups.map((group) => (
              <section
                key={group.label}
                className="ccui-parish-mega-nav__group"
                aria-label={group.label}
              >
                <Stack gap="sm">
                  <Stack gap="xs">
                    {group.href ? (
                      <Link href={group.href} className="ccui-parish-mega-nav__group-title">
                        {group.label}
                      </Link>
                    ) : (
                      <Heading level={3} size="md" className="ccui-parish-mega-nav__group-heading">
                        {group.label}
                      </Heading>
                    )}

                    {group.description ? (
                      <Text size="sm" tone="muted">
                        {group.description}
                      </Text>
                    ) : null}
                  </Stack>

                  <ul className="ccui-parish-mega-nav__list">
                    {group.items.map((item) => (
                      <li key={`${group.label}-${item.label}`}>
                        <Link href={item.href} className="ccui-parish-mega-nav__item">
                          <span className="ccui-parish-mega-nav__item-label">
                            {item.label}
                          </span>
                          {item.description ? (
                            <span className="ccui-parish-mega-nav__item-description">
                              {item.description}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Stack>
              </section>
            ))}
          </div>
        </Stack>
      </Card>
    </nav>
  );
}
