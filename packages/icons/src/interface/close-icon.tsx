import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CloseIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M18 6L6 18" /><path d="M6 6l12 12" />
    </IconSvg>
  );
}
