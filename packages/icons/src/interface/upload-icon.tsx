import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function UploadIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 16V4" /><path d="M5 11l7-7 7 7" /><path d="M5 20h14" />
    </IconSvg>
  );
}
