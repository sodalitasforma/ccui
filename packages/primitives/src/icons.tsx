import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

export type CCUIIconProps = {
  size?: "xs" | "sm" | "md";
  title?: string;
} & ComponentPropsWithoutRef<"svg">;

function iconSizeClass(size: CCUIIconProps["size"] = "sm") {
  return `ccui-icon--${size}`;
}

export function ArrowRightIcon({
  size = "sm",
  title,
  className,
  ...props
}: CCUIIconProps) {
  const titleId = title
    ? `ccui-icon-arrow-right-${title.replace(/\s+/g, "-").toLowerCase()}`
    : undefined;

  return (
    <svg
      viewBox="0 0 16 16"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      focusable="false"
      className={cx("ccui-icon", iconSizeClass(size), className)}
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

export function CheckIcon({ size = "sm", className, ...props }: CCUIIconProps) {
  return (
    <svg
      className={cx("ccui-icon", `ccui-icon--${size}`, className)}
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


export function CopyIcon({
  size = "sm",
  title,
  className,
  ...props
}: CCUIIconProps) {
  const titleId = title
    ? `ccui-icon-copy-${title.replace(/\s+/g, "-").toLowerCase()}`
    : undefined;

  return (
    <svg
      viewBox="0 0 16 16"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      focusable="false"
      className={cx("ccui-icon", iconSizeClass(size), className)}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        x="6"
        y="6"
        width="7"
        height="7"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M3 10V4.5A1.5 1.5 0 0 1 4.5 3H10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}
