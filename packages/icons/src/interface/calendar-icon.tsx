import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CalendarIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M4 10h16" />
    </IconSvg>
  );
}
