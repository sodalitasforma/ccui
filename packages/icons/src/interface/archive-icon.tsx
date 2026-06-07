import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArchiveIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <rect x="3" y="4" width="18" height="4" rx="1" /><path d="M5 8v12h14V8" /><path d="M10 12h4" />
    </IconSvg>
  );
}
