import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type WorshipAidCardProps = {
  title: string;
  href: string;
  date?: string;
  liturgicalDay?: string;
  language?: string;
  fileType?: string;
  description?: string;
  sourceLabel?: string;
  sourceHref?: string;
} & ComponentPropsWithoutRef<"article">;

export function WorshipAidCard({
  title,
  href,
  date,
  liturgicalDay,
  language,
  fileType = "PDF",
  description,
  sourceLabel,
  sourceHref,
  className,
  ...props
}: WorshipAidCardProps) {
  return (
    <Card
      as="article"
      padding="lg"
      border="gold"
      className={cx("ccui-worship-aid-card", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-worship-aid-card__eyebrow">
              Worship aid
            </Text>

            <Heading level={3} size="lg">
              <Link href={href} className="ccui-worship-aid-card__title-link">
                {title}
              </Link>
            </Heading>
          </Stack>

          <Badge variant="gold">{fileType}</Badge>
        </Cluster>

        {description ? (
          <Text tone="secondary">{description}</Text>
        ) : null}

        <Cluster gap="sm">
          {date ? <Tag variant="brown">{date}</Tag> : null}
          {liturgicalDay ? <Tag variant="gold">{liturgicalDay}</Tag> : null}
          {language ? <Tag variant="blue">{language}</Tag> : null}
        </Cluster>

        {sourceHref && sourceLabel ? (
          <Text as="p" size="sm" tone="muted">
            Source: <Link href={sourceHref}>{sourceLabel}</Link>
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
