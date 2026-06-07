import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SearchIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
    </IconSvg>
  );
}
