import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { NamespaceBadge } from "./namespace-badge";
import { ReviewStatusBadge } from "./review-status-badge";
import type { TermDefinitionData } from "./types";

type TermDefinitionCardProps = TermDefinitionData & ComponentPropsWithoutRef<"article">;

export function TermDefinitionCard({
  term,
  definition,
  namespace,
  source,
  reviewStatus = "draft",
  className,
  ...props
}: TermDefinitionCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-term-definition-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster justify="between" align="start" gap="sm">
          {namespace ? <NamespaceBadge namespace={namespace} /> : null}
          <ReviewStatusBadge status={reviewStatus} />
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="lg">
            {term}
          </Heading>
          <Text as="p" tone="secondary" className="ccui-term-definition-card__definition">
            {definition}
          </Text>
        </Stack>

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
