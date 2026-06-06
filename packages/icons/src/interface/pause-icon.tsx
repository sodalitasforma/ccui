import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PauseIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M8 5v14" /><path d="M16 5v14" />
    </IconSvg>
  );
}
