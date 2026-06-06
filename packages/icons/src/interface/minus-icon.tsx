import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MinusIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 12h14" />
    </IconSvg>
  );
}
