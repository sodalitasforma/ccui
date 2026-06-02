import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type IconFrameTone = "neutral" | "brown" | "gold" | "active" | "inverse";
type IconFrameSize = "sm" | "md" | "lg";

type IconFrameProps<T extends ElementType = "span"> = {
  as?: T;
  tone?: IconFrameTone;
  size?: IconFrameSize;
} & ComponentPropsWithoutRef<T>;

export function IconFrame<T extends ElementType = "span">({
  as,
  tone = "neutral",
  size = "md",
  className,
  ...props
}: IconFrameProps<T>) {
  const Component = as || "span";

  return (
    <Component
      className={cx(
        "ccui-icon-frame",
        `ccui-icon-frame--tone-${tone}`,
        `ccui-icon-frame--size-${size}`,
        className
      )}
      {...props}
    />
  );
}
