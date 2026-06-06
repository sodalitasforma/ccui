import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function ArchiveIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 6h16v4H4z" /><path d="M6 10h12v10H6z" /><path d="M10 14h4" />
    </IconSvg>
  );
}
