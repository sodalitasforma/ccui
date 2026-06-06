import { IconSvg } from "../icon";
import type { IconProps } from "../types";

export function SettingsIcon(props: IconProps) {
  return (
    <IconSvg {...props}>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-2.1.4l-.5.3-1 2h-4l-1-2-.5-.3a1.7 1.7 0 0 0-2.1-.4l-.2.1-2-3.4.1-.1A1.7 1.7 0 0 0 4.6 15l-.1-.6-1.7-1v-4l1.7-1 .1-.6a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.2.1a1.7 1.7 0 0 0 2.1-.4L9 2h4l1 2 .5.3a1.7 1.7 0 0 0 2.1.4l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9l.1.6 1.7 1v4l-1.7 1-.1.6z" />
    </IconSvg>
  );
}
