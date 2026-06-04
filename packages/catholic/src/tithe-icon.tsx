"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useMemo, useState } from "react";
import { Button, Card, Cluster, Heading, HeartIcon, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type TitheIconAmount = number | string;

export type TitheIconProps = {
  giveHref: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  placement?: "fixed" | "inline";
  currency?: string;
  locale?: string;
  amounts?: readonly TitheIconAmount[];
  selectedAmount?: TitheIconAmount;
  frequencies?: readonly string[];
  selectedFrequency?: string;
} & ComponentPropsWithoutRef<"div">;

function formatAmount(amount: TitheIconAmount, currency: string, locale: string) {
  if (typeof amount === "string") return amount;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

export function TitheIcon({
  giveHref,
  title = "Automate your giving",
  description = "Set up steady parish support in under a minute.",
  primaryLabel = "Start recurring tithe",
  secondaryLabel = "Give once instead",
  secondaryHref,
  placement = "fixed",
  currency = "USD",
  locale = "en-US",
  amounts = [25, 50, 100],
  selectedAmount = 50,
  frequencies = ["Daily", "Weekly"],
  selectedFrequency = "Weekly",
  className,
  ...props
}: TitheIconProps) {
  const [open, setOpen] = useState(false);

  const formattedAmounts = useMemo(
    () =>
      amounts.map((amount) => ({
        raw: amount,
        label: formatAmount(amount, currency, locale),
      })),
    [amounts, currency, locale]
  );

  const selectedAmountLabel = formatAmount(selectedAmount, currency, locale);

  return (
    <div
      className={cx(
        "ccui-tithe-icon",
        `ccui-tithe-icon--${placement}`,
        open && "ccui-tithe-icon--open",
        className
      )}
      {...props}
    >
      {open ? (
        <Card padding="none" border="subtle" className="ccui-tithe-icon__panel">
          <div className="ccui-tithe-icon__panel-inner">
            <button
              type="button"
              className="ccui-tithe-icon__close"
              aria-label="Close giving panel"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <Stack gap="md">
              <Stack gap="xs">
                <Cluster gap="sm" align="center">
                  <span className="ccui-tithe-icon__mark" aria-hidden="true">
                    <HeartIcon size="xs" />
                  </span>
                  <Text as="p" size="xs" className="ccui-tithe-icon__eyebrow">
                    Parish giving
                  </Text>
                </Cluster>

                <Heading level={2} size="lg" className="ccui-tithe-icon__title">
                  {title}
                </Heading>

                <Text as="p" size="sm" tone="secondary" className="ccui-tithe-icon__description">
                  {description}
                </Text>
              </Stack>

              <div className="ccui-tithe-icon__control-group" aria-label="Suggested tithe amounts">
                {formattedAmounts.map((amount) => {
                  const selected = amount.label === selectedAmountLabel || amount.raw === selectedAmount;

                  return (
                    <span
                      key={amount.label}
                      className={cx(
                        "ccui-tithe-icon__choice",
                        selected && "ccui-tithe-icon__choice--selected"
                      )}
                      aria-current={selected ? "true" : undefined}
                    >
                      {amount.label}
                    </span>
                  );
                })}
              </div>

              <div className="ccui-tithe-icon__frequency" aria-label="Giving frequency">
                {frequencies.map((frequency) => {
                  const selected = frequency === selectedFrequency;

                  return (
                    <span
                      key={frequency}
                      className={cx(
                        "ccui-tithe-icon__frequency-choice",
                        selected && "ccui-tithe-icon__frequency-choice--selected"
                      )}
                      aria-current={selected ? "true" : undefined}
                    >
                      {frequency}
                    </span>
                  );
                })}
              </div>

              <Button href={giveHref} className="ccui-tithe-icon__primary-action" iconAfter={<HeartIcon size="xs" />}>
                {primaryLabel}
              </Button>

              {secondaryHref ? (
                <Button href={secondaryHref} variant="ghost" className="ccui-tithe-icon__secondary-action">
                  {secondaryLabel}
                </Button>
              ) : null}
            </Stack>
          </div>
        </Card>
      ) : null}

      <Button
        type="button"
        variant="floating"
        className="ccui-tithe-icon__trigger"
        iconAfter={<HeartIcon size="xs" />}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Give
      </Button>
    </div>
  );
}
