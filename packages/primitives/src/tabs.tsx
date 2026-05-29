import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type TabsVariant = "line" | "contained";
type TabsAlign = "start" | "center" | "end";

type TabsProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: TabsVariant;
  align?: TabsAlign;
} & ComponentPropsWithoutRef<T>;

type TabListProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type TabProps = {
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;

type TabPanelProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Tabs<T extends ElementType = "div">({
  as,
  variant = "line",
  align = "start",
  className,
  ...props
}: TabsProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "forma-tabs",
        `forma-tabs--variant-${variant}`,
        `forma-tabs--align-${align}`,
        className
      )}
      {...props}
    />
  );
}

export function TabList<T extends ElementType = "div">({
  as,
  className,
  ...props
}: TabListProps<T>) {
  const Component = as || "div";

  return <Component role="tablist" className={cx("forma-tab-list", className)} {...props} />;
}

export function Tab({ active = false, className, type = "button", ...props }: TabProps) {
  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      className={cx("forma-tab", active && "forma-tab--active", className)}
      {...props}
    />
  );
}

export function TabPanel<T extends ElementType = "div">({
  as,
  className,
  ...props
}: TabPanelProps<T>) {
  const Component = as || "div";

  return <Component role="tabpanel" className={cx("forma-tab-panel", className)} {...props} />;
}
