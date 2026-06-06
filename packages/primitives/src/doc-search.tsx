"use client";

import type { ComponentPropsWithoutRef, KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "./utils";

export type DocSearchItem = {
  title: string;
  category: string;
  href: string;
  description?: string;
  keywords?: readonly string[];
};

export type DocSearchProps = {
  label?: string;
  shortcut?: string;
  items?: readonly DocSearchItem[];
  maxResults?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function fieldScore(value: string | undefined, query: string, exact: number, prefix: number, contains: number) {
  if (!value) return 0;

  const normalized = normalize(value);

  if (normalized === query) return exact;
  if (normalized.startsWith(query)) return prefix;
  if (normalized.includes(query)) return contains;

  return 0;
}

function scoreItem(item: DocSearchItem, query: string) {
  const keywordScore = (item.keywords ?? []).some((keyword) =>
    normalize(keyword).includes(query)
  )
    ? 20
    : 0;

  return (
    fieldScore(item.title, query, 100, 80, 60) +
    fieldScore(item.category, query, 40, 30, 20) +
    fieldScore(item.description, query, 18, 14, 10) +
    keywordScore
  );
}

function resultId(id: string, index: number) {
  return `${id}-result-${index}`;
}

export function DocSearch({
  label = "Search documentation...",
  shortcut,
  items = [],
  maxResults = 6,
  className,
  id,
  ...props
}: DocSearchProps) {
  const generatedId = id || "ccui-doc-search";
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const trimmed = normalize(query);

    if (!trimmed) {
      return items.slice(0, maxResults);
    }

    return items
      .map((item, index) => ({
        item,
        index,
        score: scoreItem(item, trimmed),
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, maxResults)
      .map((entry) => entry.item);
  }, [items, maxResults, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function handleGlobalKeyDown(event: globalThis.KeyboardEvent) {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "/" || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k")) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  function goTo(href: string) {
    window.location.href = href;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => Math.min(current + 1, results.length - 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => Math.max(current - 1, 0));
      return;
    }

    if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goTo(results[activeIndex].href);
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
      id={generatedId}
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
        aria-controls={`${generatedId}-results`}
        aria-activedescendant={
          open && results[activeIndex] ? resultId(generatedId, activeIndex) : undefined
        }
        role="combobox"
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
          {shortcut.split(" ").map((key) => (
            <span key={key} className="ccui-doc-search__shortcut-key">
              {key}
            </span>
          ))}
        </span>
      ) : null}

      {open ? (
        <div
          id={`${generatedId}-results`}
          className="ccui-doc-search__popover"
          role="listbox"
          aria-label="Search results"
        >
          {results.length ? (
            results.map((item, index) => (
              <a
                id={resultId(generatedId, index)}
                key={`${item.category}-${item.title}-${item.href}`}
                className={cx(
                  "ccui-doc-search__result",
                  index === activeIndex && "ccui-doc-search__result--active"
                )}
                href={item.href}
                role="option"
                aria-selected={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setOpen(false)}
              >
                <span className="ccui-doc-search__result-main">
                  <span className="ccui-doc-search__result-title">{item.title}</span>
                  {item.description ? (
                    <span className="ccui-doc-search__result-description">
                      {item.description}
                    </span>
                  ) : null}
                </span>
                <span className="ccui-doc-search__result-category">{item.category}</span>
              </a>
            ))
          ) : (
            <div className="ccui-doc-search__empty" role="status">
              No results found.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
