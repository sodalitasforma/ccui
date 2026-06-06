import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChevronUpIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M18 15l-6-6-6 6" />
    </IconSvg>
  );
}
