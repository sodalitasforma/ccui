import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type FilterBarDensity = "compact" | "normal";
type FilterBarAlign = "start" | "center" | "end" | "between";

type FilterBarProps<T extends ElementType = "div"> = {
  as?: T;
  density?: FilterBarDensity;
  align?: FilterBarAlign;
} & ComponentPropsWithoutRef<T>;

export function FilterBar<T extends ElementType = "div">({
  as,
  density = "normal",
  align = "between",
  className,
  ...props
}: FilterBarProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "forma-filter-bar",
        `forma-filter-bar--density-${density}`,
        `forma-filter-bar--align-${align}`,
        className
      )}
      {...props}
    />
  );
}
