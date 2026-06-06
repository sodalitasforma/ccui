import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SealIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="9" r="4" /><path d="M9 13l-2 7 5-3 5 3-2-7" />
    </IconSvg>
  );
}
