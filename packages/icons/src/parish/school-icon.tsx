import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SchoolIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M7 12v4c2 2 8 2 10 0v-4" /><path d="M21 9v6" />
    </IconSvg>
  );
}
