import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { AuthorityLevelBadge } from "./authority-level-badge";
import { MachineReadableBadge } from "./machine-readable-badge";
import { ReviewStatusBadge } from "./review-status-badge";
import type { CanonicalSourceCardData } from "./types";

type CanonicalSourceCardProps = CanonicalSourceCardData & ComponentPropsWithoutRef<"article">;

export function CanonicalSourceCard({
  title,
  description,
  authorityLevel,
  sourceType,
  href,
  citation,
  reviewStatus,
  machineReadable,
  className,
  ...props
}: CanonicalSourceCardProps) {
  return (
    <Card as="article" padding="md" border="gold" className={cx("forma-canonical-source-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <Cluster gap="xs">
            <AuthorityLevelBadge authorityLevel={authorityLevel} />
            {sourceType ? <Text as="span" size="xs" tone="muted">{sourceType}</Text> : null}
          </Cluster>
          {reviewStatus ? <ReviewStatusBadge status={reviewStatus} /> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {citation ? (
          <Text as="p" className="forma-canonical-source-card__citation">
            {citation}
          </Text>
        ) : null}

        {machineReadable ? (
          <>
            <Divider tone="subtle" />
            <MachineReadableBadge status={machineReadable} />
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
