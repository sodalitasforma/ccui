import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../primitives/src/utils";
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
        "forma-liturgical-color-dot",
        `forma-liturgical-color-dot--${color}`,
        className
      )}
      aria-label={label ?? `${color} liturgical color`}
      title={label ?? color}
      {...props}
    />
  );
}
