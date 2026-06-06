import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ChurchIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3v4" />
      <path d="M10 5h4" />
      <path d="M5 21V10l7-4 7 4v11" />
      <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      <path d="M3 21h18" />
    </IconSvg>
  );
}
