import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CircleAlertIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="10" /><path d="M12 7v6" /><path d="M12 17h.01" />
    </IconSvg>
  );
}
