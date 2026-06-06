import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M9 6l6 6-6 6" />
    </IconSvg>
  );
}
