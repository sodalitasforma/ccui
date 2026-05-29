import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: StackGap;
} & ComponentPropsWithoutRef<T>;

export function Stack<T extends ElementType = "div">({
  as,
  gap = "md",
  className,
  ...props
}: StackProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx("forma-stack", `forma-stack--gap-${gap}`, className)}
      {...props}
    />
  );
}
