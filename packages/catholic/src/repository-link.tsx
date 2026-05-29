import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { RepositoryLinkData } from "./types";

type RepositoryLinkProps = RepositoryLinkData & Omit<ComponentPropsWithoutRef<"article">, "children">;

export function RepositoryLink({
  href,
  provider = "GitHub",
  language,
  license,
  openIssues,
  className,
  ...props
}: RepositoryLinkProps) {
  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("forma-repository-link", className)}
      {...props}
    >
      <Stack gap="xs">
        <Cluster justify="between" align="center" gap="sm">
          <Text as="span" className="forma-repository-link__provider">
            {provider}
          </Text>
          <Link href={href}>Open repository</Link>
        </Cluster>

        <Cluster gap="xs">
          {language ? <Tag variant="blue">{language}</Tag> : null}
          {license ? <Tag variant="brown">{license}</Tag> : null}
          {typeof openIssues === "number" ? <Tag>{openIssues} open issues</Tag> : null}
        </Cluster>
      </Stack>
    </Card>
  );
}
