import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Container, Divider, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { NavItem } from "./types";

type InstitutionalFooterProps = {
  title: string;
  description?: string;
  links?: NavItem[];
} & ComponentPropsWithoutRef<"footer">;

export function InstitutionalFooter({
  title,
  description,
  links = [],
  className,
  ...props
}: InstitutionalFooterProps) {
  return (
    <footer className={cx("forma-institutional-footer", className)} {...props}>
      <Container size="xl">
        <Stack gap="lg">
          <Cluster justify="between" align="start">
            <Stack gap="xs">
              <Text as="p" size="md" tone="inverse">
                {title}
              </Text>
              {description ? (
                <Text as="p" size="sm" tone="inverse">
                  {description}
                </Text>
              ) : null}
            </Stack>

            {links.length > 0 ? (
              <nav className="forma-institutional-footer__links" aria-label="Footer">
                {links.map((item) => (
                  <a key={`${item.label}-${item.href}`} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </Cluster>

          <Divider tone="gold" />

          <Text as="p" size="xs" tone="inverse">
            Built with Catholic Commons UI.
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
