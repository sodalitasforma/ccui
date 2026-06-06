import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function FormationIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M5 6h14v12H5z" /><path d="M8 9h8" /><path d="M8 12h5" /><path d="M8 15h7" />
    </IconSvg>
  );
}
