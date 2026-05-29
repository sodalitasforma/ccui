import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type TimelineProps<T extends ElementType = "ol"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type TimelineItemProps<T extends ElementType = "li"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type TimelineMarkerProps<T extends ElementType = "span"> = {
  as?: T;
  tone?: "neutral" | "gold" | "active" | "success" | "danger";
} & ComponentPropsWithoutRef<T>;

type TimelineContentProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Timeline<T extends ElementType = "ol">({
  as,
  className,
  ...props
}: TimelineProps<T>) {
  const Component = as || "ol";

  return <Component className={cx("forma-timeline", className)} {...props} />;
}

export function TimelineItem<T extends ElementType = "li">({
  as,
  className,
  ...props
}: TimelineItemProps<T>) {
  const Component = as || "li";

  return <Component className={cx("forma-timeline-item", className)} {...props} />;
}

export function TimelineMarker<T extends ElementType = "span">({
  as,
  tone = "neutral",
  className,
  ...props
}: TimelineMarkerProps<T>) {
  const Component = as || "span";

  return (
    <Component
      aria-hidden="true"
      className={cx("forma-timeline-marker", `forma-timeline-marker--tone-${tone}`, className)}
      {...props}
    />
  );
}

export function TimelineContent<T extends ElementType = "div">({
  as,
  className,
  ...props
}: TimelineContentProps<T>) {
  const Component = as || "div";

  return <Component className={cx("forma-timeline-content", className)} {...props} />;
}
