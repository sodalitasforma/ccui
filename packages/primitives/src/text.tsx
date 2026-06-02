import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type TextTone =
  | "primary"
  | "secondary"
  | "muted"
  | "inverse"
  | "link"
  | "goldText"
  | "activeText";

type TextSize = "2xs" | "xs" | "sm" | "base" | "md" | "lg" | "xl";

type TextProps<T extends ElementType = "p"> = {
  as?: T;
  tone?: TextTone;
  size?: TextSize;
} & ComponentPropsWithoutRef<T>;

export function Text<T extends ElementType = "p">({
  as,
  tone = "primary",
  size = "base",
  className,
  ...props
}: TextProps<T>) {
  const Component = as || "p";

  return (
    <Component
      className={cx(
        "ccui-text",
        `ccui-text--tone-${tone}`,
        `ccui-text--size-${size}`,
        className
      )}
      {...props}
    />
  );
}
