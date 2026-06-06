import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MailIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" /><path d="M4 8l8 6 8-6" />
    </IconSvg>
  );
}
