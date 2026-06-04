import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@catholiccommons/primitives";
import type { NavItem } from "./types";

type UtilityNavProps = {
  items: NavItem[];
} & ComponentPropsWithoutRef<"nav">;

export function UtilityNav({ items, className, ...props }: UtilityNavProps) {
  return (
    <nav className={cx("ccui-utility-nav", className)} aria-label="Utility" {...props}>
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          className={cx("ccui-utility-nav__link", item.current && "is-current")}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
