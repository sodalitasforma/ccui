import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function EllipsisIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" />
    </IconSvg>
  );
}
