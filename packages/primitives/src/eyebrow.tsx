import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type EyebrowTone = "muted" | "gold" | "active" | "inverse";

type EyebrowProps<T extends ElementType = "p"> = {
  as?: T;
  tone?: EyebrowTone;
} & ComponentPropsWithoutRef<T>;

export function Eyebrow<T extends ElementType = "p">({
  as,
  tone = "muted",
  className,
  ...props
}: EyebrowProps<T>) {
  const Component = as || "p";

  return (
    <Component
      className={cx("forma-eyebrow", `forma-eyebrow--tone-${tone}`, className)}
      {...props}
    />
  );
}
