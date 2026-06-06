import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MinistryIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M4 20c1-4 4-6 8-6s7 2 8 6" />
    </IconSvg>
  );
}
