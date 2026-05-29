import type { ComponentPropsWithoutRef } from "react";
import { Divider, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { FootnoteData } from "./types";

type FootnoteListProps = {
  title?: string;
  items: readonly FootnoteData[];
} & ComponentPropsWithoutRef<"section">;

export function FootnoteList({
  title = "Footnotes",
  items,
  className,
  ...props
}: FootnoteListProps) {
  return (
    <section className={cx("forma-footnote-list", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="forma-footnote-list__title">
          {title}
        </Text>
        <Divider tone="subtle" />
        <ol className="forma-footnote-list__items">
          {items.map((item) => (
            <li id={item.id} key={item.id} className="forma-footnote-list__item">
              <Text as="span" size="sm" className="forma-footnote-list__marker">
                {item.marker}
              </Text>
              <Text as="span" size="sm" tone="secondary">
                {item.text}
              </Text>
              {item.href ? (
                <Link href={item.href} className="forma-footnote-list__backlink">
                  Back
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </Stack>
    </section>
  );
}
