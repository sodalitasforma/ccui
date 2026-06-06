import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M6 9l6 6 6-6" />
    </IconSvg>
  );
}
