import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function FilterIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" />
    </IconSvg>
  );
}
