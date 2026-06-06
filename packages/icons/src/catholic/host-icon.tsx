import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function HostIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="8" /><path d="M12 7v10" /><path d="M8 11h8" />
    </IconSvg>
  );
}
