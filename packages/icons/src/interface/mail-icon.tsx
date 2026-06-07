import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MailIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
    </IconSvg>
  );
}
