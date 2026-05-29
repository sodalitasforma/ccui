import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { PhotoGalleryCardData } from "./types";

type PhotoGalleryCardProps = PhotoGalleryCardData & ComponentPropsWithoutRef<"article">;

export function PhotoGalleryCard({
  title,
  description,
  date,
  category = "Photo gallery",
  href,
  photos,
  className,
  ...props
}: PhotoGalleryCardProps) {
  const visiblePhotos = photos.slice(0, 4);
  const remaining = Math.max(photos.length - visiblePhotos.length, 0);

  return (
    <Card as="article" padding="none" border="subtle" className={cx("forma-photo-gallery-card", className)} {...props}>
      <div className="forma-photo-gallery-card__grid" aria-label={`${title} photos`}>
        {visiblePhotos.map((photo, index) => (
          <img
            key={`${photo.src}-${index}`}
            src={photo.src}
            alt={photo.alt ?? photo.title ?? `${title} photo ${index + 1}`}
            className="forma-photo-gallery-card__image"
          />
        ))}
        {remaining ? (
          <div className="forma-photo-gallery-card__more">
            <Text as="span" tone="inverse">
              +{remaining}
            </Text>
          </div>
        ) : null}
      </div>

      <Stack gap="sm" className="forma-photo-gallery-card__body">
        <Cluster justify="between" align="start" gap="sm">
          <Tag variant="blue">{category}</Tag>
          {date ? <Text as="span" size="xs" tone="muted">{date}</Text> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        <Tag variant="brown">{photos.length} photos</Tag>
      </Stack>
    </Card>
  );
}
