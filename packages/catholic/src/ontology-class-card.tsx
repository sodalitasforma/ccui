import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { NamespaceBadge } from "./namespace-badge";
import { OntologyPropertyTable } from "./ontology-property-table";
import { ReviewStatusBadge } from "./review-status-badge";
import type { OntologyClassData } from "./types";

type OntologyClassCardProps = OntologyClassData & ComponentPropsWithoutRef<"article">;

export function OntologyClassCard({
  className: ontologyClassName,
  namespace,
  label,
  description,
  reviewStatus = "draft",
  properties,
  source,
  className,
  ...props
}: OntologyClassCardProps) {
  return (
    <Card as="article" padding="lg" border="subtle" className={cx("ccui-ontology-class-card", className)} {...props}>
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="sm">
          <Cluster gap="xs">
            {namespace ? <NamespaceBadge namespace={namespace} /> : null}
            <Text as="code" className="ccui-ontology-class-card__class">
              {ontologyClassName}
            </Text>
          </Cluster>
          <ReviewStatusBadge status={reviewStatus} />
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="xl">
            {label ?? ontologyClassName}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {properties?.length ? (
          <>
            <Divider tone="subtle" />
            <OntologyPropertyTable properties={properties} />
          </>
        ) : null}

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
