import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingFamily = "display" | "document" | "interface" | "inscription";
type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type HeadingLineHeight = "tight" | "display" | "base";
type HeadingWeight = "semibold" | "bold";

type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  level?: HeadingLevel;
  family?: HeadingFamily;
  size?: HeadingSize;
  lineHeight?: HeadingLineHeight;
  weight?: HeadingWeight;
} & ComponentPropsWithoutRef<T>;

export function Heading<T extends ElementType = "h2">({
  as,
  level = 2,
  family = "display",
  size,
  lineHeight,
  weight = "bold",
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as || (`h${level}` as ElementType);
  const resolvedSize = size || (level === 1 ? "5xl" : level === 2 ? "3xl" : "xl");
  const resolvedLineHeight =
    lineHeight ||
    (family === "display" && (resolvedSize === "4xl" || resolvedSize === "5xl")
      ? "display"
      : "tight");

  return (
    <Component
      className={cx(
        "ccui-heading",
        `ccui-heading--family-${family}`,
        `ccui-heading--size-${resolvedSize}`,
        `ccui-heading--line-height-${resolvedLineHeight}`,
        `ccui-heading--weight-${weight}`,
        className
      )}
      {...props}
    />
  );
}
