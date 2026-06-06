import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function DocumentIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h4" /><path d="M9 12h6" /><path d="M9 16h6" />
    </IconSvg>
  );
}
