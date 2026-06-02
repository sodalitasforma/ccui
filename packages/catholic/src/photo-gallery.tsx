import type * as React from "react";
import type { HTMLAttributes } from "react";
import { Badge, Card, Cluster, Heading, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type {
  PhotoGalleryImageFit,
  PhotoGalleryImagePosition,
  PhotoGalleryPhoto,
} from "./photo-gallery-card";

export type PhotoGalleryProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  photos: readonly PhotoGalleryPhoto[];
  category?: string;
  provider?: string;
  fit?: PhotoGalleryImageFit;
  position?: PhotoGalleryImagePosition;
};

export function PhotoGallery({
  className,
  title,
  description,
  photos,
  category = "Gallery",
  provider,
  fit = "cover",
  position = "center",
  ...props
}: PhotoGalleryProps) {
  return (
    <section className={cx("ccui-photo-gallery", className)} {...props}>
      <Stack gap="lg">
        <Cluster justify="between" align="end" gap="md">
          <Stack gap="xs">
            <Badge variant="gold">{category}</Badge>
            <Heading level={3} size="xl" className="ccui-photo-gallery__title">
              {title}
            </Heading>
            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Cluster gap="xs" align="center">
            {provider ? <Badge variant="neutral">{provider}</Badge> : null}
            <Text as="span" size="xs" tone="muted">
              {photos.length} {photos.length === 1 ? "photo" : "photos"}
            </Text>
          </Cluster>
        </Cluster>

        <div className="ccui-photo-gallery__grid">
          {photos.map((photo, index) => (
            <Card
              key={`${photo.src}-${index}`}
              padding="none"
              border="subtle"
              className={cx(
                "ccui-photo-gallery__item",
                index === 0 && "ccui-photo-gallery__item--lead",
              )}
            >
              <figure className="ccui-photo-gallery__figure">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    "--ccui-photo-gallery-fit": photo.fit ?? fit,
                    "--ccui-photo-gallery-position": photo.position ?? position,
                  } as React.CSSProperties}
                />
                {photo.caption ? (
                  <figcaption>{photo.caption}</figcaption>
                ) : null}
              </figure>
            </Card>
          ))}
        </div>
      </Stack>
    </section>
  );
}
