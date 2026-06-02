import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

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
      className={cx("forma-parish-mega-nav", className)}
      {...props}
    >
      <Card padding="lg" border="gold" className="forma-parish-mega-nav__surface">
        <Stack gap="lg">
          <Cluster justify="between" align="start" gap="md">
            <Stack gap="xs">
              <Text as="p" className="forma-parish-mega-nav__eyebrow">
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

          <div className="forma-parish-mega-nav__grid">
            {groups.map((group) => (
              <section
                key={group.label}
                className="forma-parish-mega-nav__group"
                aria-label={group.label}
              >
                <Stack gap="sm">
                  <Stack gap="xs">
                    {group.href ? (
                      <Link href={group.href} className="forma-parish-mega-nav__group-title">
                        {group.label}
                      </Link>
                    ) : (
                      <Heading level={3} size="md" className="forma-parish-mega-nav__group-heading">
                        {group.label}
                      </Heading>
                    )}

                    {group.description ? (
                      <Text size="sm" tone="muted">
                        {group.description}
                      </Text>
                    ) : null}
                  </Stack>

                  <ul className="forma-parish-mega-nav__list">
                    {group.items.map((item) => (
                      <li key={`${group.label}-${item.label}`}>
                        <Link href={item.href} className="forma-parish-mega-nav__item">
                          <span className="forma-parish-mega-nav__item-label">
                            {item.label}
                          </span>
                          {item.description ? (
                            <span className="forma-parish-mega-nav__item-description">
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
