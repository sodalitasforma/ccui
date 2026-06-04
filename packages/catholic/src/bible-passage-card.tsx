import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { BiblePassageData } from "./types";

type BiblePassageCardProps = BiblePassageData & ComponentPropsWithoutRef<"article">;

export function BiblePassageCard({
  reference,
  text,
  translation,
  book,
  chapter,
  verses,
  source,
  className,
  ...props
}: BiblePassageCardProps) {
  return (
    <Card as="article" padding="lg" border="subtle" className={cx("ccui-bible-passage-card", className)} {...props}>
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="sm">
          <Heading level={3} size="xl">
            {reference}
          </Heading>
          {translation ? <Tag variant="gold">{translation}</Tag> : null}
        </Cluster>

        <Text as="p" size="lg" className="ccui-bible-passage-card__text">
          {text}
        </Text>

        {(book || chapter || verses || source?.href) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {book ? <Tag>{book}</Tag> : null}
              {chapter ? <Tag>Chapter {chapter}</Tag> : null}
              {verses ? <Tag>Verses {verses}</Tag> : null}
              {source?.href ? <Link href={source.href}>{source.label}</Link> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
