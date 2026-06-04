import type { AnchorHTMLAttributes } from "react";
import { Badge, Card, Cluster, Heading, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type VideoCardMedia = {
  src: string;
  title: string;
  caption?: string;
  provider?: string;
};

export type VideoCardProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "media"> & {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  duration?: string;
  href: string;
  media: VideoCardMedia;
};

export function VideoCard({
  className,
  title,
  description,
  date,
  category = "Video",
  duration,
  href,
  media,
  ...props
}: VideoCardProps) {
  return (
    <a href={href} className={cx("ccui-video-card", className)} {...props}>
      <Card padding="none" border="subtle" className="ccui-video-card__surface">
        <div className="ccui-video-card__frame">
          <iframe
            src={media.src}
            title={media.title}
            allowFullScreen
          />
        </div>

        <Stack gap="sm" className="ccui-video-card__body">
          <Cluster justify="between" align="center" gap="sm">
            <Cluster gap="xs" align="center">
              <Badge variant="gold">{category}</Badge>
              {duration ? <Badge variant="neutral">{duration}</Badge> : null}
            </Cluster>

            {date ? (
              <Text as="span" size="xs" tone="muted">
                {date}
              </Text>
            ) : null}
          </Cluster>

          <Stack gap="xs">
            <Heading level={3} size="lg" className="ccui-video-card__title">
              {title}
            </Heading>

            {description ? (
              <Text as="p" tone="secondary">
                {description}
              </Text>
            ) : null}

            {media.caption ? (
              <Text as="p" size="sm" tone="muted">
                {media.caption}
              </Text>
            ) : null}
          </Stack>

          {media.provider ? (
            <Cluster gap="xs">
              <Badge variant="neutral">{media.provider}</Badge>
            </Cluster>
          ) : null}
        </Stack>
      </Card>
    </a>
  );
}
