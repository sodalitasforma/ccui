import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ExternalLinkIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M14 3h7v7" /><path d="M21 3l-9 9" /><path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    </IconSvg>
  );
}
