import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { DateRangeLabel } from "./date-range-label";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import type { PontiffData } from "./types";

type PontiffCardProps = PontiffData & ComponentPropsWithoutRef<"article">;

export function PontiffCard({
  title,
  description,
  meta,
  status,
  href,
  pontificateStart,
  pontificateEnd,
  century,
  className,
  ...props
}: PontiffCardProps) {
  return (
    <Card as="article" padding="md" border="gold" className={cx("ccui-pontiff-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <DocumentAuthorityBadge authority="pope" label="Pontiff" />
          {century ? <Tag variant="brown">{century}</Tag> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {(pontificateStart || pontificateEnd || meta || status) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {pontificateStart || pontificateEnd ? (
                <DateRangeLabel
                  label="Pontificate"
                  startDate={pontificateStart}
                  endDate={pontificateEnd}
                />
              ) : null}
              {meta ? <Tag>{meta}</Tag> : null}
              {status ? <Tag variant="gold">{status}</Tag> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
