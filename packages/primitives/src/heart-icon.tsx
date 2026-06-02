import type { SVGProps } from "react";

export type HeartIconProps = SVGProps<SVGSVGElement> & {
  size?: "xs" | "sm" | "md";
};

const sizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
} as const;

export function HeartIcon({ size = "sm", ...props }: HeartIconProps) {
  const pixelSize = sizeMap[size];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={pixelSize}
      height={pixelSize}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.8 4.6c-1.6-1.5-4.1-1.5-5.7.1L12 7.8 8.9 4.7c-1.6-1.6-4.1-1.6-5.7-.1-1.7 1.6-1.7 4.3 0 6L12 19.4l8.8-8.8c1.7-1.7 1.7-4.4 0-6Z" />
    </svg>
  );
}
