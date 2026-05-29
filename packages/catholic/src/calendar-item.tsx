import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { CalendarItemData } from "./types";

type CalendarItemProps = CalendarItemData & ComponentPropsWithoutRef<"article">;

export function CalendarItem({
  title,
  date,
  time,
  location,
  category,
  description,
  href,
  className,
  ...props
}: CalendarItemProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("forma-calendar-item", className)} {...props}>
      <Cluster align="start" gap="md">
        <Stack gap="xs" className="forma-calendar-item__date">
          <Text as="span" size="xs" tone="muted">
            Date
          </Text>
          <Text as="span" className="forma-calendar-item__date-value">
            {date}
          </Text>
        </Stack>

        <Stack gap="sm" className="forma-calendar-item__body">
          <Cluster gap="xs">
            {category ? <Tag variant="brown">{category}</Tag> : null}
            {time ? <Tag variant="gold">{time}</Tag> : null}
            {location ? <Tag>{location}</Tag> : null}
          </Cluster>

          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>

          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>
      </Cluster>
    </Card>
  );
}
