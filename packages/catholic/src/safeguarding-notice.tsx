import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type SafeguardingNoticeProps = {
  title?: string;
  description?: string;
  authority?: string;
  reportHref: string;
  reportLabel?: string;
  auditHref?: string;
  auditLabel?: string;
} & ComponentPropsWithoutRef<"aside">;

export function SafeguardingNotice({
  title = "Safe environment",
  description = "Information for reporting abuse and reviewing institutional safeguarding materials.",
  authority,
  reportHref,
  reportLabel = "Report abuse",
  auditHref,
  auditLabel = "Independent audit",
  className,
  ...props
}: SafeguardingNoticeProps) {
  return (
    <Card
      as="aside"
      padding="lg"
      border="gold"
      className={cx("ccui-safeguarding-notice", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-safeguarding-notice__eyebrow">
              Safeguarding
            </Text>

            <Heading level={3} size="lg">
              {title}
            </Heading>
          </Stack>

          <Badge variant="danger">Important</Badge>
        </Cluster>

        <Text tone="secondary">{description}</Text>

        {authority ? (
          <Text as="p" size="sm" tone="muted">
            Authority: {authority}
          </Text>
        ) : null}

        <Cluster gap="sm">
          <Link href={reportHref} className="ccui-safeguarding-notice__primary">
            {reportLabel}
          </Link>

          {auditHref ? (
            <Link href={auditHref} className="ccui-safeguarding-notice__secondary">
              {auditLabel}
            </Link>
          ) : null}
        </Cluster>
      </Stack>
    </Card>
  );
}
