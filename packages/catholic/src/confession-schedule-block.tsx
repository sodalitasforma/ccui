import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Card,
  Cluster,
  Divider,
  Eyebrow,
  Heading,
  Link,
  Stack,
  Text,
} from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { ExceptionNotice } from "./exception-notice";
import { MassTimeRow } from "./mass-time-row";
import type { ScheduleBlockData } from "./types";

type ConfessionScheduleBlockProps = ScheduleBlockData & {
  action?: ReactNode;
  promptEndNote?: string;
  lastUpdated?: string;
  sourceNote?: string;
} & ComponentPropsWithoutRef<"section">;

export function ConfessionScheduleBlock({
  title,
  subtitle,
  badge: _badge = "Confession",
  days,
  exceptions,
  source,
  action,
  promptEndNote,
  lastUpdated,
  sourceNote,
  className,
  ...props
}: ConfessionScheduleBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-schedule-block ccui-confession-schedule-block", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Eyebrow tone="gold">Sacrament</Eyebrow>
            <Heading level={2} size="xl">
              {title}
            </Heading>
            {subtitle ? (
              <Text as="p" tone="secondary">
                {subtitle}
              </Text>
            ) : null}
          </Stack>

          {action ? (
            <div className="ccui-schedule-block__action">{action}</div>
          ) : null}
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
            <Stack key={`${day.day}-${day.date ?? ""}`} gap="sm" className="ccui-schedule-day">
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

        {promptEndNote ? (
          <Text as="p" size="sm" className="ccui-confession-schedule-block__prompt-end-note">
            {promptEndNote}
          </Text>
        ) : null}

        {source?.href || lastUpdated || sourceNote ? (
          <>
            <Stack gap="xs" className="ccui-schedule-block__source-meta">
              {source?.href ? (
                <Text as="p" size="sm" tone="muted">
                  Source: <Link href={source.href}>{source.label}</Link>
                </Text>
              ) : null}

              {lastUpdated ? (
                <Text as="p" size="sm" tone="muted">
                  Last updated: {lastUpdated}
                </Text>
              ) : null}

              {sourceNote ? (
                <Text as="p" size="sm" tone="muted">
                  {sourceNote}
                </Text>
              ) : null}
            </Stack>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
