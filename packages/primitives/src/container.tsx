import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContainerSize;
} & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = "div">({
  as,
  size = "lg",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx("forma-container", `forma-container--${size}`, className)}
      {...props}
    />
  );
}
