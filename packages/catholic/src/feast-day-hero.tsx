import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Eyebrow, Heading, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { LiturgicalSeasonBadge } from "./liturgical-season-badge";
import type { LiturgicalDayData } from "./types";

type FeastDayHeroProps = LiturgicalDayData & {
  actionHref?: string;
  actionLabel?: string;
} & ComponentPropsWithoutRef<"section">;

export function FeastDayHero({
  title,
  date,
  season,
  color,
  rank,
  description,
  source,
  actionHref,
  actionLabel = "View readings",
  className,
  ...props
}: FeastDayHeroProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-feast-day-hero", `ccui-feast-day-hero--${color}`, className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="sm">
            <Eyebrow tone="gold">Today in the liturgy</Eyebrow>
            <Heading level={2} size="3xl" family="display">
              {title}
            </Heading>
            <Stack gap="xs">
              <Text as="p" size="lg" tone="secondary">
                {date}
              </Text>
              {rank ? (
                <Text as="p" className="ccui-feast-day-hero__rank">
                  {rank}
                </Text>
              ) : null}
            </Stack>
          </Stack>

          <LiturgicalSeasonBadge season={season} color={color} />
        </Cluster>

        {description ? (
          <Text as="p" size="lg" tone="secondary" className="ccui-feast-day-hero__description">
            {description}
          </Text>
        ) : null}

        {(actionHref || source?.href) ? (
          <Cluster gap="sm">
            {actionHref ? (
              <Link href={actionHref}>
                {actionLabel}
              </Link>
            ) : null}
            {source?.href ? (
              <Link href={source.href}>{source.label}</Link>
            ) : null}
          </Cluster>
        ) : null}
      </Stack>
    </Card>
  );
}
