import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function RefreshCwIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M20 6v5h-5" /><path d="M4 18v-5h5" /><path d="M18 9a6 6 0 0 0-10-3l-4 4" /><path d="M6 15a6 6 0 0 0 10 3l4-4" />
    </IconSvg>
  );
}
