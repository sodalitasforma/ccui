import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type NoticeVariant = "info" | "success" | "warning" | "danger" | "official" | "liturgical";

type NoticeProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: NoticeVariant;
} & ComponentPropsWithoutRef<T>;

export function Notice<T extends ElementType = "div">({
  as,
  variant = "official",
  className,
  ...props
}: NoticeProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx("ccui-notice", `ccui-notice--variant-${variant}`, className)}
      role="note"
      {...props}
    />
  );
}
