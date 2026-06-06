import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PlayIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </IconSvg>
  );
}
