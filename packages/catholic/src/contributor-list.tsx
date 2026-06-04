import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { ProjectContributorData } from "./types";

type ContributorListProps = {
  title?: string;
  contributors: readonly ProjectContributorData[];
} & ComponentPropsWithoutRef<"section">;

export function ContributorList({
  title = "Contributors",
  contributors,
  className,
  ...props
}: ContributorListProps) {
  return (
    <section className={cx("ccui-contributor-list", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="ccui-contributor-list__title">
          {title}
        </Text>

        <Stack gap="sm">
          {contributors.map((contributor) => (
            <Card key={`${contributor.name}-${contributor.role ?? ""}`} padding="md" border="subtle">
              <Cluster justify="between" align="start" gap="sm">
                <Stack gap="xs">
                  <Text as="p" className="ccui-contributor-list__name">
                    {contributor.href ? (
                      <Link href={contributor.href}>{contributor.name}</Link>
                    ) : (
                      contributor.name
                    )}
                  </Text>
                  {contributor.affiliation ? (
                    <Text as="p" size="sm" tone="secondary">
                      {contributor.affiliation}
                    </Text>
                  ) : null}
                </Stack>

                {contributor.role ? <Tag variant="brown">{contributor.role}</Tag> : null}
              </Cluster>
            </Card>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
