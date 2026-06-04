import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@catholiccommons/primitives";
import type { LiturgicalColor } from "./types";

type LiturgicalColorDotProps = {
  color: LiturgicalColor;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

export function LiturgicalColorDot({
  color,
  label,
  className,
  ...props
}: LiturgicalColorDotProps) {
  return (
    <span
      className={cx(
        "ccui-liturgical-color-dot",
        `ccui-liturgical-color-dot--${color}`,
        className
      )}
      aria-label={label ?? `${color} liturgical color`}
      title={label ?? color}
      {...props}
    />
  );
}
