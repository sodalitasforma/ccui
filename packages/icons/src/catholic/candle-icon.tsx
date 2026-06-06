import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CandleIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3s3 3 0 6c-3-3 0-6 0-6z" /><path d="M9 10h6v10H9z" /><path d="M8 20h8" />
    </IconSvg>
  );
}
