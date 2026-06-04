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

export type DocumentCardProps = {
  title: string;
  description?: string;
  href?: string;
  type?: string;
  date?: string;
  authority?: string;
  language?: string;
  sourceLabel?: string;
  sourceHref?: string;
  fileType?: string;
  fileSize?: string;
  updatedAt?: string;
  status?: string;
  meta?: string;
  actionLabel?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"article">;

function DocumentCardInner({
  title,
  description,
  href,
  type,
  date,
  authority,
  language,
  sourceLabel,
  sourceHref,
  fileType,
  fileSize,
  updatedAt,
  status,
  meta,
  actionLabel = "View document",
  children,
}: DocumentCardProps) {
  const hasMetadata =
    date ||
    authority ||
    language ||
    sourceLabel ||
    fileType ||
    fileSize ||
    updatedAt ||
    meta;

  return (
    <Card padding="lg" border="gold" className="ccui-document-card__surface">
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Cluster gap="sm">
              {type ? <Tag variant="gold">{type}</Tag> : null}
              {language ? <Tag variant="brown">{language}</Tag> : null}
              {status ? <Badge variant="gold">{status}</Badge> : null}
            </Cluster>

            <Heading level={3} size="lg" className="ccui-document-card__title">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          {fileType ? <Badge variant="brown">{fileType}</Badge> : null}
        </Cluster>

        {hasMetadata ? (
          <dl className="ccui-document-card__metadata">
            {authority ? (
              <div>
                <dt>Authority</dt>
                <dd>{authority}</dd>
              </div>
            ) : null}

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

            {meta ? (
              <div>
                <dt>Metadata</dt>
                <dd>{meta}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {children}

        {href ? (
          <Link href={href} className="ccui-document-card__action">
            {actionLabel}
          </Link>
        ) : null}
      </Stack>
    </Card>
  );
}

export function DocumentCard({
  href,
  className,
  ...props
}: DocumentCardProps) {
  return (
    <article className={cx("ccui-document-card", href && "ccui-document-card--linked", className)}>
      {href ? (
        <DocumentCardInner href={href} {...props} />
      ) : (
        <DocumentCardInner {...props} />
      )}
    </article>
  );
}
