import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
    </IconSvg>
  );
}
