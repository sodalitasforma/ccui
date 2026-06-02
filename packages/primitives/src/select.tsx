import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type SelectSize = "sm" | "md" | "lg";

type SelectProps = {
  size?: SelectSize;
} & Omit<ComponentPropsWithoutRef<"select">, "size">;

export function Select({ size = "md", className, children, ...props }: SelectProps) {
  return (
    <select
      className={cx("ccui-select", `ccui-select--size-${size}`, className)}
      {...props}
    >
      {children}
    </select>
  );
}
