import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../primitives/src/utils";
import type { NavItem } from "./types";

type UtilityNavProps = {
  items: NavItem[];
} & ComponentPropsWithoutRef<"nav">;

export function UtilityNav({ items, className, ...props }: UtilityNavProps) {
  return (
    <nav className={cx("forma-utility-nav", className)} aria-label="Utility" {...props}>
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          className={cx("forma-utility-nav__link", item.current && "is-current")}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
