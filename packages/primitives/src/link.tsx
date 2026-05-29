import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type LinkVariant = "default" | "muted" | "gold" | "active" | "inverse";
type LinkUnderline = "always" | "hover" | "none";

type LinkProps = {
  variant?: LinkVariant;
  underline?: LinkUnderline;
} & ComponentPropsWithoutRef<"a">;

export function Link({
  variant = "default",
  underline = "hover",
  className,
  ...props
}: LinkProps) {
  return (
    <a
      className={cx(
        "forma-link",
        `forma-link--variant-${variant}`,
        `forma-link--underline-${underline}`,
        className
      )}
      {...props}
    />
  );
}
