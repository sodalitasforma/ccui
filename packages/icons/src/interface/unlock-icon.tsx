import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function UnlockIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </IconSvg>
  );
}
