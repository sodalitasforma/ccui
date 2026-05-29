import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type DirectoryCardProps = {
  title: string;
  description?: string;
  href?: string;
  eyebrow?: string;
  meta?: string;
  status?: string;
} & ComponentPropsWithoutRef<"article">;

export function DirectoryCard({
  title,
  description,
  href,
  eyebrow,
  meta,
  status,
  className,
  ...props
}: DirectoryCardProps) {
  const content = (
    <Stack gap="sm">
      <Cluster justify="between" align="start">
        <Stack gap="xs">
          {eyebrow ? (
            <Text as="p" size="xs" tone="goldText" className="forma-directory-card__eyebrow">
              {eyebrow}
            </Text>
          ) : null}
          <h3 className="forma-directory-card__title">{title}</h3>
        </Stack>

        {status ? <Badge variant="gold">{status}</Badge> : null}
      </Cluster>

      {description ? (
        <Text as="p" size="sm" tone="secondary">
          {description}
        </Text>
      ) : null}

      {meta ? (
        <Text as="p" size="xs" tone="muted">
          {meta}
        </Text>
      ) : null}
    </Stack>
  );

  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("forma-directory-card", href && "forma-directory-card--linked", className)}
      {...props}
    >
      {href ? (
        <a className="forma-directory-card__link" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
