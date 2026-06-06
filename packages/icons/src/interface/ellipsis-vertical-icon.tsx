import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function EllipsisVerticalIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 5h.01" /><path d="M12 12h.01" /><path d="M12 19h.01" />
    </IconSvg>
  );
}
