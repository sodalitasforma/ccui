import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArrowLeftIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
    </IconSvg>
  );
}
