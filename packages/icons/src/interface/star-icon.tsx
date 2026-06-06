import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function StarIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3z" />
    </IconSvg>
  );
}
