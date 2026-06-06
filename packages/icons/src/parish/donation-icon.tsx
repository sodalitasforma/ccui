import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function DonationIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 20s-7-4-7-10a4 4 0 017-3 4 4 0 017 3c0 6-7 10-7 10z" /><path d="M12 9v6" /><path d="M9 12h6" />
    </IconSvg>
  );
}
