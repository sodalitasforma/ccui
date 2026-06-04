import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@catholiccommons/primitives";
import type { NavItem } from "./types";

type BreadcrumbProps = {
  items: NavItem[];
} & ComponentPropsWithoutRef<"nav">;

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav className={cx("ccui-breadcrumb", className)} aria-label="Breadcrumb" {...props}>
      <ol className="ccui-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="ccui-breadcrumb__item" key={`${item.label}-${item.href}`}>
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
