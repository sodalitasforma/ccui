import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SaveIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 3h12l2 2v16H5V3z" /><path d="M8 3v6h8" /><path d="M8 21v-7h8v7" />
    </IconSvg>
  );
}
