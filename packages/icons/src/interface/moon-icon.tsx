import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function MoonIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M21.25 13.25A8.75 8.75 0 1 1 10.75 2.75 7 7 0 0 0 21.25 13.25Z" />
    </IconSvg>
  );
}
