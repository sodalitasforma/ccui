import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function DownloadIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 4v10" /><path d="M8 10l4 4 4-4" /><path d="M5 20h14" />
    </IconSvg>
  );
}
