import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type SelectSize = "sm" | "md" | "lg";

type SelectProps = {
  size?: SelectSize;
} & ComponentPropsWithoutRef<"select">;

export function Select({ size = "md", className, children, ...props }: SelectProps) {
  return (
    <select
      className={cx("forma-select", `forma-select--size-${size}`, className)}
      {...props}
    >
      {children}
    </select>
  );
}
