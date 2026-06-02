import type { ComponentPropsWithoutRef } from "react";
import { FormaSignalBell } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type ParishNotificationBellProps = {
  label?: string;
  count?: number;
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;

export function ParishNotificationBell({
  label = "Parish notifications",
  count = 0,
  active = false,
  className,
  ...props
}: ParishNotificationBellProps) {
  const hasCount = count > 0;

  return (
    <button
      type="button"
      aria-label={hasCount ? `${label}: ${count} unread` : label}
      className={cx(
        "forma-parish-notification-bell",
        active && "forma-parish-notification-bell--active",
        className
      )}
      {...props}
    >
      <FormaSignalBell tone={active || hasCount ? "gold" : "muted"} title="" />
      {hasCount ? (
        <span className="forma-parish-notification-bell__count">{count}</span>
      ) : (
        <span className="forma-parish-notification-bell__dot" aria-hidden="true" />
      )}
    </button>
  );
}
