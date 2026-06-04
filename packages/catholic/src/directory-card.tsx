import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

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
            <Text as="p" size="xs" tone="goldText" className="ccui-directory-card__eyebrow">
              {eyebrow}
            </Text>
          ) : null}
          <h3 className="ccui-directory-card__title">{title}</h3>
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
      className={cx("ccui-directory-card", href && "ccui-directory-card--linked", className)}
      {...props}
    >
      {href ? (
        <a className="ccui-directory-card__link" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}
