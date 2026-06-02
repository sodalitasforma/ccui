import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import type { SourceCardData } from "./types";

type SourceCardProps = SourceCardData & ComponentPropsWithoutRef<"article">;

export function SourceCard({
  title,
  description,
  authority,
  authorityLabel,
  sourceType,
  href,
  citation,
  className,
  ...props
}: SourceCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-source-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <DocumentAuthorityBadge authority={authority} label={authorityLabel} />
          {sourceType ? <Tag variant="active">{sourceType}</Tag> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {citation ? (
          <>
            <Divider tone="subtle" />
            <Text as="p" size="sm" className="ccui-source-card__citation">
              {citation}
            </Text>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
