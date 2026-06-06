import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ImageIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="10" r="1.5" /><path d="M21 16l-5-5L5 19" />
    </IconSvg>
  );
}
