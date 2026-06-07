import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function UsersIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M17 11a4 4 0 0 0 0-6" /><path d="M22 21a7 7 0 0 0-6-6.9" />
    </IconSvg>
  );
}
