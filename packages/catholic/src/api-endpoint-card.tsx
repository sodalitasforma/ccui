import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { ApiEndpointCardData } from "./types";

type ApiEndpointCardProps = ApiEndpointCardData & ComponentPropsWithoutRef<"article">;

export function ApiEndpointCard({
  method,
  path,
  description,
  responseFormat,
  authentication,
  version,
  exampleHref,
  className,
  ...props
}: ApiEndpointCardProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-api-endpoint-card", className)} {...props}>
      <Stack gap="sm">
        <Cluster gap="sm" align="center">
          <Tag variant="active">{method}</Tag>
          <Text as="code" className="ccui-api-endpoint-card__path">
            {path}
          </Text>
        </Cluster>

        {description ? <Text as="p" tone="secondary">{description}</Text> : null}

        <Cluster gap="xs">
          {responseFormat ? <Tag variant="blue">{responseFormat}</Tag> : null}
          {authentication ? <Tag variant="brown">{authentication}</Tag> : null}
          {version ? <Tag>v{version}</Tag> : null}
        </Cluster>

        {exampleHref ? (
          <>
            <Divider tone="subtle" />
            <Link href={exampleHref}>View example response</Link>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}
