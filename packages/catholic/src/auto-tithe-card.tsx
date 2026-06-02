import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Heading, Link, Stack, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";

export type AutoTitheAmount = {
  label: string;
  value: string;
  selected?: boolean;
};

export type AutoTitheFrequency = {
  label: string;
  value: string;
  selected?: boolean;
};

export type AutoTitheCardProps = {
  title?: string;
  description?: string;
  amounts: readonly AutoTitheAmount[];
  frequencies: readonly AutoTitheFrequency[];
  href: string;
  ctaLabel?: string;
  note?: string;
} & ComponentPropsWithoutRef<"section">;

export function AutoTitheCard({
  title = "Auto-tithe",
  description = "Set a recurring gift for parish support, restoration, and works of mercy.",
  amounts,
  frequencies,
  href,
  ctaLabel = "Start recurring gift",
  note = "Secure giving opens in the parish payment provider.",
  className,
  ...props
}: AutoTitheCardProps) {
  return (
    <section className={cx("ccui-auto-tithe-card", className)} {...props}>
      <Card padding="lg" border="gold" className="ccui-auto-tithe-card__surface">
        <Stack gap="md">
          <Cluster justify="between" align="start" gap="md">
            <Stack gap="xs">
              <Text as="p" className="ccui-auto-tithe-card__eyebrow">
                Giving
              </Text>
              <Heading level={3} size="xl">
                {title}
              </Heading>
            </Stack>
            <Tag variant="gold">Recurring</Tag>
          </Cluster>

          <Text tone="secondary">{description}</Text>

          <Stack gap="xs">
            <Text as="p" size="sm" className="ccui-auto-tithe-card__label">
              Amount
            </Text>
            <Cluster gap="sm">
              {amounts.map((amount) => (
                <span
                  key={amount.value}
                  className={cx(
                    "ccui-auto-tithe-card__choice",
                    amount.selected && "ccui-auto-tithe-card__choice--selected"
                  )}
                >
                  {amount.label}
                </span>
              ))}
            </Cluster>
          </Stack>

          <Stack gap="xs">
            <Text as="p" size="sm" className="ccui-auto-tithe-card__label">
              Frequency
            </Text>
            <Cluster gap="sm">
              {frequencies.map((frequency) => (
                <span
                  key={frequency.value}
                  className={cx(
                    "ccui-auto-tithe-card__choice",
                    frequency.selected && "ccui-auto-tithe-card__choice--selected"
                  )}
                >
                  {frequency.label}
                </span>
              ))}
            </Cluster>
          </Stack>

          <Cluster justify="between" align="center" gap="md">
            <Text as="p" size="sm" tone="muted">
              {note}
            </Text>
            <Link href={href} className="ccui-auto-tithe-card__action">
              {ctaLabel}
            </Link>
          </Cluster>
        </Stack>
      </Card>
    </section>
  );
}
