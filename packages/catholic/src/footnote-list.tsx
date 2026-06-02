import type { ComponentPropsWithoutRef } from "react";
import { Divider, Link, Stack, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
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
    <section className={cx("ccui-footnote-list", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="ccui-footnote-list__title">
          {title}
        </Text>
        <Divider tone="subtle" />
        <ol className="ccui-footnote-list__items">
          {items.map((item) => (
            <li id={item.id} key={item.id} className="ccui-footnote-list__item">
              <Text as="span" size="sm" className="ccui-footnote-list__marker">
                {item.marker}
              </Text>
              <Text as="span" size="sm" tone="secondary">
                {item.text}
              </Text>
              {item.href ? (
                <Link href={item.href} className="ccui-footnote-list__backlink">
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
