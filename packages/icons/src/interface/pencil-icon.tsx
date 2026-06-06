import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PencilIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z" /><path d="M13.5 7.5l3 3" />
    </IconSvg>
  );
}
