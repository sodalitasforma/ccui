import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function HomeIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M3 11l9-8 9 8" /><path d="M5 10v11h14V10" /><path d="M10 21v-6h4v6" />
    </IconSvg>
  );
}
