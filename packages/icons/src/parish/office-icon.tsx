import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function OfficeIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 20V4h10v16" /><path d="M15 9h4v11" /><path d="M8 8h2" /><path d="M8 12h2" /><path d="M8 16h2" />
    </IconSvg>
  );
}
