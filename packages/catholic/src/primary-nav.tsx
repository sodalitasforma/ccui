import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../primitives/src/utils";
import type { NavItem } from "./types";

type PrimaryNavProps = {
  items: NavItem[];
} & ComponentPropsWithoutRef<"nav">;

export function PrimaryNav({ items, className, ...props }: PrimaryNavProps) {
  return (
    <nav className={cx("forma-primary-nav", className)} aria-label="Primary" {...props}>
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          className={cx("forma-primary-nav__link", item.current && "is-current")}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
