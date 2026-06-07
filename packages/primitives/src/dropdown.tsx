import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ChevronDownIcon } from "@catholiccommons/icons";
import { cx } from "./utils";

type DropdownProps = ComponentPropsWithoutRef<"details"> & {
  label: ReactNode;
  iconBefore?: ReactNode;
  align?: "start" | "end";
};

export function Dropdown({
  label,
  iconBefore,
  align = "end",
  className,
  children,
  ...props
}: DropdownProps) {
  return (
    <details
      className={cx(
        "ccui-dropdown",
        `ccui-dropdown--align-${align}`,
        className
      )}
      {...props}
    >
      <summary className="ccui-dropdown__trigger">
        {iconBefore ? (
          <span className="ccui-dropdown__icon" aria-hidden="true">
            {iconBefore}
          </span>
        ) : null}
        <span className="ccui-dropdown__label">{label}</span>
        <span className="ccui-dropdown__chevron" aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </summary>

      <div className="ccui-dropdown__menu">
        {children}
      </div>
    </details>
  );
}

type DropdownSplitProps = ComponentPropsWithoutRef<"div"> & {
  label: ReactNode;
  iconBefore?: ReactNode;
  actionLabel?: string;
  onAction: () => void;
  align?: "start" | "end";
};

export function DropdownSplit({
  label,
  iconBefore,
  actionLabel = "Run primary action",
  onAction,
  align = "end",
  className,
  children,
  ...props
}: DropdownSplitProps) {
  return (
    <div
      className={cx(
        "ccui-dropdown-split",
        `ccui-dropdown-split--align-${align}`,
        className
      )}
      {...props}
    >
      <button
        type="button"
        className="ccui-dropdown-split__action"
        aria-label={actionLabel}
        onClick={onAction}
      >
        {iconBefore ? (
          <span className="ccui-dropdown__icon" aria-hidden="true">
            {iconBefore}
          </span>
        ) : null}
        <span className="ccui-dropdown__label">{label}</span>
      </button>

      <details className="ccui-dropdown-split__details">
        <summary className="ccui-dropdown-split__trigger" aria-label="Open menu">
          <span className="ccui-dropdown__chevron" aria-hidden="true">
            <ChevronDownIcon size="xs" />
          </span>
        </summary>

        <div className="ccui-dropdown__menu">
          {children}
        </div>
      </details>
    </div>
  );
}

type DropdownItemProps = ComponentPropsWithoutRef<"a">;

export function DropdownItem({
  className,
  ...props
}: DropdownItemProps) {
  return (
    <a
      className={cx("ccui-dropdown__item", className)}
      {...props}
    />
  );
}
