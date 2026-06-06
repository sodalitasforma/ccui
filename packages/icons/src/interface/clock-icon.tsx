import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ClockIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2" />
    </IconSvg>
  );
}
