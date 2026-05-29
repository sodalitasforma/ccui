import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { AuthorityLevelBadge } from "./authority-level-badge";
import type { ProvenanceTrailData } from "./types";

type ProvenanceTrailProps = ProvenanceTrailData & ComponentPropsWithoutRef<"section">;

export function ProvenanceTrail({
  title = "Provenance trail",
  steps,
  className,
  ...props
}: ProvenanceTrailProps) {
  return (
    <section className={cx("forma-provenance-trail", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="forma-provenance-trail__title">
          {title}
        </Text>

        <ol className="forma-provenance-trail__list">
          {steps.map((step, index) => (
            <li key={`${step.label}-${index}`} className="forma-provenance-trail__item">
              <Card padding="md" border="subtle">
                <Stack gap="xs">
                  <Cluster justify="between" align="start" gap="sm">
                    <Text as="p" className="forma-provenance-trail__label">
                      {step.href ? <Link href={step.href}>{step.label}</Link> : step.label}
                    </Text>
                    {step.authorityLevel ? (
                      <AuthorityLevelBadge authorityLevel={step.authorityLevel} />
                    ) : null}
                  </Cluster>

                  {step.description ? (
                    <Text as="p" size="sm" tone="secondary">
                      {step.description}
                    </Text>
                  ) : null}
                </Stack>
              </Card>
            </li>
          ))}
        </ol>
      </Stack>
    </section>
  );
}
