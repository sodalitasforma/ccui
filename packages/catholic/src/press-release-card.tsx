import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { PressReleaseData } from "./types";

type PressReleaseCardProps = PressReleaseData & ComponentPropsWithoutRef<"article">;

export function PressReleaseCard({
  title,
  description,
  date,
  category = "Press release",
  office,
  href,
  source,
  className,
  ...props
}: PressReleaseCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-press-release-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster gap="xs">
          <Tag variant="blue">{category}</Tag>
          {office ? <Tag variant="brown">{office}</Tag> : null}
          {date ? <Tag>{date}</Tag> : null}
        </Cluster>

        <Heading level={3} size="lg">
          {href ? <Link href={href}>{title}</Link> : title}
        </Heading>

        {description ? <Text as="p" tone="secondary">{description}</Text> : null}

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
