import type { ComponentPropsWithoutRef } from "react";
import { Button, Card, Cluster, Eyebrow, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { DonationCalloutData } from "./types";

type DonationCalloutProps = DonationCalloutData & ComponentPropsWithoutRef<"section">;

export function DonationCallout({
  title,
  description,
  amountLabel,
  actionLabel,
  actionHref,
  secondaryHref,
  secondaryLabel,
  className,
  ...props
}: DonationCalloutProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("forma-donation-callout", className)}
      {...props}
    >
      <Stack gap="md">
        <Stack gap="xs">
          <Eyebrow tone="gold">Giving</Eyebrow>
          <Heading level={2} size="xl">
            {title}
          </Heading>
          {description ? (
            <Text as="p" tone="secondary">
              {description}
            </Text>
          ) : null}
        </Stack>

        <Cluster justify="between" align="center" gap="md">
          {amountLabel ? (
            <Text as="p" className="forma-donation-callout__amount">
              {amountLabel}
            </Text>
          ) : null}

          <Cluster gap="sm">
            <Button>{actionLabel}</Button>
            <Link href={actionHref}>Open giving page</Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            ) : null}
          </Cluster>
        </Cluster>
      </Stack>
    </Card>
  );
}
