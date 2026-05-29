import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type DocumentCardProps = {
  title: string;
  href?: string;
  description?: string;
  documentType?: string;
  authority?: string;
  date?: string;
  fileType?: string;
} & ComponentPropsWithoutRef<"article">;

export function DocumentCard({
  title,
  href,
  description,
  documentType,
  authority,
  date,
  fileType,
  className,
  ...props
}: DocumentCardProps) {
  const content = (
    <Stack gap="sm">
      <Cluster justify="between" align="start">
        <Stack gap="xs">
          {documentType ? (
            <Text as="p" size="xs" tone="goldText" className="forma-document-card__type">
              {documentType}
            </Text>
          ) : null}

          <h3 className="forma-document-card__title">{title}</h3>
        </Stack>

        {fileType ? <Badge variant="neutral">{fileType}</Badge> : null}
      </Cluster>

      {description ? (
        <Text as="p" size="sm" tone="secondary">
          {description}
        </Text>
      ) : null}

      <Cluster gap="sm">
        {authority ? <Badge variant="gold">{authority}</Badge> : null}
        {date ? (
          <Text as="p" size="xs" tone="muted">
            {date}
          </Text>
        ) : null}
      </Cluster>
    </Stack>
  );

  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("forma-document-card", href && "forma-document-card--linked", className)}
      {...props}
    >
      {href ? (
        <a className="forma-document-card__link" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
