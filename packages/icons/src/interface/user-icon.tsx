import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function UserIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" /><path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
    </IconSvg>
  );
}
