import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChaliceIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 4h10l-1 7a4 4 0 0 1-8 0L7 4Z" />
      <path d="M12 15v5" />
      <path d="M8 20h8" />
    </IconSvg>
  );
}
