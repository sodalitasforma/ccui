import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, Divider, Eyebrow, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { ExceptionNotice } from "./exception-notice";
import { MassTimeRow } from "./mass-time-row";
import type { ScheduleBlockData } from "./types";

type MassScheduleBlockProps = ScheduleBlockData &
  ComponentPropsWithoutRef<"section">;

export function MassScheduleBlock({
  title,
  subtitle,
  badge = "Mass",
  days,
  exceptions,
  source,
  className,
  ...props
}: MassScheduleBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("forma-schedule-block forma-mass-schedule-block", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Eyebrow tone="gold">Schedule</Eyebrow>
            <Heading level={2} size="xl">
              {title}
            </Heading>
            {subtitle ? (
              <Text as="p" tone="secondary">
                {subtitle}
              </Text>
            ) : null}
          </Stack>

          <Badge variant="gold">{badge}</Badge>
        </Cluster>

        {exceptions?.length ? (
          <Stack gap="sm">
            {exceptions.map((exception) => (
              <ExceptionNotice key={`${exception.date ?? ""}-${exception.title}`} {...exception} />
            ))}
          </Stack>
        ) : null}

        <Stack gap="md">
          {days.map((day) => (
            <Stack key={`${day.day}-${day.date ?? ""}`} gap="sm" className="forma-schedule-day">
              <Cluster justify="between" align="baseline">
                <Heading level={3} size="md">
                  {day.day}
                </Heading>
                {day.date ? (
                  <Text as="p" size="sm" tone="muted">
                    {day.date}
                  </Text>
                ) : null}
              </Cluster>

              <Stack gap="xs">
                {day.times.map((item) => (
                  <MassTimeRow key={`${day.day}-${item.time}-${item.label ?? ""}`} {...item} />
                ))}
              </Stack>
            </Stack>
          ))}
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
