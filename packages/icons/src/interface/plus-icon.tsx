import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function PlusIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 5v14" /><path d="M5 12h14" />
    </IconSvg>
  );
}
