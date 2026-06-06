import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function CitationIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 7h6" /><path d="M7 11h10" /><path d="M7 15h7" /><path d="M5 3h14v18H5z" />
    </IconSvg>
  );
}
