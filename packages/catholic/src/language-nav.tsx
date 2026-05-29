import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../primitives/src/utils";
import type { LanguageItem } from "./types";

type LanguageNavProps = {
  items: LanguageItem[];
} & ComponentPropsWithoutRef<"nav">;

export function LanguageNav({ items, className, ...props }: LanguageNavProps) {
  return (
    <nav className={cx("forma-language-nav", className)} aria-label="Languages" {...props}>
      {items.map((item) => (
        <a
          key={`${item.label}-${item.href}`}
          className={cx("forma-language-nav__link", item.current && "is-current")}
          href={item.href}
          hrefLang={item.lang}
          aria-current={item.current ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
