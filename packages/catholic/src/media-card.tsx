import type * as React from "react";
import type { HTMLAttributes } from "react";
import { Badge, Card, Cluster, Heading, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type MediaCardFit = "cover" | "contain" | "fill" | "scale-down" | "none";
export type MediaCardPosition = "center" | "top" | "bottom" | "left" | "right";

export type MediaCardMedia = {
  src: string;
  alt: string;
  caption?: string;
  provider?: string;
  fit?: MediaCardFit;
  position?: MediaCardPosition;
};

export type MediaCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  href: string;
  media: MediaCardMedia;
  fit?: MediaCardFit;
  position?: MediaCardPosition;
};

export function MediaCard({
  className,
  title,
  description,
  date,
  category = "Photo",
  href,
  media,
  fit = "cover",
  position = "center",
  ...props
}: MediaCardProps) {
  return (
    <Card
      as="article"
      padding="none"
      border="subtle"
      className={cx("ccui-media-card", "ccui-media-card__surface", className)}
      {...props}
    >
      <a href={href} className="ccui-media-card__frame-link" aria-label={`Open ${title}`}>
        <div className="ccui-media-card__frame">
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            style={{
              "--ccui-media-card-fit": media.fit ?? fit,
              "--ccui-media-card-position": media.position ?? position,
            } as React.CSSProperties}
          />
        </div>
      </a>

      <Stack gap="sm" className="ccui-media-card__body">
        <Cluster justify="between" align="center" gap="sm">
          <Badge variant="gold">{category}</Badge>

          {date ? (
            <Text as="span" size="xs" tone="muted">
              {date}
            </Text>
          ) : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg" className="ccui-media-card__title">
            <Link href={href}>{title}</Link>
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
  );
}
