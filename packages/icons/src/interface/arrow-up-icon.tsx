import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowUpIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
    </IconSvg>
  );
}
