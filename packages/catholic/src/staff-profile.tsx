import type { ComponentPropsWithoutRef } from "react";
import { Badge, Card, Cluster, MediaFrame, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type StaffProfileProps = {
  name: string;
  position: string;
  department?: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
} & ComponentPropsWithoutRef<"article">;

export function StaffProfile({
  name,
  position,
  department,
  email,
  phone,
  imageUrl,
  className,
  ...props
}: StaffProfileProps) {
  return (
    <Card as="article" padding="md" border="subtle" className={cx("ccui-staff-profile", className)} {...props}>
      <Stack gap="md">
        {imageUrl ? (
          <MediaFrame ratio="portrait" surface="parchment" className="ccui-staff-profile__image">
            <img src={imageUrl} alt="" />
          </MediaFrame>
        ) : null}

        <Stack gap="xs">
          <Cluster justify="between" align="start">
            <Stack gap="xs">
              <h3 className="ccui-staff-profile__name">{name}</h3>
              <Text as="p" size="sm" tone="secondary">
                {position}
              </Text>
            </Stack>

            {department ? <Badge variant="neutral">{department}</Badge> : null}
          </Cluster>

          {email ? (
            <a className="ccui-staff-profile__link" href={`mailto:${email}`}>
              {email}
            </a>
          ) : null}

          {phone ? (
            <a className="ccui-staff-profile__link" href={`tel:${phone}`}>
              {phone}
            </a>
          ) : null}
        </Stack>
      </Stack>
    </Card>
  );
}
