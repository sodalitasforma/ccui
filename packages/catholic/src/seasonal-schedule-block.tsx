import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type SeasonalScheduleItemStatus = "scheduled" | "cancelled" | "moved" | "special";

export type SeasonalScheduleItem = {
  date: string;
  title: string;
  time?: string;
  location?: string;
  description?: string;
  status?: SeasonalScheduleItemStatus;
};

export type SeasonalScheduleBlockProps = {
  title?: string;
  description?: string;
  season?: string;
  items: readonly SeasonalScheduleItem[];
  note?: string;
} & ComponentPropsWithoutRef<"section">;

const statusLabelByStatus: Record<SeasonalScheduleItemStatus, string> = {
  scheduled: "Scheduled",
  cancelled: "Cancelled",
  moved: "Moved",
  special: "Special",
};

const badgeVariantByStatus: Record<SeasonalScheduleItemStatus, "gold" | "danger" | "brown" | "active"> = {
  scheduled: "gold",
  cancelled: "danger",
  moved: "brown",
  special: "active",
};

export function SeasonalScheduleBlock({
  title = "Seasonal schedule",
  description,
  season,
  items,
  note,
  className,
  ...props
}: SeasonalScheduleBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-seasonal-schedule-block", className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-seasonal-schedule-block__eyebrow">
              Seasonal schedule
            </Text>

            <Heading level={2} size="lg">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          {season ? <Badge variant="gold">{season}</Badge> : null}
        </Cluster>

        <div className="ccui-seasonal-schedule-block__list">
          {items.map((item) => {
            const status = item.status ?? "scheduled";

            return (
              <article
                key={`${item.date}-${item.title}-${item.time ?? ""}`}
                className={cx(
                  "ccui-seasonal-schedule-block__item",
                  `ccui-seasonal-schedule-block__item--${status}`
                )}
              >
                <Cluster justify="between" align="start" gap="md">
                  <Stack gap="xs" className="ccui-seasonal-schedule-block__main">
                    <Cluster gap="sm">
                      <Text as="p" className="ccui-seasonal-schedule-block__date">
                        {item.date}
                      </Text>
                      <Badge variant={badgeVariantByStatus[status]}>
                        {statusLabelByStatus[status]}
                      </Badge>
                    </Cluster>

                    <Heading level={3} size="md">
                      {item.title}
                    </Heading>

                    {item.description ? (
                      <Text size="sm" tone="secondary">
                        {item.description}
                      </Text>
                    ) : null}
                  </Stack>

                  <Stack gap="xs" className="ccui-seasonal-schedule-block__meta">
                    {item.time ? (
                      <Text as="p" size="sm">
                        {item.time}
                      </Text>
                    ) : null}
                    {item.location ? (
                      <Text as="p" size="sm" tone="muted">
                        {item.location}
                      </Text>
                    ) : null}
                  </Stack>
                </Cluster>
              </article>
            );
          })}
        </div>

        {note ? (
          <Text as="p" size="sm" className="ccui-seasonal-schedule-block__note">
            {note}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
