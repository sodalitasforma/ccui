import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function AltarIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 10h14" /><path d="M7 10v9" /><path d="M17 10v9" /><path d="M4 19h16" /><path d="M8 6h8" />
    </IconSvg>
  );
}
