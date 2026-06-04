import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type ChurchDocumentPair = {
  language: string;
  label: string;
  href: string;
  fileType?: string;
};

export type ChurchDocumentCardProps = {
  title: string;
  description?: string;
  href?: string;
  type?: string;
  documentType?: string;
  authority?: string;
  authorityLabel?: string;
  citation?: string;
  date?: string;
  language?: string;
  sourceLabel?: string;
  sourceHref?: string;
  fileType?: string;
  fileSize?: string;
  updatedAt?: string;
  pairedDocuments?: readonly ChurchDocumentPair[];
  languageLinks?: readonly ChurchDocumentPair[];
  metadata?: readonly {
    label: string;
    value: ReactNode;
  }[];
  children?: ReactNode;
  [key: string]: unknown;
} & ComponentPropsWithoutRef<"article">;

export function ChurchDocumentCard({
  title,
  description,
  href,
  type,
  documentType,
  authority,
  authorityLabel,
  citation,
  date,
  language,
  sourceLabel,
  sourceHref,
  fileType,
  fileSize,
  updatedAt,
  pairedDocuments,
  languageLinks,
  metadata,
  children,
  className,
  ...props
}: ChurchDocumentCardProps) {
  const docType = documentType ?? type;
  const pairs = pairedDocuments ?? languageLinks ?? [];
  const hasMetadata =
    authority ||
    citation ||
    date ||
    sourceLabel ||
    fileSize ||
    updatedAt ||
    metadata?.length;

  return (
    <Card
      as="article"
      padding="lg"
      border="gold"
      className={cx("ccui-church-document-card", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Cluster gap="sm">
              {docType ? <Tag variant="gold">{docType}</Tag> : null}
              {language ? <Tag variant="brown">{language}</Tag> : null}
              {authority || authorityLabel ? <Badge variant="gold">{authorityLabel ?? authority}</Badge> : null}
            </Cluster>

            <Heading level={3} size="lg" className="ccui-church-document-card__title">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          {fileType ? <Badge variant="brown">{fileType}</Badge> : null}
        </Cluster>

        {citation ? (
          <Text as="p" size="sm" className="ccui-church-document-card__citation">
            {citation}
          </Text>
        ) : null}

        {hasMetadata ? (
          <dl className="ccui-church-document-card__metadata">
            {date ? (
              <div>
                <dt>Date</dt>
                <dd>{date}</dd>
              </div>
            ) : null}

            {sourceLabel ? (
              <div>
                <dt>Source</dt>
                <dd>
                  {sourceHref ? <Link href={sourceHref}>{sourceLabel}</Link> : sourceLabel}
                </dd>
              </div>
            ) : null}

            {fileSize ? (
              <div>
                <dt>File size</dt>
                <dd>{fileSize}</dd>
              </div>
            ) : null}

            {updatedAt ? (
              <div>
                <dt>Updated</dt>
                <dd>{updatedAt}</dd>
              </div>
            ) : null}

            {metadata?.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {pairs.length ? (
          <div className="ccui-church-document-card__language-pairs">
            {pairs.map((pair) => (
              <Link
                key={`${pair.language}-${pair.href}`}
                href={pair.href}
                className="ccui-church-document-card__language-link"
              >
                <span>{pair.label}</span>
                <span>{pair.language}</span>
                {pair.fileType ? <span>{pair.fileType}</span> : null}
              </Link>
            ))}
          </div>
        ) : null}

        {children}

        {href ? (
          <Link href={href} className="ccui-church-document-card__action">
            View document
          </Link>
        ) : null}
      </Stack>
    </Card>
  );
}
