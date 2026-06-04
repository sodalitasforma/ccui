import type { ComponentPropsWithoutRef } from "react";
import { Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { NewsCard } from "./news-card";
import type { NewsItemData } from "./types";

type NewsListProps = {
  title?: string;
  description?: string;
  items: readonly NewsItemData[];
} & ComponentPropsWithoutRef<"section">;

export function NewsList({
  title = "News",
  description,
  items,
  className,
  ...props
}: NewsListProps) {
  return (
    <section className={cx("ccui-news-list", className)} {...props}>
      <Stack gap="md">
        <Stack gap="xs">
          <Text as="h3" size="lg" className="ccui-news-list__title">
            {title}
          </Text>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        <Stack gap="sm">
          {items.map((item) => (
            <NewsCard key={`${item.title}-${item.date ?? ""}`} {...item} />
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
