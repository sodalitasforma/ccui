import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MonstranceIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="9" r="4" /><path d="M12 13v7" /><path d="M8 20h8" /><path d="M12 2v2" /><path d="M5 9H3" /><path d="M21 9h-2" /><path d="M6 3l2 2" /><path d="M18 3l-2 2" />
    </IconSvg>
  );
}
