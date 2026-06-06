import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CloseIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </IconSvg>
  );
}
