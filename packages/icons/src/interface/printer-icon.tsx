import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PrinterIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 9V4h10v5" /><path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /><path d="M7 14h10v7H7z" />
    </IconSvg>
  );
}
