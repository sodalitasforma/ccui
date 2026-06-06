import type { ReactNode } from "react";
import type { IconProps, IconSize } from "./types";

const iconSizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function getIconSize(size: IconProps["size"] = "md") {
  return typeof size === "number" ? size : iconSizeMap[size];
}

export function IconSvg({
  size = "md",
  title,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  const resolvedSize = getIconSize(size);
  const ariaHidden = title ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-label={title}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}
