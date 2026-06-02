import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import type { CanonicalReferenceData } from "./types";

type CanonicalReferenceProps = CanonicalReferenceData &
  ComponentPropsWithoutRef<"article">;

export function CanonicalReference({
  label,
  value,
  system,
  href,
  description,
  className,
  ...props
}: CanonicalReferenceProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-canonical-reference", className)} {...props}>
      <Stack gap="xs">
        <Cluster justify="between" align="start" gap="sm">
          <Text as="p" size="sm" tone="muted">
            {label}
          </Text>
          {system ? <Tag variant="blue">{system}</Tag> : null}
        </Cluster>

        <Text as="p" className="ccui-canonical-reference__value">
          {href ? <Link href={href}>{value}</Link> : value}
        </Text>

        {description ? (
          <Text as="p" size="sm" tone="secondary">
            {description}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
