import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function FolderIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </IconSvg>
  );
}
