import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function EllipsisIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 12h.01" /><path d="M12 12h.01" /><path d="M19 12h.01" />
    </IconSvg>
  );
}
