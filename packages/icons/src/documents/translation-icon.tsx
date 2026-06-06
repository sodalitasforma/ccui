import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function TranslationIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M4 6h8" /><path d="M8 4v2c0 4-2 7-4 9" /><path d="M6 10c1 2 3 4 6 5" /><path d="M14 18l3-8 3 8" /><path d="M15 16h4" />
    </IconSvg>
  );
}
