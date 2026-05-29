import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { ReadingReferenceData } from "./types";

type ReadingReferenceProps = ReadingReferenceData &
  ComponentPropsWithoutRef<"article">;

export function ReadingReference({
  label,
  citation,
  book,
  chapter,
  verses,
  translation,
  source,
  className,
  ...props
}: ReadingReferenceProps) {
  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("forma-reading-reference", className)}
      {...props}
    >
      <Stack gap="xs">
        <Cluster justify="between" align="start" gap="sm">
          <Text as="p" size="sm" className="forma-reading-reference__label">
            {label}
          </Text>
          {translation ? <Tag variant="gold">{translation}</Tag> : null}
        </Cluster>

        <Text as="p" size="lg" className="forma-reading-reference__citation">
          {citation}
        </Text>

        {(book || chapter || verses || source?.href) ? (
          <Cluster gap="xs">
            {book ? <Tag>{book}</Tag> : null}
            {chapter ? <Tag>Chapter {chapter}</Tag> : null}
            {verses ? <Tag>Verses {verses}</Tag> : null}
            {source?.href ? <Link href={source.href}>{source.label}</Link> : null}
          </Cluster>
        ) : null}
      </Stack>
    </Card>
  );
}
