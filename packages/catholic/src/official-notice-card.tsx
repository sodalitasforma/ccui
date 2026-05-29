import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import { DocumentTypeBadge } from "./document-type-badge";
import type { OfficialNoticeData } from "./types";

type OfficialNoticeCardProps = OfficialNoticeData &
  ComponentPropsWithoutRef<"article">;

export function OfficialNoticeCard({
  title,
  description,
  date,
  authority,
  authorityLabel,
  documentType = "notification",
  href,
  className,
  ...props
}: OfficialNoticeCardProps) {
  return (
    <Card as="article" padding="lg" border="gold" className={cx("forma-official-notice-card", className)} {...props}>
      <Stack gap="md">
        <Cluster gap="xs">
          <DocumentAuthorityBadge authority={authority} label={authorityLabel} />
          <DocumentTypeBadge documentType={documentType} />
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="xl">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {date ? (
            <Text as="p" size="sm" tone="muted">
              {date}
            </Text>
          ) : null}
        </Stack>

        {description ? (
          <>
            <Divider tone="subtle" />
            <Text as="p" tone="secondary">
              {description}
            </Text>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
