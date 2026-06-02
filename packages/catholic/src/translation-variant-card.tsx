import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { TranslationVariantData } from "./types";

type TranslationVariantCardProps = TranslationVariantData & ComponentPropsWithoutRef<"article">;

export function TranslationVariantCard({
  term,
  language,
  variant,
  note,
  source,
  className,
  ...props
}: TranslationVariantCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-translation-variant-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <Tag variant="blue">{language}</Tag>
          <Tag variant="brown">Translation variant</Tag>
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {term}
          </Heading>
          <Text as="p" className="ccui-translation-variant-card__variant">
            {variant}
          </Text>
          {note ? <Text as="p" tone="secondary">{note}</Text> : null}
        </Stack>

        {source?.href ? (
          <>
            <Divider tone="subtle" />
            <Text as="p" size="sm" tone="muted">
              Source: <Link href={source.href}>{source.label}</Link>
            </Text>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
