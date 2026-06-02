import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

export type FormaIconProps = {
  size?: "xs" | "sm" | "md";
  title?: string;
} & ComponentPropsWithoutRef<"svg">;

function iconSizeClass(size: FormaIconProps["size"] = "sm") {
  return `forma-icon--${size}`;
}

export function ArrowRightIcon({
  size = "sm",
  title,
  className,
  ...props
}: FormaIconProps) {
  const titleId = title
    ? `forma-icon-arrow-right-${title.replace(/\s+/g, "-").toLowerCase()}`
    : undefined;

  return (
    <svg
      viewBox="0 0 16 16"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      focusable="false"
      className={cx("forma-icon", iconSizeClass(size), className)}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3.25 8h8.25M8.75 4.75 12 8l-3.25 3.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CheckIcon({ size = "sm", className, ...props }: FormaIconProps) {
  return (
    <svg
      className={cx("forma-icon", `forma-icon--${size}`, className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M3.5 8.25L6.5 11.25L12.75 4.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
