import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PhoneIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 4l3 4-2 2c1.5 3 3.5 5 6 6l2-2 4 3-1 3c-8 0-15-7-15-15l3-1z" />
    </IconSvg>
  );
}
