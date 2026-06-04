import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Eyebrow, Heading, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { PrayerCardData } from "./types";

type PrayerCardProps = PrayerCardData & ComponentPropsWithoutRef<"article">;

export function PrayerCard({
  title,
  text,
  tradition,
  language,
  source,
  className,
  ...props
}: PrayerCardProps) {
  return (
    <Card as="article" padding="lg" border="gold" className={cx("ccui-prayer-card", className)} {...props}>
      <Stack gap="md">
        <Stack gap="xs">
          <Eyebrow tone="gold">Prayer</Eyebrow>
          <Heading level={3} size="xl">
            {title}
          </Heading>
        </Stack>

        <Text as="p" size="lg" className="ccui-prayer-card__text">
          {text}
        </Text>

        {(tradition || language || source?.href) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {tradition ? <Tag variant="gold">{tradition}</Tag> : null}
              {language ? <Tag>{language}</Tag> : null}
              {source?.href ? <Link href={source.href}>{source.label}</Link> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
