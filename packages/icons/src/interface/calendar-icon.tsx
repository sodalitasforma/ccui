import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CalendarIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 11h18" />
    </IconSvg>
  );
}
