import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Container, Divider, Eyebrow, Heading, Link, Section, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import { DocumentCitation } from "./document-citation";
import { DocumentMetadata } from "./document-metadata";
import { DocumentTypeBadge } from "./document-type-badge";
import type { ChurchDocumentData, ChurchDocumentMetadataItem } from "./types";

type ChurchDocumentHeaderProps = ChurchDocumentData & ComponentPropsWithoutRef<"header">;

export function ChurchDocumentHeader({
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
}: ChurchDocumentHeaderProps) {
  const metadata: ChurchDocumentMetadataItem[] = [
    date ? { label: "Date", value: date } : null,
    language ? { label: "Language", value: language } : null,
    source ? { label: "Source", value: source.label, href: source.href } : null,
  ].filter(Boolean) as ChurchDocumentMetadataItem[];

  return (
    <header className={cx("ccui-church-document-header", className)} {...props}>
      <Section surface="parchment" spacing="lg">
        <Container size="lg">
          <Stack gap="lg">
            <Stack gap="sm">
              <Eyebrow tone="gold">Church document</Eyebrow>
              <Cluster gap="xs">
                <DocumentAuthorityBadge authority={authority} label={authorityLabel} />
                <DocumentTypeBadge documentType={documentType} />
              </Cluster>
            </Stack>

            <Stack gap="sm">
              <Heading level={1} size="4xl" family="display">
                {href ? <Link href={href}>{title}</Link> : title}
              </Heading>

              {subtitle ? (
                <Text as="p" size="lg" tone="secondary">
                  {subtitle}
                </Text>
              ) : null}

              {description ? (
                <Text as="p" tone="secondary" className="ccui-church-document-header__description">
                  {description}
                </Text>
              ) : null}
            </Stack>

            {metadata.length ? (
              <>
                <Divider tone="gold" />
                <DocumentMetadata items={metadata} />
              </>
            ) : null}

            {citation ? <DocumentCitation citation={citation} /> : null}
          </Stack>
        </Container>
      </Section>
    </header>
  );
}
