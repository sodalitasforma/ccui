import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChevronLeftIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M15 18l-6-6 6-6" />
    </IconSvg>
  );
}
