import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Eyebrow, Heading, Link, Stack, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import type { FeaturedStoryData } from "./types";

type FeaturedStoryProps = FeaturedStoryData & ComponentPropsWithoutRef<"article">;

export function FeaturedStory({
  eyebrow = "Featured",
  title,
  description,
  date,
  category,
  href,
  source,
  className,
  ...props
}: FeaturedStoryProps) {
  return (
    <Card as="article" padding="lg" border="gold" className={cx("ccui-featured-story", className)} {...props}>
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="sm">
          <Eyebrow tone="gold">{eyebrow}</Eyebrow>
          {category ? <Tag variant="gold">{category}</Tag> : null}
        </Cluster>

        <Stack gap="sm">
          <Heading level={2} size="2xl">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" size="lg" tone="secondary">{description}</Text> : null}
        </Stack>

        <Cluster gap="sm">
          {date ? <Tag>{date}</Tag> : null}
          {href ? <Link href={href} className="ccui-featured-story__action">Read story</Link> : null}
        </Cluster>

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
