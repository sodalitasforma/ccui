import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type EmptyStateTone = "neutral" | "official" | "subtle";

type EmptyStateProps<T extends ElementType = "div"> = {
  as?: T;
  tone?: EmptyStateTone;
} & ComponentPropsWithoutRef<T>;

export function EmptyState<T extends ElementType = "div">({
  as,
  tone = "neutral",
  className,
  ...props
}: EmptyStateProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx("ccui-empty-state", `ccui-empty-state--tone-${tone}`, className)}
      {...props}
    />
  );
}
