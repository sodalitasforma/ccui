import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function RosaryIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="8" cy="8" r="1.25" />
      <circle cx="16" cy="8" r="1.25" />
      <circle cx="7" cy="12" r="1.25" />
      <circle cx="17" cy="12" r="1.25" />
      <path d="M12 7.5v7" />
      <path d="M12 15v6" />
      <path d="M9.5 18h5" />
    </IconSvg>
  );
}
