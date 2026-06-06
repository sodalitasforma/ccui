import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MapPinIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 21s6-5.2 6-11a6 6 0 10-12 0c0 5.8 6 11 6 11z" /><circle cx="12" cy="10" r="2" />
    </IconSvg>
  );
}
