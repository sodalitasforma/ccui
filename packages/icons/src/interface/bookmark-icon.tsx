import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function BookmarkIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M6 4h12v17l-6-4-6 4V4z" />
    </IconSvg>
  );
}
