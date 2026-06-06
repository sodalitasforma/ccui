import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function InfoIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </IconSvg>
  );
}
