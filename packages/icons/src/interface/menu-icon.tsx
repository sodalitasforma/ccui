import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MenuIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
    </IconSvg>
  );
}
