import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { NewsItemData } from "./types";

type NewsCardProps = NewsItemData & ComponentPropsWithoutRef<"article">;

export function NewsCard({
  title,
  description,
  date,
  category,
  href,
  source,
  className,
  ...props
}: NewsCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("forma-news-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          {category ? <Tag variant="blue">{category}</Tag> : null}
          {date ? (
            <Text as="span" size="xs" tone="muted">
              {date}
            </Text>
          ) : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {source?.href ? (
          <>
            <Divider tone="subtle" />
            <Text as="p" size="sm" tone="muted">
              Source: <Link href={source.href}>{source.label}</Link>
            </Text>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
