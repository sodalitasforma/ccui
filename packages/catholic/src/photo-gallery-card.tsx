"use client";

import type * as React from "react";
import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import { Badge, Card, Cluster, Heading, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type PhotoGalleryImageFit = "cover" | "contain" | "fill" | "scale-down" | "none";
export type PhotoGalleryImagePosition = "center" | "top" | "bottom" | "left" | "right";

export type PhotoGalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
  fit?: PhotoGalleryImageFit;
  position?: PhotoGalleryImagePosition;
};

export type PhotoGalleryCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  href?: string;
  photos: readonly PhotoGalleryPhoto[];
  photoCount?: number;
  provider?: string;
  fit?: PhotoGalleryImageFit;
  position?: PhotoGalleryImagePosition;
};

export function PhotoGalleryCard({
  className,
  title,
  description,
  date,
  category = "Gallery",
  photos,
  photoCount,
  provider,
  fit = "cover",
  position = "center",
  ...props
}: PhotoGalleryCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const resolvedPhotoCount = photos.length;
  const activePhoto = photos[activeIndex] ?? photos[0];

  const canGoPrevious = photos.length > 1;
  const canGoNext = photos.length > 1;

  function goPrevious() {
    if (!photos.length) return;
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  }

  function goNext() {
    if (!photos.length) return;
    setActiveIndex((index) => (index + 1) % photos.length);
  }

  useEffect(() => {
    if (!isFullscreen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsFullscreen(false);
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFullscreen, photos.length]);

  return (
    <Card
      as="article"
      padding="none"
      border="subtle"
      className={cx("ccui-photo-gallery-card", className)}
      {...props}
    >
      <div className="ccui-photo-gallery-card__stage">
        {activePhoto ? (
          <button
            type="button"
            className="ccui-photo-gallery-card__image-button"
            onClick={() => setIsFullscreen(true)}
            aria-label={`Open ${activePhoto.alt} full screen`}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              loading="lazy"
              style={{
                "--ccui-photo-gallery-fit": activePhoto.fit ?? fit,
                "--ccui-photo-gallery-position": activePhoto.position ?? position,
              } as React.CSSProperties}
            />
          </button>
        ) : (
          <div className="ccui-photo-gallery-card__empty" aria-hidden="true" />
        )}

        {activePhoto?.alt ? (
          <span className="ccui-photo-gallery-card__alt-label">
            {activePhoto.alt}
          </span>
        ) : null}

        {photos.length > 1 ? (
          <div className="ccui-photo-gallery-card__controls" aria-label="Gallery controls">
            <button type="button" onClick={goPrevious} disabled={!canGoPrevious} aria-label="Previous photo">
              ‹
            </button>
            <span>
              {activeIndex + 1} / {photos.length}
            </span>
            <button type="button" onClick={goNext} disabled={!canGoNext} aria-label="Next photo">
              ›
            </button>
          </div>
        ) : null}
      </div>

      {photos.length > 1 ? (
        <div className="ccui-photo-gallery-card__thumbs" aria-label="Gallery thumbnails">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              className={cx(
                "ccui-photo-gallery-card__thumb",
                index === activeIndex && "ccui-photo-gallery-card__thumb--active",
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}: ${photo.alt}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                style={{
                  "--ccui-photo-gallery-fit": photo.fit ?? fit,
                  "--ccui-photo-gallery-position": photo.position ?? position,
                } as React.CSSProperties}
              />
            </button>
          ))}
        </div>
      ) : null}

      <Stack gap="sm" className="ccui-photo-gallery-card__body">
        <Cluster justify="between" align="center" gap="sm">
          <Badge variant="gold">{category}</Badge>
          {date ? (
            <Text as="span" size="xs" tone="muted">
              {date}
            </Text>
          ) : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg" className="ccui-photo-gallery-card__title">
            {title}
          </Heading>

          {description ? (
            <Text as="p" tone="secondary">
              {description}
            </Text>
          ) : null}

          {activePhoto?.caption ? (
            <Text as="p" size="sm" tone="muted">
              {activePhoto.caption}
            </Text>
          ) : null}
        </Stack>

        <Cluster gap="xs">
          {provider ? <Badge variant="neutral">{provider}</Badge> : null}
          <Text as="span" size="xs" tone="muted">
            {resolvedPhotoCount} {resolvedPhotoCount === 1 ? "photo" : "photos"}
          </Text>
        </Cluster>
      </Stack>

      {isFullscreen && activePhoto ? (
        <div className="ccui-photo-gallery-card__lightbox" role="dialog" aria-modal="true" aria-label={title}>
          <button
            type="button"
            className="ccui-photo-gallery-card__lightbox-close"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close full screen gallery"
          >
            ×
          </button>

          {photos.length > 1 ? (
            <button
              type="button"
              className="ccui-photo-gallery-card__lightbox-previous"
              onClick={goPrevious}
              aria-label="Previous photo"
            >
              ‹
            </button>
          ) : null}

          <figure className="ccui-photo-gallery-card__lightbox-figure">
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption>
              <span>{activePhoto.caption ?? activePhoto.alt}</span>
              <span>
                {activeIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          {photos.length > 1 ? (
            <button
              type="button"
              className="ccui-photo-gallery-card__lightbox-next"
              onClick={goNext}
              aria-label="Next photo"
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
