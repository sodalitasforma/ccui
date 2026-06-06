import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SearchIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </IconSvg>
  );
}
