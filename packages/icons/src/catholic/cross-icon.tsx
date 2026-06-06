import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CrossIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3v18" />
      <path d="M7 8h10" />
    </IconSvg>
  );
}
