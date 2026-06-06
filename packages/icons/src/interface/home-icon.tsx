import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function HomeIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" />
    </IconSvg>
  );
}
