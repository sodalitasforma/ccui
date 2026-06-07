import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CopyIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="8" y="8" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </IconSvg>
  );
}
