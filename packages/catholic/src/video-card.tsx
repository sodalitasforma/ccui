import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Heading, Link, MediaFrame, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { VideoCardData } from "./types";

type VideoCardProps = VideoCardData & ComponentPropsWithoutRef<"article">;

export function VideoCard({
  title,
  description,
  date,
  category = "Video",
  href,
  media,
  duration,
  className,
  ...props
}: VideoCardProps) {
  return (
    <Card as="article" padding="none" border="subtle" className={cx("forma-video-card", className)} {...props}>
      <MediaFrame ratio="video" surface="dark">
        <iframe
          src={media.src}
          title={media.title ?? title}
          allowFullScreen
        />
      </MediaFrame>

      <Stack gap="sm" className="forma-video-card__body">
        <Cluster justify="between" align="start" gap="sm">
          <Cluster gap="xs">
            <Tag variant="blue">{category}</Tag>
            {duration ? <Tag>{duration}</Tag> : null}
          </Cluster>
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
