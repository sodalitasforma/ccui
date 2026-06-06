import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ShareIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 10.5l6.8-4" /><path d="M8.6 13.5l6.8 4" />
    </IconSvg>
  );
}
