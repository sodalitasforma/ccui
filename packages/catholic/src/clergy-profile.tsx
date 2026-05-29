import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, MediaFrame, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type ClergyProfileProps = {
  name: string;
  title: string;
  assignment?: string;
  orderOrPostnominals?: string;
  email?: string;
  imageUrl?: string;
} & ComponentPropsWithoutRef<"article">;

export function ClergyProfile({
  name,
  title,
  assignment,
  orderOrPostnominals,
  email,
  imageUrl,
  className,
  ...props
}: ClergyProfileProps) {
  return (
    <Card as="article" padding="md" border="gold" className={cx("forma-clergy-profile", className)} {...props}>
      <Stack gap="md">
        {imageUrl ? (
          <MediaFrame ratio="portrait" surface="parchment" className="forma-clergy-profile__image">
            <img src={imageUrl} alt="" />
          </MediaFrame>
        ) : null}

        <Stack gap="xs">
          <Cluster justify="between" align="start">
            <Stack gap="xs">
              <h3 className="forma-clergy-profile__name">{name}</h3>
              <Text as="p" size="sm" tone="secondary">
                {title}
              </Text>
            </Stack>

            {orderOrPostnominals ? <Badge variant="gold">{orderOrPostnominals}</Badge> : null}
          </Cluster>

          {assignment ? (
            <Text as="p" size="sm" tone="muted">
              {assignment}
            </Text>
          ) : null}

          {email ? (
            <a className="forma-clergy-profile__link" href={`mailto:${email}`}>
              {email}
            </a>
          ) : null}
        </Stack>
      </Stack>
    </Card>
  );
}
