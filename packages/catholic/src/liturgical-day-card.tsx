import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Eyebrow, Heading, Link, Stack, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { LiturgicalSeasonBadge } from "./liturgical-season-badge";
import { ReadingReference } from "./reading-reference";
import type { LiturgicalDayData } from "./types";

type LiturgicalDayCardProps = LiturgicalDayData &
  ComponentPropsWithoutRef<"article">;

export function LiturgicalDayCard({
  title,
  date,
  season,
  color,
  rank,
  description,
  readings,
  source,
  className,
  ...props
}: LiturgicalDayCardProps) {
  return (
    <Card
      as="article"
      padding="lg"
      border="gold"
      className={cx("ccui-liturgical-day-card", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Eyebrow tone="gold">Liturgical day</Eyebrow>
            <Heading level={3} size="xl">
              {title}
            </Heading>
            <Text as="p" tone="secondary">
              {date}
            </Text>
          </Stack>

          <LiturgicalSeasonBadge season={season} color={color} />
        </Cluster>

        {rank || description ? (
          <Stack gap="xs">
            {rank ? (
              <Text as="p" className="ccui-liturgical-day-card__rank">
                {rank}
              </Text>
            ) : null}
            {description ? (
              <Text as="p" tone="secondary">
                {description}
              </Text>
            ) : null}
          </Stack>
        ) : null}

        {readings?.length ? (
          <>
            <Divider tone="subtle" />
            <Stack gap="sm">
              {readings.map((reading) => (
                <ReadingReference key={`${reading.label}-${reading.citation}`} {...reading} />
              ))}
            </Stack>
          </>
        ) : null}

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
