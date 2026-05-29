import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type SectionSurface = "page" | "subtle" | "parchment" | "raised" | "dark";
type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  surface?: SectionSurface;
  spacing?: SectionSpacing;
} & ComponentPropsWithoutRef<T>;

export function Section<T extends ElementType = "section">({
  as,
  surface = "page",
  spacing = "lg",
  className,
  ...props
}: SectionProps<T>) {
  const Component = as || "section";

  return (
    <Component
      className={cx(
        "forma-section",
        `forma-section--surface-${surface}`,
        `forma-section--spacing-${spacing}`,
        className
      )}
      {...props}
    />
  );
}
