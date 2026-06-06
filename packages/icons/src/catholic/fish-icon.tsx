import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function FishIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M3 12s4-5 10-5 8 5 8 5-2 5-8 5-10-5-10-5z" /><path d="M21 12l-4-3v6l4-3z" /><circle cx="9" cy="11" r=".5" />
    </IconSvg>
  );
}
