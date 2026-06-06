import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function BibleIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M6 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3V5a1 1 0 011-1z" /><path d="M9 8h6" /><path d="M12 8v6" /><path d="M8 17h11" />
    </IconSvg>
  );
}
