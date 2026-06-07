import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function EllipsisVerticalIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
    </IconSvg>
  );
}
