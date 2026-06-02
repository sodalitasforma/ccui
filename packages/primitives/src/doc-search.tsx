"use client";

import type { ComponentPropsWithoutRef, KeyboardEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { cx } from "./utils";

export type DocSearchItem = {
  title: string;
  category: string;
  href: string;
  keywords?: readonly string[];
};

export type DocSearchProps = {
  label?: string;
  shortcut?: string;
  items?: readonly DocSearchItem[];
  maxResults?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

function matchesItem(item: DocSearchItem, query: string) {
  const haystack = [
    item.title,
    item.category,
    ...(item.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export function DocSearch({
  label = "Search documentation...",
  shortcut,
  items = [],
  maxResults = 6,
  className,
  ...props
}: DocSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      return items.slice(0, maxResults);
    }

    return items.filter((item) => matchesItem(item, trimmed)).slice(0, maxResults);
  }, [items, maxResults, query]);

  function goTo(href: string) {
    window.location.href = href;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (event.key === "Enter" && results[0]) {
      event.preventDefault();
      goTo(results[0].href);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const nextFocusedElement = event.relatedTarget;

    if (!nextFocusedElement || !event.currentTarget.contains(nextFocusedElement)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={rootRef}
      className={cx("ccui-doc-search", className)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={handleBlur}
      {...props}
    >
      <input
        ref={inputRef}
        className="ccui-doc-search__input"
        type="search"
        value={query}
        placeholder={label}
        aria-label={label}
        aria-expanded={open}
        autoComplete="off"
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {shortcut ? (
        <span className="ccui-doc-search__shortcut" aria-hidden="true">
          {shortcut}
        </span>
      ) : null}

      {open ? (
        <div className="ccui-doc-search__popover">
          {results.length ? (
            results.map((item) => (
              <a
                key={`${item.category}-${item.title}`}
                className="ccui-doc-search__result"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span className="ccui-doc-search__result-title">{item.title}</span>
                <span className="ccui-doc-search__result-category">{item.category}</span>
              </a>
            ))
          ) : (
            <div className="ccui-doc-search__empty">No results</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
