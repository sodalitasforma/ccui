import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type CCUISignalBellSize = "sm" | "md" | "lg";
type CCUISignalBellTone = "default" | "muted" | "gold";

export type CCUISignalBellProps = {
  size?: CCUISignalBellSize;
  tone?: CCUISignalBellTone;
  title?: string;
} & ComponentPropsWithoutRef<"svg">;

export function CCUISignalBell({
  size = "md",
  tone = "default",
  title,
  className,
  ...props
}: CCUISignalBellProps) {
  const titleId = title ? `ccui-signal-bell-${title.replace(/\s+/g, "-").toLowerCase()}` : undefined;

  return (
    <svg
      viewBox="0 0 32 32"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      focusable="false"
      className={cx(
        "ccui-signal-bell",
        `ccui-signal-bell--${size}`,
        `ccui-signal-bell--${tone}`,
        className
      )}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        className="ccui-signal-bell__halo"
        d="M16 3.75c-5.2 0-9.4 4.2-9.4 9.4"
      />
      <path
        className="ccui-signal-bell__halo"
        d="M25.4 13.15c0-5.2-4.2-9.4-9.4-9.4"
      />
      <path
        className="ccui-signal-bell__body"
        d="M9.15 23.2c1.35-1.15 1.95-2.82 1.95-5.35v-3.35c0-3.15 2.02-5.45 4.9-5.45s4.9 2.3 4.9 5.45v3.35c0 2.53.6 4.2 1.95 5.35H9.15Z"
      />
      <path
        className="ccui-signal-bell__clapper"
        d="M13.65 24.85c.42 1.58 1.18 2.42 2.35 2.42s1.93-.84 2.35-2.42"
      />
      <path
        className="ccui-signal-bell__cross"
        d="M16 6.2v3.2M14.4 7.8h3.2"
      />
    </svg>
  );
}
