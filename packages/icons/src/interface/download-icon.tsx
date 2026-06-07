import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function DownloadIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M5 21h14" />
    </IconSvg>
  );
}
