import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import { DocumentMetadata } from "./document-metadata";
import { DocumentTypeBadge } from "./document-type-badge";
import type { ArchiveSearchResultData, ChurchDocumentMetadataItem } from "./types";

type ArchiveSearchResultProps = ArchiveSearchResultData &
  ComponentPropsWithoutRef<"article">;

export function ArchiveSearchResult({
  title,
  subtitle,
  documentType,
  authority,
  authorityLabel,
  date,
  language,
  excerpt,
  href,
  source,
  className,
  ...props
}: ArchiveSearchResultProps) {
  const metadata: ChurchDocumentMetadataItem[] = [
    date ? { label: "Date", value: date } : null,
    language ? { label: "Language", value: language } : null,
    source ? { label: "Source", value: source.label, href: source.href } : null,
  ].filter(Boolean) as ChurchDocumentMetadataItem[];

  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("ccui-archive-search-result", className)}
      {...props}
    >
      <Stack gap="sm">
        <Cluster gap="xs">
          <DocumentAuthorityBadge authority={authority} label={authorityLabel} />
          <DocumentTypeBadge documentType={documentType} />
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {subtitle ? <Text tone="secondary">{subtitle}</Text> : null}
        </Stack>

        {excerpt ? (
          <Text as="p" tone="secondary" className="ccui-archive-search-result__excerpt">
            {excerpt}
          </Text>
        ) : null}

        {metadata.length ? (
          <>
            <Divider tone="subtle" />
            <DocumentMetadata items={metadata} />
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
