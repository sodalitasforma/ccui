import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type BadgeVariant =
  | "neutral"
  | "brown"
  | "gold"
  | "active"
  | "success"
  | "danger"
  | "liturgicalWhite"
  | "liturgicalGreen"
  | "liturgicalViolet"
  | "liturgicalRed"
  | "liturgicalRose"
  | "liturgicalBlack"
  | "liturgicalGold";

type BadgeProps<T extends ElementType = "span"> = {
  as?: T;
  variant?: BadgeVariant;
} & ComponentPropsWithoutRef<T>;

export function Badge<T extends ElementType = "span">({
  as,
  variant = "neutral",
  className,
  ...props
}: BadgeProps<T>) {
  const Component = as || "span";

  return (
    <Component
      className={cx("forma-badge", `forma-badge--variant-${variant}`, className)}
      {...props}
    />
  );
}
