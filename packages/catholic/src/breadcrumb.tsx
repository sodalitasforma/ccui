import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../primitives/src/utils";
import type { NavItem } from "./types";

type BreadcrumbProps = {
  items: NavItem[];
} & ComponentPropsWithoutRef<"nav">;

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav className={cx("forma-breadcrumb", className)} aria-label="Breadcrumb" {...props}>
      <ol className="forma-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="forma-breadcrumb__item" key={`${item.label}-${item.href}`}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
