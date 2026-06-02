import type { ComponentPropsWithoutRef } from "react";
import {
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Text,
} from "@ccui/primitives";
import { cx } from "@ccui/primitives";

export type SocialLinkItem = {
  label: string;
  href: string;
  platform: string;
};

export type SocialLinksProps = {
  title?: string;
  description?: string;
  links: readonly SocialLinkItem[];
} & ComponentPropsWithoutRef<"section">;

export function SocialLinks({
  title = "Follow us",
  description,
  links,
  className,
  ...props
}: SocialLinksProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-social-links", className)}
      {...props}
    >
      <Stack gap="md">
        <Stack gap="xs">
          <Text as="p" className="ccui-social-links__eyebrow">
            Social
          </Text>
          <Heading level={3} size="lg">
            {title}
          </Heading>
          {description ? (
            <Text tone="secondary">{description}</Text>
          ) : null}
        </Stack>

        <Cluster gap="sm">
          {links.map((item) => (
            <Link
              key={`${item.platform}-${item.href}`}
              href={item.href}
              className="ccui-social-links__item"
            >
              <span className="ccui-social-links__platform">
                {item.platform}
              </span>
              <span className="ccui-social-links__label">
                {item.label}
              </span>
            </Link>
          ))}
        </Cluster>
      </Stack>
    </Card>
  );
}
