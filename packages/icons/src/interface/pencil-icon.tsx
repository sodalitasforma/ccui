import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PencilIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4z" /><path d="M13.5 6.5l4 4" />
    </IconSvg>
  );
}
