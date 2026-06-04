import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { AuthorityLevelBadge } from "./authority-level-badge";
import { MachineReadableBadge } from "./machine-readable-badge";
import { ReviewStatusBadge } from "./review-status-badge";
import type { EntityCardData } from "./types";

type EntityCardProps = EntityCardData & ComponentPropsWithoutRef<"article">;

export function EntityCard({
  id,
  title,
  entityType,
  description,
  href,
  authorityLevel,
  reviewStatus,
  machineReadable,
  className,
  ...props
}: EntityCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-entity-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <Tag variant="blue">{entityType}</Tag>
          <Text as="code" className="ccui-entity-card__id">
            {id}
          </Text>
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {(authorityLevel || reviewStatus || machineReadable) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {authorityLevel ? <AuthorityLevelBadge authorityLevel={authorityLevel} /> : null}
              {reviewStatus ? <ReviewStatusBadge status={reviewStatus} /> : null}
              {machineReadable ? <MachineReadableBadge status={machineReadable} /> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
