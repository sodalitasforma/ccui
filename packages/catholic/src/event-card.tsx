import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type EventCardProps = {
  title: string;
  href?: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  category?: string;
} & ComponentPropsWithoutRef<"article">;

export function EventCard({
  title,
  href,
  date,
  time,
  location,
  description,
  category,
  className,
  ...props
}: EventCardProps) {
  const content = (
    <Cluster align="start" gap="md">
      <div className="ccui-event-card__date">
        <Text as="span" size="xs" tone="muted">
          {date.split(" ")[0] || date}
        </Text>
        <Text as="span" size="lg">
          {date.split(" ").slice(1).join(" ") || date}
        </Text>
      </div>

      <Stack gap="sm" className="ccui-event-card__body">
        <Cluster justify="between" align="start">
          <h3 className="ccui-event-card__title">{title}</h3>
          {category ? <Badge variant="gold">{category}</Badge> : null}
        </Cluster>

        {description ? (
          <Text as="p" size="sm" tone="secondary">
            {description}
          </Text>
        ) : null}

        <Cluster gap="sm">
          {time ? (
            <Text as="p" size="xs" tone="muted">
              {time}
            </Text>
          ) : null}
          {location ? (
            <Text as="p" size="xs" tone="muted">
              {location}
            </Text>
          ) : null}
        </Cluster>
      </Stack>
    </Cluster>
  );

  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("ccui-event-card", href && "ccui-event-card--linked", className)}
      {...props}
    >
      {href ? (
        <a className="ccui-event-card__link" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
