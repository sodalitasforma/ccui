import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import { DocumentTypeBadge } from "./document-type-badge";
import { DocumentMetadata } from "./document-metadata";
import type { ChurchDocumentData, ChurchDocumentMetadataItem } from "./types";

type ChurchDocumentCardProps = ChurchDocumentData & ComponentPropsWithoutRef<"article">;

export function ChurchDocumentCard({
  title,
  subtitle,
  citation,
  documentType,
  authority,
  authorityLabel,
  date,
  language,
  description,
  href,
  source,
  className,
  ...props
}: ChurchDocumentCardProps) {
  const metadata: ChurchDocumentMetadataItem[] = [
    date ? { label: "Date", value: date } : null,
    language ? { label: "Language", value: language } : null,
    source ? { label: "Source", value: source.label, href: source.href } : null,
  ].filter(Boolean) as ChurchDocumentMetadataItem[];

  return (
    <Card
      as="article"
      padding="lg"
      border="subtle"
      className={cx("forma-church-document-card", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="sm">
          <Stack gap="xs">
            <Cluster gap="xs">
              <DocumentAuthorityBadge authority={authority} label={authorityLabel} />
              <DocumentTypeBadge documentType={documentType} />
            </Cluster>

            <Heading level={3} size="xl">
              {href ? <Link href={href}>{title}</Link> : title}
            </Heading>

            {subtitle ? (
              <Text as="p" tone="secondary">
                {subtitle}
              </Text>
            ) : null}
          </Stack>
        </Cluster>

        {description ? (
          <Text as="p" tone="secondary">
            {description}
          </Text>
        ) : null}

        {citation ? (
          <Text as="p" size="sm" className="forma-church-document-card__citation">
            {citation}
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
