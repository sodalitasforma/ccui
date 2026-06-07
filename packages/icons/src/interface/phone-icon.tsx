import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PhoneIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.5 1.7L7.8 9.7a16 16 0 0 0 6.5 6.5l1.3-1.3a2 2 0 0 1 1.7-.5l3 .5a2 2 0 0 1 1.7 2z" />
    </IconSvg>
  );
}
