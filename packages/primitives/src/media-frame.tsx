import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type MediaFrameRatio = "square" | "video" | "portrait" | "wide";
type MediaFrameSurface = "raised" | "parchment" | "dark";

type MediaFrameProps<T extends ElementType = "figure"> = {
  as?: T;
  ratio?: MediaFrameRatio;
  surface?: MediaFrameSurface;
} & ComponentPropsWithoutRef<T>;

export function MediaFrame<T extends ElementType = "figure">({
  as,
  ratio = "video",
  surface = "raised",
  className,
  ...props
}: MediaFrameProps<T>) {
  const Component = as || "figure";

  return (
    <Component
      className={cx(
        "ccui-media-frame",
        `ccui-media-frame--ratio-${ratio}`,
        `ccui-media-frame--surface-${surface}`,
        className
      )}
      {...props}
    />
  );
}
