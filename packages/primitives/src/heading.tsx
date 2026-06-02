import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingFamily = "display" | "document" | "interface" | "inscription";
type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  level?: HeadingLevel;
  family?: HeadingFamily;
  size?: HeadingSize;
} & ComponentPropsWithoutRef<T>;

export function Heading<T extends ElementType = "h2">({
  as,
  level = 2,
  family = "display",
  size,
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as || (`h${level}` as ElementType);
  const resolvedSize = size || (level === 1 ? "5xl" : level === 2 ? "3xl" : "xl");

  return (
    <Component
      className={cx(
        "ccui-heading",
        `ccui-heading--family-${family}`,
        `ccui-heading--size-${resolvedSize}`,
        className
      )}
      {...props}
    />
  );
}
