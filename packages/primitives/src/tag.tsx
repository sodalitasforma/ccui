import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type TagVariant = "neutral" | "brown" | "gold" | "active" | "blue";
type TagProps<T extends ElementType = "span"> = {
  as?: T;
  variant?: TagVariant;
} & ComponentPropsWithoutRef<T>;

export function Tag<T extends ElementType = "span">({
  as,
  variant = "neutral",
  className,
  ...props
}: TagProps<T>) {
  const Component = as || "span";

  return (
    <Component
      className={cx("ccui-tag", `ccui-tag--variant-${variant}`, className)}
      {...props}
    />
  );
}
