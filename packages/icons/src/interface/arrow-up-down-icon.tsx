import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowUpDownIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 3v18" /><path d="M3 7l4-4 4 4" /><path d="M17 21V3" /><path d="M13 17l4 4 4-4" />
    </IconSvg>
  );
}
