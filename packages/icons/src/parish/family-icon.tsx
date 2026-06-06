import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function FamilyIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <circle cx="8" cy="8" r="2" /><circle cx="16" cy="8" r="2" /><circle cx="12" cy="13" r="2" /><path d="M4 19c1-3 3-5 6-5" /><path d="M20 19c-1-3-3-5-6-5" /><path d="M8 20c1-2 2-3 4-3s3 1 4 3" />
    </IconSvg>
  );
}
