import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type CardSurface = "raised" | "subtle" | "parchment" | "dark";
type CardPadding = "none" | "sm" | "md" | "lg";
type CardBorder = "none" | "subtle" | "strong" | "gold";
type CardShadow = "none" | "sm" | "md";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  surface?: CardSurface;
  padding?: CardPadding;
  border?: CardBorder;
  shadow?: CardShadow;
} & ComponentPropsWithoutRef<T>;

export function Card<T extends ElementType = "div">({
  as,
  surface = "raised",
  padding = "md",
  border = "subtle",
  shadow = "none",
  className,
  ...props
}: CardProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "forma-card",
        `forma-card--surface-${surface}`,
        `forma-card--padding-${padding}`,
        `forma-card--border-${border}`,
        `forma-card--shadow-${shadow}`,
        className
      )}
      {...props}
    />
  );
}
