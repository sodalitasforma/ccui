import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function VolunteerIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 11l5 5 5-5" /><path d="M5 12a3 3 0 016-2 3 3 0 016 2" /><path d="M4 20h16" />
    </IconSvg>
  );
}
