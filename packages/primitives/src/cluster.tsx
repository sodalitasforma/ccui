import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type ClusterGap = "xs" | "sm" | "md" | "lg";
type ClusterAlign = "start" | "center" | "end" | "baseline";
type ClusterJustify = "start" | "center" | "end" | "between";

type ClusterProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: ClusterGap;
  align?: ClusterAlign;
  justify?: ClusterJustify;
} & ComponentPropsWithoutRef<T>;

export function Cluster<T extends ElementType = "div">({
  as,
  gap = "sm",
  align = "center",
  justify = "start",
  className,
  ...props
}: ClusterProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "ccui-cluster",
        `ccui-cluster--gap-${gap}`,
        `ccui-cluster--align-${align}`,
        `ccui-cluster--justify-${justify}`,
        className
      )}
      {...props}
    />
  );
}
