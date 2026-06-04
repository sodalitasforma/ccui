import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { DatasetCardData } from "./types";

type DatasetCardProps = DatasetCardData & ComponentPropsWithoutRef<"article">;

export function DatasetCard({
  title,
  description,
  coverage,
  format,
  license,
  version,
  source,
  machineReadable,
  href,
  className,
  ...props
}: DatasetCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-dataset-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          <Tag variant="blue">Dataset</Tag>
          {machineReadable ? <Tag variant="gold">Machine-readable</Tag> : null}
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        <Cluster gap="xs">
          {coverage ? <Tag>{coverage}</Tag> : null}
          {format ? <Tag variant="brown">{format}</Tag> : null}
          {license ? <Tag>{license}</Tag> : null}
          {version ? <Tag variant="active">v{version}</Tag> : null}
        </Cluster>

        {source?.href ? (
          <>
            <Divider tone="subtle" />
            <Text as="p" size="sm" tone="muted">
              Source: <Link href={source.href}>{source.label}</Link>
            </Text>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
