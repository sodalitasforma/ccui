import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type GridColumns = "1" | "2" | "3" | "4" | "auto";
type GridGap = "sm" | "md" | "lg" | "xl";

type GridProps<T extends ElementType = "div"> = {
  as?: T;
  columns?: GridColumns;
  gap?: GridGap;
} & ComponentPropsWithoutRef<T>;

export function Grid<T extends ElementType = "div">({
  as,
  columns = "auto",
  gap = "md",
  className,
  ...props
}: GridProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "ccui-grid",
        `ccui-grid--columns-${columns}`,
        `ccui-grid--gap-${gap}`,
        className
      )}
      {...props}
    />
  );
}
