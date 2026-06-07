import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowDownIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 5v14" /><path d="M5 12l7 7 7-7" />
    </IconSvg>
  );
}
