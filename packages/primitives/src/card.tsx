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
        "ccui-card",
        `ccui-card--surface-${surface}`,
        `ccui-card--padding-${padding}`,
        `ccui-card--border-${border}`,
        `ccui-card--shadow-${shadow}`,
        className
      )}
      {...props}
    />
  );
}
