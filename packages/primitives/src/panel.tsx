import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type PanelSurface = "subtle" | "parchment" | "institutional" | "raised" | "dark";
type PanelPadding = "sm" | "md" | "lg";
type PanelTone = "neutral" | "gold" | "active" | "official";

type PanelProps<T extends ElementType = "section"> = {
  as?: T;
  surface?: PanelSurface;
  padding?: PanelPadding;
  tone?: PanelTone;
} & ComponentPropsWithoutRef<T>;

export function Panel<T extends ElementType = "section">({
  as,
  surface = "parchment",
  padding = "lg",
  tone = "neutral",
  className,
  ...props
}: PanelProps<T>) {
  const Component = as || "section";

  return (
    <Component
      className={cx(
        "ccui-panel",
        `ccui-panel--surface-${surface}`,
        `ccui-panel--padding-${padding}`,
        `ccui-panel--tone-${tone}`,
        className
      )}
      {...props}
    />
  );
}
