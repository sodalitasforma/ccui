import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MapPinIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" />
    </IconSvg>
  );
}
