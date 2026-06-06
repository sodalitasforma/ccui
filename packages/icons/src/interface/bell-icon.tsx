import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function BellIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" />
    </IconSvg>
  );
}
