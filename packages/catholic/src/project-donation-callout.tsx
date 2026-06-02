import type { ComponentPropsWithoutRef } from "react";
import { Button, Card, Cluster, Eyebrow, Heading, Link, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type ProjectDonationCalloutAction = {
  label: string;
  href: string;
};

export type ProjectDonationCalloutProps = {
  title: string;
  description?: string;
  amounts?: readonly string[];
  selectedAmount?: string;
  amount?: string;
  impact?: string;
  primaryAction?: ProjectDonationCalloutAction;
  secondaryAction?: ProjectDonationCalloutAction;
  secondaryActions?: readonly ProjectDonationCalloutAction[];
} & ComponentPropsWithoutRef<"section">;

export function ProjectDonationCallout({
  title,
  description,
  amounts = [],
  selectedAmount,
  amount,
  impact,
  primaryAction,
  secondaryAction,
  secondaryActions = [],
  className,
  ...props
}: ProjectDonationCalloutProps) {
  const resolvedSelectedAmount = selectedAmount ?? amount ?? amounts[0];
  const resolvedSecondaryActions = secondaryAction
    ? [secondaryAction, ...secondaryActions]
    : secondaryActions;

  return (
    <Card
      as="section"
      padding="none"
      border="gold"
      className={cx("forma-project-donation-callout", className)}
      {...props}
    >
      <div className="forma-project-donation-callout__inner">
        <Stack gap="sm" className="forma-project-donation-callout__copy">
          <Eyebrow tone="gold">Giving</Eyebrow>

          <Heading level={2} size="xl" className="forma-project-donation-callout__title">
            {title}
          </Heading>

          {description ? (
            <Text as="p" tone="secondary" className="forma-project-donation-callout__description">
              {description}
            </Text>
          ) : null}
        </Stack>

        {(amounts.length || resolvedSelectedAmount || impact || primaryAction || resolvedSecondaryActions.length) ? (
          <aside className="forma-project-donation-callout__panel" aria-label="Giving options">
            {amounts.length ? (
              <div className="forma-project-donation-callout__amounts" aria-label="Suggested donation amounts">
                {amounts.map((option) => {
                  const selected = option === resolvedSelectedAmount;

                  return (
                    <span
                      key={option}
                      className={cx(
                        "forma-project-donation-callout__amount-option",
                        selected && "forma-project-donation-callout__amount-option--selected"
                      )}
                      aria-current={selected ? "true" : undefined}
                    >
                      {option}
                    </span>
                  );
                })}
              </div>
            ) : resolvedSelectedAmount ? (
              <Text as="p" className="forma-project-donation-callout__amount">
                {resolvedSelectedAmount}
              </Text>
            ) : null}

            {impact ? (
              <Text as="p" tone="secondary" className="forma-project-donation-callout__impact">
                {impact}
              </Text>
            ) : null}

            {primaryAction ? (
              <Button href={primaryAction.href} className="forma-project-donation-callout__primary-action">
                {primaryAction.label}
              </Button>
            ) : null}

            {resolvedSecondaryActions.length ? (
              <Cluster gap="sm" className="forma-project-donation-callout__secondary-actions">
                {resolvedSecondaryActions.map((action) => (
                  <Link key={`${action.label}-${action.href}`} href={action.href}>
                    {action.label}
                  </Link>
                ))}
              </Cluster>
            ) : null}
          </aside>
        ) : null}
      </div>
    </Card>
  );
}
