import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconSvg>
  );
}
