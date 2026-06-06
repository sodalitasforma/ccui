import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function LectionaryIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M6 5h9a3 3 0 013 3v12H8a2 2 0 01-2-2V5z" /><path d="M9 9h6" /><path d="M9 12h6" /><path d="M9 15h4" />
    </IconSvg>
  );
}
