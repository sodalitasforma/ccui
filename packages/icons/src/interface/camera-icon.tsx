import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CameraIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 8h4l2-3h4l2 3h4v12H4V8z" /><circle cx="12" cy="14" r="4" />
    </IconSvg>
  );
}
