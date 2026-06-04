import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { AuthorityLevelBadge } from "./authority-level-badge";
import type { EntityData, EntityRelationshipListData } from "./types";

type EntityRelationshipListProps = EntityRelationshipListData &
  ComponentPropsWithoutRef<"section">;

function entityTitle(entities: readonly EntityData[] | undefined, id: string) {
  return entities?.find((entity) => entity.id === id)?.title ?? id;
}

export function EntityRelationshipList({
  title = "Entity relationships",
  relationships,
  entities,
  className,
  ...props
}: EntityRelationshipListProps) {
  return (
    <section className={cx("ccui-entity-relationship-list", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="ccui-entity-relationship-list__title">
          {title}
        </Text>

        <Stack gap="sm">
          {relationships.map((relationship) => (
            <Card
              key={`${relationship.sourceId}-${relationship.predicate}-${relationship.targetId}`}
              padding="md"
              border="subtle"
            >
              <Stack gap="xs">
                <Cluster gap="xs">
                  <Tag variant="brown">{entityTitle(entities, relationship.sourceId)}</Tag>
                  <Text as="code" className="ccui-entity-relationship-list__predicate">
                    {relationship.predicate}
                  </Text>
                  <Tag variant="blue">{entityTitle(entities, relationship.targetId)}</Tag>
                </Cluster>

                {relationship.label ? (
                  <Text as="p" className="ccui-entity-relationship-list__label">
                    {relationship.href ? <Link href={relationship.href}>{relationship.label}</Link> : relationship.label}
                  </Text>
                ) : null}

                {relationship.description ? (
                  <Text as="p" size="sm" tone="secondary">
                    {relationship.description}
                  </Text>
                ) : null}

                {relationship.authorityLevel ? (
                  <AuthorityLevelBadge authorityLevel={relationship.authorityLevel} />
                ) : null}
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
