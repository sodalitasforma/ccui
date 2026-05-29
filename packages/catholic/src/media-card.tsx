import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Heading, Link, MediaFrame, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { MediaCardData } from "./types";

type MediaCardProps = MediaCardData & ComponentPropsWithoutRef<"article">;

export function MediaCard({
  title,
  description,
  date,
  category,
  href,
  media,
  className,
  ...props
}: MediaCardProps) {
  return (
    <Card as="article" padding="none" border="subtle" className={cx("forma-media-card", className)} {...props}>
      <MediaFrame ratio="video" surface="dark">
        {media.src ? (
          <img
            src={media.src}
            alt={media.alt ?? media.title ?? title}
            className="forma-media-card__image"
          />
        ) : null}
      </MediaFrame>

      <Stack gap="sm" className="forma-media-card__body">
        <Cluster justify="between" align="start" gap="sm">
          {category ? <Tag variant="blue">{category}</Tag> : null}
          {date ? <Text as="span" size="xs" tone="muted">{date}</Text> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
          {media.caption ? <Text as="p" size="sm" tone="muted">{media.caption}</Text> : null}
        </Stack>

        {media.provider ? <Tag variant="brown">{media.provider}</Tag> : null}
      </Stack>
    </Card>
  );
}
