import type { HTMLAttributes } from "react";
import { cx } from "./utils";

export type BadgeVariant =
  | "neutral"
  | "gold"
  | "brown"
  | "active"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "liturgicalWhite"
  | "liturgicalGreen"
  | "liturgicalViolet"
  | "liturgicalRed"
  | "liturgicalRose"
  | "liturgicalBlack"
  | "liturgicalGold";

export type BadgeSize = "xs" | "sm";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

export function Badge({
  className,
  variant = "neutral",
  size = "sm",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        "ccui-badge",
        `ccui-badge--${variant}`,
        `ccui-badge--${size}`,
        className,
      )}
      {...props}
    />
  );
}
