import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type ParishHistoryTimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type ParishHistoryTimelineProps = {
  title?: string;
  description?: string;
  items: readonly ParishHistoryTimelineItem[];
} & ComponentPropsWithoutRef<"section">;

export function ParishHistoryTimeline({
  title = "Parish history",
  description,
  items,
  className,
  ...props
}: ParishHistoryTimelineProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("forma-parish-history-timeline", className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="forma-parish-history-timeline__eyebrow">
              History
            </Text>

            <Heading level={2} size="lg">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Badge variant="gold">{items.length} moments</Badge>
        </Cluster>

        <ol className="forma-parish-history-timeline__list">
          {items.map((item) => (
            <li key={`${item.date}-${item.title}`} className="forma-parish-history-timeline__item">
              <div className="forma-parish-history-timeline__marker" aria-hidden="true" />

              <Stack gap="xs" className="forma-parish-history-timeline__content">
                <Text as="p" className="forma-parish-history-timeline__date">
                  {item.date}
                </Text>

                <Heading level={3} size="md">
                  {item.title}
                </Heading>

                <Text tone="secondary">{item.description}</Text>
              </Stack>
            </li>
          ))}
        </ol>
      </Stack>
    </Card>
  );
}
