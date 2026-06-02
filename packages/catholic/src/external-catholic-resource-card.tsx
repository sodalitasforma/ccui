import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type ExternalCatholicResourceCardProps = {
  title: string;
  href: string;
  description?: string;
  provider?: string;
  resourceType?: string;
  ctaLabel?: string;
} & ComponentPropsWithoutRef<"article">;

export function ExternalCatholicResourceCard({
  title,
  href,
  description,
  provider,
  resourceType = "Resource",
  ctaLabel = "Open",
  className,
  ...props
}: ExternalCatholicResourceCardProps) {
  return (
    <Card
      as="article"
      padding="lg"
      border="gold"
      className={cx("forma-external-catholic-resource-card", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="forma-external-catholic-resource-card__eyebrow">
              Catholic resource
            </Text>

            <Heading level={3} size="lg">
              {title}
            </Heading>
          </Stack>

          <Badge variant="gold">{resourceType}</Badge>
        </Cluster>

        {description ? (
          <Text tone="secondary">{description}</Text>
        ) : null}

        <Cluster justify="between" align="center" gap="md">
          {provider ? <Tag variant="brown">{provider}</Tag> : <span />}

          <Link href={href} className="forma-external-catholic-resource-card__action">
            {ctaLabel}
          </Link>
        </Cluster>
      </Stack>
    </Card>
  );
}
