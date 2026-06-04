import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { ContributorList } from "./contributor-list";
import { ProjectStatusBadge } from "./project-status-badge";
import { RepositoryLink } from "./repository-link";
import type { ProjectCardData } from "./types";

type ProjectCardProps = ProjectCardData & ComponentPropsWithoutRef<"article">;

export function ProjectCard({
  title,
  description,
  projectType,
  status,
  href,
  repository,
  standardHref,
  contributors,
  tags,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card as="article" padding="lg" border="subtle" className={cx("ccui-project-card", className)} {...props}>
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="sm">
          <Tag variant="blue">{projectType}</Tag>
          <ProjectStatusBadge status={status} />
        </Cluster>

        <Stack gap="xs">
          <Heading level={3} size="xl">
            {href ? <Link href={href}>{title}</Link> : title}
          </Heading>
          {description ? <Text as="p" tone="secondary">{description}</Text> : null}
        </Stack>

        {tags?.length ? (
          <Cluster gap="xs">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Cluster>
        ) : null}

        {(repository || standardHref || contributors?.length) ? (
          <>
            <Divider tone="subtle" />
            <Stack gap="sm">
              {repository ? <RepositoryLink {...repository} /> : null}
              {standardHref ? <Link href={standardHref}>Open standard</Link> : null}
              {contributors?.length ? <ContributorList contributors={contributors} /> : null}
            </Stack>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
