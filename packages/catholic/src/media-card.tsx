import type * as React from "react";
import type { AnchorHTMLAttributes } from "react";
import { Badge, Card, Cluster, Heading, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

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

export type MediaCardProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "media"> & {
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
    <a href={href} className={cx("forma-media-card", className)} {...props}>
      <Card padding="none" border="subtle" className="forma-media-card__surface">
        <div className="forma-media-card__frame">
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            style={{
              "--forma-media-card-fit": media.fit ?? fit,
              "--forma-media-card-position": media.position ?? position,
            } as React.CSSProperties}
          />
        </div>

        <Stack gap="sm" className="forma-media-card__body">
          <Cluster justify="between" align="center" gap="sm">
            <Badge variant="gold">{category}</Badge>

            {date ? (
              <Text as="span" size="xs" tone="muted">
                {date}
              </Text>
            ) : null}
          </Cluster>

          <Stack gap="xs">
            <Heading level={3} size="lg" className="forma-media-card__title">
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
