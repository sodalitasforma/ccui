import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function KeysIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="8" cy="8" r="3" /><path d="M10 10l8 8" /><path d="M15 15l2-2" /><path d="M17 17l2-2" /><circle cx="16" cy="8" r="3" /><path d="M14 10l-8 8" />
    </IconSvg>
  );
}
