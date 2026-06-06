import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function TriangleAlertIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3l10 18H2L12 3z" /><path d="M12 9v5" /><path d="M12 17h.01" />
    </IconSvg>
  );
}
