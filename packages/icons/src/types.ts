import type { SVGProps } from "react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: IconSize | number;
  title?: string;
};
