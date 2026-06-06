import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CircleHelpIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.7 2.7 0 0 1 5 1.4c0 1.8-2.5 2.1-2.5 3.6" /><path d="M12 17h.01" />
    </IconSvg>
  );
}
