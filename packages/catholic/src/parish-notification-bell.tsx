import type { ComponentPropsWithoutRef } from "react";
import { CCUISignalBell } from "../../primitives/src";
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
        "ccui-parish-notification-bell",
        active && "ccui-parish-notification-bell--active",
        className
      )}
      {...props}
    >
      <CCUISignalBell tone={active || hasCount ? "gold" : "muted"} title="" />
      {hasCount ? (
        <span className="ccui-parish-notification-bell__count">{count}</span>
      ) : (
        <span className="ccui-parish-notification-bell__dot" aria-hidden="true" />
      )}
    </button>
  );
}
