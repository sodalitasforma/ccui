import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ExternalLinkIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3" /><path d="M14 4h6v6" /><path d="M12 12l8-8" />
    </IconSvg>
  );
}
