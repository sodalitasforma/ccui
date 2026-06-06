import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function EyeIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
    </IconSvg>
  );
}
