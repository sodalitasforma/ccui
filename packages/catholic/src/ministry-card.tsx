import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import type { MinistryData } from "./types";

type MinistryCardProps = MinistryData & ComponentPropsWithoutRef<"article">;

export function MinistryCard({
  title,
  description,
  category,
  leader,
  meetingTime,
  href,
  className,
  ...props
}: MinistryCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-ministry-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <Heading level={3} size="md">
            {title}
          </Heading>
          {category ? <Tag variant="brown">{category}</Tag> : null}
        </Cluster>

        {description ? (
          <Text as="p" tone="secondary">
            {description}
          </Text>
        ) : null}

        {(leader || meetingTime || href) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {leader ? <Tag>Leader: {leader}</Tag> : null}
              {meetingTime ? <Tag variant="gold">{meetingTime}</Tag> : null}
              {href ? <Link href={href}>View ministry</Link> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
