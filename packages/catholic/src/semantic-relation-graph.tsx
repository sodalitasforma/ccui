import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Grid, Heading, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { EntityCard } from "./entity-card";
import { EntityRelationshipList } from "./entity-relationship-list";
import type { SemanticRelationGraphData } from "./types";

type SemanticRelationGraphProps = SemanticRelationGraphData &
  ComponentPropsWithoutRef<"section">;

export function SemanticRelationGraph({
  title = "Semantic relation graph",
  description,
  entities,
  relationships,
  className,
  ...props
}: SemanticRelationGraphProps) {
  return (
    <section className={cx("ccui-semantic-relation-graph", className)} {...props}>
      <Card padding="lg" border="gold" className="ccui-semantic-relation-graph__surface">
        <Stack gap="lg">
          <Cluster justify="between" align="start" gap="sm">
            <Stack gap="xs">
              <Heading level={3} size="xl">
                {title}
              </Heading>
              {description ? <Text as="p" tone="secondary">{description}</Text> : null}
            </Stack>

            <Cluster gap="xs">
              <Tag variant="blue">{entities.length} entities</Tag>
              <Tag variant="brown">{relationships.length} relations</Tag>
            </Cluster>
          </Cluster>

          <Divider tone="subtle" />

          <Grid columns="2" gap="md">
            <Stack gap="sm">
              <Text as="h4" size="md" className="ccui-semantic-relation-graph__heading">
                Entities
              </Text>
              {entities.map((entity) => (
                <EntityCard key={entity.id} {...entity} />
              ))}
            </Stack>

            <EntityRelationshipList
              title="Relations"
              entities={entities}
              relationships={relationships}
            />
          </Grid>
        </Stack>
      </Card>
    </section>
  );
}
