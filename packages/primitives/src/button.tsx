import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "forma-button",
        `forma-button--variant-${variant}`,
        `forma-button--size-${size}`,
        className
      )}
      {...props}
    />
  );
}
